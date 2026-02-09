"use client";

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";

const localities = [
  "Andheri West",
  "Mira Road East",
  "Mulund West",
  "Bandra East",
  "Worli",
  "Mahalakshmi",
  "Goregaon West",
  "Borivali East",
  "Virar West",
  "Chembur",
  "Kandivali East",
  "Mira Road Area",
  "Malad West",
  "Byculla",
  "Wadala",
  "Andheri East",
  "Bhandup West",
  "Kandivali West",
  "Borivali West",
  "Malad East",
  "Bandra West",
  "Parel",
  "Jogeshwari West",
  "Mira Bhayandar",
  "Mahim",
  "Powai",
  "Prabhadevi",
  "Nalasopara West",
  "Goregaon East",
  "Dahisar East",
];



const ProjectInLocality = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="mb-3">
          <Col>
            <h4 style={{ fontWeight: 600 }}>
              Localities
              <Dropdown
                isOpen={open}
                toggle={() => setOpen(!open)}
                style={{ display: "inline-block" }}
                className="ms-1"
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
                  <Row className="px-3 py-2">
                    <Col md="6">
                      <h6 className="fw-bold">Popular Cities</h6>
                      {[
                        "Pune",
                        "Navi Mumbai",
                        "Chennai",
                        "Thane",
                        "Ahmedabad",
                        "Jaipur",
                        "Surat",
                        "Gurgaon",
                        "Noida",
                      ].map((city, i) => (
                        <div
                          key={i}
                          style={{
                            padding: "4px 0",
                            fontSize: 14,
                            cursor: "pointer",
                          }}
                        >
                          {city}
                        </div>
                      ))}
                    </Col>

                    <Col md="6">
                      {[
                        "Bangalore",
                        "Mumbai",
                        "Nashik",
                        "Kolkata",
                        "Hyderabad",
                        "Greater Noida",
                        "Vadodara",
                        "Lucknow",
                        "Udaipur",
                      ].map((city, i) => (
                        <div
                          key={i}
                          style={{
                            padding: "4px 0",
                            fontSize: 14,
                            cursor: "pointer",
                          }}
                        >
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
        <Row>
          <Col>
            <div className="d-flex flex-wrap gap-2">
              {localities.map((tag, index) => (
                <Link
                  key={index}
                  href={`/projects/${tag
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="text-decoration-none"
                >
                  <span
                    className="border px-3 py-2 bg-white d-inline-block"
                    style={{
                      fontSize: 14,
                      cursor: "pointer",
                      borderRadius: "4px",
                    }}
                  >
                    {tag}
                  </span>
                </Link>
              ))}
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default ProjectInLocality;
