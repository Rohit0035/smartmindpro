"use client";

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Input,
} from "reactstrap";
import Select from "react-select";
import { FaAngleDown } from "react-icons/fa";

const ProjectFilterBar = () => {
  const [propertyOpen, setPropertyOpen] = useState(false);

  const cityOptions = [
    { value: "chennai", label: "Chennai" },
    { value: "bangalore", label: "Bangalore" },
    { value: "mumbai", label: "Mumbai" },
  ];

  const budgetOptions = [
    { value: "10-20", label: "₹10L - ₹20L" },
    { value: "20-50", label: "₹20L - ₹50L" },
    { value: "50-1cr", label: "₹50L - ₹1Cr" },
  ];

  return (
    <section style={{ background: "#f8f9fa", padding: "60px 0" }} id="searchproject">
      <Container>

        <Row className="mb-4 text-center">
          <Col>
            <h2 className="mb-0 fw-bold">
              Checkout New Projects in your City
            </h2>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg="12">
            <div
              style={{
                background: "#fff",
                border: "1px solid #e5e5e5",
                borderRadius: "8px",
                padding: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <Row className="align-items-center">

                <Col lg="3" md="6" className="mb-2">
                  <Select
                    options={cityOptions}
                    defaultValue={cityOptions[0]}
                    styles={{
                      control: (base) => ({
                        ...base,
                        height: "48px",
                        borderRadius: "6px",
                      }),
                    }}
                  />
                </Col>

                <Col lg="4" md="6" className="mb-2">
                  <Dropdown
                    isOpen={propertyOpen}
                    toggle={() => setPropertyOpen(!propertyOpen)}
                  >
                    <DropdownToggle
                      style={{
                        width: "100%",
                        height: "48px",
                        background: "#fff",
                        border: "1px solid #ced4da",
                        color: "#000",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0 15px",
                        borderRadius: "6px",
                      }}
                    >
                      Property Type
                      <FaAngleDown />
                    </DropdownToggle>

                    <DropdownMenu className="wd-serproin">
                      <Row>

                        <Col md="4">
                          <h6 style={{ fontWeight: 600 }}>RESIDENTIAL</h6>
                          <div><Input type="checkbox" /> Flat</div>
                          <div><Input type="checkbox" /> House/Villa</div>
                          <div><Input type="checkbox" /> Plot/Land</div>
                        </Col>

                        <Col md="4">
                          <h6 style={{ fontWeight: 600 }}>COMMERCIAL</h6>
                          <div><Input type="checkbox" /> Office Space</div>
                          <div><Input type="checkbox" /> Shop/Showroom</div>
                          <div><Input type="checkbox" /> Commercial Land</div>
                          <div><Input type="checkbox" /> Warehouse/Godown</div>
                        </Col>

                        <Col md="4">
                          <h6 style={{ fontWeight: 600 }}>OTHERS</h6>
                          <div><Input type="checkbox" /> Agricultural Land</div>
                          <div><Input type="checkbox" /> Farm House</div>
                        </Col>

                      </Row>
                    </DropdownMenu>
                  </Dropdown>
                </Col>

                <Col lg="3" md="6" className="mb-2">
                  <Select
                    options={budgetOptions}
                    placeholder="Budget"
                    styles={{
                      control: (base) => ({
                        ...base,
                        height: "48px",
                        borderRadius: "6px",
                      }),
                    }}
                  />
                </Col>

                <Col lg="2" md="6" >
                  <Button
                    style={{
                      width: "100%",
                      height: "48px",
                      background: "#0d55a3",
                      border: "none",
                      fontWeight: "600",
                      borderRadius: "6px",
                    }}
                  >
                    SEARCH PROJECTS
                  </Button>
                </Col>

              </Row>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default ProjectFilterBar;
