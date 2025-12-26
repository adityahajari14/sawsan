import React from 'react';
import OurModelHero from '@/components/our-model/OurModelHero';
import WhyThisMattersSection from '@/components/our-model/WhyThisMattersSection';
import WhatWeChangeSection from '@/components/our-model/WhatWeChangeSection';
import ImpactVision from '@/components/our-model/ImpactVision';
import GetInvolvedForm from '@/components/our-model/GetInvolvedForm';
import BePartOfChange from '@/components/shared/BePartOfChange';
import GetInTouch from '@/components/shared/GetInTouch';

export default function OurModelPage() {
  return (
    <main className="w-full">
      <OurModelHero />
      <WhyThisMattersSection />
      <WhatWeChangeSection />
      <ImpactVision />
      <GetInvolvedForm />
      <BePartOfChange />
      <GetInTouch />
    </main>
  );
}
