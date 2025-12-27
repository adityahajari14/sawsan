import GetInvolvedHero from "@/components/get-involved/GetInvolvedHero";
import WhyGetInvolved from "@/components/get-involved/WhyGetInvolved";
import HowYouCanGetInvolved from "@/components/get-involved/HowYouCanGetInvolved";
import GetInvolvedForm from "@/components/get-involved/GetInvolvedForm";
import BePartOfChange from "@/components/shared/BePartOfChange";
import GetInTouch from "@/components/shared/GetInTouch";

export default function GetInvolvedPage() {
  return (
    <main>
      <GetInvolvedHero />
      <WhyGetInvolved />
      <HowYouCanGetInvolved />
      <GetInvolvedForm />
      <BePartOfChange />
      <GetInTouch />
    </main>
  );
}
