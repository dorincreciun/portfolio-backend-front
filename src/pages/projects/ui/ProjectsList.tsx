import { Eye, Pencil, Trash2 } from "lucide-react"

type Project = {
    id: number
    title: string
    description: string
    stack: string
    year: string
    status: "Activ" | "Arhivat"
    itemsCount: number
}

const completedProjects: Project[] = [
    {
        id: 1,
        title: "CRM intern pentru echipă",
        description: "Panou intern pentru urmărirea lead-urilor, task-urilor și rapoartelor de vânzări.",
        stack: "React, TypeScript, Node.js, PostgreSQL",
        year: "2024",
        status: "Activ",
        itemsCount: 24,
    },
    {
        id: 2,
        title: "Website de prezentare studio digital",
        description: "Landing page multi-secțiune cu animații fine și sistem de administrare conținut.",
        stack: "Next.js, Tailwind CSS",
        year: "2023",
        status: "Activ",
        itemsCount: 12,
    },
    {
        id: 3,
        title: "Dashboard analytics campanii",
        description: "Dashboard pentru monitorizarea performanței campaniilor cu grafice și filtre dinamice.",
        stack: "React, Recharts, REST API",
        year: "2022",
        status: "Activ",
        itemsCount: 8,
    },
]

export const ProjectsList = () => {
    return (
        <section className={"grid gap-4 md:grid-cols-2 xl:grid-cols-3"}>
            {completedProjects.map((project) => (
                <article
                    key={project.id}
                    className={
                        "flex h-full flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-800/60 p-4 shadow-sm transition-colors hover:border-emerald-500/40 hover:bg-neutral-800"
                    }
                >
                    <div className={"flex items-start gap-3"}>
                        <div
                            className={
                                "relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/40 via-emerald-400/30 to-emerald-300/60"
                            }
                        >
                            <span className={"absolute bottom-1 left-1 rounded-full bg-neutral-900/80 px-2 py-0.5 text-[10px] font-semibold text-emerald-200"}>
                                {project.year}
                            </span>
                        </div>
                        <div className={"flex-1 space-y-1.5"}>
                            <h2 className={"text-sm font-semibold text-white"}>{project.title}</h2>
                            <span
                                className={
                                    "inline-flex rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300"
                                }
                            >
                                {project.stack.split(",")[0]}
                            </span>
                            <p className={"text-xs text-neutral-400"}>{project.description}</p>
                        </div>
                    </div>

                    <div className={"mt-auto flex items-center justify-between pt-1 text-[11px]"}>
                        <div className={"flex flex-col gap-1 text-neutral-400"}>
                            <div className={"flex items-center gap-1.5"}>
                                <span className={"h-1.5 w-1.5 rounded-full bg-emerald-400"} />
                                <span className={"font-medium text-emerald-300"}>{project.status}</span>
                            </div>
                            <span className={"text-neutral-500"}>{project.itemsCount} livrabile / module</span>
                        </div>
                        <div className={"flex items-center gap-2 text-neutral-500"}>
                            <button
                                type={"button"}
                                className={
                                    "rounded-full p-1 hover:bg-neutral-700 hover:text-neutral-100 transition-colors"
                                }
                                aria-label={"Vizualizează proiect"}
                            >
                                <Eye className={"h-4 w-4"} />
                            </button>
                            <button
                                type={"button"}
                                className={
                                    "rounded-full p-1 hover:bg-neutral-700 hover:text-neutral-100 transition-colors"
                                }
                                aria-label={"Editează proiect"}
                            >
                                <Pencil className={"h-4 w-4"} />
                            </button>
                            <button
                                type={"button"}
                                className={
                                    "rounded-full p-1 hover:bg-neutral-700 hover:text-red-300 transition-colors"
                                }
                                aria-label={"Șterge proiect"}
                            >
                                <Trash2 className={"h-4 w-4"} />
                            </button>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    )
}

