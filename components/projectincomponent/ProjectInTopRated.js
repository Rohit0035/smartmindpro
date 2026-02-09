"use client";

import React, { useState } from "react";
import { Container, Card, CardBody, Button, Row, Col, Dropdown, DropdownToggle, DropdownMenu, Input, Label  } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaMapMarkerAlt } from "react-icons/fa";
import "swiper/css/navigation";
import Image from "next/image";
import ProImg from "../../assets/images/pro-1.jpg"
import { FaAngleDown } from "react-icons/fa";
// import Link from "next/link";

const projects = [
    {
        city: "Mumbai",
        title: "SD ALPINE",
        developer: "SD Corporation Pvt Ltd",
        location: "Kandivali East",
        config: "2, 3 BHK Flats",
        price: "2.70",
        image: ProImg,
    },
    {
        city: "Mumbai",
        title: "RUSTOMJEE CROWN",
        developer: "Rustomjee",
        location: "Prabhadevi",
        config: "3, 4, 5 BHK Flats",
        price: "9.72",
        image: ProImg,
    },
    {
        city: "Mumbai",
        title: "SHAPOORJI PALLONJI THE ODYSSEY",
        developer: "Shapoorji Pallonji Real Estate",
        location: "Marine Drive",
        config: "3 BHK Flats",
        price: "14.49",
        image: ProImg,
    },
    {
        city: "Mumbai",
        title: "RAHEJA MODERN VIVAREA",
        developer: "K Raheja Corp",
        location: "Mahalaxmi",
        config: "3, 4 BHK Flats",
        price: "17.75",
        image: ProImg,
    },
];

const options = [
    { label: "Less than 40 Lac", value: "less40" },
    { label: "40 Lac to 80 Lac", value: "40to80" },
    { label: "80 Lac to 1.6 Cr", value: "80to160" },
];

const ProjectInTopRated = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("less40");

    return (
        <section className=" pt-5 bg-white">
            <Container>
                <Row className="mb-4 ">
                    <Col>
                        <h4 style={{ fontWeight: 600 }}>
                            Top Rated Projects

                            <Dropdown
                                isOpen={open}
                                toggle={() => setOpen(!open)}
                                style={{ display: "inline-block" }}
                                className="ms-1"
                            >
                                <DropdownToggle
                                    tag="span"
                                    style={{
                                        cursor: "pointer",
                                        color: "#0d6efd",
                                        fontWeight: 500,
                                    }}
                                >
                                    in Mumbai <FaAngleDown size={12} />
                                </DropdownToggle>

                                <DropdownMenu className="locstdrop">
                                    <Row>
                                        <Col md="6">
                                            <h6 style={{ fontWeight: 600 }}>Popular Cities</h6>
                                            {["Pune", "Navi Mumbai", "Chennai", "Thane", "Ahmedabad", "Jaipur", "Surat", "Gurgaon", "Noida"].map((city, i) => (
                                                <div className="cursor-pointer" key={i} style={{ padding: "4px 0", fontSize: 14, cursor: 'pointer' }}>
                                                    {city}
                                                </div>
                                            ))}
                                        </Col>
                                        <Col md="6">
                                            {["Bangalore", "Mumbai", "Nashik", "Kolkata", "Hyderabad", "Greater Noida", "Vadodara", "Lucknow", "Udaipur"].map((city, i) => (
                                                <div className="cursor-pointer" key={i} style={{ padding: "4px 0", fontSize: 14, cursor: 'pointer' }}>
                                                    {city}
                                                </div>
                                            ))}

                                        </Col>
                                    </Row>
                                </DropdownMenu>
                            </Dropdown>
                        </h4>
                    </Col>
                </Row>
               
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        576: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                    }}
                >
                    {projects.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Card className="border-0 h-100">
                                <div className="position-relative">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={500}
                                        height={300}
                                        className="w-100 rounded-0"
                                        style={{ height: "200px", objectFit: "cover" }}
                                    />
                                    <span
                                        className="position-absolute bottom-0 start-0 text-white px-2 py-1"
                                        style={{ background: "rgba(0,0,0,0.6)" }}
                                    >
                                        {item.city}
                                    </span>
                                </div>
                                <CardBody>
                                    <h6 className="fw-bold text-uppercase small">
                                        {item.title}
                                    </h6>

                                    <p className="text-muted small mb-1">
                                        {item.developer}
                                    </p>

                                    <p className="text-muted small mb-1 d-flex align-items-center gap-1">
                                        <FaMapMarkerAlt size={12} />
                                        {item.location}
                                    </p>

                                    <p className="small mb-1">{item.config}</p>

                                    <p className="fw-bold mb-2">
                                        ₹ {item.price} Cr{" "}
                                        <span className="fw-normal text-muted small">
                                            onwards
                                        </span>
                                    </p>

                                    <Button size="sm" color="danger">
                                        See Details
                                    </Button>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>

    );
};

export default ProjectInTopRated;
