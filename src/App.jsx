import { Outlet, NavLink, Link } from "react-router-dom";
import logo from "../public/vite.svg";
import "./index.css";
import { useEffect, useState } from "react";

// Links
const Links = [
  {
    id: 1,
    content: {
      uz: "Biz haqimizda",
      ru: "О нас",
      en: "About",
    },
    to: "about",
  },
  {
    id: 2,
    content: {
      uz: "Xizmatlar",
      ru: "Услуги",
      en: "Services",
    },
    to: "services",
  },
  {
    id: 3,
    content: {
      uz: "Portfolio",
      ru: "портфолио",
      en: "Portfolio",
    },
    to: "portfolio",
  },
  {
    id: 4,
    content: {
      uz: "Karyera",
      ru: "Карьера",
      en: "Career",
    },
    to: "career",
  },
  {
    id: 5,
    content: {
      uz: "Blog",
      ru: "Блог",
      en: "Blog",
    },
    to: "blog",
  },
];

function App() {
  // theme
  const getTheme = localStorage.getItem("theme");
  const [mode, setMode] = useState(getTheme || "light");
  const element = document.documentElement;

  // mode
  useEffect(() => {
    switch (mode) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        break;
    }
  }, [mode]);

  // language
  if (!localStorage.getItem("language")) localStorage.setItem("language", "uz");
  const [language, setlanguage] = useState(localStorage.getItem("language"));

  const handleLanguageChange = (e) => {
    localStorage.setItem("language", e.target.value);
    setlanguage(e.target.value);
  };

  return (
    <>
      <header className="py-5">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-6">
                {Links.map((link) => {
                  return (
                    <NavLink
                      key={link.id}
                      to={link.to}
                      className="py-1 px-2 hover:bg-slate-400 rounded hover:text-white"
                    >
                      {link.content[language]}
                    </NavLink>
                  );
                })}
              </div>
              <button
                className="pt-2 text-xl"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                <ion-icon
                  name={`${mode === "light" ? "sunny" : "moon"}`}
                ></ion-icon>
              </button>
              <div className="bg-white py-1 px-2 rounded cursor-pointer dark:bg-transparent">
                <select
                  onChange={handleLanguageChange}
                  className="bg-transparent w-full outline-none cursor-pointer"
                  value={language}
                >
                  <option value="uz">uz</option>
                  <option value="ru">ru</option>
                  <option value="en">en</option>
                </select>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
