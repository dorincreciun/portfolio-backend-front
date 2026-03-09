export const ROUTES = {
    DEFAULT: "/",
    FALLBACK: "*",

    CABINET: "/cabinet",
    CABINET_PROJECTS: "/cabinet/projects",
    ADMIN_LOGIN: "/admin/login",
    PROJECTS: "/projects",
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
