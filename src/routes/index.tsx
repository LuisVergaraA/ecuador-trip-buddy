import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Sparkles, Search, Bell, MessageCircle, Star, MapPin, Wallet, Users,
  Briefcase, Heart, GraduationCap, Plane, Hotel, UtensilsCrossed,
  Compass, Clock, Shield, Baby, Building2, Tag, ChevronRight, Zap,
  Car, Bus, Mountain, Waves, ArrowRight, Quote, Home, CalendarDays, Settings, LogOut,
} from "lucide-react";

import logoAsset from "@/assets/smarttrip-logo.png.asset.json";
import quilotoa from "@/assets/quilotoa.jpg";
import montanita from "@/assets/montanita.jpg";
import hotelExec from "@/assets/hotel-exec.jpg";
import banos from "@/assets/banos.jpg";
import galapagos from "@/assets/galapagos.jpg";
import quito from "@/assets/quito.jpg";

const logo = logoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SmartTrip — Tu viaje por Ecuador, personalizado" },
      { name: "description", content: "Planifica viajes por Ecuador con recomendaciones IA según tu perfil, presupuesto y duración." },
    ],
  }),
  component: SmartTripApp,
});

type ProfileId = "mateo" | "andres" | "maria";

type Profile = {
  id: ProfileId;
  name: string;
  role: string;
  tagline: string;
  icon: typeof GraduationCap;
  accent: "primary" | "nature" | "sun";
  budget: string;
};

const PROFILES: Profile[] = [
  { id: "mateo",  name: "Mateo",  role: "Estudiante",          tagline: "Aventura con presupuesto justo", icon: GraduationCap, accent: "nature",  budget: "$80 – $200" },
  { id: "andres", name: "Andrés", role: "Viajero de negocios", tagline: "Eficiencia para viajes cortos",  icon: Briefcase,     accent: "primary", budget: "Corporativo" },
  { id: "maria",  name: "María",  role: "Planificadora familiar", tagline: "Vacaciones seguras y cómodas", icon: Heart,         accent: "sun",     budget: "$600 – $1500" },
];

/* ---------- Shell ---------- */

function SmartTripApp() {
  const [profile, setProfile] = useState<ProfileId | null>(null);
  const current = PROFILES.find(p => p.id === profile) ?? null;

  return (
    <div className="min-h-screen bg-gradient-sky">
      <div className="lg:flex lg:min-h-screen">
        {/* Desktop sidebar */}
        <SideNav profile={current} onChangeProfile={() => setProfile(null)} />

        {/* App container: phone-sized on mobile, full panel on desktop */}
        <div className="relative mx-auto w-full max-w-[440px] min-h-screen bg-background shadow-float overflow-hidden lg:mx-0 lg:max-w-none lg:flex-1 lg:shadow-none lg:bg-transparent">
          <TopBar profile={current} onChangeProfile={() => setProfile(null)} />

          <main className="pb-32 lg:pb-12 lg:px-6 xl:px-10 lg:max-w-6xl lg:mx-auto">
            {!current ? (
              <ProfileSelector onPick={setProfile} />
            ) : (
              <Dashboard profile={current} />
            )}
          </main>

          {current && <BottomNav />}
        </div>

        <AssistantFab />
      </div>
    </div>
  );
}

/* ---------- Desktop sidebar ---------- */

