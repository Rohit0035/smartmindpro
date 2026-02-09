"use client";
import React from "react";
import HomeInteriorHero from "../../components/interiorcomonent/HomeInteriorHero";
import HomeIntWhyChoose from "../../components/interiorcomonent/HomeIntWhyChoose";
import TopInteriorDesigners from "../../components/interiorcomonent/TopInteriorDesigners";
import InteriorEstimate from "../../components/interiorcomonent/InteriorEstimate";
const InteriorHome = () => {
    return (
       <>
         <HomeInteriorHero/>
         <HomeIntWhyChoose/>
         <TopInteriorDesigners/>
         <InteriorEstimate/>
       </>
    );
};
export default InteriorHome;