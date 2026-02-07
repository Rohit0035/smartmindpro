"use client";
import React from "react";
import ProjectInStickyNav from "../../components/projectincomponent/ProjectInStickyNav";
import ProjectInHero from "../../components/projectincomponent/ProjectInHero";
import ProjectInFilterBar from "../../components/projectincomponent/ProjectInFilterBar";
import ProjectInGallery from "../../components/projectincomponent/ProjectInGallery";
import ProjectInProjectList from "../../components/projectincomponent/ProjectInProjectList";
import ProjectInFeaturedDevelopers from "../../components/projectincomponent/ProjectInFeaturedDevelopers";

const ProjectIn = () => {
    return (
        <>
            <ProjectInHero />
            <ProjectInStickyNav />
            <ProjectInFilterBar/>
            <ProjectInGallery/>
            <ProjectInProjectList/>
            <ProjectInFeaturedDevelopers/>
        </>
    );
};
export default ProjectIn;
