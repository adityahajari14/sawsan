import ImpactHero from '@/components/impact/ImpactHero';
import FirstPhaseSection from '@/components/impact/FirstPhaseSection';
import OurApproachSection from '@/components/impact/OurApproachSection';
import WhyThisMattersImpact from '@/components/impact/WhyThisMattersImpact';
import ProjectedImpactSection from '@/components/impact/ProjectedImpactSection';
import WhatImpactLooksLike from '@/components/impact/WhatImpactLooksLike';
import ImpactGetInvolvedForm from '@/components/impact/ImpactGetInvolvedForm';
import BePartOfChange from '@/components/shared/BePartOfChange';
import GetInTouch from '@/components/shared/GetInTouch';

export default function ImpactPage() {
  return (
    <main className="w-full">
      <ImpactHero />
      <FirstPhaseSection />
      <OurApproachSection />
      <WhyThisMattersImpact />
      <ProjectedImpactSection />
      <WhatImpactLooksLike />
      <ImpactGetInvolvedForm />
      <BePartOfChange />
      <GetInTouch />
    </main>
  );
}

