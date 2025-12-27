
import Benefits from "@/components/home/Benefits";
import CategorySlider from "@/components/home/CategorySlider";
import CollectionGrid from "@/components/home/CollectionGrid";
import DriverSlider from "@/components/home/DriverSlider";
import HeroBanner from "@/components/home/HeroBanner";
import TrendingCollections from "@/components/home/TrendingCollections";

export default function home(){
    return(
    <>
      <HeroBanner />
      <CategorySlider />
      <CollectionGrid />
      <TrendingCollections />
      <DriverSlider />
      {/* <Benefits /> */}
    </>);
}