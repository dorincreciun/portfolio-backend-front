export const CabinetStatsSection = () => {
    return (
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
    )
}

