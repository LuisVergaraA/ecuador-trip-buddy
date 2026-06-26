import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Backpack,
  Bell,
  Briefcase,
  Calendar,
  CalendarDays,
  Car,
  ChevronRight,
  Compass,
  Heart,
  Home,
  Hotel,
  LogOut,
  MapPin,
  MessageCircle,
  Mic,
  Plane,
  Search,
  Send,
  Settings,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Wallet,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import logo from "@/assets/logo.png";
import quito from "@/assets/quito.jpg";
import galapagos from "@/assets/galapagos.jpg";
import banos from "@/assets/banos.jpg";
import quilotoa from "@/assets/quilotoa.jpg";
import montanita from "@/assets/montanita.jpg";
import hotelExec from "@/assets/hotel-exec.jpg";

export const Route = createFileRoute("/")({
  component: SmartTripHome,
});

/* ---------------- Profiles ---------------- */

type ProfileId = "mateo" | "andres" | "maria";

type Profile = {
  id: ProfileId;
  name: string;
  role: string;
  tagline: string;
  budget: string;
  accent: string;
  emoji: string;
};

const PROFILES: Profile[] = [
  {
    id: "mateo",
    name: "Mateo",
    role: "Estudiante mochilero",
    tagline: "Aventura con presupuesto ajustado",
    budget: "$120 / 4 días",
    accent: "from-emerald-500 to-teal-500",
    emoji: "🎒",
  },
  {
    id: "andres",
    name: "Andrés",
    role: "Ejecutivo en viaje de negocios",
    tagline: "Agenda, transporte y reuniones",
    budget: "$680 / 3 días",
    accent: "from-sky-600 to-indigo-600",
    emoji: "💼",
  },
  {
    id: "maria",
    name: "María",
    role: "Planificadora familiar",
    tagline: "Seguridad y diversión para todos",
    budget: "$1.450 / 6 días",
    accent: "from-amber-500 to-rose-500",
    emoji: "👨‍👩‍👧",
  },
];

/* ---------------- Destinations per profile ---------------- */

type Destination = {
  title: string;
  location: string;
  price: string;
  tag: string;
  rating: number;
  image: string;
};

const DESTINATIONS: Record<ProfileId, Destination[]> = {
  mateo: [
    { title: "Quilotoa Loop", location: "Cotopaxi", price: "$32", tag: "Trekking", rating: 4.9, image: quilotoa },
    { title: "Montañita Surf", location: "Santa Elena", price: "$45", tag: "Playa & Hostel", rating: 4.7, image: montanita },
    { title: "Baños de Agua Santa", location: "Tungurahua", price: "$55", tag: "Aventura", rating: 4.8, image: banos },
  ],
  andres: [
    { title: "Quito Centro Financiero", location: "Pichincha", price: "$210/noche", tag: "Business hotel", rating: 4.8, image: hotelExec },
    { title: "Guayaquil Puerto Santa Ana", location: "Guayas", price: "$180/noche", tag: "Coworking", rating: 4.7, image: quito },
    { title: "Cuenca Histórica", location: "Azuay", price: "$160/noche", tag: "Reuniones", rating: 4.9, image: banos },
  ],
  maria: [
    { title: "Galápagos Familiar", location: "Insular", price: "$1.150 pp", tag: "All inclusive", rating: 4.9, image: galapagos },
    { title: "Baños en Familia", location: "Tungurahua", price: "$420 / 4p", tag: "Aventura suave", rating: 4.8, image: banos },
    { title: "Mindo Bosque Nublado", location: "Pichincha", price: "$380 / 4p", tag: "Naturaleza", rating: 4.7, image: quilotoa },
  ],
};

/* ---------------- Comparator data ---------------- */

type CompareItem = {
  name: string;
  meta: string;
  price: string;
  badge: string;
  rating: number;
};

const STAY: Record<ProfileId, CompareItem[]> = {
  mateo: [
    { name: "Selina Hostel", meta: "Dormitorio · WiFi", price: "$14", badge: "Más barato", rating: 4.5 },
    { name: "Community Hostel", meta: "Privado · Desayuno", price: "$28", badge: "Recomendado", rating: 4.7 },
  ],
  andres: [
    { name: "JW Marriott Quito", meta: "Suite ejecutiva", price: "$240", badge: "Premium", rating: 4.9 },
    { name: "Wyndham Guayaquil", meta: "Business room", price: "$180", badge: "Mejor precio", rating: 4.7 },
  ],
  maria: [
    { name: "Hotel Mashpi Lodge", meta: "Familiar · 4 personas", price: "$520", badge: "Seguro 5★", rating: 4.9 },
    { name: "Hacienda Cusín", meta: "Cabaña 2 hab.", price: "$310", badge: "Mejor valor", rating: 4.8 },
  ],
};

