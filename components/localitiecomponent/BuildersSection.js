"use client";

import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css/navigation";
import logobuilder from "../../assets/images/cpm-logo.png"
import Image from "next/image";

const BuildersSection = () => {
  const builders = [
    {
      id: 1,
      logo: logobuilder,
      name: "DLF Ltd.",
      since: "Since 1950",
      desc: "At DLF, we take pride in our unmatched real estate legacy.",
      total: "Total 14 projects",
      completed: "13 Completed",
    },
    {
      id: 2,
      logo: logobuilder,
      name: "Godrej Properties",
      since: "Since 1990",
      desc: "Total Projects: 100+ Projects Completed across India.",
      total: "Total 3 projects",
      completed: "",
    },
    {
      id: 3,
      logo: logobuilder,
      name: "Parsvnath Developers Ltd.",
      since: "Since 2010",
      desc: "There are few parallels in the annual growth story.",
      total: "Total 6 projects",
      completed: "5 Completed",
    },
    {
      id: 4,
      logo: logobuilder,
      name: "Unity Group",
      since: "Since 1996",
      desc: "Unity Group started in 1996 with a clear vision.",
      total: "Total 12 projects",
      completed: "10 Completed",
    },
  ];

  return (
    <section className="py-5 bg-light" id="builders">
      <Container>
        <Row className="mb-4">
          <Col>
            <h4 className="fw-bold">
              15 Builders in F Block Saket
            </h4>
          </Col>
        </Row>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {builders.map((builder) => (
            <SwiperSlide key={builder.id}>
              <Card className=" border-0 shadow-sm rounded-3" style={{height:'300px'}}>
                <CardBody>
                  <div className="text-center mb-3">
                    <Image
                      src={builder.logo}
                      alt={builder.name}
                      style={{ height: "40px", objectFit: "contain" }}
                    />
                  </div>

                  <hr />

                  <h6 className="fw-bold">{builder.name}</h6>
                  <p className="text-muted small mb-1">
                    {builder.since}
                  </p>
                  <p className="text-muted small">
                    {builder.desc}
                  </p>

                  <p className="small mb-1">{builder.total}</p>
                  {builder.completed && (
                    <p className="fw-semibold small">
                      {builder.completed}
                    </p>
                  )}

                  {/* <Button
                    outline
                    color="danger"
                    size="sm"
                    className="rounded-pill mt-2"
                  >
                    See Details
                  </Button> */}
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default BuildersSection;
