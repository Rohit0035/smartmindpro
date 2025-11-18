"use client";
import React, { useState } from "react";
import Select from "react-select";
import { Container, Row, Col, Button, InputGroup, Input } from "reactstrap";
import { FaSearch, FaMapMarkerAlt, FaHome, FaRupeeSign } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import FilterMobileSidebar from "./bottomnav/FilterMobileSidebar";

// Custom styles for react-select (to match MagicBricks)
const selectStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    backgroundColor: "transparent",
    fontSize: "14px",
    cursor: "pointer",
    minWidth: '100%'

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
    TextAlign: 'left'
  }),
};

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("Buy");


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Dummy options for React-Select
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

  const tabs = [
    "Buy",
    "Rent",
    // "magicHomes",
    // "PG",
    "Plot",
    // "Commercial",
    // "Post Free Property Ad",
  ];

  return (
    <>
      <section className="py-5 text-center bg-white">
        <Container>
          {/* Heading */}
          <h2 className="fw-medium mb-4 text-center">
            Welcome back!{" "}
            <span className="text-primary fw-bold">
              <TypeAnimation
                sequence={[
                  "Find Your Dream Home",
                  2000,
                  "Upgrade Your Lifestyle",
                  2000,
                  "Invest in Smart Properties",
                  2000,
                  "Discover Your Perfect Space",
                  2000,
                  "Begin a New Chapter",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </h2>

          {/* Tabs */}
          <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
            {tabs.map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`btn bg-transparent border-0 position-relative fw-medium ${activeTab === tab ? "text-st" : "text-secondary"
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <span
                    className="position-absolute start-0 bottom-0 w-100 bg-danger rounded-pill"
                    style={{ height: "2px" }}
                  ></span>
                )}
              </Button>
            ))}
          </div>

          {/* Search Bar deasktop and large start*/}
          <div className="border rounded-5 shadow-sm p-2 bg-white mx-auto d-none d-lg-block" style={{ maxWidth: "850px" }}>
            <Row className="align-items-start g-0">
              {/* Location */}
              <Col lg="3" md="4" sm="12" className="border-end d-flex align-items-center px-3 py-2">
                <FaMapMarkerAlt className="text-st me-2" />
                <Select
                  options={cityOptions}
                  placeholder="Bangalore"
                  styles={selectStyles}
                  className="flex-grow-1"
                />
                {/* <small className="text-muted ms-2 d-none d-md-inline">Add more...</small> */}
              </Col>

              {/* Property Type */}
              <Col lg="3" md="4" sm="12" className="border-end d-flex align-items-center px-3 py-2">
                <FaHome className="text-st me-2" />
                <Select
                  options={propertyOptions}
                  placeholder="Flat +9"
                  styles={selectStyles}
                  className="flex-grow-1"
                />
              </Col>

              {/* Budget */}
              <Col lg="3" md="3" sm="12" className="border-end d-flex align-items-center px-3 py-2">
                <FaRupeeSign className="text-st me-2" />
                <Select
                  options={budgetOptions}
                  placeholder="Budget"
                  styles={selectStyles}
                  className="flex-grow-1 border-0"
                />
              </Col>

              {/* Search Button */}
              <Col lg="3" md="12" sm="12" className="text-center text-md-end px-3 py-2">
                <Button color="danger" className="rounded-pill px-4 w-100 d-flex justify-content-center align-items-center">
                  <FaSearch className="me-2" /> Search
                </Button>
              </Col>
            </Row>
          </div>
          {/* Search Bar deasktop and large close*/}

          {/* mobile and tablet view search onlick open sidebar start*/}
          <div className="d-block d-lg-none">
            <InputGroup
              onClick={handleToggleSidebar}
              className="rounded-pill shadow-sm overflow-hidden  border border-primary"
              style={{ backgroundColor: "#fff" }}
            >
              <Input
                placeholder="Search by City..."
                readOnly
                className="border-0 rounded-pill ps-4 py-2"
                style={{
                  boxShadow: "none",
                  outline: "none",
                }}
              />
              <Button
                color="primary"
                className="rounded-pill px-4"
                style={{
                  backgroundColor: "#0d55a3",
                  border: "none",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
              >
                <FaSearch />
              </Button>
            </InputGroup>
          </div>
          {/* mobile and tablet view search onlick open sidebar close*/}

        </Container>
      </section>
      {/* ===== Sidebar (Offcanvas) ===== */}
      <FilterMobileSidebar
        isOpen={isSidebarOpen}
        toggle={handleToggleSidebar}
      />
    </>
  );
}
