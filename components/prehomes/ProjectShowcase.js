"use client";
import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import proimg from "../../assets/images/pro-1.jpg";

const images = [proimg, proimg, proimg];

const ProjectShowcase = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="py-4">
      <Container>
        <Row className="align-items-center mb-3">
          <Col>
            <h4 className="fw-bold">
              Grand Project Showcase
              <span
                style={{
                  display: "block",
                  width: "60px",
                  height: "3px",
                  background: "#6e2e36",
                  marginTop: "5px",
                }}
              ></span>
            </h4>
          </Col>
        </Row>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              {/* ================= IMAGE ================= */}
              <Image
                src={img}
                alt="Project"
                className="w-100 object-fit-cover rounded-4 premst-img"
                priority={i === 0}
                style={{ height: "420px" }}
              />

              {/* ================= MOBILE CARD ================= */}
              <Card className="shadow-sm border-0 mt-3 d-block d-md-none">
                <div className="p-3">
                  <h6 className="fw-bold mb-1">Villa Bellissimo</h6>
                  <small className="text-muted d-block mb-2">
                    By Urbanize Group
                  </small>

                  <p className="fw-semibold mb-1">₹ 4.25 Cr onwards</p>
                  <small className="text-muted d-block">
                    3326 – 4430 sqft · 4 BHK Villas
                  </small>

                  <ul className="list-unstyled small my-2">
                    <li>✔ Swimming Pool</li>
                    <li>✔ Gymnasium</li>
                  </ul>

                  <Button
                    color="danger"
                    size="sm"
                    className="rounded-pill w-100"
                  >
                    View Project
                  </Button>
                </div>
              </Card>

              {/* ================= DESKTOP / TABLET HOVER CARD ================= */}
              <Card
                className="position-absolute top-50 start-0 translate-middle-y shadow-lg border-0 ms-3 d-none d-md-block"
                style={{
                  width: hovered ? "620px" : "420px",
                  transition: "width 0.4s ease",
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <Row className="g-0">
                  <Col md="5" className="p-3 border-end">
                    <h6 className="fw-bold mb-1">Villa Bellissimo</h6>
                    <small className="text-muted d-block mb-2">
                      By Urbanize Group
                    </small>

                    <p className="mb-1 fw-semibold">₹ 4.25 Cr onwards</p>
                    <small className="text-muted d-block">
                      3326 - 4430 sqft
                    </small>
                    <small className="text-muted d-block mb-2">
                      4 BHK Villas
                    </small>

                    <ul className="list-unstyled small mb-0">
                      <li>✔ Swimming Pool</li>
                      <li>✔ Gymnasium</li>
                    </ul>
                  </Col>

                  {hovered && (
                    <Col md="7" className="p-3">
                      <h6 className="fw-semibold">
                        Discover your dream villa
                      </h6>
                      <p className="small text-muted">
                        Fully private homes with high-end specifications.
                      </p>

                      <hr className="my-2" />

                      <p className="small mb-1">
                        <strong>Overall Area:</strong> 8 Acres
                      </p>
                      <p className="small mb-2">
                        <strong>Possession:</strong> Dec 2028
                      </p>

                      <Button
                        color="danger"
                        size="sm"
                        className="rounded-pill px-3"
                      >
                        View Project
                      </Button>
                    </Col>
                  )}
                </Row>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default ProjectShowcase;
