import FeaturedTiles from "@/components/homepage/FeaturedTiles";
import HeroBanner from "@/components/homepage/HeroBanner";
import LatestUpdate from "@/components/homepage/LatestUpdate";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <LatestUpdate />

      <div className="container mx-auto px-5">
        <FeaturedTiles />
      </div>
    </>
  );
}
