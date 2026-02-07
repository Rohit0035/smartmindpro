"use client";

import React, { useState } from "react";
import {
    Row,
    Col,
    Card,
    CardBody,
    Button,
    Badge,
} from "reactstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Link from "next/link";


const projects = [
    {
        title: "Metrotech Builder Floors",
        builder: "by Metrotech Buildwell",
        type: "3, 4 BHK Builder Floor",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
        title: "DDA Project Paryavaran",
        builder: "by Delhi Development Authority",
        type: "1, 2, 4 BHK Apartment",
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    },
    {
        title: "Luxury Residency",
        builder: "by ABC Developers",
        type: "2, 3 BHK Premium Flats",
        img: "https://images.unsplash.com/photo-1600047508788-786f7b8c5c24",
    },
];

const LocalityCard = () => {
    const [showMore, setShowMore] = useState(false);

    const shortText =
        "Saket is a posh neighbourhood in South Delhi comprising a mix of residential units, high-end retail outlets and commercial hubs.";

    const fullText =
        " Saket is well connected via metro and road networks. It features premium malls, hospitals, educational institutions and lush green parks making it one of the most desirable residential locations in Delhi.";

    return (
        <Card className="p-4 border-0 shadow-sm mb-2">

            <h4 className="fw-bold">Saket, New Delhi</h4>

            <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                <div className="text-muted">
                    ₹20,183 - ₹1,02,778 per sqft
                </div>

                <Badge color="light" className="text-danger fw-semibold">
                    Validate Market Price with PropWorth
                </Badge>
            </div>

            <Row className="text-center text-md-start mb-3 gy-3">
                <Col md="3" xs="6">
                    <div className="d-flex align-items-center gap-1">
                        <strong>4.3</strong>
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStar className="text-warning" />
                        <FaStarHalfAlt className="text-warning" />
                    </div>
                    <small className="text-muted">602 reviews</small>
                </Col>

                <Col md="3" xs="6">
                    <strong>Rank 24</strong>
                    <div className="text-muted small">
                        out of 4373 Localities
                    </div>
                </Col>

                <Col md="3" xs="6">
                    <strong>367</strong>
                    <div className="text-muted small">
                        Property in Saket
                    </div>
                </Col>

                <Col md="3" xs="6">
                    <strong>769</strong>
                    <div className="text-muted small">
                        Property for rent in Saket
                    </div>
                </Col>
            </Row>

            <p className="text-muted">
                {shortText}
                {showMore && fullText}
                <span
                    className="text-danger ms-2"
                    role="button"
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? "Read Less" : "Read More"}
                </span>
            </p>

            <div className="bg-light rounded p-3 mb-4">
                <div className="fw-semibold mb-3">
                    {projects.length} Projects available
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={15}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                    }}
                >
                    {projects.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Card className="h-100 border">
                                <Row className="g-0">

                                    <Col xs="4">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-100 h-100 rounded-2"
                                            style={{ objectFit: "cover", minHeight: "120px" }}
                                        />
                                    </Col>

                                    <Col xs="8">
                                        <CardBody className="py-2">
                                            <div className="fw-semibold small">
                                                {item.title}
                                            </div>
                                            <div className="text-muted small">
                                                {item.builder}
                                            </div>
                                            <div className="small">
                                                {item.type}
                                            </div>
                                        </CardBody>
                                    </Col>

                                </Row>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="d-flex flex-wrap gap-3">
                <Link href="/projects" className="px-4 btn btn-danger btn-sm rounded-pill">
                    See all Projects
                </Link>

                <Link href="/localities-detail" className="px-4 btn btn-danger btn-sm rounded-pill">
                    Explore Locality
                </Link>
            </div>

        </Card>
    );
};

export default LocalityCard;
