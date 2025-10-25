"use client";
import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import Image from "next/image";
import AdsBanner1 from "../assets/images/adsbanner1.png";
import AdsBanner2 from "../assets/images/adsbanner2.jpg";


const AdsBanner = () => {
    return (
        <section className="py-5">
            <Container>
                <Row>
                    <Col md='12'>
                        <h4 className="fw-bold mb-4">
                            #PataBadloLifeBadlo Inspiration
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
                    <Col md="6" className="mb-2 ">
                        <Card className="border-top rounded-2 h-100" data-aos="zoom-in-up">
                            <CardBody>
                                <h5 className="mb-3">
                                    Research Insights
                                </h5>
                                <Image src={AdsBanner1} alt="smartmind" className="w-100 rounded " />
                                <div className="row mt-3">
                                    <div className="col-8">
                                        <p>
                                            <strong>
                                                India's Migration Story:
                                            </strong>
                                            Drivers, Disruptions, and Real Estate Impact
                                        </p>
                                    </div>
                                    <div className="col-4 text-end">
                                        <Button className="rounded-pill btn-danger btn-sm">
                                            Click  Here
                                        </Button>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6" className="mb-2">
                        <Card className="border-top rounded-2 h-100" data-aos="zoom-in-up">
                            <CardBody>
                                <h5 className="mb-3">
                                    Contest Alert
                                </h5>
                                <Image src={AdsBanner2} alt="smartmind" className="w-100 rounded " />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>

    );
};

export default AdsBanner;
