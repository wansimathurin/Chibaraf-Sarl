// src/app/[locale]/about/page.jsx
import AboutPageClient from "./AboutPageClient";

export const metadata = {
  title: "About — Chibaraf",
  description:
    "Chibaraf — inspiring sustainable agriculture through creativity, community and care.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}