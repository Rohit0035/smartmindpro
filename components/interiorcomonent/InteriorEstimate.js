"use client";

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button
} from "reactstrap";
import { FaCalculator, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import imppro from "../../assets/images/pro-1.jpg"
import Link from "next/link";

const InteriorEstimate = () => {
  return (
    <section className="py-5" style={{ background: "#f6f1e5" }}>
      <Container>
        <h3 className="fw-bold mb-4">
          Get Quick Estimate for your{" "}
          <span className="text-st">Home Interiors</span>
        </h3>

        <Row>
          <Col lg="8">
            <Row className="">
              <Col md="6" className="mb-3">
                <Card className="h-100 shadow-sm border-0 rounded-4 py-4" data-aos="zoom-in">
                  <CardBody>
                    <div className="mb-3">
                      <FaCalculator size={30} className="text-st" />
                    </div>

                    <h5 className="fw-bold">Full House</h5>
                    <p className="text-muted small">
                      Know about the approx. cost for doing your Full Home interiors.
                    </p>

                    <Button
                      color="st"
                      className="rounded-pill px-4 btn btn-danger btn-sm"
                    >
                      Calculate <FaArrowRight className="ms-2" />
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" className="mb-3">
                <Card className="h-100 shadow-sm border-0 rounded-4 py-4" data-aos="zoom-in"> 
                  <CardBody>
                    <div className="mb-3">
                      <FaCalculator size={30} className="text-st" />
                    </div>

                    <h5 className="fw-bold">Kitchen & Wardrobes</h5>
                    <p className="text-muted small">
                      Find out the approx. cost for Kitchen & Wardrobe interiors.
                    </p>

                    <Button
                      className="rounded-pill px-4 btn btn-danger btn-sm"
                    >
                      Calculate <FaArrowRight className="ms-2" />
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg="4" className="mt-4 mt-lg-0" data-aos="zoom-in">
            <div
              className="p-3"
              style={{
                background: "#fff",
                borderRadius: "12px",
                maxHeight: "420px",
                overflowY: "auto",
              }}
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">
                  Your Home Interiors Price Guide
                </h6>
                <Link href="/blog" className="text-st small">
                  View All →
                </Link>
              </div>
              <div className="d-flex mb-3">
                <div
                  style={{
                    width: "90px",
                    height: "70px",
                    position: "relative",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={imppro}
                    alt="Laminate"
                    fill
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                </div>

                <div className="ms-3 small">
                  Laminates for Interiors - Types, Top Brands, & Prices
                </div>
              </div>
              <div className="d-flex mb-3">
                <div
                  style={{
                    width: "90px",
                    height: "70px",
                    position: "relative",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={imppro}
                    alt="MDF Board"
                    fill
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                </div>

                <div className="ms-3 small">
                  MDF Board vs HDF Board - Which to Choose
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InteriorEstimate;
