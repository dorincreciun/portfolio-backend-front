import { AdminLayout } from "@widgets/admin-layout"
import { CabinetPerformanceSection } from "./CabinetPerformanceSection"
import { CabinetStatsSection } from "./CabinetStatsSection"
import { CabinetActivitySection } from "./CabinetActivitySection"

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

            <CabinetPerformanceSection />
            <CabinetStatsSection />
            <CabinetActivitySection />
        </AdminLayout>
    )
}
