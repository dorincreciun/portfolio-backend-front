export const ROUTES = {
    DEFAULT: "/",
    FALLBACK: "*",

    CABINET: "/cabinet",
    ADMIN_LOGIN: "/admin/login",
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
