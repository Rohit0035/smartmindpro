"use client";
import React from "react";
import Link from "next/link";
import { Container, Row, Col, Button } from "reactstrap";
import { IoChevronForward } from "react-icons/io5";

const cities = [
  "Bangalore",
  "New Delhi",
  "Hyderabad",
  "Gurgaon",
  "Noida",
  "Kolkata",
  "Pune",
  "Mumbai",
];

const HomeInteriorHero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        padding: "80px 0",
        color: "#fff",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
        }}
      ></div>

      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="justify-content-center text-center">
          <Col lg="8">
            <h2 className="fw-bold mb-3">
              Home Interior Services by <br />
              <span style={{ color: "#ffcc00" }}>Smartmind</span>
            </h2>

            <p className="mb-4 text-white">
              Check out the best Interior Designers in
            </p>

            {/* City Buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {cities.map((city, index) => (
                <Link
                  key={index}
                  href={`/interior/${city.toLowerCase().replace(" ", "-")}`}
                  className="text-decoration-none"
                >
                  <Button
                    color="light"
                    className="rounded-pill px-4 py-2 d-flex align-items-center btn-sm"
                  >
                    {city}
                    <IoChevronForward className="ms-2 text-danger" />
                  </Button>
                </Link>
              ))}

              {/* Select City Button */}
              <Button
                className="rounded-pill px-4 py-2 btn-sm btn-danger "
              >
                Select your city
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeInteriorHero;
