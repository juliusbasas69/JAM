import HeroSection from "./components/hero-section";
import CategorySection from "./components/category-section";
import TrustSection from "./components/trust-section";
import BusinessPartnerSection from "./components/business-partner-section";
import BranchSection from "./components/branch-section";
import ConnectSection from "./components/connect-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <BranchSection />
      <TrustSection />
      <BusinessPartnerSection />
      <ConnectSection />
    </>
  );
}
