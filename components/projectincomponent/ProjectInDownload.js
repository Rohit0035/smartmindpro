"use client";
import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import Image from "next/image";
import Appimg from "../../assets/images/appimg.png" 

const ProjectInDownload = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          
          <Col lg="6" md="6" sm="12" className="text-center mb-4 mb-md-0">
            <Image
              src={Appimg}  
              alt="SmartMind App"
              width={450}
              height={500}
              className="img-fluid"
            />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="fw-bold mb-3">
              Download the SmartMind App
            </h2>

            <p className="text-muted mb-4">
              Search properties, track price trends, compare projects and stay 
              updated on the latest real estate insights — all from your mobile.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <Button color="dark" className="d-flex align-items-center gap-2 px-4 py-2">
                <FaGooglePlay size={20} />
                Google Play
              </Button>

              <Button outline color="dark" className="d-flex align-items-center gap-2 px-4 py-2">
                <FaApple size={20} />
                App Store
              </Button>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default ProjectInDownload;
