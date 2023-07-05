import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Hamburger from "../components/Hamburger";
import { useLocale } from "next-intl";

export default function Home() {
  console.log();
  return (
    <main className="border border-primary-200 [&_a:hover]:opacity-80">
      <Header params={{ locale: useLocale() }} />
      <AboutSection />
      <Projects />
      <Footer />
      <Hamburger />
    </main>
  );
}
