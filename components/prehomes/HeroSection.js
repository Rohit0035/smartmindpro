"use client";
import React, { useState } from "react";
import Select from "react-select";
import { Container, Row, Col, Button, InputGroup, Input } from "reactstrap";
import { FaSearch, FaMapMarkerAlt, FaHome, FaRupeeSign } from "react-icons/fa";
import FilterMobileSidebar from "../bottomnav/FilterMobileSidebar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import proimg from "../../assets/images/pro-1.jpg"
import Image from "next/image";
import Link from "next/link";

// Custom styles for react-select
const selectStyles = {
    control: (provided) => ({
        ...provided,
        border: "none",
        boxShadow: "none",
        backgroundColor: "transparent",
        fontSize: "14px",
        cursor: "pointer",
        minWidth: "100%",
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: "#6e2e36",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#fcebea" : "white",
        color: "#333",
        "&:hover": { backgroundColor: "#f8d7da" },
        fontSize: "12px",
        textAlign: "left",
    }),
};

const HeroSection = () => {
    const [activeTab, setActiveTab] = useState("Buy");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const cityOptions = [
        { value: "Bangalore", label: "Bangalore" },
        { value: "Hyderabad", label: "Hyderabad" },
        { value: "Chennai", label: "Chennai" },
        { value: "Mumbai", label: "Mumbai" },
    ];

    const propertyOptions = [
        { value: "flat", label: "Flat +9" },
        { value: "villa", label: "House/Villa" },
        { value: "plot", label: "Plot" },
    ];

    const budgetOptions = [
        { value: "budget", label: "Budget" },
        { value: "below10", label: "Below ₹10,000" },
        { value: "10to25", label: "₹10,000 - ₹25,000" },
        { value: "above25", label: "Above ₹25,000" },
    ];

    const tabs = ["Buy", "Rent", "Plot"];

    return (
        <>
            <section className="text-start prehomehero" style={{ backgroundImage: '' }}>
                <Container>
                    <Row>
                        <Col md="9" className="mb-4">
                            <h2 className="fw-medium mb-4  text-white">
                                Welcome back! Choose from 3000+ <span className="fst-italic fw-bold">Premium Homes</span>
                            </h2>
                            <div className="d-flex justify-content-start flex-wrap gap-3 mb-4">
                                {tabs.map((tab) => (
                                    <Button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`btn bg-transparent border-0 position-relative fw-medium ${activeTab === tab ? "text-warning" : "text-white"
                                            }`}
                                    >
                                        {tab}
                                        {activeTab === tab && (
                                            <span
                                                className="position-absolute start-0 bottom-0 w-100 bg-danger rounded-pill"
                                                style={{ height: "2px" }}
                                            />
                                        )}
                                    </Button>
                                ))}
                            </div>
                            <div
                                className="border rounded-5 shadow-sm p-2 bg-white  d-none d-lg-block"
                                style={{ maxWidth: "850px" }}
                            >
                                <Row className="align-items-start g-0">
                                    <Col lg="3" className="border-end d-flex align-items-center px-3 py-2">
                                        <FaMapMarkerAlt className="text-st me-2" />
                                        <Select options={cityOptions} placeholder="Bangalore" styles={selectStyles} />
                                    </Col>

                                    <Col lg="3" className="border-end d-flex align-items-center px-3 py-2">
                                        <FaHome className="text-st me-2" />
                                        <Select options={propertyOptions} placeholder="Flat +9" styles={selectStyles} />
                                    </Col>

                                    <Col lg="3" className="border-end d-flex align-items-center px-3 py-2">
                                        <FaRupeeSign className="text-st me-2" />
                                        <Select options={budgetOptions} placeholder="Budget" styles={selectStyles} />
                                    </Col>

                                    <Col lg="3" className="px-3 py-2">
                                        <Button color="danger" className="rounded-pill w-100">
                                            <FaSearch className="me-2" /> Search
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                            <div className="d-block d-lg-none">
                                <InputGroup
                                    onClick={handleToggleSidebar}
                                    className="rounded-pill shadow-sm border border-primary"
                                >
                                    <Input readOnly placeholder="Search by City..." className="border-0 ps-4" />
                                    <Button color="primary">
                                        <FaSearch />
                                    </Button>
                                </InputGroup>
                            </div>
                        </Col>
                        <Col md="3">
                            <Swiper
                                modules={[Autoplay, Navigation]}
                                spaceBetween={12}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                navigation={true}
                                breakpoints={{
                                    576: { slidesPerView: 1 },
                                    768: { slidesPerView: 1 },
                                    992: { slidesPerView: 1 },
                                }}
                                className="property-mini-slider"
                            >
                                <SwiperSlide>
                                    <div className=" rounded-4 text-center shadow-sm">
                                        <Link href="#">
                                            <Image
                                                src={proimg}
                                                alt="Property 1"
                                                width={300}
                                                height={120}
                                                className="img-fluid rounded-3 mb-2 w-100 object-fit-cover"
                                            />
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className=" rounded-4 text-center shadow-sm">
                                        <Link href="#">
                                            <Image
                                                src={proimg}
                                                alt="Property 1"
                                                width={300}
                                                height={120}
                                                className="img-fluid rounded-3 mb-2 w-100 object-fit-cover"
                                            />
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className=" rounded-4  text-center shadow-sm">
                                        <Link href="#">
                                            <Image
                                                src={proimg}
                                                alt="Property 1"
                                                width={300}
                                                height={120}
                                                className="img-fluid rounded-3 mb-2 w-100 object-fit-cover"
                                            />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>

            <FilterMobileSidebar isOpen={isSidebarOpen} toggle={handleToggleSidebar} />
        </>
    );
};

export default HeroSection;
