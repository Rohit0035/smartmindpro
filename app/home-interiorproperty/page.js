"use client";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Container, Row, Input, InputGroup, InputGroupText } from "reactstrap";
import BreadcrumbNav from "../../components/BreadcrumbNav";
import Link from "next/link";
import PropertyCard from "../../components/PropertyCard";
import AgentCard from "../../components/AgentCard";
import { FaSortAmountDownAlt } from "react-icons/fa";
import InteriorStickyFilter from "../../components/interiorcomonent/InteriorStickyFilter";
import InteriorPropertyCard from "../../components/interiorcomonent/InteriorPropertyCard";
import EnquiryModal from "../../components/EnquiryModal";
import AdsPropertyCard from "../../components/interiorcomonent/AdsPropertyCard";

const HomeInteriorList = () => {
    const [sortOption, setSortOption] = useState("relevance");
    const [showMore, setShowMore] = useState(false);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <BreadcrumbNav className="mb-0" />
            <InteriorStickyFilter />
            <Container>
                <Row className="pb-5">
                    <Col lg="9">
                        <Row>
                            <Col lg="12" className="">
                                <Card className="" style={{ backgroundColor: '#0d54a2' }}>
                                    <CardBody>
                                        <Row>
                                            <Col md="9">
                                                <h5 className="text-white">
                                                    Interiors Expo in <span className="fw-bold">New Delhi</span>
                                                </h5>
                                                <p onClick={toggle} className="small text-white mb-0" style={{ cursor: 'pointer' }}>
                                                    Sat (07 Mar) |  9:00 am Onwards
                                                </p>
                                            </Col>
                                            <Col md="3" className="text-end">
                                                <Button onClick={toggle} className="btn btn-light btn-sm rounded-pill">
                                                    Book your Spo
                                                </Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="12">
                                <h3 className=" pt-4 ">19837 results | Best Interior Designers in Delhi</h3>
                                <p className="mt-3 mb-1 text-muted small">
                                    We make it easy for you to find an interior designer by providing you access to our reliable list of top-rated interior designers in Delhi NCR. Price is an important element of any design process. We offer you access to several different kinds of Delhi-based interior decorators and en
                                    {!showMore ? (
                                        <span
                                            className="text-st cursor-pointer fw-semibold ms-1"
                                            onClick={() => setShowMore(true)}
                                        >
                                            Read More
                                        </span>
                                    ) : (
                                        <>
                                            of any design process. We offer you access to several different kinds of Delhi-based interior decorators and ensure that you find an individual that is compatible with your financial goals and aspirations. Interior designers in Delhi cost anywhere from Rs. 3 Lakhs to as high as Rs. 6.5 Lakhs, according to your place's measurements and designs. Browse through interior designers in New Delhi.
                                            <span
                                                className="text-st cursor-pointer fw-semibold d-block  mt-2"
                                                onClick={() => setShowMore(false)}
                                            >
                                                Read Less
                                            </span>
                                        </>
                                    )}
                                </p>
                            </Col>
                            <Col xs="12" sm="12" md="14" lg="12">
                                <InteriorPropertyCard />
                                <InteriorPropertyCard />
                                <InteriorPropertyCard />
                                <InteriorPropertyCard />
                                <InteriorPropertyCard />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="3">
                        <div className=" text-center bg-light p-2 mb-3 position-sticky top-0" >
                            <Row>
                                <Col xs="12" sm="6" md="6" lg="12">
                                    <AdsPropertyCard />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

            <EnquiryModal modal={modal} toggle={toggle} />

        </>

    );
};
export default HomeInteriorList;