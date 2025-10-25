import Image from "next/image";
import HeroSection from "../components/HeroSection";
import HomeStatus from "../components/HomeStatus";
import HomePropertyList from "../components/HomePropertyList";
import WhyUsSection from "../components/WhyUsSection";
import ExclusivePropertyList from "../components/ExclusivePropertyList";
import AdviceTools from "../components/AdviceTools";
import AdsBanner from "../components/AdsBanner";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <>
       <HeroSection/>
       <HomeStatus/>
       <HomePropertyList/>
       <WhyUsSection/>
       <ExclusivePropertyList/>
       <AdviceTools/>
       <AdsBanner/>
    </>
  );
}
