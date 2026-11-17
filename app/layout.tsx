import type { Metadata } from "next";
import "../static/css/navbar.css";
import "../static/css/style.css";
import "../static/css/clients.css";
import "../static/css/contact-us.css";
import "../static/css/team.css";
import "../static/css/recruitment.css";
import { SiteFooter } from "../components/react/site-footer";
import { SiteNav } from "../components/react/site-nav";

export const metadata: Metadata = {
  title: "Innovation For Impact - U-M Technical Consulting",
  description: "University of Michigan student-led technical consulting group delivering pro bono, data-driven solutions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteNav />{children}<SiteFooter /></body></html>;
}