function SideNav({ profile, onChangeProfile }: { profile: Profile | null; onChangeProfile: () => void }) {
  const items = [
    { icon: Home, label: "Inicio", active: true },
    { icon: Compass, label: "Explorar" },
    { icon: CalendarDays, label: "Mis viajes" },
    { icon: Hotel, label: "Reservas" },
    { icon: MessageCircle, label: "Mensajes" },
    { icon: Settings, label: "Ajustes" },
  ];
  return (
    <aside className="hidden lg:flex lg:w-72 xl:w-80 lg:flex-col lg:border-r lg:border-border lg:bg-background lg:px-6 lg:py-7 lg:sticky lg:top-0 lg:h-screen">
      <button onClick={onChangeProfile} className="flex items-center gap-3 text-left">
        <img src={logo} alt="SmartTrip" className="h-12 w-12 rounded-xl object-contain bg-card p-1 ring-1 ring-border" />
        <div className="min-w-0">
          <p className="font-display text-lg font-extrabold tracking-tight">SmartTrip</p>
          <p className="text-[11px] text-muted-foreground">Ecuador inteligente</p>
        </div>
      </button>

      <nav className="mt-8 flex-1 space-y-1">
        {items.map(it => (
          <button
            key={it.label}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${it.active ? "bg-primary/10 text-primary" : "text-foreground/70 hover:bg-muted"}`}
          >
            <it.icon className="h-5 w-5" /> {it.label}
          </button>
        ))}
      </nav>

      {profile ? (
        <div className="mt-4 rounded-2xl border border-border bg-card p-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Perfil activo</p>
          <div className="mt-2 flex items-center gap-3">
            <span className={`grid h-10 w-10 place-items-center rounded-xl ${accentBg(profile.accent)}`}>
              <profile.icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold">{profile.name}</p>
              <p className="truncate text-[11px] text-muted-foreground">{profile.role}</p>
            </div>
          </div>
          <button onClick={onChangeProfile} className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-primary">
            Cambiar perfil <LogOut className="h-3 w-3" />
          </button>
        </div>
      ) : (
        <p className="mt-4 text-[11px] text-muted-foreground">Elige un perfil para personalizar tu experiencia.</p>
      )}
    </aside>
  );
}

/* ---------- Top bar (mobile + desktop header) ---------- */

function TopBar({ profile, onChangeProfile }: { profile: Profile | null; onChangeProfile: () => void }) {
  return (
    <header className="sticky top-0 z-30 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 bg-background/85 backdrop-blur border-b border-border px-4 py-3 lg:px-8 lg:py-4 lg:bg-background/70">
      <button
        onClick={onChangeProfile}
        className="flex min-w-0 items-center gap-2 text-left lg:hidden"
      >
        <img src={logo} alt="SmartTrip" width={36} height={36} className="h-9 w-9 shrink-0 object-contain" />
        <div className="min-w-0">
          <p className="font-display text-base font-bold leading-tight tracking-tight">SmartTrip</p>
          <p className="truncate text-[11px] text-muted-foreground">
            {profile ? `Modo: ${profile.name} · ${profile.role}` : "Ecuador, a tu medida"}
          </p>
        </div>
      </button>

      {/* Desktop search */}
      <div className="hidden lg:flex min-w-0 items-center gap-2 max-w-xl">
        <div className="relative w-full">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Buscar destinos, hoteles, vuelos en Ecuador…"
            className="w-full rounded-full border border-border bg-card pl-10 pr-4 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-1">
        <IconButton><Search className="h-5 w-5 lg:hidden" /></IconButton>
        <IconButton>
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive" />
        </IconButton>
        {profile && (
          <span className="hidden lg:grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-primary-foreground font-bold text-sm">
            {profile.name[0]}
          </span>
        )}
      </div>
    </header>
  );
}

function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="relative grid h-10 w-10 place-items-center rounded-full text-foreground/80 hover:bg-muted">
      {children}
    </button>
  );
}

/* ---------- Profile selector ---------- */

function ProfileSelector({ onPick }: { onPick: (id: ProfileId) => void }) {
  return (
    <section className="px-5 pt-6">
      <div className="rounded-3xl bg-gradient-brand p-6 text-primary-foreground shadow-soft">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest opacity-80">
          <Sparkles className="h-3.5 w-3.5" /> Demo interactiva
        </div>
        <h1 className="mt-2 font-display text-2xl font-extrabold leading-tight">
          ¿Quién planifica el viaje hoy?
        </h1>
        <p className="mt-2 text-sm/relaxed opacity-90">
          Elige un perfil y mira cómo SmartTrip adapta destinos, presupuesto e itinerarios.
        </p>
      </div>

      <ul className="mt-5 space-y-3">
        {PROFILES.map(p => (
          <li key={p.id}>
            <button
              onClick={() => onPick(p.id)}
              className="group grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-card p-4 text-left transition hover:border-primary/40 hover:shadow-soft"
            >
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${accentBg(p.accent)}`}>
                <p.icon className="h-6 w-6" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-base font-bold">{p.name} · <span className="text-muted-foreground font-medium">{p.role}</span></span>
                <span className="mt-0.5 block truncate text-sm text-muted-foreground">{p.tagline}</span>
                <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-foreground/70">
                  <Wallet className="h-3 w-3" /> {p.budget}
                </span>
              </span>
              <ChevronRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary" />
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Podrás cambiar de perfil tocando el logo en cualquier momento.
      </p>
    </section>
  );
}

function accentBg(a: Profile["accent"]) {
  if (a === "primary") return "bg-primary/10 text-primary";
  if (a === "nature") return "bg-nature/15 text-nature";
  return "bg-sun/25 text-sun-foreground";
}

/* ---------- Dashboard ---------- */

function Dashboard({ profile }: { profile: Profile }) {
  return (
    <div className="space-y-7 pt-4">
      <Greeting profile={profile} />
      {profile.id === "mateo"  && <MateoView />}
      {profile.id === "andres" && <AndresView />}
      {profile.id === "maria"  && <MariaView />}
      <Compare profile={profile} />
      <Reviews profile={profile} />
      <div className="px-5 pb-2 text-center text-[11px] text-muted-foreground">
        Recomendaciones generadas por IA · SmartTrip Ecuador
      </div>
    </div>
  );
}

function Greeting({ profile }: { profile: Profile }) {
  const hi = profile.id === "andres" ? "Buen día" : "¡Hola";
  return (
    <section className="px-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">
        Panel para {profile.role.toLowerCase()}
      </p>
      <h2 className="mt-1 font-display text-2xl font-extrabold leading-tight">
        {hi}, {profile.name}{profile.id !== "andres" ? "!" : "."}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">{profile.tagline}.</p>
    </section>
  );
}

/* ---------- Mateo: estudiante ---------- */

function MateoView() {
  return (
    <>
      <section className="px-5">
        <div className="rounded-2xl border border-nature/30 bg-nature/10 p-4">
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-nature text-nature-foreground">
              <Tag className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-bold text-foreground">3 promos activas para ti</p>
              <p className="truncate text-xs text-muted-foreground">Hasta 45% off en buses y hostales esta semana</p>
            </div>
            <span className="shrink-0 rounded-full bg-nature px-2 py-1 text-[10px] font-bold text-nature-foreground">-45%</span>
          </div>
        </div>
      </section>

      <Section title="Aventura y playa" subtitle="Lo más barato cerca de ti">
        <HScroll>
          <DestCard img={montanita} title="Montañita" tag="Playa · Surf" price="$32" nights="2 noches" badge="Promo" />
          <DestCard img={quilotoa} title="Quilotoa" tag="Aventura · Sierra" price="$48" nights="2 noches" />
          <DestCard img={banos}    title="Baños"    tag="Aventura · Cascadas" price="$55" nights="3 noches" badge="Top estudiantes" />
        </HScroll>
      </Section>

      <Section title="Viaja en grupo, paga menos" subtitle="Splits automáticos con tus panas">
        <div className="px-5 space-y-3">
          <GroupOption title="Bus colectivo · Guayaquil → Montañita" people={6} pricePer="$6" total="$36" icon={Bus} />
          <GroupOption title="Hostal compartido · 4 personas" people={4} pricePer="$9/n" total="$36/n" icon={Hotel} />
          <GroupOption title="Tour de surf grupal" people={5} pricePer="$15" total="$75" icon={Waves} />
        </div>
      </Section>
    </>
  );
}

function GroupOption({ title, people, pricePer, total, icon: Icon }: { title: string; people: number; pricePer: string; total: string; icon: typeof Bus }) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border bg-card p-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-nature/10 text-nature">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold">{title}</p>
        <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted-foreground">
          <Users className="h-3 w-3" /> {people} personas · {pricePer} c/u
        </p>
      </div>
      <div className="shrink-0 text-right">
        <p className="text-sm font-extrabold text-nature">{total}</p>
        <p className="text-[10px] text-muted-foreground">total grupo</p>
      </div>
    </div>
  );
}

