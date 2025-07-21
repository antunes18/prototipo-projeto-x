import { FeaturedProperties } from "components/home/FeaturedProperties"
import { Hero } from "components/home/Hero"
import { InfoSection } from "components/home/InfoSection"
import { MarketChart } from "components/home/MarketChart"

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <MarketChart />
      <InfoSection />
    </>
  )
}