import { AdminLayout } from "@widgets/admin-layout"

export const CabinetPage = () => {
    return (
        <AdminLayout>
            <div className={"flex items-center justify-between gap-4 border-b border-neutral-700 pb-4"}>
                <div>
                    <h1 className={"text-xl font-semibold text-white"}>Admin panel</h1>
                    <p className={"mt-1 text-sm text-neutral-400"}>
                        Vizualizează activitatea echipei, monitorizează pipeline-urile și gestionează înregistrările.
                    </p>
                </div>
                <div className={"flex gap-2"}>
                    <button
                        type={"button"}
                        className={
                            "rounded-xl border border-neutral-600 bg-neutral-700/50 px-3 py-1.5 text-xs font-medium text-neutral-200 hover:bg-neutral-600"
                        }
                    >
                        Export
                    </button>
                    <button
                        type={"button"}
                        className={
                            "rounded-xl bg-emerald-400 px-3 py-1.5 text-xs font-semibold text-neutral-900 shadow-sm hover:bg-emerald-300"
                        }
                    >
                        + New record
                    </button>
                </div>
            </div>

            <div className={"mt-6 grid gap-4 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)]"}>
                <div className={"rounded-2xl border border-neutral-700 bg-neutral-700/30 p-4"}>
                    <div className={"mb-3 flex items-center justify-between text-xs font-medium text-neutral-400"}>
                        <span>Evoluție deals pe săptămână</span>
                        <span className={"rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300"}>
                            +18% vs. luna trecută
                        </span>
                    </div>
                    <div className={"relative mt-2 h-32"}>
                        <div className={"absolute inset-x-0 top-3 flex h-[calc(100%-12px)] flex-col justify-between"}>
                            <div className={"h-px bg-neutral-700"} />
                            <div className={"h-px bg-neutral-800"} />
                            <div className={"h-px bg-neutral-800"} />
                        </div>
                        <div className={"relative flex h-full items-end gap-2"}>
                            {[
                                { label: "L", height: "35%" },
                                { label: "M", height: "55%" },
                                { label: "M", height: "70%" },
                                { label: "J", height: "60%" },
                                { label: "V", height: "90%" },
                                { label: "S", height: "50%" },
                                { label: "D", height: "40%" },
                            ].map((bar) => (
                                <div key={bar.label} className={"flex w-full flex-col items-center gap-1"}>
                                    <div
                                        className={
                                            "flex w-full items-end justify-center rounded-full bg-gradient-to-t from-emerald-500/60 to-emerald-300/80"
                                        }
                                        style={{ height: bar.height }}
                                    />
                                    <span className={"text-[10px] text-neutral-500"}>{bar.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={"rounded-2xl border border-neutral-700 bg-neutral-700/30 p-4"}>
                    <div className={"mb-3 text-xs font-medium text-neutral-400"}>Conversie funnel</div>
                    <div className={"space-y-2"}>
                        <div className={"flex items-center justify-between text-[11px] text-neutral-300"}>
                            <span>Leads noi</span>
                            <span className={"font-semibold text-neutral-100"}>100%</span>
                        </div>
                        <div className={"h-2 rounded-full bg-neutral-800"}>
                            <div className={"h-full w-full rounded-full bg-emerald-500/70"} />
                        </div>

                        <div className={"mt-2 flex items-center justify-between text-[11px] text-neutral-300"}>
                            <span>In pipeline</span>
                            <span className={"font-semibold text-neutral-100"}>62%</span>
                        </div>
                        <div className={"h-2 rounded-full bg-neutral-800"}>
                            <div className={"h-full w-[62%] rounded-full bg-emerald-400"} />
                        </div>

                        <div className={"mt-2 flex items-center justify-between text-[11px] text-neutral-300"}>
                            <span>Closed won</span>
                            <span className={"font-semibold text-neutral-100"}>27%</span>
                        </div>
                        <div className={"h-2 rounded-full bg-neutral-800"}>
                            <div className={"h-full w-[27%] rounded-full bg-emerald-300"} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={"mt-6 grid gap-4 md:grid-cols-3"}>
                <div className={"rounded-2xl border border-neutral-700 bg-neutral-700/30 p-4"}>
                    <div className={"text-xs font-medium text-neutral-400"}>Active deals</div>
                    <div className={"mt-2 text-2xl font-semibold text-white"}>32</div>
                    <div className={"mt-1 text-xs text-emerald-300"}>+12% față de luna trecută</div>
                </div>
                <div className={"rounded-2xl border border-neutral-700 bg-neutral-700/30 p-4"}>
                    <div className={"text-xs font-medium text-neutral-400"}>Response time</div>
                    <div className={"mt-2 text-2xl font-semibold text-white"}>1.4h</div>
                    <div className={"mt-1 text-xs text-amber-400"}>ușor mai lent vs. medie</div>
                </div>
                <div className={"rounded-2xl border border-neutral-700 bg-neutral-700/30 p-4"}>
                    <div className={"text-xs font-medium text-neutral-400"}>Satisfaction</div>
                    <div className={"mt-2 text-2xl font-semibold text-white"}>94%</div>
                    <div className={"mt-1 text-xs text-emerald-300"}>trend pozitiv</div>
                </div>
            </div>

            <div className={"mt-6 grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]"}>
                <div className={"rounded-2xl border border-neutral-700 bg-neutral-700/30 p-4"}>
                    <div className={"mb-3 flex items-center justify-between text-sm font-medium text-white"}>
                        <span>Recent activity</span>
                        <button
                            type={"button"}
                            className={
                                "rounded-lg border border-neutral-600 bg-neutral-600/50 px-2 py-1 text-[11px] font-medium text-neutral-300 hover:bg-neutral-600"
                            }
                        >
                            View all
                        </button>
                    </div>
                    <div className={"space-y-3 text-xs"}>
                        <ActivityRow name={"Acme Corp"} action={"Pipeline stage updated"} time={"2 min ago"} />
                        <ActivityRow name={"Pixel Studio"} action={"New note added"} time={"18 min ago"} />
                        <ActivityRow name={"Northwind"} action={"New deal created"} time={"42 min ago"} />
                        <ActivityRow name={"Nova Labs"} action={"Task completed"} time={"1 h ago"} />
                    </div>
                </div>

                <div className={"rounded-2xl border border-neutral-700 bg-neutral-700/30 p-4"}>
                    <div className={"mb-3 text-sm font-medium text-white"}>Today&apos;s focus</div>
                    <ul className={"space-y-2 text-xs text-neutral-300"}>
                        <li className={"flex items-center justify-between gap-2 rounded-xl bg-neutral-600/40 px-3 py-2"}>
                            <span>Follow-up with high value leads</span>
                            <span className={"text-[11px] font-medium text-neutral-400"}>3 left</span>
                        </li>
                        <li className={"flex items-center justify-between gap-2 rounded-xl px-3 py-2 hover:bg-neutral-600/40"}>
                            <span>Review open support tickets</span>
                            <span className={"text-[11px] font-medium text-neutral-400"}>12 tickets</span>
                        </li>
                        <li className={"flex items-center justify-between gap-2 rounded-xl px-3 py-2 hover:bg-neutral-600/40"}>
                            <span>Prepare weekly report</span>
                            <span className={"text-[11px] font-medium text-neutral-400"}>due today</span>
                        </li>
                    </ul>
                </div>
            </div>
        </AdminLayout>
    )
}

type ActivityRowProps = {
    name: string
    action: string
    time: string
}

const ActivityRow = ({ name, action, time }: ActivityRowProps) => {
    return (
        <div className={"flex items-center justify-between gap-3 rounded-xl bg-neutral-600/40 px-3 py-2"}>
            <div className={"flex flex-col"}>
                <span className={"text-[11px] font-medium uppercase tracking-wide text-neutral-400"}>{name}</span>
                <span className={"text-xs text-neutral-200"}>{action}</span>
            </div>
            <span className={"whitespace-nowrap text-[11px] text-neutral-500"}>{time}</span>
        </div>
    )
}

