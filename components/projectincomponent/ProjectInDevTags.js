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

const developerTags = [
  "Lodha Developers Limited",
  "Godrej Properties",
  "Sunteck Realty Ltd.",
  "Rustomjee",
  "Kalpataru Ltd.",
  "Ruparel Realty",
  "Prestige Group",
  "Runwal Group",
  "Oberoi Realty Ltd.",
  "Chandak Group",
  "The Wadhwa Group",
  "JP Infra",
  "Adani Realty",
  "Paradigm Realty",
  "L & T Realty",
  "K Raheja Corp",
  "Lodha Group",
  "RNA NG Builders",
  "Shapoorji Pallonji Real Estate",
  "Arkade Group",
  "Hubtown Ltd.",
  "CCI Projects Pvt. Ltd.",
  "Shraddha Prime Projects LTD",
  "Platinum Corp",
  "Runwal Enterprises",
  "Raj Realty Group",
  "Kolte Patil Developers Ltd.",
  "Sanghvi Group",
  "Sayba Group",
  "Romell Group",
];


const ProjectInDevTags = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-0 bg-white">
      <Container>
        <Row className="mb-3">
          <Col>
            <h4 style={{ fontWeight: 600 }}>
              Developers
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
              {developerTags.map((tag, index) => (
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

export default ProjectInDevTags;