/* ---------- Andrés: negocios ---------- */

function AndresView() {
  return (
    <>
      <Section title="Reserva rápida" subtitle="Tu próxima reunión, lista en 1 toque">
        <div className="grid grid-cols-2 gap-3 px-5">
          <QuickAction icon={Plane}           label="Vuelo UIO → GYE" sub="Hoy 7:00 pm" />
          <QuickAction icon={Car}             label="Taxi ejecutivo"  sub="Aeropuerto → Hotel" />
          <QuickAction icon={Building2}       label="Hotel 4★"        sub="Centro de negocios" />
          <QuickAction icon={UtensilsCrossed} label="Restaurante"     sub="Sala privada · 4 pax" />
        </div>
      </Section>

      <Section title="Hoteles ejecutivos" subtitle="Guayaquil · Quito · Cuenca">
        <HScroll>
          <DestCard img={hotelExec} title="Hilton Colón Quito"     tag="Ejecutivo · 4★" price="$129" nights="por noche" badge="Free WiFi" />
          <DestCard img={quito}     title="Marriott Guayaquil"     tag="Business · 5★" price="$165" nights="por noche" />
          <DestCard img={banos}     title="Oro Verde Cuenca"       tag="Ejecutivo · 4★" price="$118" nights="por noche" badge="Sala reuniones" />
        </HScroll>
      </Section>

      <Section title="Tu agenda de hoy" subtitle="Quito · Mié 24 oct">
        <div className="px-5 space-y-2">
          <AgendaItem time="09:30" title="Reunión cliente — Petroamazonas" place="Av. Naciones Unidas" />
          <AgendaItem time="13:00" title="Almuerzo · Carmine" place="Cumbayá · mesa privada" />
          <AgendaItem time="18:40" title="Vuelo a Guayaquil" place="LATAM LA1417" />
        </div>
      </Section>
    </>
  );
}

