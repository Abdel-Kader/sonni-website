import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FormationPage from "../pages/FormationPage";
import { PageLayout } from "../components/layout/PageLayout";
import ServicePage from "../pages/ServicePage";
import CertificatPage from "../pages/CertificatPage";
import BlogPage from "../pages/BlogPage";
import TeamBuildingPage from "../pages/TeamBuildingPage";
import SeminairePage from "../pages/SeminairePage";
import ContactPage from "../pages/ContactPage";
import TeamPage from "../pages/TeamPage";
import DetailFormation from "../pages/DetailFormation";

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
                path: '/team',
                element: <TeamPage />,
            },
            {
                path: '/formations',
                element: <FormationPage />
            },
            {
                path: '/formations/:id',
                element: <DetailFormation />
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
            {
                path: '/contact',
                element: <ContactPage />,
            },
        ],
    }
])
