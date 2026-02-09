"use client";
import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { FaUserCheck, FaChartLine, FaGift } from "react-icons/fa";

const HomeIntWhyChoose = () => {
  const features = [
    {
      title: "Expert Mentors & Verified Trainers",
      desc: "Learn from handpicked industry experts with proven experience.",
      icon: <FaUserCheck size={28} color="#8ed1e8" />,
    },
    {
      title: "Track Progress & Improve Performance",
      desc: "Smart analytics to monitor growth and boost learning outcomes.",
      icon: <FaChartLine size={28} color="#8ed1e8" />,
    },
    {
      title: "Exclusive Offers & Premium Resources",
      desc: "Get access to bonus study materials and special member rewards.",
      icon: <FaGift size={28} color="#8ed1e8" />,
    },
  ];

  return (
    <section style={{ padding: "60px 0" }}>
      <Container>
        <h3 className="fw-bold mb-4">Why choose Smartmind?</h3>

        <Row className="g-4">
          {features.map((item, index) => (
            <Col lg="4" md="6" sm="12" key={index}>
              <Card
                className="shadow-sm h-100"
                style={{
                  border: "none",
                  borderLeft: "4px solid #8ed1e8",
                  borderRadius: "10px",
                }}
              >
                <CardBody className="d-flex justify-content-between align-items-center py-4">
                  <div>
                    <p className="mb-1 small text-muted">
                      {item.desc}
                    </p>
                    <h6 className="fw-semibold mb-0">
                      {item.title}
                    </h6>
                  </div>

                  <div className="ms-3">
                    {item.icon}
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HomeIntWhyChoose;
