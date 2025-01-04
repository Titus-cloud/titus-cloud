import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Email from "./components/Email";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] justify-center">
      <Navbar />
      <div className="container mx-auto py-4 px-12 mt-24">
        <Hero />
        <About />
        <Projects />
        <Email />
      </div>
    </main>
  );
}
