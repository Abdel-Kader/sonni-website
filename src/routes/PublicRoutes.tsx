import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/public/HomePage";
import FormationPage from "../pages/public/FormationPage";
import { PageLayout } from "../components/layout/PageLayout";
import ServicePage from "../pages/public/ServicePage";
import CertificatPage from "../pages/public/CertificatPage";
//import BlogPage from "../pages/BlogPage";
import TeamBuildingPage from "../pages/public/TeamBuildingPage";
import SeminairePage from "../pages/public/SeminairePage";
import ContactPage from "../pages/public/ContactPage";
import TeamPage from "../pages/public/TeamPage";
import DetailFormation from "../pages/public/DetailFormation";
import ReferencePage from "../pages/public/ReferencePage";
import {LoginPage} from "../pages/admin/LoginPage";
import ArticlePage from "../pages/public/ArticlePage";

export const PublicRouter = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/about',
                element: <ReferencePage />,
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
                element: <ArticlePage />,
            },
            {
                path: '/team-building',
                element: <TeamBuildingPage />,
            },
            {
                path: '/contact',
                element: <ContactPage />,
            },
            {
                path: '/admin/login',
                element: <LoginPage />,
            },
        ],
    }
])
