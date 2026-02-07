"use client";
import React, { useRef, useEffect, useState } from "react";
import { Col, Nav, NavItem, NavLink, Button, Container, Row } from "reactstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectInStickyNav = () => {
    const scrollRef = useRef(null);
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowNav(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const slideLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const slideRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    if (!showNav) return null;

    return (
        <div
            className="d-none d-md-block bg-white border-bottom py-2"
            style={{
                position: "sticky",
                top: "4.5rem",
                zIndex: 1000
            }}
        >
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="d-flex align-items-center">
                            <Button
                                color="light"
                                className="border me-2"
                                onClick={slideLeft}
                            >
                                <FaChevronLeft />
                            </Button>

                            <div
                                ref={scrollRef}
                                className="flex-grow-1 overflow-hidden"
                            >
                                <Nav className="flex-nowrap align-items-center">
                                    {[
                                        ["searchproject", "Search Projects"],
                                        ["projectgallery", "Project Gallery"],
                                        ["featureddevelopers", "Featured Developers"],
                                        ["upcominglocalities", "Upcoming Localities"],
                                        ["topprojects", "Top Projects"],
                                        ["pricetrend", "Price Trends"],
                                        ["calculators", "Calculators"]
                                    ].map(([id, label]) => (
                                        <NavItem key={id}>
                                            <NavLink
                                                href={`#${id}`}
                                                className="fw-semibold text-dark px-3 text-nowrap small"
                                            >
                                                {label}
                                            </NavLink>
                                        </NavItem>
                                    ))}
                                </Nav>
                            </div>

                            <Button
                                color="light"
                                className="border ms-2"
                                onClick={slideRight}
                            >
                                <FaChevronRight />
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProjectInStickyNav;
