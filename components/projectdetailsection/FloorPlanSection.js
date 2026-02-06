"use client";
import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Button
} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Floorimg from "../../assets/images/floorimg.webp"
import Image from "next/image";
import EnquiryModal from "../EnquiryModal";
import { FaPhoneAlt } from "react-icons/fa";
// import FloorViewOffcanvas from "../projectssections/FloorViewOffcanvas";


const floorPlans = [
    {
        id: 1,
        bhk: "3 BHK",
        area: "1438 sq.ft",
        possession: "Possession by May'27",
        img: Floorimg
    },
    {
        id: 2,
        bhk: "3 BHK",
        area: "1453 sq.ft",
        possession: "Possession by May'27",
        img: Floorimg
    },
    {
        id: 3,
        bhk: "2 BHK",
        area: "1151 sq.ft",
        possession: "Possession by May'27",
        img: Floorimg
    }
];

const bhkTabs = ["All", "1 BHK", "2 BHK", "3 BHK", "4 BHK"];

const FloorPlanSection = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredPlans =
        activeTab === "All"
            ? floorPlans
            : floorPlans.filter(p => p.bhk === activeTab);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [isFloorViewOpen, setIsFloorViewOpen] = useState(false);

    const toggleFloorView = () => {
        setIsFloorViewOpen(!isFloorViewOpen);
    };

    return (
        <>
            <section className="mt-5 p-0" id="floorpricing">
                <Container>
                    {/* Heading */}
                    <h4 className="fw-bold mb-3">
                        Prestige Lavender Fields Floor Plans & Pricing
                    </h4>

                    {/* Tabs */}
                    <div className="d-flex gap-2 mb-2 flex-wrap">
                        {bhkTabs.map(tab => (
                            <Button
                                key={tab}
                                size="sm"
                                outline={activeTab !== tab}
                                color="info"
                                className="rounded-pill"
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </Button>
                        ))}
                    </div>

                    {/* Sub info */}
                    <p className="text-muted small mb-3">
                        23 Sizes | Super Area: <strong>784 - 3241 sq.ft</strong>
                    </p>

                    {/* Swiper */}
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={16}
                        slidesPerView={3}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 2 }
                        }}
                    >
                        {filteredPlans.map(plan => (
                            <SwiperSlide key={plan.id}>
                                <Card className="h-100 shadow-sm">
                                    <CardBody>
                                        <Row className="align-items-center">
                                            <Col xs="4">
                                                <div className="border text-center p-1"
                                                //   onClick={toggleFloorView}
                                                >
                                                    <Image
                                                        src={plan.img}
                                                        alt="floor"
                                                        className="img-fluid"
                                                    />
                                                    <span className="badge bg-secondary mt-1">
                                                        View Floor Plan
                                                    </span>
                                                </div>
                                            </Col>

                                            <Col xs="8">
                                                <p className="mb-1 text-muted small">
                                                    Super Area
                                                </p>
                                                <h6 className="fw-bold mb-1">
                                                    {plan.area} | {plan.bhk}
                                                </h6>
                                                <p className="small text-muted mb-2">
                                                    {plan.possession}
                                                </p>
                                            </Col>
                                        </Row>

                                        <Row className="mt-3 align-items-center">
                                            <Col>
                                                <Link href="/property" className="text-st small">
                                                    See all properties
                                                </Link>
                                            </Col>
                                            <Col className="text-end">
                                                <Button
                                                    color="danger"
                                                    size="sm"
                                                    className="rounded-pill px-4"
                                                    onClick={toggle}
                                                >
                                                    <FaPhoneAlt /> Contact
                                                </Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
                <EnquiryModal modal={modal} toggle={toggle} />

                {/* <FloorViewOffcanvas
                isOpen={isFloorViewOpen}
                toggle={toggleFloorView}
            /> */}

            </section>

        </>
    );
};

export default FloorPlanSection;
