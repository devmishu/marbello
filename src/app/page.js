import FeaturedTiles from "@/components/homepage/FeaturedTiles";
import HeroBanner from "@/components/homepage/HeroBanner";
import NewArrivals from "@/components/homepage/NewArrivals";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <HeroBanner />
      {/* <Marquee>
        <p>
          React Fast Marquee
          React Fast Marquee is a lightweight React component that harnesses the power of CSS animations to create silky smooth marquees.

        </p>
      </Marquee> */}
      <NewArrivals />
      <FeaturedTiles />
    </>
  );
}
