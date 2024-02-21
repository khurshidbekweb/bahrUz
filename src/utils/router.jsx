import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// pages
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";
import About from "../pages/About.jsx";
import Portfolio from "../pages/Portfolio.jsx";
import Career from "../pages/Career.jsx";
import Blog from "../pages/Blog.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
