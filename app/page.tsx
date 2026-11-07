import HeroSection from "./components/hero-section";
import ProjectSection from "./components/project-section";
import ThemeToggle from "./components/theme-toggle";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectSection />
      <ThemeToggle />
    </main>
  );
}
