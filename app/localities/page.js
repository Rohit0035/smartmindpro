"use client";
import React from "react";
import LocalitiesHero from "../../components/localitiecomponent/LocalitiesHero";
import { Col, Container, Row } from "reactstrap";
import LocalitiesPriceRange from "../../components/localitiecomponent/LocalitiesPriceRange";
import LocalityCard from "../../components/localitiecomponent/LocalityCard";
import LocallitiesSortFilter from "../../components/localitiecomponent/LocallitiesSortFilter";
const LocalitiesList = () => {
    return (
        <>
            <LocalitiesHero />
            <LocallitiesSortFilter/>
            <section className="bg-light">
                <Container>
                    <Row>
                        <h4 className="fw-bold mb-4">Top Localities in <span className="text-st">New Delhi</span></h4>
                        <Col lg="9" md="12" className="mb-3">
                            <div>
                                <LocalityCard/>
                                <LocalityCard/>
                                <LocalityCard/>
                                <LocalityCard/>
                            </div>
                        </Col>
                        <Col lg="3" md="12">
                            <div className="" style={{ top: '80px', position:'sticky', alignSelf:'start' }}>
                                <LocalitiesPriceRange/>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    );
};
export default LocalitiesList;
