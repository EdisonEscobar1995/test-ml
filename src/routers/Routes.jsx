import { lazy } from "react";
import {
  Navigate,
  Route,
  Routes as RoutesRender,
  BrowserRouter as Router,
} from "react-router-dom";
import Layout from "../pages/Layout";

const AsyncHomePage = lazy(() => import("../pages/Home"));
const AsyncResults = lazy(() => import("../pages/Results"));
const AsyncItemDetail = lazy(() => import("../pages/ItemDetail"));

export const Routes = () => {
  return (
    <Router>
      <Layout />
      <section className="custom-layout-content">
        <RoutesRender>
          <Route index element={<AsyncHomePage />} />
          <Route path="/items" element={<AsyncResults />} />
          <Route path="items/:id" element={<AsyncItemDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </RoutesRender>
      </section>
    </Router>
  );
};
