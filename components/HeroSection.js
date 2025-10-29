"use client";
import React, { useState } from "react";
import Select from "react-select";
import { Container, Row, Col, Button } from "reactstrap";
import { FaSearch, FaMapMarkerAlt, FaHome, FaRupeeSign } from "react-icons/fa";

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
    TextAlign:'left'
  }),
};

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("Buy");

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
    <section className="py-5 text-center bg-white">
      <Container>
        {/* Heading */}
        <h2 className="fw-medium mb-4">
          Welcome back! Start your{" "}
          <span className="fw-bold text-dark">#PataBadloLifeBadlo</span> Journey
        </h2>

        {/* Tabs */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
          {tabs.map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`btn bg-transparent border-0 position-relative fw-medium ${activeTab === tab ? "text-danger" : "text-secondary"
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

        {/* Search Bar */}
        <div className="border rounded-5 shadow-sm p-2 bg-white mx-auto" style={{ maxWidth: "850px" }}>
          <Row className="align-items-start g-0">
            {/* Location */}
            <Col lg="3" md="4" sm="12" className="border-end d-flex align-items-center px-3 py-2">
              <FaMapMarkerAlt className="text-danger me-2" />
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
              <FaHome className="text-danger me-2" />
              <Select
                options={propertyOptions}
                placeholder="Flat +9"
                styles={selectStyles}
                className="flex-grow-1"
              />
            </Col>

            {/* Budget */}
            <Col lg="3" md="3" sm="12" className="border-end d-flex align-items-center px-3 py-2">
              <FaRupeeSign className="text-danger me-2" />
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
      </Container>
    </section>
  );
}
