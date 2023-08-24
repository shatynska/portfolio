import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import Projects from "../components/projects/Projects";
import HamburgerMenu from "../components/navigation/HamburgerMenu";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutSection />
      <Projects />
      <HamburgerMenu className={"lg:hidden"} />
    </main>
  );
}
