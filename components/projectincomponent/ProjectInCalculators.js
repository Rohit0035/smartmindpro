"use client";
import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import {
  FaUserCheck,
  FaCalculator,
  FaMoneyBillWave,
  FaPercentage,
} from "react-icons/fa";
import Link from "next/link";

const ProjectInCalculators = () => {
  const data = [
    {
      icon: <FaUserCheck size={35} className="mb-3 text-primary" />,
      title: "Loan Eligibility",
      desc: "Check how much loan amount you are eligible for based on income & profile.",
      btn: "Check Eligibility",
    },
    {
      icon: <FaCalculator size={35} className="mb-3 text-primary" />,
      title: "EMI Calculator",
      desc: "Find out the monthly EMI you need to pay for your home loan.",
      btn: "Calculate EMI",
    },
    {
      icon: <FaMoneyBillWave size={35} className="mb-3 text-primary" />,
      title: "Prepayment Planner",
      desc: "Understand how prepaying your loan can reduce interest burden.",
      btn: "Calculate",
    },
    {
      icon: <FaPercentage size={35} className="mb-3 text-primary" />,
      title: "Interest Rate Change",
      desc: "Compare impact of interest rate changes on your EMI & tenure.",
      btn: "Compare Rates",
    },
  ];

  return (
    <section className="py-5 bg-white" id="calculators">
      <Container>
        <h2 className="text-center mb-5">
          Calculators: For Smart Loan Decisions
        </h2>

        <Row className="text-center">
          {data.map((item, index) => (
            <Col key={index} md="3" sm="6" xs="12" className="mb-4">
              <div className="bg-light p-3" data-aos="zoom-in">
                {item.icon}
                <h5 className="mt-2">{item.title}</h5>
                <p className="text-muted small">{item.desc}</p>
                <Link href="/loan" className="btn btn-danger btn-sm rounded-pill">
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

export default ProjectInCalculators;
