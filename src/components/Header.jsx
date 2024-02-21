
import {NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useEffect, useState } from "react";

// Links
import { Links } from "../utils/links";

function Header() {
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
    <header className="py-5">
        <div className="xl:container mx-auto px-10">
          <nav className="flex items-center justify-between">
            <Link to="/">
              <img className="w-16 rounded-full" src={logo} alt="logo" />
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
                      <b>{link.content[language]}</b>
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
  )
}

export default Header