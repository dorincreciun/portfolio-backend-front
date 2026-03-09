import { AdminLayout } from "@widgets/admin-layout"
import { ProjectsList } from "./ProjectsList"

export const ProjectsPage = () => {
    return (
        <AdminLayout>
            <div className={"flex items-center justify-between gap-4 border-b border-neutral-700 pb-4"}>
                <div>
                    <h1 className={"text-xl font-semibold text-white"}>Proiecte finalizate</h1>
                    <p className={"mt-1 text-sm text-neutral-400"}>
                        O selecție de proiecte finalizate, cu focus pe experiență de utilizare, performanță și claritate
                        în prezentarea informației.
                    </p>
                </div>
            </div>

            <div className={"mt-6"}>
                <ProjectsList />
            </div>
        </AdminLayout>
    )
}

