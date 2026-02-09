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

const projectTags = [
  "Modirealty Olive",
  "Silver Serenity",
  "Xcellent Rustomjee",
  "Vista Bay",
  "Shreeram Mehta Marquina 1978",
  "Shree One Uttam",
  "Equinox Embassy Citadel",
  "Rishabraj Avyaana",
  "Raymond The Address By GS",
  "Bhoomi Amogh",
  "Satgurus Rendezvous",
  "Lodha Elaris",
  "Jet Triveni Heights",
  "Prakash Zindagi Chs",
  "Kk Elegance",
  "Empire Aashirwad",
  "Morya Galani Homes",
  "Shelaji Gold Leaf",
  "Pardis Sai Saburi",
  "Rishabraj Forest Front",
  "Jet Trinity Towers",
  "Shivoham Avyukta Jayesh",
  "Sixty 3 W E Bizpark",
  "Raghav Utopia",
  "Multi Skylark Heights",
  "Reliable Unique Fortune",
  "Jaydeep And Gami Evara",
  "Arth Casa Bella",
  "Agami Pavillion",
  "Crest 4 Pali Hill",
  "Artek Park",
];

const ProjectInTags = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="pt-5 bg-white">
      <Container>

        {/* Same Dropdown Heading */}
        <Row className="mb-3">
          <Col>
            <h4 style={{ fontWeight: 600 }}>
              Projects
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

        {/* Bottom Project Tags */}
        <Row>
          <Col>
            <div className="d-flex flex-wrap gap-2">
              {projectTags.map((tag, index) => (
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

export default ProjectInTags;
