"use client";

import React, { useState } from "react";
import { Container } from "reactstrap";
import Select from "react-select";
import { FaSearch } from "react-icons/fa";

const cities = [
  {
    value: "vizag",
    label: "Visakhapatnam",
    image:
      "https://images.unsplash.com/photo-1587135991058-8816d55cba9d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    value: "mumbai",
    label: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1600&q=80",
  },
  {
    value: "delhi",
    label: "Delhi",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=80",
  },
  {
    value: "bangalore",
    label: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1600&q=80",
  },
];

const LocalitiesHero = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  return (
    <section
      className="position-relative d-flex align-items-center"
      style={{
        height: "350px",
        backgroundImage: `url(${selectedCity.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

      <Container className="position-relative text-center text-white">
        <h2 className="fw-bold mb-4">Explore Localities</h2>

        <div className="d-flex justify-content-center">
          <div
            className="bg-white rounded-pill d-flex align-items-center px-3"
            style={{ width: "400px", maxWidth: "100%" }}
          >
            <div className="flex-grow-1">
              <Select
                options={cities}
                className="py-2 text-dark text-start"
                value={selectedCity}
                onChange={(option) => setSelectedCity(option)}
                styles={{
                  control: (base) => ({
                    ...base,
                    border: "none",
                    boxShadow: "none",
                    textAlign:'start',
                  }),
                }}
              />
            </div>

            <FaSearch className="text-dark ms-2" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LocalitiesHero;
