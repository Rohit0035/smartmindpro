"use client";

import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const NearbyLocalities = () => {
  const localities = [
    {
      id: 1,
      name: "Block G Saket",
      price: "₹ 4,533 - ₹ 40,909 per sqft",
      rating: 4.5,
      reviews: "2 reviews",
      sale: "11 Properties for Sale",
      rent: "6 Properties for Rent",
    },
    {
      id: 2,
      name: "Block E Saket",
      price: "₹ 16,111 - ₹ 29,000 per sqft",
      rating: 4.5,
      reviews: "3 reviews",
      sale: "4 Properties for Sale",
      rent: "4 Properties for Rent",
    },
    {
      id: 3,
      name: "Block H Saket",
      price: "₹ 3,750 - ₹ 23,750 per sqft",
      rating: 0.0,
      reviews: "1 reviews",
      sale: "6 Properties for Sale",
      rent: "4 Properties for Rent",
    },
    {
      id: 4,
      name: "Saket",
      price: "₹ 2,716 - ₹ 23,84,615 per sqft",
      rating: 4.3,
      reviews: "520 reviews",
      sale: "369 Properties for Sale",
      rent: "765 Properties for Rent",
    },
  ];

  return (
    <section className="py-2 bg-light" id="similarlocalities">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold">
              F Block Saket Nearby Localities
            </h2>
          </Col>
        </Row>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {localities.map((item) => (
            <SwiperSlide key={item.id}>
              <Card className="h-100 border rounded-3">
                <CardBody>
                  <h5 className="fw-semibold mb-2">{item.name}</h5>

                  <p className="text-muted small mb-2">
                    {item.price}
                  </p>
                  <div className="d-flex align-items-center mb-2">
                    <span className="fw-semibold me-1">
                      {item.rating}/5
                    </span>
                    <FaStar className="text-warning me-1" size={14} />
                    <span className="text-muted small">
                      {item.reviews}
                    </span>
                  </div>

                  <p className="small mb-1">
                    {item.sale}
                  </p>

                  <p className="small mb-3">
                    {item.rent}
                  </p>

                  <Button
                    outline
                    color="primary"
                    size="sm"
                    className="rounded-pill"
                  >
                    Explore Locality
                  </Button>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-4">
          <Link
            href="/localities"
            className="text-st fw-semibold text-decoration-none"
          >
            Check all Localities in New Delhi
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default NearbyLocalities;
