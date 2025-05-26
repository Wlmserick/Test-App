import Header from "@/components/header"
import Hero from "@/components/hero"
import FeatureBento from "@/components/feature-bento"
import Testimonial from "@/components/testimonial"
import TeamSection from "@/components/team-section"
import CustomerStories from "@/components/customer-stories"
import SearchSection from "@/components/search-section"
import DownloadApps from "@/components/download-apps"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeatureBento />
      <Testimonial />
      <TeamSection />
      <CustomerStories />
      <SearchSection />
      <DownloadApps />
      <Footer />
    </div>
  );
}
