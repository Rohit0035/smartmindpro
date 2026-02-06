"use client";
import React from "react";
import HeroSection from "../../components/prehomes/HeroSection";
import HomeStatus from "../../components/HomeStatus";
import ProjectShowcase from "../../components/prehomes/ProjectShowcase";
import PremiumProjectGallery from "../../components/prehomes/PremiumProjectGallery";
import WhyUsSection from "../../components/WhyUsSection";
import AdviceTools from "../../components/AdviceTools";
import TopProjects from "../../components/prehomes/TopProjects";
const PremiumHomeIndex = () => {
    return (
        <>
           <HeroSection/>
           <HomeStatus/>
           <ProjectShowcase />
           <PremiumProjectGallery/>
           <WhyUsSection/>
           <TopProjects/>
           <AdviceTools/>
        </>
    );
};
export default PremiumHomeIndex;