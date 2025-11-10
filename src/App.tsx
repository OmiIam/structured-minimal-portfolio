import { useState, useEffect } from "react";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactSection } from "./components/ContactSection";

const sectionIds = ["hero", "services", "experience", "contact"] as const;
const sectionLabels = ["Intro", "Services", "Experience", "Contact"] as const;

export default function App() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const trackableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress =
        trackableHeight > 0 ? Math.min(window.scrollY / trackableHeight, 1) : 0;

      document.documentElement.style.setProperty(
        "--scroll-progress",
        String(Math.round(currentProgress * 100))
      );

      sectionIds.forEach((id, index) => {
        const section = document.getElementById(id);
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const id = sectionIds[index];
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-[100svh] bg-[#F5F5F5] snap-y snap-mandatory overflow-y-auto">
      {/* Page Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 nav-rail">
        <div className="nav-progress" aria-hidden="true" />
        {sectionIds.map((sectionId, index) => (
          <button
            key={sectionId}
            onClick={() => scrollToSection(index)}
            className="group relative focus:outline-none"
            aria-label={`Go to ${sectionLabels[index]} section`}
            aria-pressed={activeSection === index}
          >
            <span
              className={`nav-dot ${activeSection === index ? "is-active" : ""}`}
              data-label={sectionLabels[index]}
            />
          </button>
        ))}
      </div>

      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}