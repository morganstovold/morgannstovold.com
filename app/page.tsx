import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      {/* <Footer /> */}
    </main>
  );
}
