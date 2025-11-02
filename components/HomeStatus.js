"use client";
import React, { useEffect } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { FaClock, FaKey, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import statusimg from "../assets/images/status-img.jpg";
const HomeStatus = () => {


    return (
        <Container className="my-5">
            <h4 className="mb-4" data-aos="fade-right">
                Because you searched <span className="fw-bold">Bangalore</span>
            </h4>

            <Row>
                {/* Card 1 */}
                <Col sm="12" md="6" lg="3" className="mb-3" data-aos="zoom-in-up">
                    <Card
                        className="border-0 shadow-sm h-100 position-relative"
                        style={{ backgroundColor: "#f9d2d736" }}
                    >
                        <CardBody>
                            <h5 className="text-dark">
                                <span className="text-st fw-bold me-2 fs-2">24K+</span>
                                Properties listed for you
                            </h5>
                            <a
                                href="/property"
                                className="text-st fw-semibold text-decoration-none mt-2 mb-0 d-inline-block"
                            >
                                Continue last search →
                            </a>
                            <FaClock
                                size={35}
                                color="#f9b2344f"
                                className="position-absolute"
                                style={{ bottom: "20px", right: "10px", opacity: 0.6 }}
                            />
                        </CardBody>
                    </Card>
                </Col>

                <Col sm="12" md="6" lg="3" className="mb-3" data-aos="zoom-in-up">
                    <Card
                        className="border-0 shadow-sm h-100 position-relative"

                    >
                        <CardBody className="p-0">
                            <Image
                                src={statusimg}
                                alt="Status"
                                className="w-100"
                                style={{ borderRadius: "8px" }}
                            />
                        </CardBody>
                    </Card>
                </Col>

                {/* Card 2 */}
                <Col sm="12" md="6" lg="3" className="mb-3" data-aos="zoom-in-up" data-aos-delay="200">
                    <Card
                        className="border-0 shadow-sm h-100 position-relative"
                        style={{ backgroundColor: "#fff7e8" }}
                    >
                        <CardBody>
                            <h5 className="text-dark">
                                <span className="text-st fw-bold me-2 fs-2">100+</span>
                                Owner Properties in Bangalore
                            </h5>
                            <a
                                href="#"
                                className="text-st fw-semibold text-decoration-none mt-2 mb-0 d-inline-block"
                            >
                                See all →
                            </a>
                            <FaKey
                                size={35}
                                color="#f9b2344f"
                                className="position-absolute"
                                style={{ bottom: "20px", right: "10px", opacity: 0.6 }}
                            />
                        </CardBody>
                    </Card>
                </Col>

                {/* Card 3 */}
                <Col sm="12" md="6" lg="3" className="mb-3" data-aos="zoom-in-up" data-aos-delay="400">
                    <Card
                        className="border-0 shadow-sm h-100 position-relative"
                        style={{ backgroundColor: "#fff8f2" }}
                    >
                        <CardBody>
                            <h5 className="text-dark">
                                <span className="text-st fw-bold me-2 fs-2">200+</span>
                                Properties in Popular localities
                            </h5>
                            <a
                                href="#"
                                className="text-st fw-semibold text-decoration-none mt-2 mb-0 d-inline-block"
                            >
                                See all →
                            </a>
                            <FaMapMarkerAlt
                                size={35}
                                color="#f9b2344f"
                                className="position-absolute"
                                style={{ bottom: "20px", right: "10px", opacity: 0.6 }}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeStatus;
