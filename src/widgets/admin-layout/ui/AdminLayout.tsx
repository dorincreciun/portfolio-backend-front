import type { ReactNode } from "react"
import { Link, useLocation } from "react-router"
import {
    BarChart3,
    Bell,
    CheckSquare,
    ChevronDown,
    FolderKanban,
    LayoutDashboard,
    Mail,
    MessageCircle,
    Search,
    Star,
    Users,
    Workflow,
} from "lucide-react"

import { cn } from "@shared/utils/cn"
import { ROUTES, type AppRoute } from "@shared/const/routes"

type AdminLayoutProps = {
    children: ReactNode
}

type NavItem = {
    label: string
    icon: React.ComponentType<{ className?: string }>
    badge?: string
    to?: AppRoute
}

type NavSection = {
    title: string
    items: NavItem[]
}

const mainNavigation: NavSection = {
    title: "Pagini",
    items: [
        { label: "Dashboard", icon: LayoutDashboard, to: ROUTES.CABINET },
        { label: "Proiecte finalizate", icon: FolderKanban, to: ROUTES.CABINET_PROJECTS },
        { label: "Proiecte publice", icon: FolderKanban, to: ROUTES.PROJECTS },
    ],
}

const favoritesNavigation: NavSection = {
    title: "Favorites",
    items: [
        { label: "Key Accounts", icon: Star },
        { label: "Strategic Initiatives", icon: Star },
        { label: "Focus Areas", icon: Star },
        { label: "Starred Items", icon: Star },
    ],
}

const recordsNavigation: NavSection = {
    title: "Records",
    items: [
        { label: "Companies", icon: FolderKanban },
        { label: "People", icon: Users },
    ],
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
    return (
        <div className={"min-h-screen bg-neutral-900 text-white"}>
            <div className={"flex min-h-screen w-full gap-4 px-4 py-4"}>
                <aside
                    className={
                        "flex w-72 flex-col rounded-3xl bg-neutral-800 p-4 shadow-xl ring-1 ring-neutral-700/50"
                    }
                >
                    <div className={"mb-5 flex items-center justify-between gap-2 px-2"}>
                        <div className={"flex items-center gap-3"}>
                            <div className={"h-9 w-9 shrink-0 overflow-hidden rounded-full bg-neutral-600"} />
                            <div>
                                <div className={"text-sm font-medium text-white"}>Liam Smith</div>
                                <div className={"flex items-center gap-1.5 text-xs font-medium text-emerald-300"}>
                                    DesignHub
                                    <ChevronDown className={"h-3.5 w-3.5"} />
                                </div>
                            </div>
                        </div>
                        <button
                            type={"button"}
                            className={"rounded-xl p-2 text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white"}
                            aria-label={"Notificări"}
                        >
                            <Bell className={"h-5 w-5"} />
                        </button>
                    </div>

                    <div className={"mb-4"}>
                        <div
                            className={
                                "flex items-center gap-2 rounded-2xl border border-neutral-600 bg-neutral-700/50 px-3 py-2.5 text-xs text-neutral-300"
                            }
                        >
                            <Search className={"h-4 w-4 text-neutral-400"} />
                            <span className={"flex-1"}>Caută în panou...</span>
                            <span className={"rounded-md bg-neutral-600 px-1.5 py-0.5 text-[10px] font-medium text-neutral-400"}>
                                ⌘K
                            </span>
                        </div>
                    </div>

                    <nav className={"flex-1 space-y-5 overflow-y-auto py-1 pr-1"}>
                        <SidebarSection section={mainNavigation} />
                        <SidebarSection section={favoritesNavigation} />
                        <SidebarSection section={recordsNavigation} />
                    </nav>

                    <div className={"mt-3 space-y-3 border-t border-neutral-700 pt-3"}>
                        <div
                            className={
                                "rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 p-4 shadow-lg ring-1 ring-violet-500/30"
                            }
                        >
                            <div className={"text-sm font-medium text-white"}>
                                Upgrade to Pro pentru toate funcționalitățile
                            </div>
                            <button
                                type={"button"}
                                className={
                                    "mt-3 rounded-xl bg-white/10 px-3 py-1.5 text-xs font-semibold text-violet-200 backdrop-blur transition-colors hover:bg-white/20"
                                }
                            >
                                Upgrade Now
                            </button>
                        </div>

                        <button
                            type={"button"}
                            className={
                                "flex w-full items-center justify-between gap-2 rounded-2xl px-2.5 py-2 text-left text-xs text-neutral-300 transition-colors hover:bg-neutral-700/50 hover:text-white"
                            }
                        >
                            <div className={"flex items-center gap-2"}>
                                <div className={"h-7 w-7 overflow-hidden rounded-full bg-neutral-600"} />
                                <div className={"leading-tight"}>
                                    <div className={"font-medium text-white"}>Liam Smith</div>
                                    <div className={"text-[11px] text-neutral-400"}>smith@example.com</div>
                                </div>
                            </div>
                            <ChevronDown className={"h-3.5 w-3.5 text-neutral-500"} />
                        </button>
                    </div>
                </aside>

                <main className={"flex flex-1 flex-col rounded-3xl bg-neutral-800/80 p-6 shadow-xl ring-1 ring-neutral-700/50"}>
                    {children}
                </main>
            </div>
        </div>
    )
}

