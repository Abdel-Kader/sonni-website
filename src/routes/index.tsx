import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FormationPage from "../pages/FormationPage";
import { PageLayout } from "../components/layout/PageLayout";
import ServicePage from "../pages/ServicePage";
import CertificatPage from "../pages/CertificatPage";
import BlogPage from "../pages/BlogPage";
import TeamBuildingPage from "../pages/TeamBuildingPage";
import SeminairePage from "../pages/SeminairePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/formations',
                element: <FormationPage />,
            },
            {
                path: '/services',
                element: <ServicePage />,
            },
            {
                path: '/certificats',
                element: <CertificatPage />,
            },
            {
                path: '/seminaires',
                element: <SeminairePage />,
            },
            {
                path: '/blog',
                element: <BlogPage />,
            },
            {
                path: '/team-building',
                element: <TeamBuildingPage />,
            },
        ],
    }
])
