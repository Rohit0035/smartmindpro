"use client";
import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaRegImage } from "react-icons/fa";
import Image from "next/image";
import proimg from "../assets/images/pro-1.jpg";
const PopularOwnerProperties = () => {
    const swiperRef = useRef(null);

    // Dummy property data
    const properties = [
        {
            id: 1,
            img: proimg,
            bhk: "2 BHK Flat",
            price: "₹18,000",
            size: "1150 sqft",
            location: "Goyal Vihar, Indore",
            status: "Ready to move",
            tag: "10",
        },
        {
            id: 2,
            img: proimg,
            bhk: "2 BHK Flat",
            price: "₹18,000",
            size: "1150 sqft",
            location: "Goyal Vihar, Indore",
            status: "Ready to move",
            tag: "10",
        },
        {
            id: 3,
            img: proimg,
            bhk: "2 BHK Flat",
            price: "₹18,000",
            size: "1150 sqft",
            location: "Goyal Vihar, Indore",
            status: "Ready to move",
            tag: "10",
        },
        {
            id: 4,
            img: proimg,
            bhk: "2 BHK Flat",
            price: "₹18,000",
            size: "1150 sqft",
            location: "Goyal Vihar, Indore",
            status: "Ready to move",
            tag: "10",
        },
        {
            id: 5,
            img: proimg,
            bhk: "2 BHK Flat",
            price: "₹18,000",
            size: "1150 sqft",
            location: "Goyal Vihar, Indore",
            status: "Ready to move",
            tag: "10",
        },

    ];

    return (
        <Container className="my-5 position-relative">
            {/* Section Header */}
            <Row className="align-items-center mb-3">
                <Col>
                    <h4 className="fw-bold">
                        Popular Owner Properties
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
                    <a href="#" className="text-st fw-semibold text-decoration-none">
                        See all Properties →
                    </a>
                </Col>
            </Row>

            {/* Custom Navigation Buttons */}
            <div
                className="custom-prev"
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <FaArrowLeft />
            </div>
            <div
                className="custom-next"
                onClick={() => swiperRef.current?.slideNext()}
            >
                <FaArrowRight />
            </div>

            {/* Swiper Carousel */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={4}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                }}
            >
                {properties.map((prop, index) => (
                    <SwiperSlide key={prop.id}>
                        <div data-aos="zoom-in" data-aos-delay={index * 100}>
                            <Card className="property-card border shadow-sm h-100">
                                <div className="position-relative">
                                    <Image
                                        src={prop.img}
                                        alt={prop.bhk}
                                        className="img-fluid rounded-top"
                                    />
                                    {/* Image count badge */}
                                    <div
                                        className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 small d-flex align-items-center gap-1"
                                        style={{ borderRadius: "0 0.3rem 0.3rem 0" }}
                                    >
                                        <FaRegImage size={13} /> {prop.tag}
                                    </div>
                                </div>
                                <CardBody>
                                    <h6 className="fw-semibold mb-1 st-txt-o">{prop.bhk}</h6>
                                    <h6 className="fw-bold mb-1">
                                        {prop.price}
                                        {prop.size && (
                                            <span className="fw-normal text-secondary ms-2">
                                                | {prop.size}
                                            </span>
                                        )}
                                    </h6>
                                    <p className="text-muted mb-1 small">{prop.location}</p>
                                    {prop.status && (
                                        <p className="text-muted mb-2 small">{prop.status}</p>
                                    )}
                                    <div className="text-center mt-2">
                                        <Button
                                            color="danger"
                                            size="sm"
                                            className="rounded-pill btn-danger w-100 "
                                        >
                                            View Details
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </Container>
    );
};

export default PopularOwnerProperties;
