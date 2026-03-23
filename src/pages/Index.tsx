import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

const Index = () => (
  <>
    <InteractiveBackground />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <EducationSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <AchievementsSection />
    <CertificationsSection />
    <ContactSection />
    <Footer />
  </>
);

export default Index;
