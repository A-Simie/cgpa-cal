import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { CGPA_NOTE } from "./pages/CGPA_NOTE";
import { Calculate } from "./pages/calculate";
import { NotFound } from "./pages/notFound";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/CGPA_NOTE" element={<CGPA_NOTE />} />
        <Route path="/pages/calculate" element={<Calculate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Router;
