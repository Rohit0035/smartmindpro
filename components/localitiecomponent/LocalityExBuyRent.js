"use client";

import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import Link from "next/link";

const LocalityExBuyRent = () => {
  const [activeTab, setActiveTab] = useState("buy");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <section className="pt-0 pb-4 bg-light">
      <h5 className="fw-bold mb-3">Explore in Saket</h5>

      {/* Tabs */}
      <Nav tabs className="border-0 mb-3">
        <NavItem>
          <NavLink
            className={classnames("fw-semibold", {
              active: activeTab === "buy"
            })}
            style={{ cursor: "pointer" }}
            onClick={() => toggle("buy")}
          >
            Buy
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames("fw-semibold", {
              active: activeTab === "rent"
            })}
            style={{ cursor: "pointer" }}
            onClick={() => toggle("rent")}
          >
            Rent
          </NavLink>
        </NavItem>
      </Nav>

      {/* Tab Content */}
      <TabContent activeTab={activeTab}>
        {/* BUY TAB */}
        <TabPane tabId="buy">
          <Row className="g-2">

            {[
              "Villa for sale in Saket New Delhi",
              "Houses for sale in Saket New Delhi",
              "Flats for sale in Saket New Delhi",
              "Plots for sale in Saket New Delhi",
              "Property for sale in Saket New Delhi"
            ].map((item, index) => (
              <Col xs="12" sm="6" md="6" lg="4" key={index}>
                <Link
                  href="#"
                  className="text-decoration-none"
                >
                  <div className="bg-white shadow-sm rounded-pill px-3 py-2 text-dark small fw-medium text-truncate">
                    {item}
                  </div>
                </Link>
              </Col>
            ))}

          </Row>
        </TabPane>

        {/* RENT TAB */}
        <TabPane tabId="rent">
          <Row className="g-2">

            {[
              "Villa for rent in Saket New Delhi",
              "Houses for rent in Saket New Delhi",
              "Flats for rent in Saket New Delhi",
              "Plots for rent in Saket New Delhi",
              "Property for rent in Saket New Delhi"
            ].map((item, index) => (
              <Col xs="12" sm="6" md="6" lg="4" key={index}>
                <Link
                  href="#"
                  className="text-decoration-none"
                >
                  <div className="bg-white shadow-sm rounded-pill px-3 py-2 text-dark small fw-medium text-truncate">
                    {item}
                  </div>
                </Link>
              </Col>
            ))}

          </Row>
        </TabPane>
      </TabContent>
    </section>
  );
};

export default LocalityExBuyRent;
