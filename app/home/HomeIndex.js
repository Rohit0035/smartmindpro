"use client";
import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import HomeStatus from "../../components/HomeStatus";
import HomePropertyList from "../../components/HomePropertyList";
import WhyUsSection from "../../components/WhyUsSection";
import ExclusivePropertyList from "../../components/ExclusivePropertyList";
import AdviceTools from "../../components/AdviceTools";
import AdsBanner from "../../components/AdsBanner";
import HomeEstateGuide from "../../components/HomeEstateGuide";
import FreshProperties from "../../components/FreshProperties";
import HomeSnapshot from "../../components/HomeSnapshot";
import HomePropertyOptions from "../../components/HomePropertyOptions";
import RecommendedSection from "../../components/RecommendedSection";
import AgentSection from "../../components/AgentSection";

export default function HomeIndex() {
  return (
    <>
       <HeroSection/>
       <HomeStatus/>
       <HomePropertyList/>
       <AgentSection/>
       <WhyUsSection/>
       <ExclusivePropertyList/>
       <AdviceTools/>
       <AdsBanner/>
       <HomeEstateGuide/>
       <FreshProperties/>
       <HomeSnapshot/>
       <HomePropertyOptions/>
       <RecommendedSection/>
    </>
  );
}
