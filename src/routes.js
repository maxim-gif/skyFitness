import { Route, Routes } from "react-router-dom";
import { PageCourses } from "./components/kurses/stepaero/stepaero";
import { MainPage } from "./components/main/main";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/course/:id" element={<PageCourses />} />
    </Routes>
  );
};