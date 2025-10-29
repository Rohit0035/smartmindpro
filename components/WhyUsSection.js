"use client";
import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaCheckCircle } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import logodemo from "../assets/images/cpm-logo.png"

const WhyUsSection = () => {
    return (
        <Container
            className="my-5 py-5 position-relative rounded-4 shadow-sm text-white whyus-container"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
                overflow: "hidden",
            }}
        >
            {/* Overlay for better text visibility */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    background: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(255,255,255,0.8))",
                    zIndex: 1,
                }}
            ></div>

            <div className="position-relative z-2">
                <Row className="align-items-center px-3 px-md-5 gy-4">
                    {/* Left Content */}
                    <Col md="6" className="text-center text-md-start">
                        <h3 className="fw-bold mb-2">
                            <span className="text-warning">Transform</span> your Home with
                        </h3>
                        <h2 className="fw-bold text-white">SmartMind Interiors</h2>
                    </Col>

                    {/* Right Content */}
                    <Col md="6" className="text-dark">
                        <div
                            className="p-4 rounded-4 shadow-sm bg-white bg-opacity-75"
                            data-aos="fade-left"
                        >
                            <h5 className="fw-bold mb-3 text-dark">Why choose us?</h5>
                            <p className="text-dark mb-2">
                                <FaCheckCircle className="text-success me-2" />
                                Compare & choose from{" "}
                                <span className="fw-bold text-st">
                                    300+ top verified interior brands
                                </span>
                            </p>
                            <p className="text-dark mb-3">
                                <FaCheckCircle className="text-success me-2" />
                                <span className="text-st fw-bold">
                                    Calculate your interiors cost instantly
                                </span>{" "}
                                with our advanced estimator
                            </p>

                            {/* Offer & Top Brands */}
                            <div className="d-flex align-items-center flex-wrap gap-3 mt-3">
                                <div className="bg-warning text-dark px-3 py-1 fw-semibold rounded-3 small">
                                    Save upto 40%
                                </div>
                                <div className="text-secondary small fw-semibold">
                                    Top Brands
                                </div>
                            </div>

                            {/* Scrolling Brand Logos */}
                            <div className="my-3">
                                <Marquee speed={50} gradient={false}>
                                    <div className="d-flex align-items-center gap-5 mx-3">
                                        <Image
                                            src={logodemo}
                                            alt="Dream Dots"
                                            height="40"
                                        />
                                        <Image
                                            src={logodemo}
                                            alt="Furdo"
                                            height="40"
                                        />
                                        <Image
                                            src={logodemo}
                                            alt="Livspace"
                                            height="40"
                                        />
                                        <Image
                                            src={logodemo}
                                            alt="Livin Interiors"
                                            height="40"
                                        />
                                        <Image
                                            src={logodemo}
                                            alt="MagicHome"
                                            height="40"
                                        />
                                    </div>
                                </Marquee>
                            </div>

                            {/* Action Buttons */}
                            <div className="d-flex gap-3 mt-3 flex-wrap">
                                <Button color="danger" className="rounded-pill px-4 fw-semibold">
                                    Explore Brands
                                </Button>
                                <Button
                                    outline
                                    color="danger"
                                    className="rounded-pill px-4 fw-semibold"
                                >
                                    Get Instant Quote
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* Custom styles */}
            <style jsx>{`
        .whyus-container {
          position: relative;
          border: 1px solid #eee;
          overflow: hidden;
        }
        .z-2 {
          z-index: 2;
        }

        @media (max-width: 768px) {
          .whyus-container {
            padding: 3rem 1rem;
          }
          h2,
          h3 {
            text-align: center;
          }
        }
      `}</style>
        </Container>
    );
};

export default WhyUsSection;
