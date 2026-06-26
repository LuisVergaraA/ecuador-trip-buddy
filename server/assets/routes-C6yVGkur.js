import { useMemo, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Baby, Bell, Briefcase, Building2, Bus, CalendarDays, Car, ChevronRight, Clock, Compass, GraduationCap, Heart, Home, Hotel, LogOut, MapPin, MessageCircle, Mountain, Plane, Quote, Search, Settings, Shield, Sparkles, Star, Tag, Users, UtensilsCrossed, Wallet, Waves, Zap } from "lucide-react";
var smarttrip_logo_png_asset_default = {
	version: 1,
	asset_id: "fe708228-1f19-45d3-b13e-cb5f39729be0",
	project_id: "562523a4-8b9b-4ee3-9035-1b978041aa0b",
	url: "/__l5e/assets-v1/fe708228-1f19-45d3-b13e-cb5f39729be0/smarttrip-logo.png",
	r2_key: "a/v1/562523a4-8b9b-4ee3-9035-1b978041aa0b/fe708228-1f19-45d3-b13e-cb5f39729be0/smarttrip-logo.png",
	original_filename: "smarttrip-logo.png",
	size: 236529,
	content_type: "image/png",
	created_at: "2026-06-23T23:35:04Z"
};
//#endregion
//#region src/assets/quilotoa.jpg
var quilotoa_default = "/ecuador-trip-buddy/assets/quilotoa-8LOZbz3u.jpg";
//#endregion
//#region src/assets/montanita.jpg
var montanita_default = "/ecuador-trip-buddy/assets/montanita-Cklo1N1B.jpg";
//#endregion
//#region src/assets/hotel-exec.jpg
var hotel_exec_default = "/ecuador-trip-buddy/assets/hotel-exec-CZaegCiz.jpg";
//#endregion
//#region src/assets/banos.jpg
var banos_default = "/ecuador-trip-buddy/assets/banos-DEhi8xK2.jpg";
//#endregion
//#region src/assets/galapagos.jpg
var galapagos_default = "/ecuador-trip-buddy/assets/galapagos-DcroKzst.jpg";
//#endregion
//#region src/assets/quito.jpg
var quito_default = "/ecuador-trip-buddy/assets/quito-DaMyCGcN.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var logo = smarttrip_logo_png_asset_default.url;
var PROFILES = [
	{
		id: "mateo",
		name: "Mateo",
		role: "Estudiante",
		tagline: "Aventura con presupuesto justo",
		icon: GraduationCap,
		accent: "nature",
		budget: "$80 – $200"
	},
	{
		id: "andres",
		name: "Andrés",
		role: "Viajero de negocios",
		tagline: "Eficiencia para viajes cortos",
		icon: Briefcase,
		accent: "primary",
		budget: "Corporativo"
	},
	{
		id: "maria",
		name: "María",
		role: "Planificadora familiar",
		tagline: "Vacaciones seguras y cómodas",
		icon: Heart,
		accent: "sun",
		budget: "$600 – $1500"
	}
];
function SmartTripApp() {
	const [profile, setProfile] = useState(null);
	const current = PROFILES.find((p) => p.id === profile) ?? null;
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-gradient-sky",
		children: /* @__PURE__ */ jsxs("div", {
			className: "lg:flex lg:min-h-screen",
			children: [
				/* @__PURE__ */ jsx(SideNav, {
					profile: current,
					onChangeProfile: () => setProfile(null)
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto w-full max-w-[440px] min-h-screen bg-background shadow-float overflow-hidden lg:mx-0 lg:max-w-none lg:flex-1 lg:shadow-none lg:bg-transparent",
					children: [
						/* @__PURE__ */ jsx(TopBar, {
							profile: current,
							onChangeProfile: () => setProfile(null)
						}),
						/* @__PURE__ */ jsx("main", {
							className: "pb-32 lg:pb-12 lg:px-6 xl:px-10 lg:max-w-6xl lg:mx-auto",
							children: !current ? /* @__PURE__ */ jsx(ProfileSelector, { onPick: setProfile }) : /* @__PURE__ */ jsx(Dashboard, { profile: current })
						}),
						current && /* @__PURE__ */ jsx(BottomNav, {})
					]
				}),
				/* @__PURE__ */ jsx(AssistantFab, {})
			]
		})
	});
}
function SideNav({ profile, onChangeProfile }) {
	return /* @__PURE__ */ jsxs("aside", {
		className: "hidden lg:flex lg:w-72 xl:w-80 lg:flex-col lg:border-r lg:border-border lg:bg-background lg:px-6 lg:py-7 lg:sticky lg:top-0 lg:h-screen",
		children: [
			/* @__PURE__ */ jsxs("button", {
				onClick: onChangeProfile,
				className: "flex items-center gap-3 text-left",
				children: [/* @__PURE__ */ jsx("img", {
					src: logo,
					alt: "SmartTrip",
					className: "h-12 w-12 rounded-xl object-contain bg-card p-1 ring-1 ring-border"
				}), /* @__PURE__ */ jsxs("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-display text-lg font-extrabold tracking-tight",
						children: "SmartTrip"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[11px] text-muted-foreground",
						children: "Ecuador inteligente"
					})]
				})]
			}),
			/* @__PURE__ */ jsx("nav", {
				className: "mt-8 flex-1 space-y-1",
				children: [
					{
						icon: Home,
						label: "Inicio",
						active: true
					},
					{
						icon: Compass,
						label: "Explorar"
					},
					{
						icon: CalendarDays,
						label: "Mis viajes"
					},
					{
						icon: Hotel,
						label: "Reservas"
					},
					{
						icon: MessageCircle,
						label: "Mensajes"
					},
					{
						icon: Settings,
						label: "Ajustes"
					}
				].map((it) => /* @__PURE__ */ jsxs("button", {
					className: `flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${it.active ? "bg-primary/10 text-primary" : "text-foreground/70 hover:bg-muted"}`,
					children: [
						/* @__PURE__ */ jsx(it.icon, { className: "h-5 w-5" }),
						" ",
						it.label
					]
				}, it.label))
			}),
			profile ? /* @__PURE__ */ jsxs("div", {
				className: "mt-4 rounded-2xl border border-border bg-card p-3",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
						children: "Perfil activo"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-2 flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("span", {
							className: `grid h-10 w-10 place-items-center rounded-xl ${accentBg(profile.accent)}`,
							children: /* @__PURE__ */ jsx(profile.icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsx("p", {
								className: "truncate text-sm font-bold",
								children: profile.name
							}), /* @__PURE__ */ jsx("p", {
								className: "truncate text-[11px] text-muted-foreground",
								children: profile.role
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("button", {
						onClick: onChangeProfile,
						className: "mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-primary",
						children: ["Cambiar perfil ", /* @__PURE__ */ jsx(LogOut, { className: "h-3 w-3" })]
					})
				]
			}) : /* @__PURE__ */ jsx("p", {
				className: "mt-4 text-[11px] text-muted-foreground",
				children: "Elige un perfil para personalizar tu experiencia."
			})
		]
	});
}
function TopBar({ profile, onChangeProfile }) {
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-30 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 bg-background/85 backdrop-blur border-b border-border px-4 py-3 lg:px-8 lg:py-4 lg:bg-background/70",
		children: [
			/* @__PURE__ */ jsxs("button", {
				onClick: onChangeProfile,
				className: "flex min-w-0 items-center gap-2 text-left lg:hidden",
				children: [/* @__PURE__ */ jsx("img", {
					src: logo,
					alt: "SmartTrip",
					width: 36,
					height: 36,
					className: "h-9 w-9 shrink-0 object-contain"
				}), /* @__PURE__ */ jsxs("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-display text-base font-bold leading-tight tracking-tight",
						children: "SmartTrip"
					}), /* @__PURE__ */ jsx("p", {
						className: "truncate text-[11px] text-muted-foreground",
						children: profile ? `Modo: ${profile.name} · ${profile.role}` : "Ecuador, a tu medida"
					})]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "hidden lg:flex min-w-0 items-center gap-2 max-w-xl",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative w-full",
					children: [/* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
						placeholder: "Buscar destinos, hoteles, vuelos en Ecuador…",
						className: "w-full rounded-full border border-border bg-card pl-10 pr-4 py-2.5 text-sm outline-none focus:border-primary"
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 items-center gap-1",
				children: [
					/* @__PURE__ */ jsx(IconButton, { children: /* @__PURE__ */ jsx(Search, { className: "h-5 w-5 lg:hidden" }) }),
					/* @__PURE__ */ jsxs(IconButton, { children: [/* @__PURE__ */ jsx(Bell, { className: "h-5 w-5" }), /* @__PURE__ */ jsx("span", { className: "absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive" })] }),
					profile && /* @__PURE__ */ jsx("span", {
						className: "hidden lg:grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-primary-foreground font-bold text-sm",
						children: profile.name[0]
					})
				]
			})
		]
	});
}
function IconButton({ children }) {
	return /* @__PURE__ */ jsx("button", {
		className: "relative grid h-10 w-10 place-items-center rounded-full text-foreground/80 hover:bg-muted",
		children
	});
}
function ProfileSelector({ onPick }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "px-5 pt-6 lg:px-0 lg:pt-10",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-3xl bg-gradient-brand p-6 text-primary-foreground shadow-soft lg:p-10",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-widest opacity-80",
						children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }), " Demo interactiva"]
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-2 font-display text-2xl font-extrabold leading-tight lg:text-4xl",
						children: "¿Quién planifica el viaje hoy?"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm/relaxed opacity-90 lg:text-base lg:max-w-2xl",
						children: "Elige un perfil y mira cómo SmartTrip adapta destinos, presupuesto e itinerarios con IA."
					})
				]
			}),
			/* @__PURE__ */ jsx("ul", {
				className: "mt-5 space-y-3 lg:mt-8 lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0",
				children: PROFILES.map((p) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", {
					onClick: () => onPick(p.id),
					className: "group grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-card p-4 text-left transition hover:border-primary/40 hover:shadow-soft lg:flex lg:flex-col lg:items-start lg:gap-3 lg:p-6 lg:h-full",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: `grid h-12 w-12 shrink-0 place-items-center rounded-xl ${accentBg(p.accent)} lg:h-14 lg:w-14`,
							children: /* @__PURE__ */ jsx(p.icon, { className: "h-6 w-6 lg:h-7 lg:w-7" })
						}),
						/* @__PURE__ */ jsxs("span", {
							className: "min-w-0 lg:w-full",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "block font-display text-base font-bold lg:text-xl",
									children: [
										p.name,
										" · ",
										/* @__PURE__ */ jsx("span", {
											className: "text-muted-foreground font-medium",
											children: p.role
										})
									]
								}),
								/* @__PURE__ */ jsx("span", {
									className: "mt-0.5 block truncate text-sm text-muted-foreground lg:whitespace-normal",
									children: p.tagline
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "mt-1 inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-foreground/70",
									children: [
										/* @__PURE__ */ jsx(Wallet, { className: "h-3 w-3" }),
										" ",
										p.budget
									]
								})
							]
						}),
						/* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary lg:hidden" }),
						/* @__PURE__ */ jsxs("span", {
							className: "hidden lg:inline-flex items-center gap-1 text-xs font-bold text-primary",
							children: ["Entrar al panel ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
						})
					]
				}) }, p.id))
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-6 text-center text-xs text-muted-foreground",
				children: "Podrás cambiar de perfil tocando el logo en cualquier momento."
			})
		]
	});
}
function accentBg(a) {
	if (a === "primary") return "bg-primary/10 text-primary";
	if (a === "nature") return "bg-nature/15 text-nature";
	return "bg-sun/25 text-sun-foreground";
}
function Dashboard({ profile }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-7 pt-4",
		children: [
			/* @__PURE__ */ jsx(Greeting, { profile }),
			profile.id === "mateo" && /* @__PURE__ */ jsx(MateoView, {}),
			profile.id === "andres" && /* @__PURE__ */ jsx(AndresView, {}),
			profile.id === "maria" && /* @__PURE__ */ jsx(MariaView, {}),
			/* @__PURE__ */ jsx(Compare, { profile }),
			/* @__PURE__ */ jsx(Reviews, { profile }),
			/* @__PURE__ */ jsx("div", {
				className: "px-5 pb-2 text-center text-[11px] text-muted-foreground",
				children: "Recomendaciones generadas por IA · SmartTrip Ecuador"
			})
		]
	});
}
function Greeting({ profile }) {
	const hi = profile.id === "andres" ? "Buen día" : "¡Hola";
	return /* @__PURE__ */ jsxs("section", {
		className: "px-5",
		children: [
			/* @__PURE__ */ jsxs("p", {
				className: "text-xs font-semibold uppercase tracking-widest text-primary",
				children: ["Panel para ", profile.role.toLowerCase()]
			}),
			/* @__PURE__ */ jsxs("h2", {
				className: "mt-1 font-display text-2xl font-extrabold leading-tight",
				children: [
					hi,
					", ",
					profile.name,
					profile.id !== "andres" ? "!" : "."
				]
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: [profile.tagline, "."]
			})
		]
	});
}
function MateoView() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "px-5",
			children: /* @__PURE__ */ jsx("div", {
				className: "rounded-2xl border border-nature/30 bg-nature/10 p-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-nature text-nature-foreground",
							children: /* @__PURE__ */ jsx(Tag, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-sm font-bold text-foreground",
								children: "3 promos activas para ti"
							}), /* @__PURE__ */ jsx("p", {
								className: "truncate text-xs text-muted-foreground",
								children: "Hasta 45% off en buses y hostales esta semana"
							})]
						}),
						/* @__PURE__ */ jsx("span", {
							className: "shrink-0 rounded-full bg-nature px-2 py-1 text-[10px] font-bold text-nature-foreground",
							children: "-45%"
						})
					]
				})
			})
		}),
		/* @__PURE__ */ jsx(Section, {
			title: "Aventura y playa",
			subtitle: "Lo más barato cerca de ti",
			children: /* @__PURE__ */ jsxs(HScroll, { children: [
				/* @__PURE__ */ jsx(DestCard, {
					img: montanita_default,
					title: "Montañita",
					tag: "Playa · Surf",
					price: "$32",
					nights: "2 noches",
					badge: "Promo"
				}),
				/* @__PURE__ */ jsx(DestCard, {
					img: quilotoa_default,
					title: "Quilotoa",
					tag: "Aventura · Sierra",
					price: "$48",
					nights: "2 noches"
				}),
				/* @__PURE__ */ jsx(DestCard, {
					img: banos_default,
					title: "Baños",
					tag: "Aventura · Cascadas",
					price: "$55",
					nights: "3 noches",
					badge: "Top estudiantes"
				})
			] })
		}),
		/* @__PURE__ */ jsx(Section, {
			title: "Viaja en grupo, paga menos",
			subtitle: "Splits automáticos con tus panas",
			children: /* @__PURE__ */ jsxs("div", {
				className: "px-5 space-y-3",
				children: [
					/* @__PURE__ */ jsx(GroupOption, {
						title: "Bus colectivo · Guayaquil → Montañita",
						people: 6,
						pricePer: "$6",
						total: "$36",
						icon: Bus
					}),
					/* @__PURE__ */ jsx(GroupOption, {
						title: "Hostal compartido · 4 personas",
						people: 4,
						pricePer: "$9/n",
						total: "$36/n",
						icon: Hotel
					}),
					/* @__PURE__ */ jsx(GroupOption, {
						title: "Tour de surf grupal",
						people: 5,
						pricePer: "$15",
						total: "$75",
						icon: Waves
					})
				]
			})
		})
	] });
}
function GroupOption({ title, people, pricePer, total, icon: Icon }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border bg-card p-3",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-nature/10 text-nature",
				children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ jsx("p", {
					className: "truncate text-sm font-semibold",
					children: title
				}), /* @__PURE__ */ jsxs("p", {
					className: "mt-0.5 inline-flex items-center gap-1 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx(Users, { className: "h-3 w-3" }),
						" ",
						people,
						" personas · ",
						pricePer,
						" c/u"
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "shrink-0 text-right",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-sm font-extrabold text-nature",
					children: total
				}), /* @__PURE__ */ jsx("p", {
					className: "text-[10px] text-muted-foreground",
					children: "total grupo"
				})]
			})
		]
	});
}
function AndresView() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Section, {
			title: "Reserva rápida",
			subtitle: "Tu próxima reunión, lista en 1 toque",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-2 gap-3 px-5",
				children: [
					/* @__PURE__ */ jsx(QuickAction, {
						icon: Plane,
						label: "Vuelo UIO → GYE",
						sub: "Hoy 7:00 pm"
					}),
					/* @__PURE__ */ jsx(QuickAction, {
						icon: Car,
						label: "Taxi ejecutivo",
						sub: "Aeropuerto → Hotel"
					}),
					/* @__PURE__ */ jsx(QuickAction, {
						icon: Building2,
						label: "Hotel 4★",
						sub: "Centro de negocios"
					}),
					/* @__PURE__ */ jsx(QuickAction, {
						icon: UtensilsCrossed,
						label: "Restaurante",
						sub: "Sala privada · 4 pax"
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(Section, {
			title: "Hoteles ejecutivos",
			subtitle: "Guayaquil · Quito · Cuenca",
			children: /* @__PURE__ */ jsxs(HScroll, { children: [
				/* @__PURE__ */ jsx(DestCard, {
					img: hotel_exec_default,
					title: "Hilton Colón Quito",
					tag: "Ejecutivo · 4★",
					price: "$129",
					nights: "por noche",
					badge: "Free WiFi"
				}),
				/* @__PURE__ */ jsx(DestCard, {
					img: quito_default,
					title: "Marriott Guayaquil",
					tag: "Business · 5★",
					price: "$165",
					nights: "por noche"
				}),
				/* @__PURE__ */ jsx(DestCard, {
					img: banos_default,
					title: "Oro Verde Cuenca",
					tag: "Ejecutivo · 4★",
					price: "$118",
					nights: "por noche",
					badge: "Sala reuniones"
				})
			] })
		}),
		/* @__PURE__ */ jsx(Section, {
			title: "Tu agenda de hoy",
			subtitle: "Quito · Mié 24 oct",
			children: /* @__PURE__ */ jsxs("div", {
				className: "px-5 space-y-2",
				children: [
					/* @__PURE__ */ jsx(AgendaItem, {
						time: "09:30",
						title: "Reunión cliente — Petroamazonas",
						place: "Av. Naciones Unidas"
					}),
					/* @__PURE__ */ jsx(AgendaItem, {
						time: "13:00",
						title: "Almuerzo · Carmine",
						place: "Cumbayá · mesa privada"
					}),
					/* @__PURE__ */ jsx(AgendaItem, {
						time: "18:40",
						title: "Vuelo a Guayaquil",
						place: "LATAM LA1417"
					})
				]
			})
		})
	] });
}
function QuickAction({ icon: Icon, label, sub }) {
	return /* @__PURE__ */ jsxs("button", {
		className: "group flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-4 text-left transition hover:border-primary/40 hover:shadow-soft",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary",
				children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ jsx("span", {
				className: "text-sm font-semibold leading-tight",
				children: label
			}),
			/* @__PURE__ */ jsx("span", {
				className: "text-[11px] text-muted-foreground",
				children: sub
			}),
			/* @__PURE__ */ jsxs("span", {
				className: "mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-primary",
				children: ["Reservar ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3 transition group-hover:translate-x-0.5" })]
			})
		]
	});
}
function AgendaItem({ time, title, place }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border bg-card p-3",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground font-display text-xs font-bold",
				children: time
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ jsx("p", {
					className: "truncate text-sm font-semibold",
					children: title
				}), /* @__PURE__ */ jsx("p", {
					className: "truncate text-xs text-muted-foreground",
					children: place
				})]
			}),
			/* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 shrink-0 text-muted-foreground" })
		]
	});
}
function MariaView() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "px-5",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ jsx(Stat, {
					icon: Wallet,
					label: "Presupuesto",
					value: "$1.200",
					sub: "4 personas"
				}), /* @__PURE__ */ jsx(Stat, {
					icon: Shield,
					label: "Seguridad",
					value: "Alta",
					sub: "Destinos verificados"
				})]
			})
		}),
		/* @__PURE__ */ jsx(Section, {
			title: "Destinos familiares",
			subtitle: "Aptos para niños · vacaciones escolares",
			children: /* @__PURE__ */ jsxs(HScroll, { children: [
				/* @__PURE__ */ jsx(DestCard, {
					img: galapagos_default,
					title: "Galápagos",
					tag: "5 días · Familia",
					price: "$1.450",
					nights: "4 noches",
					badge: "Niños +6"
				}),
				/* @__PURE__ */ jsx(DestCard, {
					img: banos_default,
					title: "Baños",
					tag: "3 días · Aventura suave",
					price: "$680",
					nights: "2 noches",
					badge: "Niños +4"
				}),
				/* @__PURE__ */ jsx(DestCard, {
					img: quilotoa_default,
					title: "Quilotoa",
					tag: "2 días · Naturaleza",
					price: "$520",
					nights: "1 noche"
				})
			] })
		}),
		/* @__PURE__ */ jsx(Section, {
			title: "Itinerario sugerido",
			subtitle: "Baños · Vacaciones de octubre",
			children: /* @__PURE__ */ jsxs("div", {
				className: "px-5 space-y-2",
				children: [
					/* @__PURE__ */ jsx(ItineraryDay, {
						day: "Día 1",
						title: "Llegada y Pailón del Diablo",
						detail: "Caminata fácil · apto +5 años",
						icon: Mountain
					}),
					/* @__PURE__ */ jsx(ItineraryDay, {
						day: "Día 2",
						title: "Casa del Árbol y termas",
						detail: "Atracciones familiares · descanso",
						icon: Baby
					}),
					/* @__PURE__ */ jsx(ItineraryDay, {
						day: "Día 3",
						title: "Ruta de las cascadas",
						detail: "Tour en chiva · 4 horas",
						icon: Compass
					})
				]
			})
		})
	] });
}
function Stat({ icon: Icon, label, value, sub }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border border-border bg-card p-4",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2 text-xs font-semibold text-muted-foreground",
				children: [
					/* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-sun-foreground" }),
					" ",
					label
				]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-1 font-display text-xl font-extrabold",
				children: value
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-[11px] text-muted-foreground",
				children: sub
			})
		]
	});
}
function ItineraryDay({ day, title, detail, icon: Icon }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3 rounded-2xl border border-border bg-card p-3",
		children: [/* @__PURE__ */ jsx("span", {
			className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sun/30 text-sun-foreground",
			children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-[11px] font-bold uppercase tracking-wider text-sun-foreground/80",
					children: day
				}),
				/* @__PURE__ */ jsx("p", {
					className: "truncate text-sm font-semibold",
					children: title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "truncate text-xs text-muted-foreground",
					children: detail
				})
			]
		})]
	});
}
function Section({ title, subtitle, children }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "space-y-3",
		children: [/* @__PURE__ */ jsxs("header", {
			className: "px-5",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "font-display text-lg font-extrabold leading-tight",
				children: title
			}), subtitle && /* @__PURE__ */ jsx("p", {
				className: "text-xs text-muted-foreground",
				children: subtitle
			})]
		}), children]
	});
}
function HScroll({ children }) {
	return /* @__PURE__ */ jsx("div", {
		className: "no-scrollbar -mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1",
		children
	});
}
function DestCard({ img, title, tag, price, nights, badge }) {
	return /* @__PURE__ */ jsxs("article", {
		className: "relative w-[230px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card shadow-soft",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative h-32 w-full overflow-hidden",
			children: [/* @__PURE__ */ jsx("img", {
				src: img,
				alt: title,
				loading: "lazy",
				className: "h-full w-full object-cover"
			}), badge && /* @__PURE__ */ jsx("span", {
				className: "absolute left-2 top-2 rounded-full bg-background/90 px-2 py-0.5 text-[10px] font-bold text-primary",
				children: badge
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "p-3",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "truncate font-display text-sm font-extrabold",
					children: title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-0.5 truncate text-[11px] text-muted-foreground",
					children: tag
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-2 flex items-baseline justify-between",
					children: [/* @__PURE__ */ jsx("span", {
						className: "font-display text-base font-extrabold text-primary",
						children: price
					}), /* @__PURE__ */ jsx("span", {
						className: "text-[10px] text-muted-foreground",
						children: nights
					})]
				})
			]
		})]
	});
}
function Compare({ profile }) {
	const [tab, setTab] = useState("stay");
	const items = useMemo(() => ({
		mateo: {
			stay: [{
				name: "Hostal Kamala",
				meta: "Montañita · compartido",
				price: "$9",
				rating: 4.4,
				tag: "Más barato"
			}, {
				name: "Casa del Sol",
				meta: "Olón · privado",
				price: "$22",
				rating: 4.6
			}],
			transport: [{
				name: "CLP Buses",
				meta: "GYE → Montañita · 3h",
				price: "$6",
				rating: 4.2,
				tag: "Económico"
			}, {
				name: "Van compartida",
				meta: "Salida 7am",
				price: "$12",
				rating: 4.7
			}]
		},
		andres: {
			stay: [{
				name: "Hilton Colón",
				meta: "Quito · ejecutivo",
				price: "$129",
				rating: 4.7,
				tag: "Top business"
			}, {
				name: "Wyndham",
				meta: "GYE · centro",
				price: "$118",
				rating: 4.5
			}],
			transport: [{
				name: "Uber Black",
				meta: "Aeropuerto → Hotel",
				price: "$22",
				rating: 4.9,
				tag: "Más rápido"
			}, {
				name: "LATAM Vuelo",
				meta: "UIO → GYE · 50 min",
				price: "$89",
				rating: 4.6
			}]
		},
		maria: {
			stay: [{
				name: "Hostería Surillal",
				meta: "Baños · familiar",
				price: "$95",
				rating: 4.8,
				tag: "Recomendado"
			}, {
				name: "Hotel Sangay",
				meta: "Habitación cuádruple",
				price: "$78",
				rating: 4.5
			}],
			transport: [{
				name: "Van privada",
				meta: "Quito → Baños · puerta a puerta",
				price: "$120",
				rating: 4.9,
				tag: "Más seguro"
			}, {
				name: "Bus turístico",
				meta: "Salidas diarias",
				price: "$8",
				rating: 4.3
			}]
		}
	}), [])[profile.id][tab];
	return /* @__PURE__ */ jsx(Section, {
		title: "Compara y elige",
		subtitle: "Hospedaje y transporte lado a lado",
		children: /* @__PURE__ */ jsxs("div", {
			className: "px-5",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "inline-flex rounded-full bg-muted p-1",
				children: [/* @__PURE__ */ jsx(TabBtn, {
					active: tab === "stay",
					onClick: () => setTab("stay"),
					icon: Hotel,
					label: "Hospedaje"
				}), /* @__PURE__ */ jsx(TabBtn, {
					active: tab === "transport",
					onClick: () => setTab("transport"),
					icon: Car,
					label: "Transporte"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-3 grid grid-cols-2 gap-3",
				children: items.map((it, i) => /* @__PURE__ */ jsxs("div", {
					className: `relative rounded-2xl border p-3 ${i === 0 ? "border-primary/40 bg-primary/5" : "border-border bg-card"}`,
					children: [
						it.tag && /* @__PURE__ */ jsx("span", {
							className: "absolute -top-2 left-3 rounded-full bg-gradient-brand px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary-foreground",
							children: it.tag
						}),
						/* @__PURE__ */ jsx("p", {
							className: "truncate text-sm font-bold",
							children: it.name
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-0.5 line-clamp-2 text-[11px] text-muted-foreground",
							children: it.meta
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-3 flex items-center justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-display text-base font-extrabold text-primary",
								children: it.price
							}), /* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-0.5 text-[11px] font-semibold text-sun-foreground",
								children: [
									/* @__PURE__ */ jsx(Star, { className: "h-3 w-3 fill-current" }),
									" ",
									it.rating
								]
							})]
						}),
						/* @__PURE__ */ jsx("button", {
							className: "mt-3 w-full rounded-full bg-primary px-3 py-1.5 text-[11px] font-bold text-primary-foreground",
							children: "Elegir"
						})
					]
				}, it.name))
			})]
		})
	});
}
function TabBtn({ active, onClick, icon: Icon, label }) {
	return /* @__PURE__ */ jsxs("button", {
		onClick,
		className: `flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${active ? "bg-background text-primary shadow-soft" : "text-muted-foreground"}`,
		children: [
			/* @__PURE__ */ jsx(Icon, { className: "h-3.5 w-3.5" }),
			" ",
			label
		]
	});
}
var REVIEWS = {
	mateo: [{
		name: "Sofía P.",
		place: "Montañita",
		rating: 5,
		text: "Reservé el bus y el hostal en 2 minutos. Más barato que ir por mi cuenta."
	}, {
		name: "Diego R.",
		place: "Baños",
		rating: 5,
		text: "El split del grupo funcionó perfecto. Volveríamos otra vez."
	}],
	andres: [{
		name: "Carla M.",
		place: "Hilton Quito",
		rating: 5,
		text: "Check-in express y sala de reuniones lista. Salvé mi día."
	}, {
		name: "Luis O.",
		place: "Guayaquil",
		rating: 4,
		text: "Reserva rápida de taxi ejecutivo, llegó en 6 minutos."
	}],
	maria: [{
		name: "Andrea V.",
		place: "Baños",
		rating: 5,
		text: "Itinerario seguro para mis hijos (4 y 8). Recomiendo 100%."
	}, {
		name: "Paola E.",
		place: "Galápagos",
		rating: 5,
		text: "Todo verificado. La asistencia respondió en segundos."
	}]
};
function Reviews({ profile }) {
	const list = REVIEWS[profile.id];
	return /* @__PURE__ */ jsx(Section, {
		title: "La comunidad confía",
		subtitle: "Reseñas de viajeros como tú",
		children: /* @__PURE__ */ jsxs("div", {
			className: "px-5 space-y-3",
			children: [list.map((r) => /* @__PURE__ */ jsxs("article", {
				className: "rounded-2xl border border-border bg-card p-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-nature text-nature-foreground font-bold",
							children: r.name[0]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ jsx("p", {
								className: "truncate text-sm font-bold",
								children: r.name
							}), /* @__PURE__ */ jsxs("p", {
								className: "truncate text-[11px] text-muted-foreground",
								children: [/* @__PURE__ */ jsx(MapPin, { className: "mr-0.5 inline h-3 w-3" }), r.place]
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex shrink-0 items-center gap-0.5 text-sun-foreground",
							children: Array.from({ length: r.rating }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-3.5 w-3.5 fill-current" }, i))
						})
					]
				}), /* @__PURE__ */ jsxs("p", {
					className: "mt-2 text-sm leading-relaxed text-foreground/85",
					children: [/* @__PURE__ */ jsx(Quote, { className: "mr-1 inline h-3.5 w-3.5 -translate-y-0.5 text-primary/40" }), r.text]
				})]
			}, r.name)), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-center gap-1 text-[11px] text-muted-foreground",
				children: [/* @__PURE__ */ jsx(Shield, { className: "h-3 w-3 text-nature" }), " 12.480 reseñas verificadas"]
			})]
		})
	});
}
function AssistantFab() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs(Fragment, { children: [open && /* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-40 bg-foreground/30",
		onClick: () => setOpen(false),
		children: /* @__PURE__ */ jsxs("div", {
			className: "fixed bottom-28 right-4 left-4 max-w-md lg:left-auto lg:right-8 lg:bottom-24 rounded-3xl bg-card p-4 shadow-float",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-primary-foreground",
						children: /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5" })
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-sm font-bold",
						children: "Asistente SmartTrip"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[11px] text-muted-foreground",
						children: "En línea · responde al instante"
					})] })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-3 space-y-2 text-sm",
					children: [/* @__PURE__ */ jsx("div", {
						className: "rounded-2xl rounded-tl-sm bg-muted px-3 py-2",
						children: "¡Hola! ¿Te ayudo a armar tu viaje, comparar precios o resolver una duda?"
					}), /* @__PURE__ */ jsx("div", {
						className: "ml-auto w-fit max-w-[80%] rounded-2xl rounded-tr-sm bg-primary px-3 py-2 text-primary-foreground",
						children: "¿Cuál es el mejor día para ir a Quilotoa?"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-3 flex gap-2",
					children: [/* @__PURE__ */ jsx("input", {
						placeholder: "Escribe tu pregunta…",
						className: "flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary"
					}), /* @__PURE__ */ jsx("button", {
						className: "rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground",
						children: "Enviar"
					})]
				})
			]
		})
	}), /* @__PURE__ */ jsxs("button", {
		onClick: () => setOpen((o) => !o),
		className: "fixed bottom-24 right-4 lg:bottom-8 lg:right-8 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-float transition active:scale-95",
		"aria-label": "Asistente virtual",
		children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" }), /* @__PURE__ */ jsx("span", {
			className: "absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-sun text-[10px] font-bold text-sun-foreground",
			children: /* @__PURE__ */ jsx(Zap, { className: "h-3 w-3" })
		})]
	})] });
}
function BottomNav() {
	return /* @__PURE__ */ jsx("nav", {
		className: "fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 backdrop-blur mx-auto max-w-[440px] lg:hidden",
		children: /* @__PURE__ */ jsx("ul", {
			className: "grid grid-cols-4",
			children: [
				{
					icon: Compass,
					label: "Explorar",
					active: true
				},
				{
					icon: Search,
					label: "Buscar"
				},
				{
					icon: Hotel,
					label: "Reservas"
				},
				{
					icon: GraduationCap,
					label: "Perfil"
				}
			].map((it) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", {
				className: `flex w-full flex-col items-center gap-1 py-3 text-[10px] font-semibold ${it.active ? "text-primary" : "text-muted-foreground"}`,
				children: [/* @__PURE__ */ jsx(it.icon, { className: "h-5 w-5" }), it.label]
			}) }, it.label))
		})
	});
}
//#endregion
export { SmartTripApp as component };
