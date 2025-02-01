import { RouteObject } from "react-router-dom";
import App from "../App";
import { LawPage } from "../pages/LawPage/LawPage";
import { EducationPage } from "../pages/EducationPage/EducationPage";
import { TechPage } from "../pages/TechPage/TechPage";

export const Routes: RouteObject[] = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/law',
    element: <LawPage />
  },
  {
    path: '/education',
    element: <EducationPage />
  },
  {
    path: '/tech',
    element: <TechPage />
  }
]