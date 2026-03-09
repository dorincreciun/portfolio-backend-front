export const CabinetPerformanceSection = () => {
    return (
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
    )
}

