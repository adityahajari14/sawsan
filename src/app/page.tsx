import FounderSection from "@/components/home/FounderSection";
import WhyThisMatters from "@/components/home/WhyThisMatters";
import OurModel from "@/components/home/OurModel";
import BePartOfChange from "@/components/shared/BePartOfChange";
import GetInTouch from "@/components/shared/GetInTouch";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <FounderSection />
      <WhyThisMatters />
      <OurModel />
      <BePartOfChange />
      <GetInTouch />
    </main>
  );
}
