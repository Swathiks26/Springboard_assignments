import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Spacecrafts from "./pages/Spacecrafts";
import SpacecraftDetails from "./pages/SpacecraftDetails";
import BuildSpacecraft from "./pages/BuildSpacecraft";
import Planets from "./pages/Planets";

export default function App() {
  return (
    <Routes>
      {/* All routes share the AppLayout */}
      <Route path="/" element={<AppLayout />}>
        {/* Home page */}
        <Route index element={<Home />} />

        {/* Spacecrafts */}
        <Route path="spacecrafts" element={<Spacecrafts />} />
        <Route path="spacecrafts/build" element={<BuildSpacecraft />} />
        <Route path="spacecrafts/:id" element={<SpacecraftDetails />} />

        {/* Planets */}
        <Route path="planets" element={<Planets />} />

        {/* Redirect unmatched routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
