import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import SelectedProjects from "./components/SelectedProjects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutSection />
      {/* @ts-expect-error Server Component */}
      <SelectedProjects />
      <Footer />
    </main>
  );
}
