import { ProjectsList } from "./ProjectsList"

export const ProjectsPage = () => {
    return (
        <main className={"min-h-screen bg-neutral-900 text-white px-4 py-10"}>
            <div className={"mx-auto flex w-full max-w-4xl flex-col gap-6"}>
                <header className={"space-y-2"}>
                    <h1 className={"text-2xl font-semibold tracking-tight"}>Proiecte finalizate</h1>
                    <p className={"max-w-2xl text-sm text-neutral-400"}>
                        O selecție de proiecte finalizate, cu focus pe experiență de utilizare, performanță și claritate
                        în prezentarea informației.
                    </p>
                </header>

                <ProjectsList />
            </div>
        </main>
    )
}

