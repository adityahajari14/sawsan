import FounderSection from "@/src/components/home/FounderSection";
import WhyThisMatters from "@/src/components/home/WhyThisMatters";
import OurModel from "@/src/components/home/OurModel";
import BePartOfChange from "@/src/components/shared/BePartOfChange";
import GetInTouch from "@/src/components/shared/GetInTouch";

export default function Home() {
  return (
    <main>
      <FounderSection />
      <WhyThisMatters />
      <OurModel />
      <BePartOfChange />
      <GetInTouch />
    </main>
  );
}