const TRANSPORT: Record<ProfileId, CompareItem[]> = {
  mateo: [
    { name: "Bus Cooperativa", meta: "Quito → Latacunga", price: "$3", badge: "Económico", rating: 4.2 },
    { name: "Van compartida", meta: "Door to door", price: "$12", badge: "Cómodo", rating: 4.6 },
  ],
  andres: [
    { name: "Vuelo LATAM UIO-GYE", meta: "1h · Business", price: "$185", badge: "Rápido", rating: 4.8 },
    { name: "Cabify Executive", meta: "Aeropuerto → Hotel", price: "$28", badge: "On demand", rating: 4.7 },
  ],
  maria: [
    { name: "SUV privado + chofer", meta: "Hasta 6 pax", price: "$95/día", badge: "Familiar", rating: 4.9 },
    { name: "Tren Crucero", meta: "Andes escénico", price: "$220 pp", badge: "Experiencia", rating: 4.8 },
  ],
};

/* ---------------- Reviews ---------------- */

const REVIEWS: Record<ProfileId, { name: string; text: string; stars: number; role: string }[]> = {
  mateo: [
    { name: "Lucía P.", role: "Mochilera", stars: 5, text: "Encontré rutas baratas y compañeros para dividir gastos. Brutal." },
    { name: "Diego R.", role: "Estudiante", stars: 5, text: "El presupuesto se ajustó solo, no me pasé ni un dólar." },
  ],
  andres: [
    { name: "Carla M.", role: "Gerente comercial", stars: 5, text: "Mi agenda Quito–Guayaquil en una sola pantalla. Reservas en 2 toques." },
    { name: "Roberto L.", role: "Consultor", stars: 4, text: "Los hoteles sugeridos siempre tienen sala de reuniones." },
  ],
  maria: [
    { name: "Familia Cevallos", role: "Familia de 4", stars: 5, text: "Itinerarios pensados para niños, con paradas y tiempos reales." },
    { name: "Andrea V.", role: "Mamá viajera", stars: 5, text: "Las alertas de seguridad y el transporte privado me dieron tranquilidad." },
  ],
};

/* ---------------- Page ---------------- */

function SmartTripHome() {
  const [profileId, setProfileId] = useState<ProfileId>("mateo");
  const [chatOpen, setChatOpen] = useState(false);
  const profile = useMemo(() => PROFILES.find((p) => p.id === profileId)!, [profileId]);

  return (
    <div className="min-h-screen bg-gradient-sky">
      <div className="lg:flex">
        <SideNav profile={profile} active={profileId} onChange={setProfileId} />

        <main className="flex-1 pb-24 lg:pb-10">
          <TopBar profile={profile} />

          <div className="mx-auto w-full max-w-[460px] space-y-6 px-4 pt-4 lg:max-w-6xl lg:px-8 lg:pt-6">
            <ProfileSelector active={profileId} onChange={setProfileId} />
            <Hero profile={profile} />
            <SmartSuggestions profile={profile} />
            <DestinationsRail profileId={profileId} />
            <Itinerary profileId={profileId} />
            <Comparator profileId={profileId} />
            <CommunityReviews profileId={profileId} />
            <Footer />
          </div>
        </main>
      </div>

      <BottomNav />
      <AssistantFab open={chatOpen} setOpen={setChatOpen} profile={profile} />
    </div>
  );
}

/* ---------------- Side Nav (desktop) ---------------- */

