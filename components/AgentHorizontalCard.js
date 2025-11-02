"use client";

import React from "react";
import { Card, CardBody, Row, Col, Button, Badge } from "reactstrap";
import { FaHome, FaHandshake, FaUsers } from "react-icons/fa";
import Image from "next/image";
import agentimg from "../assets/images/agent-pic.png"
import comimg from "../assets/images/cpm-logo.png"

const AgentHorizontalCard = () => {
    return (
        <Card className="border rounded-4 shadow-sm ">
            <CardBody className="p-3">
                <Row className="">
                    {/* <Col lg="12">
                        <div className=" d-flex">
                            <Image
                                src={agentimg}
                                alt="Agent"
                                className="rounded-2 me-3 border border-2 border-info mb-2 bg-light"
                                width="90"
                                height="90"
                            />
                            <div>
                                <h5 className="fw-bold mb-0">Jatin Gera</h5>
                                <p className="mb-1 small">
                                    Home Search Realty, <span className="fw-semibold">Mohali</span>
                                </p>
                                <p className="small text-secondary mb-2">Operating since: 2015</p>
                            </div>
                            <div className="ms-auto">
                                <Badge color="success" style={{ float: 'right' }}>
                                    verified
                                </Badge>
                            </div>
                        </div>
                    </Col>
                    <Col lg="12">
                        <div className="" style={{backgroundColor:'#ffff'}}>

                        </div>
                    </Col> */}


                    {/* ===== Left Side: Agent Photo + Logo ===== */}
                    <Col md="2" className="text-center border-end mt-0">
                        <Image
                            src={agentimg}
                            alt="Agent"
                            className="rounded-2 border border-2 border-info mb-2 bg-light"
                            width="90"
                            height="90"
                        />
                        <div className="mt-2">
                            <Image
                                src={comimg}
                                alt="Agency Logo"
                                className="border rounded-2 p-1"
                                width="60"
                                height="60"
                            />
                        </div>
                    </Col>

                    {/* ===== Middle Section: Agent Info + Stats ===== */}
                    <Col md="7">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                            <div>
                                <h5 className="fw-bold mb-0">Jatin Gera</h5>
                                <p className="mb-1 text-muted">
                                    Home Search Realty, <span className="fw-semibold">Mohali</span>
                                </p>
                                <p className="small text-secondary mb-2">Operating since: 2015</p>
                            </div>
                        </div>

                        <Row className="text-center bg-light rounded py-2 mb-2">
                            <Col>
                                <h6 className="fw-bold mb-0">
                                    <FaHome className="me-1 text-danger" /> 38
                                </h6>
                                <small className="text-muted">Properties for Sale</small>
                            </Col>
                            <Col>
                                <h6 className="fw-bold mb-0">
                                    <FaHandshake className="me-1 text-danger" /> 40
                                </h6>
                                <small className="text-muted">Deals Closed</small>
                            </Col>
                            <Col>
                                <h6 className="fw-bold mb-0">
                                    <FaUsers className="me-1 text-danger" /> 2
                                </h6>
                                <small className="text-muted">Team Members</small>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="mb-1">
                                    <strong>About Agent: </strong>
                                    <span className="text-muted">
                                        We deal in all types of residential and commercial properties.
                                    </span>
                                </p>
                                <p className="mb-1">
                                    <strong>Deals in:</strong>{" "}
                                    <span className="text-muted">Rent/Lease, Pre-launch, Resale</span>
                                </p>
                                <p className="mb-0">
                                    <strong>Operates in:</strong>{" "}
                                    <span className="text-muted">Zirakpur</span>
                                </p>
                            </Col>
                        </Row>
                    </Col>

                    {/* ===== Right Side: Badge + Buttons ===== */}
                    <Col
                        md="3"
                        className="text-center border-start d-flex flex-column justify-content-center align-items-center py-3 bg-light"
                    >
                        <div className="mb-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/9443/9443871.png"
                                alt="Preferred Agent"
                                width="65"
                                height="65"
                            />
                            <p className="small text-muted mb-1">Trusted by Many Users</p>
                        </div>
                        <div>
                            <Button color="danger" className="rounded-pill px-4 mb-2">
                                Contact Agent
                            </Button>
                            <Button outline color="danger" className="rounded-pill px-4">
                                View Details
                            </Button>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default AgentHorizontalCard;
