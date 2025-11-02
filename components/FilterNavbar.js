"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
  Collapse,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  Input,
  Nav,
} from "reactstrap";
import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaHome,
  FaCity,
  FaWhatsapp,
} from "react-icons/fa";
import classnames from "classnames";
import "../assets/styles/navbarfilter.css";

const FilterNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const toggleDropdown = (name) =>
    setOpenDropdown(openDropdown === name ? null : name);
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);
  const toggleMobileDropdown = (name) =>
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const filters = [
    { label: "Rent", name: "rent" },
    { label: "Locality", name: "locality" },
    { label: "Budget", name: "budget" },
    { label: "BHK", name: "bhk" },
    { label: "Posted By", name: "posted" },
    { label: "More Filters", name: "more" },
  ];

  // Reusable dropdown footer
  const Footer = () => (
    <div className="nf-dropdown-footer">
      <Button color="danger" className="nf-apply-btn">
        Apply
      </Button>
      <Button outline color="danger" className="nf-reset-btn ms-2">
        Reset
      </Button>
    </div>
  );

  return (
    <div className="nf-wrapper">
      {/* Navbar */}
      <Navbar expand="md" className="nf-navbar shadow-sm sticky-top">
        <div className="nf-container d-flex justify-content-between align-items-center">
          <h6 className="nf-brand m-0">
            <FaHome className="me-2 text-danger" />
            Property Filters
          </h6>

          {/* Mobile toggle */}
          <div className="d-md-none">
            <Button
              color="light"
              className="nf-toggle-btn border"
              onClick={toggleMobile}
            >
              {isMobileOpen ? <FaTimes /> : <FaBars />}
            </Button>
          </div>

          {/* Desktop Nav */}
          <div className="nf-desktop-nav d-none d-md-flex align-items-center gap-2">
            {filters.map((item) => (
              <NavItem key={item.name} className="nf-navitem">
                <Dropdown
                  isOpen={openDropdown === item.name}
                  toggle={() => toggleDropdown(item.name)}
                  onMouseEnter={() => toggleDropdown(item.name)}
                  onMouseLeave={() => toggleDropdown(null)}
                >
                  <DropdownToggle className="nf-dropdown-toggle">
                    {item.label}
                    <FaChevronDown className="ms-1" size={12} />
                  </DropdownToggle>

                  <DropdownMenu className="nf-dropdown-menu">
                    {item.name === "rent" && (
                      <div className="nf-dropdown-content">
                        <h6 className="fw-bold mb-3">Choose Category</h6>
                        <div className="d-flex gap-2 flex-wrap">
                          <Button color="danger" size="sm">
                            Rent
                          </Button>
                          <Button outline color="secondary" size="sm">
                            Buy
                          </Button>
                          <Button outline color="secondary" size="sm">
                            PG
                          </Button>
                        </div>
                        <Footer />
                      </div>
                    )}

                    {item.name === "locality" && (
                      <div className="nf-dropdown-content">
                        <h6 className="fw-bold mb-3">
                          Top Localities in Bangalore
                        </h6>
                        <div className="d-flex flex-wrap gap-2">
                          {[
                            "Whitefield",
                            "Electronic City",
                            "Sarjapur",
                            "Hebbal",
                            "Marathahalli",
                          ].map((loc) => (
                            <Button
                              key={loc}
                              outline
                              color="secondary"
                              size="sm"
                            >
                              + {loc}
                            </Button>
                          ))}
                        </div>
                        <Footer />
                      </div>
                    )}

                    {item.name === "budget" && (
                      <div className="nf-dropdown-content">
                        <h6 className="fw-bold mb-3">Select Budget Range</h6>
                        <Row className="g-2 mb-3">
                          <Col>
                            <Input type="select">
                              <option>₹ 5,000</option>
                              <option>₹ 10,000</option>
                              <option>₹ 20,000</option>
                            </Input>
                          </Col>
                          <Col>
                            <Input type="select">
                              <option>₹ 50,000</option>
                              <option>₹ 1,00,000</option>
                              <option>₹ 2,00,000</option>
                            </Input>
                          </Col>
                        </Row>
                        <input type="range" className="form-range" />
                        <Footer />
                      </div>
                    )}

                    {item.name === "bhk" && (
                      <div className="nf-dropdown-content">
                        <h6 className="fw-bold mb-3">Select BHK Type</h6>
                        <div className="d-flex flex-wrap gap-2">
                          {["1 BHK", "2 BHK", "3 BHK", "4 BHK"].map((b) => (
                            <Button
                              key={b}
                              outline
                              color="secondary"
                              size="sm"
                            >
                              + {b}
                            </Button>
                          ))}
                        </div>
                        <Footer />
                      </div>
                    )}

                    {item.name === "posted" && (
                      <div className="nf-dropdown-content">
                        <h6 className="fw-bold mb-3">Posted By</h6>
                        <div className="d-flex flex-wrap gap-2">
                          {["Owner", "Broker", "Builder"].map((type) => (
                            <Button
                              key={type}
                              outline
                              color="secondary"
                              size="sm"
                            >
                              + {type}
                            </Button>
                          ))}
                        </div>
                        <Footer />
                      </div>
                    )}

                    {item.name === "more" && (
                      <div className="nf-dropdown-content nf-more-tabs">
                        <Row>
                          <Col md="4" className="nf-tab-sidebar">
                            <Nav vertical pills>
                              {[
                                "Area Range",
                                "Amenities",
                                "Furnishing",
                                "Availability",
                                "Tenant Type",
                              ].map((tab, i) => (
                                <NavLink
                                  key={i}
                                  className={classnames("nf-tab-link", {
                                    active: activeTab === `${i + 1}`,
                                  })}
                                  onClick={() => toggleTab(`${i + 1}`)}
                                >
                                  {tab}
                                </NavLink>
                              ))}
                            </Nav>
                          </Col>
                          <Col md="8">
                            <TabContent activeTab={activeTab}>
                              <TabPane tabId="1">
                                <h6 className="fw-bold mb-3">
                                  Select Area Range
                                </h6>
                                <Row className="g-2 mb-3">
                                  <Col>
                                    <Input placeholder="Min sqft" />
                                  </Col>
                                  <Col>
                                    <Input placeholder="Max sqft" />
                                  </Col>
                                </Row>
                                <input type="range" className="form-range" />
                              </TabPane>
                              <TabPane tabId="2">
                                <div className="d-flex flex-wrap gap-2">
                                  {[
                                    "Lift",
                                    "Power Backup",
                                    "Parking",
                                    "Gym",
                                    "Pool",
                                  ].map((a) => (
                                    <Button
                                      key={a}
                                      outline
                                      color="secondary"
                                      size="sm"
                                    >
                                      + {a}
                                    </Button>
                                  ))}
                                </div>
                              </TabPane>
                            </TabContent>
                          </Col>
                        </Row>
                        <Footer />
                      </div>
                    )}
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            ))}
          </div>
        </div>
      </Navbar>

      {/* Mobile Sidebar */}
      <Collapse isOpen={isMobileOpen} className="nf-sidebar">
        <div className="nf-sidebar-content">
          <div className="nf-sidebar-header">
            <h6 className="m-0">
              <FaCity className="me-2 text-danger" />
              Filters
            </h6>
            <FaTimes className="nf-close" onClick={toggleMobile} />
          </div>

          <div className="nf-sidebar-body">
            {filters.map((item) => (
              <div key={item.name} className="nf-mobile-dropdown">
                <div
                  className="nf-mobile-dropdown-header"
                  onClick={() => toggleMobileDropdown(item.name)}
                >
                  <span>{item.label}</span>
                  <FaChevronDown
                    className={`ms-auto ${
                      openMobileDropdown === item.name ? "rotate" : ""
                    }`}
                  />
                </div>

                <Collapse isOpen={openMobileDropdown === item.name}>
                  <div className="nf-mobile-dropdown-body">
                    <p className="small text-muted mb-2">
                      {item.label} Filter Content
                    </p>
                    <Button color="danger" size="sm" className="me-2">
                      Apply
                    </Button>
                    <Button outline color="danger" size="sm">
                      Reset
                    </Button>
                  </div>
                </Collapse>
              </div>
            ))}

            <Button color="danger" className="w-100 mt-3 rounded-pill">
              <FaWhatsapp className="me-2" />
              Apply Filters
            </Button>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default FilterNavbar;
