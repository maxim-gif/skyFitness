import { Route, Routes } from "react-router-dom";
import { PageCourses } from "./components/kurses/stepaero/stepaero";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/course" element={<PageCourses />} />
    </Routes>
  );
};