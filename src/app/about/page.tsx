import AboutHero from "@/src/components/about/AboutHero";
import WhatWeDo from "@/src/components/about/WhatWeDo";
import HowWeWork from "@/src/components/about/HowWeWork";
import CareGroundedInValues from "@/src/components/about/CareGroundedInValues";
import OurVision from "@/src/components/about/OurVision";
import QuietReliableRespectful from "@/src/components/about/QuietReliableRespectful";
import BePartOfChange from "@/src/components/shared/BePartOfChange";
import GetInTouch from "@/src/components/shared/GetInTouch";

const About = () => {
  return (
    <main>
      <AboutHero />
      <WhatWeDo />
      <HowWeWork />
      <CareGroundedInValues />
      <OurVision />
      <QuietReliableRespectful />
      <BePartOfChange />
      <GetInTouch />
    </main>
  )
}

export default About;
