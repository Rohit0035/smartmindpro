"use client";
import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import proimg1 from "../../assets/images/pro-1.jpg"
import proimg2 from "../../assets/images/pro-1.jpg"
import Link from "next/link";

const projects = [
    {
        title: "The Formist Mandala",
        price: "₹ 2.84 Cr onwards",
        type: "3 BHK Flats",
        features: ["Kids Play Area", "Large Clubhouse", "Multipurpose Hall"],
        image: proimg1,
    },
    {
        title: "JRC Wild Woods",
        price: "₹ 2.20 Cr onwards",
        type: "3 BHK Flats",
        features: ["Green Landscape", "Walking Track", "Premium Amenities"],
        image: proimg2,
    },
];

const PremiumProjectGallery = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <section className="py-5">
            <Container>
                {/* HEADER */}
                <Row className="align-items-center mb-3">
                    <Col>
                        <h4 className="fw-bold">
                               Premium Project Gallery 
                            <span
                                style={{
                                    display: "block",
                                    width: "60px",
                                    height: "3px",
                                    background: "#6e2e36",
                                    marginTop: "5px",
                                }}
                            ></span>
                        </h4>
                    </Col>
                    <Col className="text-end">
                        <a href="/projects" className="text-st fw-semibold text-decoration-none">
                            See all Projects →
                        </a>
                    </Col>
                </Row>


                {/* SWIPER */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={24}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                    }}
                >
                    {projects.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="position-relative"
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}
                            >
                                {/* IMAGE */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="w-100 rounded-4 object-fit-cover"
                                    style={{ height: 380 }}
                                />

                                {/* SINGLE COLLAPSING CARD */}
                                <Card
                                    className="position-absolute start-0 end-0 shadow border-0 mx-3"
                                    style={{
                                        bottom: hoverIndex === index ? 24 : 16,
                                        transition: "all 0.35s ease",
                                    }}
                                >
                                    <CardBody>
                                        <Row>
                                            <Col md="7">
                                                <h6 className="fw-bold mb-1">{item.title}</h6>

                                                <ul className="list-unstyled small text-muted mb-2">
                                                    {item.features.slice(0, 2).map((f, i) => (
                                                        <li key={i}>✔ {f}</li>
                                                    ))}
                                                </ul>
                                            </Col>

                                            <Col md="5" className="text-md-end">
                                                <h6 className="fw-semibold mb-1">{item.price}</h6>
                                                <small className="text-muted d-block">
                                                    {item.type}
                                                </small>
                                            </Col>
                                        </Row>

                                        {/* COLLAPSE CONTENT (SAME CARD) */}
                                        {hoverIndex === index && (
                                            <>
                                                <hr className="my-2" />
                                                <p className="small text-muted mb-2">
                                                    Smartmind premium projects designed for modern
                                                    lifestyles with long-term value.
                                                </p>
                                                <Link
                                                    href="/projectdetail"
                                                    color="danger"
                                                    size="sm"
                                                    className="rounded-pill px-3"
                                                >
                                                    View Project
                                                </Link>
                                            </>
                                        )}
                                    </CardBody>
                                </Card>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default PremiumProjectGallery;
