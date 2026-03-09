import { Mail, Lock } from "lucide-react"

export const AdminLoginPage = () => {
    return (
        <div className={"min-h-screen bg-neutral-900 text-white flex items-center justify-center px-4"}>
            <div
                className={
                    "w-full max-w-md rounded-3xl border border-neutral-700 bg-neutral-800/80 p-8 shadow-xl ring-1 ring-neutral-700/60"
                }
            >
                <div className={"mb-6 text-center"}>
                    <h1 className={"text-xl font-semibold text-white"}>Autentificare admin</h1>
                    <p className={"mt-1 text-sm text-neutral-400"}>
                        Intră în panoul de administrare pentru a gestiona conținutul și activitatea.
                    </p>
                </div>

                <form className={"space-y-4"}>
                    <div className={"space-y-1.5"}>
                        <label className={"block text-xs font-medium text-neutral-300"} htmlFor={"email"}>
                            Email
                        </label>
                        <div
                            className={
                                "flex items-center gap-2 rounded-2xl border border-neutral-600 bg-neutral-700/60 px-3 py-2.5 text-sm text-neutral-100 focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-400/60"
                            }
                        >
                            <Mail className={"h-4 w-4 text-neutral-400"} />
                            <input
                                id={"email"}
                                type={"email"}
                                placeholder={"you@example.com"}
                                className={
                                    "w-full bg-transparent text-sm text-neutral-100 placeholder:text-neutral-500 outline-none"
                                }
                            />
                        </div>
                    </div>

                    <div className={"space-y-1.5"}>
                        <label className={"block text-xs font-medium text-neutral-300"} htmlFor={"password"}>
                            Parolă
                        </label>
                        <div
                            className={
                                "flex items-center gap-2 rounded-2xl border border-neutral-600 bg-neutral-700/60 px-3 py-2.5 text-sm text-neutral-100 focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-400/60"
                            }
                        >
                            <Lock className={"h-4 w-4 text-neutral-400"} />
                            <input
                                id={"password"}
                                type={"password"}
                                placeholder={"Introduce parola"}
                                className={
                                    "w-full bg-transparent text-sm text-neutral-100 placeholder:text-neutral-500 outline-none"
                                }
                            />
                        </div>
                    </div>

                    <div className={"flex items-center justify-between gap-2 text-xs text-neutral-400"}>
                        <label className={"inline-flex cursor-pointer items-center gap-2"}>
                            <input
                                type={"checkbox"}
                                className={
                                    "h-3.5 w-3.5 rounded border border-neutral-500 bg-neutral-800 text-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400/70"
                                }
                            />
                            <span>Ține-mă minte</span>
                        </label>
                        <button
                            type={"button"}
                            className={
                                "text-xs font-medium text-emerald-300 hover:text-emerald-200 hover:underline underline-offset-2"
                            }
                        >
                            Ai uitat parola?
                        </button>
                    </div>

                    <button
                        type={"submit"}
                        className={
                            "mt-2 w-full rounded-2xl bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm transition-colors hover:bg-emerald-300"
                        }
                    >
                        Conectează-te
                    </button>
                </form>

                <div className={"mt-5 text-center text-[11px] text-neutral-500"}>
                    <p>
                        Accesul este rezervat administratorilor. Dacă ai nevoie de un cont, contactează{" "}
                        <span className={"font-medium text-neutral-300"}>owner-ul aplicației</span>.
                    </p>
                </div>
            </div>
        </div>
    )
}

