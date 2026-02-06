"use client";
import React, { useRef, useState } from "react";
import {
  Card,
  CardBody,
  Button,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaRegImage } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import proimg from "../../assets/images/pro-1.jpg";
import FloorViewOffcanvas from "./FloorViewOffcanvas";
import EnquiryModal from "../EnquiryModal";

const PropertySection = () => {
  const swiperRef = useRef(null);

  const [activeTab, setActiveTab] = useState("buy");
  const [activeFilter, setActiveFilter] = useState("All");


  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [isFloorViewOpen, setIsFloorViewOpen] = useState(false);

  const toggleFloorView = () => {
    setIsFloorViewOpen(!isFloorViewOpen);
  };

  /* ---------------- PROPERTY DATA ---------------- */
  const properties = [
    {
      id: 1,
      img: proimg,
      price: "₹ 2 Cr",
      emi: "₹1.74 lakh EMI",
      bhk: "3 BHK",
      size: "1431 sq.ft",
      tag: "3 BHK",
      status: "Under Construction",
      agent: "Allen Kunder",
    },
    {
      id: 2,
      img: proimg,
      price: "₹ 3.10 Cr",
      emi: "₹2.69 lakh EMI",
      bhk: "4 BHK",
      size: "2585 sq.ft",
      tag: "4 BHK",
      status: "May ’27",
      agent: "Pin Click",
    },
    {
      id: 3,
      img: proimg,
      price: "₹ 2.05 Cr",
      emi: "₹1.78 lakh EMI",
      bhk: "3 BHK",
      size: "929 sq.ft",
      tag: "3 BHK",
      status: "Under Construction",
      agent: "Vriendar Kumar",
    },
  ];

  /* ---------------- FILTER LOGIC ---------------- */
  const filteredProperties =
    activeFilter === "All"
      ? properties
      : properties.filter((p) => p.tag === activeFilter);

  /* ---------------- SCROLL TO TOP ADVERTISERS ---------------- */

  return (
    <>
      <section className="pt-5 pb-0" id="properties">
        <Card className="border-0 shadow-sm">
          <CardBody>
            {/* HEADER */}
            <h4 className="fw-bold mb-3">
              Properties in Prestige Lavender Fields
            </h4>

            {/* BUY / TOP ADVERTISERS */}
            <Nav tabs className="mb-3 small">
              <NavItem>
                <NavLink
                  className={activeTab === "buy" ? "active fw-semibold" : ""}
                  onClick={() => setActiveTab("buy")}
                >
                  Buy
                </NavLink>
              </NavItem>

            </Nav>

            {/* FILTER PILLS */}
            <div className="d-flex flex-wrap gap-2 mb-4">
              {["All", "1 BHK", "2 BHK", "3 BHK", "4 BHK"].map((item) => (
                <Button
                  key={item}
                  size="sm"
                  outline
                  color={activeFilter === item ? "success" : "secondary"}
                  onClick={() => setActiveFilter(item)}
                  className="rounded-pill px-3"
                >
                  {item}
                </Button>
              ))}
            </div>

            {/* NAV BUTTONS */}
            <div className="custom-prev" onClick={() => swiperRef.current?.slidePrev()}>
              <FaArrowLeft />
            </div>
            <div className="custom-next" onClick={() => swiperRef.current?.slideNext()}>
              <FaArrowRight />
            </div>

            {/* SWIPER */}
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={3}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
            >
              {filteredProperties.map((prop) => (
                <SwiperSlide key={prop.id}>
                  <Card className="border shadow-sm h-100">
                    <div className="position-relative">
                      <Image src={prop.img} alt="" className="w-100 rounded-0 object-fit-cover"
                        style={{ height: '200px' }} />
                      <span className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 small">
                        <FaRegImage size={12} /> 10
                      </span>
                    </div>

                    <CardBody>
                      <small className="text-muted d-block mb-1">
                        Posted: Feb 01, 26
                      </small>

                      <h6 className="fw-bold mb-1">
                        {prop.price}{" "}
                        <span className="text-st small ms-1">
                          {prop.emi}
                        </span>
                      </h6>

                      <p className="mb-1 small">
                        {prop.bhk} Flat | {prop.size}
                      </p>

                      <p className="text-muted small mb-1">
                        {prop.status}
                      </p>

                      <p className="small mb-2">
                        Agent: <strong>{prop.agent}</strong>
                      </p>

                      <div className="d-flex justify-content-between align-items-center">
                        <Link href="#" onClick={toggleFloorView} className="small text-decoration-underline">
                          View Floor Plan
                        </Link>
                        <Button onClick={toggle} size="sm" className="rounded-pill btn btn-danger">
                          Contact Agent
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-4">
              <Link href="/" className="text-st fw-semibold small">
                See All 174 Properties for Sale →
              </Link>
            </div>
          </CardBody>
        </Card>
      </section>


      <FloorViewOffcanvas
        isOpen={isFloorViewOpen}
        toggle={toggleFloorView}
      />

      <EnquiryModal modal={modal} toggle={toggle} />

    </>
  );
};

export default PropertySection;
