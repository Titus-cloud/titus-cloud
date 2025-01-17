import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Achievements from "./components/Achievements";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-gray-800 to-gray-900 justify-center">
      <Navbar />
      <div className="container mx-auto py-4 px-12 mt-10">
        <Hero />
        {/* <Achievements />  */}
        <About />
        <Projects />
        <Contact />
      </div>
        <Footer />
    </main>
  );
}
