"use client";

import React from "react";
import { Container } from "reactstrap";
import Image from "next/image";
import bannerImg from "../../assets/images/pro-1.jpg"; 

const ProjectInHero = () => {
  return (
    <section className="position-relative py-0">
      <div style={{ height: "220px", position: "relative" }}>
        <Image
          src={bannerImg}
          alt="Projects Banner"
          fill
          priority
          style={{
            objectFit: "cover",
          }}
        />
        <div
          className="position-absolute st-wdt top-50 start-50 translate-middle text-center px-4 py-2"
          style={{
            background: "#0d55a3",
            borderRadius: "4px",
          }}
        >
          <h4 className="text-white fw-semibold mb-0">
            New & Popular : 15000 Projects for you!
          </h4>
        </div>
      </div>
    </section>
  );
};

export default ProjectInHero;
