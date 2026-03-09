export const FallbackPage = () => {
    return (
        <main className={"grid min-h-screen place-items-center bg-neutral-900 px-6"}>
            <section className={"flex w-full max-w-sm flex-col items-center gap-4 text-center"}>
                <h1 className={"text-4xl font-semibold tracking-tight text-white"}>404</h1>
                <p className={"max-w-xs text-sm leading-snug text-neutral-400"}>
                    Pagina pe care o cauți nu a fost găsită sau nu este disponibilă momentan.
                </p>
                <button
                    type={"button"}
                    onClick={() => window.history.back()}
                    className={
                        "mt-2 inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition-colors hover:bg-emerald-300"
                    }
                >
                    Înapoi
                </button>
            </section>
        </main>
    )
}
