"use client";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import Select from "react-select";
import { FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const InteriorStickyFilter = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    location: false,
    locality: false,
    budget: false,
  });

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // OPTIONS

  const locationOptions = [
    { value: "mumbai", label: "Mumbai" },
    { value: "pune", label: "Pune" },
    { value: "bangalore", label: "Bangalore" },
  ];

  const localityOptions = [
    { value: "andheri-west", label: "Andheri West" },
    { value: "bandra-east", label: "Bandra East" },
    { value: "worli", label: "Worli" },
    { value: "powai", label: "Powai" },
  ];

  const budgetOptions = [
    { value: "10-20L", label: "₹10L - ₹20L" },
    { value: "20-40L", label: "₹20L - ₹40L" },
    { value: "40-60L", label: "₹40L - ₹60L" },
    { value: "60L+", label: "₹60L+" },
  ];

  return (
    <div
      className="py-2 mb-4"
      style={{
        position: "sticky",
        top: "4.5rem",
        backgroundColor: "#0d55a3",
        zIndex: 1000,
      }}
    >
      <Container>
        <Row>
          <Col xs="12">
            <Nav className="d-flex flex-wrap ">

              {/* Location */}
              <NavItem className="my-1">
                <Dropdown
                  isOpen={dropdownOpen.location}
                  toggle={() => toggleDropdown("location")}
                >
                  <DropdownToggle
                    color="light"
                    className="rounded-pill px-3 py-1 d-flex align-items-center me-2"
                  >
                    <FaMapMarkerAlt size={14} className="me-2" />
                    Location
                    <IoIosArrowDown className="ms-2" />
                  </DropdownToggle>

                  <DropdownMenu className="p-3" style={{ minWidth: "250px" }}>
                    <Select
                      isMulti
                      options={locationOptions}
                      placeholder="Select Location"
                    />
                  </DropdownMenu>
                </Dropdown>
              </NavItem>

              {/* Locality */}
              <NavItem className="my-1"> 
                <Dropdown
                  isOpen={dropdownOpen.locality}
                  toggle={() => toggleDropdown("locality")}
                >
                  <DropdownToggle
                    color="light"
                    className="rounded-pill px-3 py-1 d-flex align-items-center me-2"
                  >
                    <FaMapMarkerAlt size={14} className="me-2" />
                    Locality
                    <IoIosArrowDown className="ms-2" />
                  </DropdownToggle>

                  <DropdownMenu className="p-3" style={{ minWidth: "250px" }}>
                    <Select
                      isMulti
                      options={localityOptions}
                      placeholder="Select Locality"
                    />
                  </DropdownMenu>
                </Dropdown>
              </NavItem>

              {/* Budget */}
              <NavItem className="my-1">
                <Dropdown
                  isOpen={dropdownOpen.budget}
                  toggle={() => toggleDropdown("budget")}
                >
                  <DropdownToggle
                    color="light"
                    className="rounded-pill px-3 py-1 d-flex align-items-center"
                  >
                    <FaRupeeSign size={14} className="me-2" />
                    Budget
                    <IoIosArrowDown className="ms-2" />
                  </DropdownToggle>

                  <DropdownMenu className="p-3" style={{ minWidth: "250px" }}>
                    <Select
                      isMulti
                      options={budgetOptions}
                      placeholder="Select Budget"
                    />
                  </DropdownMenu>
                </Dropdown>
              </NavItem>

            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InteriorStickyFilter;
