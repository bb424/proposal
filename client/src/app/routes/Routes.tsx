import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import Catalog from "../../features/catalog/Catalog";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import App from "../layout/App";
import ServiceDetails from "../../features/catalog/ServiceDetails";
import ProposalPage from "../../features/proposal/ProposalPage";
import UpdateProposalPage from "../../features/proposal/UpdateProposalPage";
import ChangeOrderPage from "../../features/proposal/ChangeOrderPage";
import AwardedPage from "../../features/proposal/AwardedPage";
import RiskMatrixPage from "../../features/forms/RiskMatrixPage";
import EditRiskMatrixPage from "../../features/forms/EditRiskMatrixPage";
import SiteSafetyPage from "../../features/forms/SiteSafetyPage";
import FormsPage from "../../features/forms/FormsPage";
import SafetyTailboardPage from "../../features/forms/SafetyTailboardPage";
import ProjectManagementPage from "../../features/project-management/ProjectManagementPage";
import SchedulePage from "../../features/project-management/SchedulePage";
import LessonsLearnedPage from "../../features/project-management/LessonsLearnedPage";
import CommunicationPlanPage from "../../features/project-management/CommunicationPlanPage";
import ThirdPartyPage from "../../features/procurement/ThirdPartyPage";
import EditSiteSafetyPage from "../../features/forms/EditSiteSafetyPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: '/catalog', element: <Catalog />},
            {path: '/catalog/:id', element: <ServiceDetails />},
            {path: '/about', element: <AboutPage />},
            {path: '/contact', element: <ContactPage />},
            {path: '/proposal', element: <ProposalPage />},
            {path: '/proposal/new', element: <Catalog />},
            {path: '/proposal/update', element: <UpdateProposalPage />},
            {path: '/proposal/change-order', element: <ChangeOrderPage />},
            {path: '/proposal/awarded', element: <AwardedPage />},
            {path: '/forms', element: <FormsPage />},
            {path: '/forms/risk-matrix', element: <RiskMatrixPage />},
            {path: '/forms/risk-matrix/riskmatrixedit', element: <EditRiskMatrixPage />},
            {path: '/forms/site-safety-plan', element: <SiteSafetyPage />},
            {path: '/forms/site-safety-plan/saeftyplanedit', element: <EditSiteSafetyPage />},
            {path: '/forms/safety-tailboard', element: <SafetyTailboardPage />},
            {path: '/project-management', element: <ProjectManagementPage />},
            {path: '/project-management/schedules', element: <SchedulePage />},
            {path: '/project-management/lessons-learned', element: <LessonsLearnedPage />},
            {path: '/project-management/communication-plan', element: <CommunicationPlanPage />},
            {path: '/procurement/upload-quote', element: <ThirdPartyPage />},
        ]

    }
])