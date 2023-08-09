import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import Projects from "../components/projects/Projects";
import Hamburger from "../components/navigation/Hamburger";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutSection />
      <Projects />
      <Hamburger className={"lg:hidden"} />
    </main>
  );
}