type SidebarSectionProps = {
    section: NavSection
}

const SidebarSection = ({ section }: SidebarSectionProps) => {
    return (
        <div className={"space-y-1.5"}>
            <div className={"px-2 text-[11px] font-semibold uppercase tracking-wide text-neutral-500"}>
                {section.title}
            </div>
            <ul className={"space-y-0.5"}>
                {section.items.map((item) => (
                    <SidebarItem key={item.label} item={item} />
                ))}
            </ul>
        </div>
    )
}

type SidebarItemProps = {
    item: NavItem
}

const SidebarItem = ({ item }: SidebarItemProps) => {
    const location = useLocation()
    const isActive = item.to ? location.pathname === item.to : false

    const Icon = item.icon

    return (
        <li>
            {item.to ? (
                <Link
                    to={item.to}
                    className={cn(
                        "flex w-full items-center justify-between gap-2 rounded-2xl px-2.5 py-2 text-xs transition-colors",
                        isActive
                            ? "bg-emerald-400/20 text-emerald-300 shadow-sm ring-1 ring-emerald-400/40"
                            : "text-neutral-300 hover:bg-neutral-700/50 hover:text-white",
                    )}
                >
                    <span className={"flex items-center gap-2"}>
                        <Icon
                            className={cn(
                                "h-4 w-4 shrink-0",
                                isActive ? "text-emerald-300" : "text-neutral-400",
                            )}
                        />
                        <span className={"font-medium"}>{item.label}</span>
                    </span>
                    {item.badge ? (
                        <span
                            className={cn(
                                "rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
                                isActive
                                    ? "bg-emerald-400 text-neutral-900"
                                    : "bg-neutral-600 text-neutral-300",
                            )}
                        >
                            {item.badge}
                        </span>
                    ) : null}
                </Link>
            ) : (
                <button
                    type={"button"}
                    className={cn(
                        "flex w-full items-center justify-between gap-2 rounded-2xl px-2.5 py-2 text-xs transition-colors",
                        "text-neutral-300 hover:bg-neutral-700/50 hover:text-white",
                    )}
                >
                    <span className={"flex items-center gap-2"}>
                        <Icon className={"h-4 w-4 shrink-0 text-neutral-400"} />
                        <span className={"font-medium"}>{item.label}</span>
                    </span>
                    {item.badge ? (
                        <span className={"rounded-full px-1.5 py-0.5 text-[10px] font-semibold bg-neutral-600 text-neutral-300"}>
                            {item.badge}
                        </span>
                    ) : null}
                </button>
            )}
        </li>
    )
}

