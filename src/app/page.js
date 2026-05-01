import FeaturedTiles from "@/components/homepage/FeaturedTiles";
import HeroBanner from "@/components/homepage/HeroBanner";
import NewArrivals from "@/components/homepage/NewArrivals";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <HeroBanner />

      <div className="container mx-auto px-5">
        <NewArrivals />
        <FeaturedTiles />
      </div>
    </>
  );
}
