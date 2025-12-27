import DonationHero from '@/components/donation/DonationHero';
import WhySupportMatters from '@/components/donation/WhySupportMatters';
import WhereFundsAreUsed from '@/components/donation/WhereFundsAreUsed';
import DonationForm from '@/components/donation/DonationForm';
import BePartOfChange from '@/components/shared/BePartOfChange';
import GetInTouch from '@/components/shared/GetInTouch';

export default function DonationPage() {
  return (
    <main>
      <DonationHero />
      <WhySupportMatters />
      <WhereFundsAreUsed />
      <DonationForm />
      <BePartOfChange />
      <GetInTouch />
    </main>
  );
}

