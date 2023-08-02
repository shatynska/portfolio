import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import Projects from "../components/projects/Projects";
import Footer from "../components/Footer";
import Hamburger from "../components/navigation/Hamburger";

export default function Home() {
  return (
    <main className="border border-primary-200 [&_a:hover]:opacity-80">
      <Header />
      <AboutSection />
      <Projects />
      <Footer />
      <Hamburger />
    </main>
  );
}