function QuickAction({ icon: Icon, label, sub }: { icon: typeof Plane; label: string; sub: string }) {
  return (
    <button className="group flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-4 text-left transition hover:border-primary/40 hover:shadow-soft">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-sm font-semibold leading-tight">{label}</span>
      <span className="text-[11px] text-muted-foreground">{sub}</span>
      <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-primary">
        Reservar <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
      </span>
    </button>
  );
}

function AgendaItem({ time, title, place }: { time: string; title: string; place: string }) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border bg-card p-3">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground font-display text-xs font-bold">
        {time}
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold">{title}</p>
        <p className="truncate text-xs text-muted-foreground">{place}</p>
      </div>
      <Clock className="h-4 w-4 shrink-0 text-muted-foreground" />
    </div>
  );
}

/* ---------- María: familiar ---------- */

function MariaView() {
  return (
    <>
      <section className="px-5">
        <div className="grid grid-cols-2 gap-3">
          <Stat icon={Wallet} label="Presupuesto" value="$1.200" sub="4 personas" />
          <Stat icon={Shield} label="Seguridad"   value="Alta"   sub="Destinos verificados" />
        </div>
      </section>

      <Section title="Destinos familiares" subtitle="Aptos para niños · vacaciones escolares">
        <HScroll>
          <DestCard img={galapagos} title="Galápagos"   tag="5 días · Familia" price="$1.450" nights="4 noches" badge="Niños +6" />
          <DestCard img={banos}     title="Baños"       tag="3 días · Aventura suave" price="$680" nights="2 noches" badge="Niños +4" />
          <DestCard img={quilotoa}  title="Quilotoa"    tag="2 días · Naturaleza" price="$520" nights="1 noche" />
        </HScroll>
      </Section>

      <Section title="Itinerario sugerido" subtitle="Baños · Vacaciones de octubre">
        <div className="px-5 space-y-2">
          <ItineraryDay day="Día 1" title="Llegada y Pailón del Diablo" detail="Caminata fácil · apto +5 años" icon={Mountain} />
          <ItineraryDay day="Día 2" title="Casa del Árbol y termas"   detail="Atracciones familiares · descanso" icon={Baby} />
          <ItineraryDay day="Día 3" title="Ruta de las cascadas"      detail="Tour en chiva · 4 horas"           icon={Compass} />
        </div>
      </Section>
    </>
  );
}

function Stat({ icon: Icon, label, value, sub }: { icon: typeof Wallet; label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
        <Icon className="h-4 w-4 text-sun-foreground" /> {label}
      </div>
      <p className="mt-1 font-display text-xl font-extrabold">{value}</p>
      <p className="text-[11px] text-muted-foreground">{sub}</p>
    </div>
  );
}

function ItineraryDay({ day, title, detail, icon: Icon }: { day: string; title: string; detail: string; icon: typeof Mountain }) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3 rounded-2xl border border-border bg-card p-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sun/30 text-sun-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-wider text-sun-foreground/80">{day}</p>
        <p className="truncate text-sm font-semibold">{title}</p>
        <p className="truncate text-xs text-muted-foreground">{detail}</p>
      </div>
    </div>
  );
}

/* ---------- Shared blocks ---------- */

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <header className="px-5">
        <h3 className="font-display text-lg font-extrabold leading-tight">{title}</h3>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}