function SideNav({
  profile,
  active,
  onChange,
}: {
  profile: Profile;
  active: ProfileId;
  onChange: (id: ProfileId) => void;
}) {
  const items = [
    { icon: Home, label: "Inicio" },
    { icon: Compass, label: "Explorar" },
    { icon: CalendarDays, label: "Mis viajes" },
    { icon: Hotel, label: "Reservas" },
    { icon: MessageCircle, label: "Mensajes" },
    { icon: Settings, label: "Ajustes" },
  ];

  return (
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col border-r bg-white/70 backdrop-blur lg:flex">
      <div className="flex items-center gap-3 px-6 py-6">
        <img src={logo} alt="SmartTrip" className="h-9 w-9 rounded-xl object-contain" />
        <div>
          <p className="font-display text-lg font-bold">SmartTrip</p>
          <p className="text-xs text-muted-foreground">Ecuador a tu medida</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {items.map((it, i) => (
          <button
            key={it.label}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
              i === 0
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <it.icon className="h-4 w-4" />
            {it.label}
          </button>
        ))}
      </nav>

      <div className="m-3 rounded-2xl border bg-card p-4 shadow-soft">
        <p className="text-xs text-muted-foreground">Perfil activo</p>
        <div className="mt-2 flex items-center gap-3">
          <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-lg", profile.accent)}>
            {profile.emoji}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{profile.name}</p>
            <p className="truncate text-xs text-muted-foreground">{profile.role}</p>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <ProfilePill active={active === "mateo"} onClick={() => onChange("mateo")} emoji="🎒" />
          <ProfilePill active={active === "andres"} onClick={() => onChange("andres")} emoji="💼" />
          <ProfilePill active={active === "maria"} onClick={() => onChange("maria")} emoji="👨‍👩‍👧" />
        </div>
        <Button variant="ghost" size="sm" className="mt-3 w-full justify-start text-muted-foreground">
          <LogOut className="h-4 w-4" /> Cerrar sesión
        </Button>
      </div>
    </aside>
  );
}

function ProfilePill({ active, onClick, emoji }: { active: boolean; onClick: () => void; emoji: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex h-9 flex-1 items-center justify-center rounded-lg border text-base transition",
        active ? "border-primary bg-primary/10" : "border-transparent bg-muted hover:bg-muted/70",
      )}
    >
      {emoji}
    </button>
  );
}

/* ---------------- Top Bar ---------------- */

