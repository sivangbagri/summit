// import HeroSection from "@/components/normal/hero";

import Hero from "@/components/Hero";
import Content from "@/components/Content"
import About from "@/components/About"
import Highlight from "@/components/Hightlight"
import Carousel from "@/components/Carousel"
import Footer from "@/components/Footer";
import Hightlight from "@/components/Hightlight";
// import Topics from "@/components/Topics";

export default function Home() {
  return (
    <>
      <Hero />
        <About/>
        <Content/>
        {/*<Carousel/>*/}
      <Hightlight/>
      {/*<Topics />*/}
    </>
  );
}
