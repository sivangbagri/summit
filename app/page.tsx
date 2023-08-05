// import HeroSection from "@/components/normal/hero";
import Navbar from "@/components/main-nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Topics from "@/components/Topics";

export default function Home() {
  return (
    <main className={""}>
      {/*<Navbar />*/}
      <Hero />
      <Topics />
      <Footer />
    </main>
  );
}
