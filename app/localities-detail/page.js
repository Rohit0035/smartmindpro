"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import LocalitiesPriceRange from "../../components/localitiecomponent/LocalitiesPriceRange";
import LocalityCard from "../../components/localitiecomponent/LocalityCard";
import LocalitiesStickyNav from "../../components/localitiecomponent/LocalitiesStickyNav";
import LocalitiesHeroGrid from "../../components/localitiecomponent/LocalitiesHeroGrid";
import LocalitiesAbout from "../../components/localitiecomponent/LocalitiesAbout";
import LocalityNeighbourhood from "../../components/localitiecomponent/LocalityNeighbourhood";
import LocalityRatingsAndReviews from "../../components/localitiecomponent/LocalityRatingsAndReviews";
import LocalityExBuyRent from "../../components/localitiecomponent/LocalityExBuyRent";
import PropertySnapshot from "../../components/localitiecomponent/PropertySnapshot";
import LocalityPropertyRent from "../../components/localitiecomponent/LocalityPropertyRent";
import LocalityPropertySale from "../../components/localitiecomponent/LocalityPropertySale";
import LocalityPriceTrends from "../../components/localitiecomponent/LocalityPriceTrends";
import LocalityPhotosVideos from "../../components/localitiecomponent/LocalityPhotosVideos";
import LocalityLoanDeal from "../../components/localitiecomponent/LocalityLoanDeal";
import AdviceTools from "../../components/AdviceTools";
import HomeEstateGuide from "../../components/HomeEstateGuide";
import LocalityNewProject from "../../components/localitiecomponent/LocalityNewProject";
import LocalityTopProject from "../../components/localitiecomponent/LocalityTopProject";
import ProAgentsList from "../../components/propertydsection/ProAgentsList";
import LocalityFaq from "../../components/localitiecomponent/LocalityFaq";
import BuildersSection from "../../components/localitiecomponent/BuildersSection";
import NearbyLocalities from "../../components/localitiecomponent/NearbyLocalities";
const LocalitiesDetail = () => {
    return (
        <>
            <LocalitiesHeroGrid />
            <LocalitiesStickyNav />
            <section className="bg-light pt-4">
                <Container>
                    <Row>
                        <Col lg="9" md="12" className="mb-3">
                            <div>
                                <LocalitiesAbout />
                                <LocalityNeighbourhood />
                                <LocalityRatingsAndReviews />
                                <LocalityExBuyRent />
                                <PropertySnapshot />
                                <LocalityPriceTrends />
                                <LocalityPhotosVideos />
                                <LocalityLoanDeal />
                                <LocalityPropertyRent />
                                <LocalityPropertySale />
                            </div>
                        </Col>
                        <Col lg="3" md="12">
                            <div className="" style={{ top: '80px', position: 'sticky', alignSelf: 'start' }}>
                                <LocalitiesPriceRange />
                            </div>
                        </Col>
                    </Row>
                    <AdviceTools />
                    <HomeEstateGuide />
                    <LocalityNewProject />
                    <LocalityTopProject />
                    <ProAgentsList />
                    <BuildersSection />
                    <NearbyLocalities />
                    <LocalityFaq />
                </Container>
            </section>
        </>
    );
};
export default LocalitiesDetail;
