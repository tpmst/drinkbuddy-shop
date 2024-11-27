import Logo from "../assets/logo-transparent-png.png";
import { useTheme } from "./theme-provider"; // Import the useTheme hook
import { Link } from "react-router-dom";

export const Footer = () => {
  const { theme } = useTheme(); // Extract the theme property from useTheme
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <div
              className={
                theme === "dark"
                  ? "bg-transparent rounded shadow-lg"
                  : "bg-gray-300 rounded shadow-lg"
              }
            >
              <img src={Logo} alt="Logo" width={150} />
            </div>
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/tpmst"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/tom-stiefel-98128531a/"
              className="opacity-60 hover:opacity-100"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Rechtliches</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#contactUs"
              className="opacity-60 hover:opacity-100"
            >
              Contact Us
            </a>
          </div>

          <div>
            <Link to="/Impressum" className="opacity-60 hover:opacity-100">
              Impressum
            </Link>
          </div>
          <div>
            <Link to="/Datenschutz" className="opacity-60 hover:opacity-100">
              Datenschutz
            </Link>
          </div>
          <div>
            <Link to="/DatenEntfernen" className="opacity-60 hover:opacity-100">
              Daten löschen
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#howItWorks"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#pricing"
              className="opacity-60 hover:opacity-100"
            >
              Pricing
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};
