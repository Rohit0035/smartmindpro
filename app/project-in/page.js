"use client";
import React from "react";
import ProjectInStickyNav from "../../components/projectincomponent/ProjectInStickyNav";
import ProjectInHero from "../../components/projectincomponent/ProjectInHero";
import ProjectInFilterBar from "../../components/projectincomponent/ProjectInFilterBar";
import ProjectInGallery from "../../components/projectincomponent/ProjectInGallery";
import ProjectInProjectList from "../../components/projectincomponent/ProjectInProjectList";
import ProjectInFeaturedDevelopers from "../../components/projectincomponent/ProjectInFeaturedDevelopers";
import ProjectInBudget from "../../components/projectincomponent/ProjectInBudget";
import ProjectInTopRated from "../../components/projectincomponent/ProjectInTopRated";
import ProjectInInvestment from "../../components/projectincomponent/ProjectInInvestment";
import ProjectInCalculators from "../../components/projectincomponent/ProjectInCalculators";
import ProjectInDownload from "../../components/projectincomponent/ProjectInDownload";
import ProjectInTags from "../../components/projectincomponent/ProjectInTags";
import ProjectInDevTags from "../../components/projectincomponent/ProjectInDevTags";
import ProjectInLocality from "../../components/projectincomponent/ProjectInLocality";

const ProjectIn = () => {
    return (
        <>
            <ProjectInHero />
            <ProjectInStickyNav />
            <ProjectInFilterBar/>
            <ProjectInGallery/>
            <ProjectInProjectList/>
            <ProjectInFeaturedDevelopers/>
            <ProjectInBudget/>
            <ProjectInTopRated/>
            <ProjectInInvestment/>
            <ProjectInCalculators/>
            <ProjectInDownload/>
            <ProjectInTags/>
            <ProjectInDevTags/>
            <ProjectInLocality/>
        </>
    );
};
export default ProjectIn;
