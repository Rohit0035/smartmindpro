"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Container,
    Card,
    CardBody,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Row,
    Col,
} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronDown } from "react-icons/fa";
import "swiper/css/navigation";
import Image from "next/image";
import comlogo from "../../assets/images/cpm-logo.png"
import { FaAngleDown } from "react-icons/fa";

const developers = [
    {
        name: "Lodha Developers Limited",
        completed: "52 Completed Projects",
        ongoing: "52 Ongoing Projects",
        projects: [
            "Lodha Elanor",
            "Lodha Villa Royale Gold",
            "Lodha Bellavista Wing B2",
        ],
        more: "49 more",
        logo: comlogo,
    },
    {
        name: "Kalpataru Ltd.",
        completed: "16 Completed Projects",
        ongoing: "25 Ongoing Projects",
        projects: [
            "Kalpataru Launch Code N...",
            "Kalpataru Aria",
            "Kalpataru Blossoms",
        ],
        more: "22 more",
        logo: comlogo,
    },
    {
        name: "Nahar Group",
        completed: "8 Completed Projects",
        ongoing: "1 Ongoing Project",
        projects: [
            "Nahar Amaryllis Towers",
        ],
        more: "",
        logo: comlogo,
    },
     {
        name: "Nahar Group",
        completed: "8 Completed Projects",
        ongoing: "1 Ongoing Project",
        projects: [
            "Nahar Amaryllis Towers",
        ],
        more: "",
        logo: comlogo,
    },
];

const ProjectInFeaturedDevelopers = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <section className="pt-0 pb-5 bg-light">
            <Container>

                <Row className="mb-4">
                    <Col>
                        <h4 style={{ fontWeight: 600 }}>
                            Project Gallery{" "}
                            <Dropdown
                                isOpen={open}
                                toggle={() => setOpen(!open)}
                                style={{ display: "inline-block" }}
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
                        992: { slidesPerView: 4 },
                    }}
                >
                    {developers.map((dev, index) => (
                        <SwiperSlide key={index}>
                            <Card className="" style={{height:'350px'}}>
                                <div className="text-center py-4 border-bottom">
                                    <Image
                                        src={dev.logo}
                                        alt={dev.name}
                                        width={80}
                                        height={60}
                                        className="mx-auto"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>

                                <CardBody>
                                    <h6 className="fw-bold">{dev.name}</h6>

                                    <p className="small text-muted mb-1">
                                        {dev.completed}
                                    </p>
                                    <p className="small text-muted mb-2">
                                        {dev.ongoing}
                                    </p>

                                    {dev.projects.map((proj, i) => (
                                        <p key={i} className="small mb-1">
                                            <Link href="#" className="text-dark text-decoration-none">
                                                {proj}
                                            </Link>
                                        </p>
                                    ))}

                                    {dev.more && (
                                        <Link
                                            href="#"
                                            className="small text-muted text-decoration-none"
                                        >
                                            + {dev.more}
                                        </Link>
                                    )}
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default ProjectInFeaturedDevelopers;
