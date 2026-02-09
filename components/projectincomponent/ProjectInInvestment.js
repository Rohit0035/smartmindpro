"use client";
import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import {
  FaBuilding,
  FaChartLine,
  FaExchangeAlt,
  FaHardHat,
} from "react-icons/fa";
import Link from "next/link";

const ProjectInInvestment = () => {
  const data = [
    {
      icon: <FaBuilding size={35} className="text-st mb-3" />,
      title: "View Project Rating",
      desc: "Know how good a project is based on its location, amenities/facilities",
      btn: "View Rating",
    },
    {
      icon: <FaChartLine size={35} className="text-st mb-3" />,
      title: "Track Price Trends",
      desc: "Track price movements of different projects that you're interested in",
      btn: "Track Trends",
    },
    {
      icon: <FaExchangeAlt size={35} className="text-st mb-3" />,
      title: "Compare Projects",
      desc: "Compare projects based on price, location etc. & make wise decisions",
      btn: "Compare Projects",
    },
    {
      icon: <FaHardHat size={35} className="text-st mb-3" />,
      title: "See Project Progress",
      desc: "Check the completion status and progress of the projects you like.",
      btn: "Check Progress",
    },
  ];

  return (
    <section className="py-5 bg-light text-center">
      <Container>
        <h2 className="mb-5 fw-semibold">
          Be a Pro: Make Wise Investment Decisions
        </h2>

        <Row className="g-4">
          {data.map((item, index) => (
            <Col key={index} xs="12" sm="6" lg="3">
              <div className="h-100 d-flex flex-column align-items-center px-3">
                {item.icon}

                <h5 className="fw-semibold">{item.title}</h5>

                <p className="text-muted small mb-3">
                  {item.desc}
                </p>

                <Link href="#"  size="sm" className="px-4 btn btn-danger btn-sm">
                  {item.btn}
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectInInvestment;
