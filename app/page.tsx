import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Hamburger from "./components/Hamburger";

export default function Home() {
  return (
    <main className="border border-primary-200">
      <Header />
      <AboutSection />
      <Projects />
      <Footer />
      <Hamburger />
    </main>
  );
}
