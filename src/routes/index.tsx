import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/public/HomePage";
import FormationPage from "../pages/public/FormationPage";
import { PageLayout } from "../components/layout/PageLayout";
import ServicePage from "../pages/public/ServicePage";
import CertificatPage from "../pages/public/CertificatPage";
import ArticlePage from "../pages/public/ArticlePage";
import TeamBuildingPage from "../pages/public/TeamBuildingPage";
import SeminairePage from "../pages/public/SeminairePage";
import ContactPage from "../pages/public/ContactPage";
import TeamPage from "../pages/public/TeamPage";
import DetailFormation from "../pages/public/DetailFormation";
import ReferencePage from "../pages/public/ReferencePage";
import {LoginPage} from "../pages/admin/LoginPage";
import SeminaireDetail from "../pages/public/SeminaireDetail";
import WebinairePage from "../pages/public/WebinairePage";
import WebinaireDetail from "../pages/public/WebinaireDetail";
import LivresPage from "../pages/public/LivresPage";
import AchatLivre from "../pages/public/AchatLivre";
import {PrivateRoute} from "./PrivateRoute";
import Seminaire from "../pages/admin/Seminaire";
import Webinaire from "../pages/admin/Webinaire";
import Article from "../pages/admin/Articles";


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
    },
    {
        path: '/admin',
        element: <PrivateRoute/>,
        children: [
            {
                path: '',
                element: <HomePage/>,
            },
            {
                path: 'seminaires',
                element: <Seminaire/>,
            },
            {
                path: 'webinaires',
                element: <Webinaire/>,
            },
            {
                path: 'articles',
                element: <Article/>,
            },
            {
                path: 'librairie',
                element: <Webinaire/>,
            },
        ]
    }
])
