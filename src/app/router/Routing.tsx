import { type IndexRouteObject, type NonIndexRouteObject, useRoutes } from "react-router"

import { DefaultPage } from "@pages/default"
import { FallbackPage } from "@pages/fallback"
import { CabinetPage } from "@pages/cabinet"
import { CabinetProjectsPage } from "@pages/cabinet-projects"
import { AdminLoginPage } from "@pages/admin-login"
import { ProjectsPage } from "@pages/projects"

import { type AppRoute, ROUTES } from "@shared/const/routes"

type AppNonIndexRouteObject = Omit<NonIndexRouteObject, "path" | "children"> & {
    path: AppRoute
    children?: AppRouteObject[]
}

type AppIndexRouteObject = Omit<IndexRouteObject, "children"> & {
    index: true
    children?: never
}

export type AppRouteObject = AppNonIndexRouteObject | AppIndexRouteObject

const PublicRoutes: AppRouteObject[] = [
    { path: ROUTES.FALLBACK, element: <FallbackPage /> },
    { path: ROUTES.DEFAULT, element: <DefaultPage /> },
    { path: ROUTES.ADMIN_LOGIN, element: <AdminLoginPage /> },
    { path: ROUTES.PROJECTS, element: <ProjectsPage /> },
]

const PrivateRoutes: AppRouteObject[] = [
    { path: ROUTES.CABINET, element: <CabinetPage /> },
    { path: ROUTES.CABINET_PROJECTS, element: <CabinetProjectsPage /> },
]

export const Routing = () => {
    return useRoutes([...PublicRoutes, ...PrivateRoutes])
}
