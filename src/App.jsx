import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more <Route> entries here if the portfolio grows into
            additional pages, e.g. a dedicated /projects/:slug page. */}
      </Routes>
    </BrowserRouter>
  );
}