function TopBar({ profile }: { profile: Profile }) {
  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 px-4 py-3 backdrop-blur lg:px-8 lg:py-4">
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <img src={logo} alt="SmartTrip" className="h-8 w-8 rounded-lg object-contain lg:hidden" />
        <div className="hidden flex-1 lg:block">
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Busca destinos, hoteles, actividades en Ecuador…" className="h-10 rounded-xl pl-9" />
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="hidden rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground sm:inline-flex">
            Modo {profile.name}
          </span>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-4 w-4" />
          </Button>
          <div className={cn("flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br text-lg", profile.accent)}>
            {profile.emoji}
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Profile Selector ---------------- */

function ProfileSelector({ active, onChange }: { active: ProfileId; onChange: (id: ProfileId) => void }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="font-display text-lg font-bold">¿Cómo viajas hoy?</h2>
          <p className="text-xs text-muted-foreground">La IA adapta todo según tu perfil</p>
        </div>
        <Sparkles className="h-4 w-4 text-primary" />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {PROFILES.map((p) => {
          const isActive = p.id === active;
          return (
            <button
              key={p.id}
              onClick={() => onChange(p.id)}
              className={cn(
                "group relative overflow-hidden rounded-2xl border p-4 text-left transition",
                isActive
                  ? "border-primary bg-white shadow-soft"
                  : "border-transparent bg-white/60 hover:bg-white",
              )}
            >
              <div className={cn("mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-xl text-white", p.accent)}>
                {p.emoji}
              </div>
              <p className="font-display text-base font-bold">{p.name}</p>
              <p className="text-xs text-muted-foreground">{p.role}</p>
              <p className="mt-2 text-xs font-medium text-primary">{p.budget}</p>
              {isActive && (
                <span className="absolute right-3 top-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
                  Activo
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- Hero ---------------- */

function Hero({ profile }: { profile: Profile }) {
  return (
    <Card className="overflow-hidden border-0 bg-gradient-brand text-white shadow-float">
      <div className="p-5 lg:p-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-white/80">
          <Sparkles className="h-3.5 w-3.5" /> Recomendación IA
        </div>
        <h1 className="mt-2 font-display text-2xl font-bold leading-tight lg:text-3xl">
          Hola {profile.name}, {profile.tagline.toLowerCase()}.
        </h1>
        <p className="mt-1 text-sm text-white/85">
          Construimos tu itinerario en Ecuador según presupuesto, intereses y duración.
        </p>

        <div className="mt-4 grid grid-cols-3 gap-2 lg:max-w-md">
          <Stat icon={Wallet} label="Presupuesto" value={profile.budget.split(" ")[0]} />
          <Stat icon={CalendarDays} label="Duración" value={profile.budget.split("/")[1]?.trim() ?? "—"} />
          <Stat icon={Heart} label="Match IA" value="96%" />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <Button className="rounded-full bg-white text-primary hover:bg-white/90">
            <Plane className="h-4 w-4" /> Generar itinerario
          </Button>
          <Button variant="ghost" className="rounded-full text-white hover:bg-white/15">
            Ver opciones <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Wallet; label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/15 p-3 backdrop-blur">
      <Icon className="h-4 w-4 text-white/80" />
      <p className="mt-1 text-[11px] text-white/75">{label}</p>
      <p className="font-display text-sm font-bold">{value}</p>
    </div>
  );
}

/* ---------------- Smart suggestions ---------------- */

function SmartSuggestions({ profile }: { profile: Profile }) {
  const items =
    profile.id === "mateo"
      ? [
          { icon: Backpack, label: "Hostels < $20" },
          { icon: Users, label: "Grupos para dividir" },
          { icon: TrendingUp, label: "Rutas trending" },
        ]
      : profile.id === "andres"
      ? [
          { icon: Plane, label: "Vuelo UIO-GYE" },
          { icon: Car, label: "Taxi ejecutivo" },
          { icon: Briefcase, label: "Salas reunión" },
        ]
      : [
          { icon: Shield, label: "Destinos seguros" },
          { icon: Users, label: "Para niños" },
          { icon: Hotel, label: "Hoteles familiares" },
        ];

  return (
    <div className="grid grid-cols-3 gap-2">
      {items.map((it) => (
        <button
          key={it.label}
          className="flex flex-col items-center gap-2 rounded-2xl bg-white p-3 text-center shadow-sm transition hover:shadow-soft"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <it.icon className="h-4 w-4" />
          </div>
          <span className="text-xs font-medium">{it.label}</span>
        </button>
      ))}
    </div>
  );
}

/* ---------------- Destinations rail ---------------- */

function DestinationsRail({ profileId }: { profileId: ProfileId }) {
  const items = DESTINATIONS[profileId];
  return (
    <section>
      <SectionHeading title="Destinos para ti" subtitle="Curado por IA · actualizado hoy" />
      <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 no-scrollbar lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible lg:px-0">
        {items.map((d) => (
          <Card
            key={d.title}
            className="w-[230px] shrink-0 overflow-hidden border-0 shadow-soft transition hover:-translate-y-0.5 lg:w-auto"
          >
            <div className="relative h-32 w-full overflow-hidden">
              <img src={d.image} alt={d.title} className="h-full w-full object-cover" />
              <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur">
                {d.tag}
              </span>
              <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {d.rating}
              </span>
            </div>
            <div className="p-3">
              <p className="font-display text-sm font-bold">{d.title}</p>
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" /> {d.location}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-display text-sm font-bold text-primary">{d.price}</span>
                <Button size="sm" variant="ghost" className="h-7 rounded-full px-2 text-xs">
                  Ver <ChevronRight className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Itinerary ---------------- */

const ITINERARY: Record<ProfileId, { day: string; title: string; items: string[] }[]> = {
  mateo: [
    { day: "Día 1", title: "Quito → Latacunga", items: ["Bus $3", "Hostel Selina $14", "Cena callejera $5"] },
    { day: "Día 2", title: "Quilotoa Loop", items: ["Trekking guiado $12", "Almuerzo comunitario $4", "Refugio $10"] },
  ],
  andres: [
    { day: "Día 1", title: "Quito · Reunión cliente", items: ["Vuelo 07:00", "JW Marriott check-in", "Reunión 11:00 PwC"] },
    { day: "Día 2", title: "Guayaquil · Cierre deal", items: ["LATAM 09:15", "Wyndham coworking", "Cena Casa Julian"] },
  ],
  maria: [
    { day: "Día 1", title: "Quito histórico", items: ["Tour bus turístico", "TelefériQo (apto niños)", "Cena Hacienda Rumiloma"] },
    { day: "Día 2", title: "Mindo aventuras", items: ["Mariposario 9:00", "Tarabita familiar", "Hotel Mashpi check-in"] },
  ],
};

function Itinerary({ profileId }: { profileId: ProfileId }) {
  const days = ITINERARY[profileId];
  return (
    <section>
      <SectionHeading title="Tu itinerario inteligente" subtitle="Editable · sincronizado con calendario" />
      <div className="space-y-3">
        {days.map((d) => (
          <Card key={d.day} className="border-0 p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-primary">{d.day}</p>
                <p className="font-display text-base font-bold">{d.title}</p>
              </div>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </div>
            <ul className="mt-3 space-y-2">
              {d.items.map((it) => (
                <li key={it} className="flex items-center gap-2 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {it}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Comparator ---------------- */

function Comparator({ profileId }: { profileId: ProfileId }) {
  const [tab, setTab] = useState<"stay" | "transport">("stay");
  const items = tab === "stay" ? STAY[profileId] : TRANSPORT[profileId];

  return (
    <section>
      <div className="mb-3 flex items-end justify-between">
        <div>
          <h3 className="font-display text-base font-bold">Comparador visual</h3>
          <p className="text-xs text-muted-foreground">Decide en segundos</p>
        </div>
        <div className="flex rounded-full bg-muted p-1 text-xs">
          {(["stay", "transport"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "rounded-full px-3 py-1 font-medium transition",
                tab === t ? "bg-white text-foreground shadow-sm" : "text-muted-foreground",
              )}
            >
              {t === "stay" ? "Hospedaje" : "Transporte"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
        {items.map((it) => (
          <Card key={it.name} className="border-0 p-4 shadow-soft">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {tab === "stay" ? <Hotel className="h-4 w-4" /> : <Car className="h-4 w-4" />}
                </div>
                <div>
                  <p className="font-display text-sm font-bold">{it.name}</p>
                  <p className="text-xs text-muted-foreground">{it.meta}</p>
                </div>
              </div>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                {it.badge}
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span className="font-medium">{it.rating}</span>
              </div>
              <div className="text-right">
                <p className="font-display text-lg font-bold text-primary">{it.price}</p>
                <Button size="sm" className="mt-1 h-7 rounded-full px-3 text-xs">Reservar</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Community Reviews ---------------- */

function CommunityReviews({ profileId }: { profileId: ProfileId }) {
  const reviews = REVIEWS[profileId];
  return (
    <section>
      <SectionHeading title="La comunidad confía en SmartTrip" subtitle="+12.400 viajeros activos en Ecuador" />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {reviews.map((r) => (
          <Card key={r.name} className="border-0 p-4 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-nature text-sm font-bold text-white">
                {r.name[0]}
              </div>
              <div>
                <p className="text-sm font-semibold">{r.name}</p>
                <p className="text-[11px] text-muted-foreground">{r.role}</p>
              </div>
              <div className="ml-auto flex">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="mt-3 text-sm text-foreground/80">"{r.text}"</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Bottom Nav (mobile) ---------------- */

function BottomNav() {
  const items = [
    { icon: Home, label: "Inicio", active: true },
    { icon: Compass, label: "Explorar" },
    { icon: CalendarDays, label: "Viajes" },
    { icon: Heart, label: "Favoritos" },
  ];
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t bg-white/95 px-4 py-2 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-[460px] items-center justify-between">
        {items.map((it) => (
          <button
            key={it.label}
            className={cn(
              "flex flex-1 flex-col items-center gap-0.5 rounded-lg py-1.5 text-xs transition",
              it.active ? "text-primary" : "text-muted-foreground",
            )}
          >
            <it.icon className="h-5 w-5" />
            {it.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

/* ---------------- Floating Assistant ---------------- */

function AssistantFab({
  open,
  setOpen,
  profile,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  profile: Profile;
}) {
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-white shadow-float transition hover:scale-105 lg:bottom-8 lg:right-8"
        aria-label="Asistente virtual"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>

      {open && (
        <div className="fixed bottom-40 right-4 z-40 w-[320px] overflow-hidden rounded-2xl border bg-white shadow-float lg:bottom-28 lg:right-8">
          <div className="bg-gradient-brand p-4 text-white">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <Sparkles className="h-4 w-4" /> SmartTrip Assistant
            </p>
            <p className="text-xs text-white/80">Hola {profile.name}, ¿en qué te ayudo?</p>
          </div>
          <div className="space-y-2 p-4 text-sm">
            <div className="rounded-2xl rounded-tl-sm bg-muted p-3 text-foreground/80">
              Puedo ajustar tu itinerario, comparar precios o reservar. ¿Qué necesitas?
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <Chip>Ver opciones más baratas</Chip>
              <Chip>Reservar transporte</Chip>
              <Chip>Hablar con humano</Chip>
            </div>
          </div>
          <div className="flex items-center gap-2 border-t p-3">
            <Input placeholder="Escribe tu pregunta…" className="h-9 rounded-full" />
            <Button size="icon" variant="ghost" className="rounded-full">
              <Mic className="h-4 w-4" />
            </Button>
            <Button size="icon" className="rounded-full">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-primary transition hover:bg-primary/10">
      {children}
    </button>
  );
}

/* ---------------- Misc ---------------- */

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-3 flex items-end justify-between">
      <div>
        <h3 className="font-display text-base font-bold lg:text-lg">{title}</h3>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </div>
      <button className="text-xs font-medium text-primary">Ver todo</button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="pb-6 pt-4 text-center text-[11px] text-muted-foreground">
      © {new Date().getFullYear()} SmartTrip · Ecuador · Hecho con 💙
    </footer>
  );
}
