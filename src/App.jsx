import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more <Route> entries here if the portfolio grows into
            additional pages, e.g. a dedicated /projects/:slug page. */}
      </Routes>
    </BrowserRouter>
  );
}
