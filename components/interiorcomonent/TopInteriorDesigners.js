"use client";

import React, { useState } from "react";
import {
    Container,
    Card,
    CardBody,
    Button,
    Badge
} from "reactstrap";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Intimg from "../../assets/images/pro-1.jpg"
import EnquiryModal from "../EnquiryModal";

const designers = [
    {
        name: "Decotales",
        rating: "4.7/5",
        experience: "5 Years Experience",
        location: "J P Nagar, Bangalore",
        tag: "VALUE FOR MONEY",
        offer: "Upto 15% off",
        img: Intimg,
    },
    {
        name: "Furdexo Home Interior",
        rating: "5/5",
        experience: "5 Years Experience",
        location: "Sector 48, Gurgaon",
        tag: "ECONOMICAL",
        offer: "Upto 25% off",
        img: Intimg,
    },
    {
        name: "Arrivae",
        rating: "4/5",
        experience: "25 Years Experience",
        location: "J P Nagar, Bangalore",
        tag: "VALUE FOR MONEY",
        offer: "Upto 15% off",
        img: Intimg,
    },
    {
        name: "Arrivae",
        rating: "4/5",
        experience: "25 Years Experience",
        location: "J P Nagar, Bangalore",
        tag: "VALUE FOR MONEY",
        offer: "Upto 15% off",
        img: Intimg,
    },
    {
        name: "Arrivae",
        rating: "4/5",
        experience: "25 Years Experience",
        location: "J P Nagar, Bangalore",
        tag: "VALUE FOR MONEY",
        offer: "Upto 15% off",
        img: Intimg,
    },
];

const TopInteriorDesigners = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
            <section className="py-5 bg-light">
                <Container>
                    <h4 className="fw-bold mb-4">Our Top Interior Designers</h4>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={20}
                        breakpoints={{
                            320: { slidesPerView: 1.1 },
                            576: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                        }}
                    >
                        {designers.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Card className="shadow-sm border-0 h-100 rounded-0">
                                    <div style={{ position: "relative", height: "200px" }}>
                                        <Image
                                            src={item.img}
                                            alt={item.name}
                                            fill
                                            className="rounded-0"
                                            style={{ objectFit: "cover", borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}
                                        />
                                        <Badge
                                            color="success"
                                            style={{
                                                position: "absolute",
                                                bottom: "10px",
                                                left: "10px",
                                            }}
                                        >
                                            {item.tag}
                                        </Badge>
                                        <Badge
                                            color="dark"
                                            style={{
                                                position: "absolute",
                                                bottom: "10px",
                                                right: "10px",
                                            }}
                                        >
                                            {item.offer}
                                        </Badge>
                                    </div>
                                    <CardBody>
                                        <h6 className="fw-bold mb-1">{item.name}</h6>

                                        <div className="d-flex align-items-center mb-1 small">
                                            <FaStar className="text-warning me-1" />
                                            <span className="me-2">{item.rating}</span>
                                            <span className="text-muted">{item.experience}</span>
                                        </div>

                                        <div className="d-flex align-items-center text-muted small mb-3">
                                            <FaMapMarkerAlt className="me-1" />
                                            {item.location}
                                        </div>

                                        <div className="d-flex gap-2 mb-3">
                                            <Badge color="warning" pill>
                                                FREE Cab
                                            </Badge>
                                            <Badge color="info" className="border">
                                                Elite Club
                                            </Badge>
                                        </div>

                                        <Button
                                            onClick={toggle}
                                            color="primary"
                                            outline
                                            block
                                            className="rounded-pill"
                                        >
                                            Contact Now
                                        </Button>
                                    </CardBody>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </section>

            <EnquiryModal modal={modal} toggle={toggle} />
        </>

    );
};

export default TopInteriorDesigners;
