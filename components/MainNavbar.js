"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
} from "reactstrap";
import {
  FaChevronDown,
  FaBars,
  FaArrowLeft,
  FaTimes,
  FaChevronRight,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/navbar.css";

export default function MainNavbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [expandedChild, setExpandedChild] = useState(null);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    setActiveSubmenu(null);
    setExpandedChild(null);
  };

  const openSubmenu = (menu) => {
    setActiveSubmenu(menu);
    setExpandedChild(null);
  };

  const closeSubmenu = () => setActiveSubmenu(null);

  const toggleChild = (child) => {
    setExpandedChild(expandedChild === child ? null : child);
  };

  return (
    <>
      {/* === Top Header === */}
      <div className="top-header py-1 bg-light border-bottom">
        <div className="container-fluid d-flex justify-content-end align-items-center small text-muted gap-3">
          <Link href="#" className="text-dark text-decoration-none">
            Login
          </Link>
          <button className="btn btn-danger btn-sm rounded-pill px-3">
            Post Property{" "}
            <span className="badge bg-warning text-dark ms-1">FREE</span>
          </button>
        </div>
      </div>

      {/* === Main Navbar === */}
      <Navbar expand="lg" className="smart-navbar bg-white shadow-sm py-2">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            {/* Mobile toggle (for tablet + mobile) */}
            <button
              className="btn btn-link text-dark d-lg-none fs-4 me-2"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>

            {/* Brand */}
            <NavbarBrand href="/" className="fw-bold text-danger fs-4">
              magic<span className="text-dark">bricks</span>
            </NavbarBrand>
          </div>

          {/* Desktop Menu */}
          <Collapse isOpen={true} navbar className="d-none d-lg-flex">
            <Nav className="ms-auto align-items-center" navbar>
              <NavItem className="smart-megamenu-parent">
                <Link href="#" className="nav-link text-dark fw-semibold">
                  Buy <FaChevronDown className="small ms-1" />
                </Link>
                <div className="smart-megamenu shadow-sm p-4 bg-white">
                  <div className="row g-4">
                    <div className="col-md-3">
                      <h6 className="fw-bold text-muted mb-2">
                        Popular Choices
                      </h6>
                      <ul className="list-unstyled small">
                        <li>Ready to Move</li>
                        <li>Owner Properties</li>
                        <li>Budget Homes</li>
                        <li>Premium Homes</li>
                        <li>
                          <span className="badge bg-danger">magic</span> Homes
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h6 className="fw-bold text-muted mb-2">Property Type</h6>
                      <ul className="list-unstyled small">
                        <li>Flats</li>
                        <li>Villas</li>
                        <li>Plots</li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h6 className="fw-bold text-muted mb-2">Budget Range</h6>
                      <ul className="list-unstyled small">
                        <li>Under ₹50L</li>
                        <li>₹50L–₹1Cr</li>
                        <li>₹1Cr–₹1.5Cr</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </NavItem>

              <NavItem>
                <Link href="#" className="nav-link text-dark fw-semibold">
                  Rent
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#" className="nav-link text-dark fw-semibold">
                  Sell
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#" className="nav-link text-dark fw-semibold">
                  Home Loans
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#" className="nav-link text-dark fw-semibold">
                  Home Interiors
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>

      {/* === Mobile Sidebar === */}
      <div className={`smart-sidebar ${showSidebar ? "open" : ""}`}>
        <div className="sidebar-header d-flex align-items-center justify-content-between p-3 border-bottom">
          {activeSubmenu ? (
            <>
              <FaArrowLeft
                onClick={closeSubmenu}
                className="fs-5 cursor-pointer"
              />
              <h6 className="mb-0 fw-bold">{activeSubmenu}</h6>
              <FaTimes onClick={toggleSidebar} className="fs-5 cursor-pointer" />
            </>
          ) : (
            <>
              <h5 className="mb-0 fw-bold">Menu</h5>
              <FaTimes onClick={toggleSidebar} className="fs-5 cursor-pointer" />
            </>
          )}
        </div>

        {/* Parent Menu */}
        <div className={`sidebar-body ${activeSubmenu ? "hide" : ""}`}>
          <ul className="list-unstyled mb-0">
            <li onClick={() => openSubmenu("Buy")}>
              Buy <FaChevronRight className="float-end mt-1" />
            </li>
            <li>Rent</li>
            <li>Sell</li>
            <li>Home Loans</li>
            <li>Home Interiors</li>
            <li>MB Advice</li>
          </ul>
        </div>

        {/* Submenu Panel */}
        <div className={`submenu-body ${activeSubmenu ? "show" : ""}`}>
          <ul className="list-unstyled mb-0 p-0">
            <li>
              <div
                className="d-flex justify-content-between align-items-center px-3 py-2"
                onClick={() => toggleChild("PopularChoices")}
              >
                <span>Popular Choices</span>
                <FaChevronDown
                  className={`small transition ${expandedChild === "PopularChoices" ? "rotate" : ""
                    }`}
                />
              </div>
              <Collapse isOpen={expandedChild === "PopularChoices"}>
                <ul className="list-unstyled ms-3 mt-2 small">
                  <li>Ready to Move</li>
                  <li>Owner Properties</li>
                  <li>Budget Homes</li>
                </ul>
              </Collapse>
            </li>

            <li>
              <div
                className="d-flex justify-content-between align-items-center px-3 py-2"
                onClick={() => toggleChild("PropertyType")}
              >
                <span>Property Type</span>
                <FaChevronDown
                  className={`small transition ${expandedChild === "PropertyType" ? "rotate" : ""
                    }`}
                />
              </div>
              <Collapse isOpen={expandedChild === "PropertyType"}>
                <ul className="list-unstyled ms-3 mt-2 small">
                  <li>Flats</li>
                  <li>Villas</li>
                  <li>Plots</li>
                </ul>
              </Collapse>
            </li>

            <li>
              <div
                className="d-flex justify-content-between align-items-center px-3 py-2"
                onClick={() => toggleChild("Budget")}
              >
                <span>Budget</span>
                <FaChevronDown
                  className={`small transition ${expandedChild === "Budget" ? "rotate" : ""
                    }`}
                />
              </div>
              <Collapse isOpen={expandedChild === "Budget"}>
                <ul className="list-unstyled ms-3 mt-2 small">
                  <li>Under ₹50L</li>
                  <li>₹50L–₹1Cr</li>
                  <li>₹1Cr–₹1.5Cr</li>
                </ul>
              </Collapse>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`smart-sidebar-overlay ${showSidebar ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
}