function HScroll({ children }: { children: React.ReactNode }) {
  return (
    <div className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1">
      {children}
    </div>
  );
}

function DestCard({ img, title, tag, price, nights, badge }: { img: string; title: string; tag: string; price: string; nights: string; badge?: string }) {
  return (
    <article className="relative w-[230px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="relative h-32 w-full overflow-hidden">
        <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover" />
        {badge && (
          <span className="absolute left-2 top-2 rounded-full bg-background/90 px-2 py-0.5 text-[10px] font-bold text-primary">
            {badge}
          </span>
        )}
      </div>
      <div className="p-3">
        <p className="truncate font-display text-sm font-extrabold">{title}</p>
        <p className="mt-0.5 truncate text-[11px] text-muted-foreground">{tag}</p>
        <div className="mt-2 flex items-baseline justify-between">
          <span className="font-display text-base font-extrabold text-primary">{price}</span>
          <span className="text-[10px] text-muted-foreground">{nights}</span>
        </div>
      </div>
    </article>
  );
}

/* ---------- Comparador ---------- */

type CompareItem = { name: string; meta: string; price: string; rating: number; tag?: string };

function Compare({ profile }: { profile: Profile }) {
  const [tab, setTab] = useState<"stay" | "transport">("stay");

  const data: Record<ProfileId, { stay: CompareItem[]; transport: CompareItem[] }> = useMemo(() => ({
    mateo: {
      stay: [
        { name: "Hostal Kamala",   meta: "Montañita · compartido",  price: "$9",  rating: 4.4, tag: "Más barato" },
        { name: "Casa del Sol",    meta: "Olón · privado",          price: "$22", rating: 4.6 },
      ],
      transport: [
        { name: "CLP Buses",       meta: "GYE → Montañita · 3h",    price: "$6",  rating: 4.2, tag: "Económico" },
        { name: "Van compartida",  meta: "Salida 7am",              price: "$12", rating: 4.7 },
      ],
    },
    andres: {
      stay: [
        { name: "Hilton Colón",    meta: "Quito · ejecutivo",       price: "$129", rating: 4.7, tag: "Top business" },
        { name: "Wyndham",         meta: "GYE · centro",            price: "$118", rating: 4.5 },
      ],
      transport: [
        { name: "Uber Black",      meta: "Aeropuerto → Hotel",      price: "$22", rating: 4.9, tag: "Más rápido" },
        { name: "LATAM Vuelo",     meta: "UIO → GYE · 50 min",      price: "$89", rating: 4.6 },
      ],
    },
    maria: {
      stay: [
        { name: "Hostería Surillal", meta: "Baños · familiar",      price: "$95", rating: 4.8, tag: "Recomendado" },
        { name: "Hotel Sangay",      meta: "Habitación cuádruple",  price: "$78", rating: 4.5 },
      ],
      transport: [
        { name: "Van privada",     meta: "Quito → Baños · puerta a puerta", price: "$120", rating: 4.9, tag: "Más seguro" },
        { name: "Bus turístico",   meta: "Salidas diarias",         price: "$8",  rating: 4.3 },
      ],
    },
  }), []);

  const items = data[profile.id][tab];

  return (
    <Section title="Compara y elige" subtitle="Hospedaje y transporte lado a lado">
      <div className="px-5">
        <div className="inline-flex rounded-full bg-muted p-1">
          <TabBtn active={tab === "stay"}      onClick={() => setTab("stay")}      icon={Hotel} label="Hospedaje" />
          <TabBtn active={tab === "transport"} onClick={() => setTab("transport")} icon={Car}   label="Transporte" />
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          {items.map((it, i) => (
            <div key={it.name} className={`relative rounded-2xl border p-3 ${i === 0 ? "border-primary/40 bg-primary/5" : "border-border bg-card"}`}>
              {it.tag && (
                <span className="absolute -top-2 left-3 rounded-full bg-gradient-brand px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary-foreground">
                  {it.tag}
                </span>
              )}
              <p className="truncate text-sm font-bold">{it.name}</p>
              <p className="mt-0.5 line-clamp-2 text-[11px] text-muted-foreground">{it.meta}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-display text-base font-extrabold text-primary">{it.price}</span>
                <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-sun-foreground">
                  <Star className="h-3 w-3 fill-current" /> {it.rating}
                </span>
              </div>
              <button className="mt-3 w-full rounded-full bg-primary px-3 py-1.5 text-[11px] font-bold text-primary-foreground">
                Elegir
              </button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function TabBtn({ active, onClick, icon: Icon, label }: { active: boolean; onClick: () => void; icon: typeof Hotel; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${active ? "bg-background text-primary shadow-soft" : "text-muted-foreground"}`}
    >
      <Icon className="h-3.5 w-3.5" /> {label}
    </button>
  );
}

/* ---------- Reviews ---------- */

const REVIEWS: Record<ProfileId, { name: string; place: string; text: string; rating: number }[]> = {
  mateo: [
    { name: "Sofía P.", place: "Montañita",     rating: 5, text: "Reservé el bus y el hostal en 2 minutos. Más barato que ir por mi cuenta." },
    { name: "Diego R.", place: "Baños",         rating: 5, text: "El split del grupo funcionó perfecto. Volveríamos otra vez." },
  ],
  andres: [
    { name: "Carla M.", place: "Hilton Quito",  rating: 5, text: "Check-in express y sala de reuniones lista. Salvé mi día." },
    { name: "Luis O.",  place: "Guayaquil",     rating: 4, text: "Reserva rápida de taxi ejecutivo, llegó en 6 minutos." },
  ],
  maria: [
    { name: "Andrea V.", place: "Baños",        rating: 5, text: "Itinerario seguro para mis hijos (4 y 8). Recomiendo 100%." },
    { name: "Paola E.",  place: "Galápagos",    rating: 5, text: "Todo verificado. La asistencia respondió en segundos." },
  ],
};

function Reviews({ profile }: { profile: Profile }) {
  const list = REVIEWS[profile.id];
  return (
    <Section title="La comunidad confía" subtitle="Reseñas de viajeros como tú">
      <div className="px-5 space-y-3">
        {list.map(r => (
          <article key={r.name} className="rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-nature text-nature-foreground font-bold">
                {r.name[0]}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold">{r.name}</p>
                <p className="truncate text-[11px] text-muted-foreground">
                  <MapPin className="mr-0.5 inline h-3 w-3" />{r.place}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-0.5 text-sun-foreground">
                {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">
              <Quote className="mr-1 inline h-3.5 w-3.5 -translate-y-0.5 text-primary/40" />
              {r.text}
            </p>
          </article>
        ))}
        <div className="flex items-center justify-center gap-1 text-[11px] text-muted-foreground">
          <Shield className="h-3 w-3 text-nature" /> 12.480 reseñas verificadas
        </div>
      </div>
    </Section>
  );
}

/* ---------- FAB + bottom nav ---------- */

function AssistantFab() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <div className="absolute inset-0 z-40 bg-foreground/30" onClick={() => setOpen(false)}>
          <div className="absolute bottom-28 right-4 left-4 rounded-3xl bg-card p-4 shadow-float" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold">Asistente SmartTrip</p>
                <p className="text-[11px] text-muted-foreground">En línea · responde al instante</p>
              </div>
            </div>
            <div className="mt-3 space-y-2 text-sm">
              <div className="rounded-2xl rounded-tl-sm bg-muted px-3 py-2">¡Hola! ¿Te ayudo a armar tu viaje, comparar precios o resolver una duda?</div>
              <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-tr-sm bg-primary px-3 py-2 text-primary-foreground">¿Cuál es el mejor día para ir a Quilotoa?</div>
            </div>
            <div className="mt-3 flex gap-2">
              <input
                placeholder="Escribe tu pregunta…"
                className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary"
              />
              <button className="rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground">Enviar</button>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(o => !o)}
        className="absolute bottom-24 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-float transition active:scale-95"
        aria-label="Asistente virtual"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-sun text-[10px] font-bold text-sun-foreground">
          <Zap className="h-3 w-3" />
        </span>
      </button>
    </>
  );
}

function BottomNav() {
  const items = [
    { icon: Compass,       label: "Explorar", active: true },
    { icon: Search,        label: "Buscar" },
    { icon: Hotel,         label: "Reservas" },
    { icon: GraduationCap, label: "Perfil" },
  ];
  return (
    <nav className="absolute bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 backdrop-blur">
      <ul className="grid grid-cols-4">
        {items.map(it => (
          <li key={it.label}>
            <button className={`flex w-full flex-col items-center gap-1 py-3 text-[10px] font-semibold ${it.active ? "text-primary" : "text-muted-foreground"}`}>
              <it.icon className="h-5 w-5" />
              {it.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
