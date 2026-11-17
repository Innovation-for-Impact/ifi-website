import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "./components/react/home-page";
import ClientsPage from "./app/pages/clients.html/page";
import ContactPage from "./app/pages/contact-us.html/page";
import TeamPage from "./app/pages/our-team.html/page";
import RecruitmentPage from "./app/pages/recruitment.html/page";
import { SiteFooter } from "./components/react/site-footer";
import { SiteNav } from "./components/react/site-nav";
import "./static/css/navbar.css";
import "./static/css/style.css";
import "./static/css/clients.css";
import "./static/css/contact-us.css";
import "./static/css/team.css";
import "./static/css/recruitment.css";

const routes: Record<string, React.ComponentType> = {
  "/": HomePage,
  "/index.html": HomePage,
  "/pages/clients.html": ClientsPage,
  "/pages/contact-us.html": ContactPage,
  "/pages/our-team.html": TeamPage,
  "/pages/recruitment.html": RecruitmentPage,
};

function App() {
  const Page = routes[window.location.pathname] ?? HomePage;

  return (
    <>
      <SiteNav />
      <Page />
      <SiteFooter />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
