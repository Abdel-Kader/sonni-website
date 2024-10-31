import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FormationPage from "../pages/FormationPage";
import { PageLayout } from "../components/layout/PageLayout";
import ServicePage from "../pages/ServicePage";
import CertificatPage from "../pages/CertificatPage";
import ArticlePage from "../pages/ArticlePage";
import TeamBuildingPage from "../pages/TeamBuildingPage";
import SeminairePage from "../pages/SeminairePage";
import ContactPage from "../pages/ContactPage";
import TeamPage from "../pages/TeamPage";
import DetailFormation from "../pages/DetailFormation";
import ReferencePage from "../pages/ReferencePage";
import {LoginPage} from "../pages/LoginPage";
import SeminaireDetail from "../pages/SeminaireDetail";
import WebinairePage from "../pages/WebinairePage";
import WebinaireDetail from "../pages/WebinaireDetail";
import LivresPage from "../pages/LivresPage";
import AchatLivre from "../pages/AchatLivre";

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
                path: '/reference',
                element: <ReferencePage />,
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
                path: '/seminaires/detail',
                element: <SeminaireDetail />,
            },
            {
                path: '/webinaires',
                element: <WebinairePage />,
            },
            {
                path: '/webinaire/detail',
                element: <WebinaireDetail />,
            },
            {
                path: '/articles',
                element: <ArticlePage />,
            },
            {
                path: '/librairie',
                element: <LivresPage />,
            },
            {
                path: '/librairie/achat',
                element: <AchatLivre />,
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
