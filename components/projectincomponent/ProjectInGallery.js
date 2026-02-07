"use client";

import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    Button,
    Card,
    CardBody,
} from "reactstrap";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";

import img1 from "../../assets/images/pro-1.jpg";
import img2 from "../../assets/images/pro-1.jpg";
import img3 from "../../assets/images/pro-1.jpg";
import logo from "../../assets/images/cpm-logo.png";
import Link from "next/link";

const ProjectInGallery = () => {
    const [open, setOpen] = useState(false);

    return (
        <section style={{ background: "#f4f4f4", padding: "50px 0" }}>
            <Container>

                {/* ===== Header with Dropdown ===== */}
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

                {/* ===== Grid Layout ===== */}
                <Row className="">

                    {/* Left Big Card */}
                    <Col lg="12" md="12" className="mb-3">
                        <div style={{ position: "relative" }}>
                            <Image
                                src={img1}
                                alt="project"
                                className="w-100"
                                style={{ height: "300px", objectFit: "cover" }}
                            />

                            {/* Overlay Content */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    width: "100%",
                                    padding: "15px",
                                    background:
                                        "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
                                    color: "#fff",
                                }}
                            >
                                <h6 style={{ marginBottom: 5 }}>PIRAMAL MAHALAXMI</h6>
                                <small>2,3 & 4 BHK Flats in Mahalaxmi, Mumbai</small>
                                <div style={{ fontSize: 12, marginTop: 5 }}>
                                    Marketing by Piramal Group
                                </div>
                            </div>
                        </div>
                    </Col>


                    {/* Bottom Left Card */}
                    <Col lg="6" md="12" className="mb-3">
                        <div className="bg-white">
                            <Row>
                                <Link href="#">
                                    <Col md="12">
                                        <Image
                                            src={img3}
                                            alt="small"
                                            className="w-100 rounded-0"
                                            style={{ height: "200px", objectFit: "cover" }}
                                        />
                                    </Col>
                                    <Col md="12">
                                        <Card className="border-0">
                                            <CardBody>
                                                <Row>
                                                    <Col xs="3">
                                                        <Image
                                                            src={logo}
                                                            alt="small"
                                                            className="w-100 rounded-0"
                                                            style={{ height: "100px", objectFit: "fill" }}
                                                        />
                                                    </Col>
                                                    <Col xs="6">
                                                        <h6 style={{ marginBottom: 5 }}>PRESTIGE FOREST HILLS</h6>
                                                        <p className="mb-0 small">Prestige Group</p>
                                                        <p className="mb-0 small"> Mulund West</p>
                                                        <p className="mb-0 small">3, 4 BHK Flats</p>
                                                    </Col>
                                                    <Col xs="3" className="ms-auto text-end">
                                                        <h6 className="mb-0 fw-bold">
                                                            ₹ 3.33 Cr
                                                        </h6>
                                                        <span className="small">
                                                            onwards
                                                        </span>
                                                    </Col>
                                                    <Col className="mt-3">
                                                        <div className="d-flex justify-content-between">
                                                            <p className="mb-0">Marketed by Prestige Group</p>
                                                            <Link href="#" className="btn btn-danger btn-sm rounded-pill">
                                                                See Detail
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Link>
                            </Row>
                        </div>
                    </Col>
                    <Col lg="6" md="12" className="mb-3">
                        <div className="bg-white">
                            <Row>
                                <Link href="#">
                                    <Col md="12">
                                        <Image
                                            src={img3}
                                            alt="small"
                                            className="w-100 rounded-0"
                                            style={{ height: "200px", objectFit: "cover" }}
                                        />
                                    </Col>
                                    <Col md="12">
                                        <Card className="border-0">
                                            <CardBody>
                                                <Row>
                                                    <Col xs="3">
                                                        <Image
                                                            src={logo}
                                                            alt="small"
                                                            className="w-100 rounded-0"
                                                            style={{ height: "100px", objectFit: "fill" }}
                                                        />
                                                    </Col>
                                                    <Col xs="6">
                                                        <h6 style={{ marginBottom: 5 }}>PRESTIGE FOREST HILLS</h6>
                                                        <p className="mb-0 small">Prestige Group</p>
                                                        <p className="mb-0 small"> Mulund West</p>
                                                        <p className="mb-0 small">3, 4 BHK Flats</p>
                                                    </Col>
                                                    <Col xs="3" className="ms-auto text-end">
                                                        <h6 className="mb-0 fw-bold">
                                                            ₹ 3.33 Cr
                                                        </h6>
                                                        <span className="small">
                                                            onwards
                                                        </span>
                                                    </Col>
                                                    <Col className="mt-3">
                                                        <div className="d-flex justify-content-between">
                                                            <p className="mb-0">Marketed by Prestige Group</p>
                                                            <Link href="#" className="btn btn-danger btn-sm rounded-pill">
                                                                See Detail
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Link>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProjectInGallery;
