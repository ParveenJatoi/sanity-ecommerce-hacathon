import Image from "next/image";
import Hero from "./components/hero";
import BrowseRangeComponent from "./components/browseRange";
import OurProducts from "./components/ourproducts";
import ProductsPage from "./components/gallery";
import BeautifulRoom from "./components/beautifulRoom";
import PhotoGallery from "./components/PhotoGallery";
import Rooms from "./components/room";

export default function Home() {
  return (
    <div>
      <Hero/>
      <BrowseRangeComponent/>
      <OurProducts/>
      
      <Rooms/>
      <PhotoGallery/>
   
    </div>
  );
}
