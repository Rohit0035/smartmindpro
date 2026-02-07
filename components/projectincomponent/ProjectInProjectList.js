"use client";

import React from "react";
import { Container, Card, CardBody, Button } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaMapMarkerAlt } from "react-icons/fa";
import "swiper/css/navigation";
import Image from "next/image";
import ProImg from "../../assets/images/pro-1.jpg"

const projects = [
  {
    city: "Mumbai",
    title: "SD ALPINE",
    developer: "SD Corporation Pvt Ltd",
    location: "Kandivali East",
    config: "2, 3 BHK Flats",
    price: "2.70",
    image: ProImg,
  },
  {
    city: "Mumbai",
    title: "RUSTOMJEE CROWN",
    developer: "Rustomjee",
    location: "Prabhadevi",
    config: "3, 4, 5 BHK Flats",
    price: "9.72",
    image: ProImg,
  },
  {
    city: "Mumbai",
    title: "SHAPOORJI PALLONJI THE ODYSSEY",
    developer: "Shapoorji Pallonji Real Estate",
    location: "Marine Drive",
    config: "3 BHK Flats",
    price: "14.49",
    image: ProImg,
  },
  {
    city: "Mumbai",
    title: "RAHEJA MODERN VIVAREA",
    developer: "K Raheja Corp",
    location: "Mahalaxmi",
    config: "3, 4 BHK Flats",
    price: "17.75",
    image: ProImg,
  },
];

const ProjectInProjectList = () => {
  return (
    <section className=" bg-light">
      <Container>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index}>
              <Card className="border-0 h-100">
                <div className="position-relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-100 rounded-0"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <span
                    className="position-absolute bottom-0 start-0 text-white px-2 py-1"
                    style={{ background: "rgba(0,0,0,0.6)" }}
                  >
                    {item.city}
                  </span>
                </div>
                <CardBody>
                  <h6 className="fw-bold text-uppercase small">
                    {item.title}
                  </h6>

                  <p className="text-muted small mb-1">
                    {item.developer}
                  </p>

                  <p className="text-muted small mb-1 d-flex align-items-center gap-1">
                    <FaMapMarkerAlt size={12} />
                    {item.location}
                  </p>

                  <p className="small mb-1">{item.config}</p>

                  <p className="fw-bold mb-2">
                    ₹ {item.price} Cr{" "}
                    <span className="fw-normal text-muted small">
                      onwards
                    </span>
                  </p>

                  <Button size="sm" color="danger">
                    See Details
                  </Button>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>

  );
};

export default ProjectInProjectList;
