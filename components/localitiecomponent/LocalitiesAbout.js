"use client";
import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Button,
    Badge,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";
import { FaStar, FaStarHalfAlt, FaRegStar, FaArrowRight, FaRegThumbsUp } from "react-icons/fa";
import Link from "next/link";
import WriteReviewModal from "./WriteReviewModal";

const LocalitiesAbout = () => {
    const [aboutModal, setAboutModal] = useState(false);

    const toggleAbout = () => setAboutModal(!aboutModal);

    const [reviewOpen, setReviewOpen] = useState(false);

    const toggleReview = () => setReviewOpen(!reviewOpen);

    return (
        <>
            <section className="pb-4 pt-0" id="overview">
                <Card className="border-0">
                    <CardBody>
                        <Row>
                            <Col lg="12">
                                <div className="d-flex gap-2 mb-2">
                                    <Badge color="light" className="border text-success">
                                        PREMIUM
                                    </Badge>
                                    <Badge color="light" className="border text-success">
                                        LOW RISE
                                    </Badge>
                                    <Badge color="light" className="border text-success">
                                        OFFICES
                                    </Badge>
                                </div>
                                <div className="d-flex justify-content-between align-items-start flex-wrap">
                                    <div>
                                        <h4 className="fw-bold">Saket, New Delhi</h4>
                                        <p className="text-muted mb-0">South, Pin Code: 110017</p>
                                    </div>

                                    <div className="text-end">
                                        <div className="d-flex align-items-center gap-1 justify-content-end">
                                            <strong>4.3</strong>
                                            <FaStar color="#f5c518" />
                                            <FaStar color="#f5c518" />
                                            <FaStar color="#f5c518" />
                                            <FaStar color="#f5c518" />
                                            <FaStarHalfAlt color="#f5c518" />
                                        </div>

                                        <div>
                                            <span className="text-decoration-underline text-primary me-2">
                                                <Link href="/">
                                                    520 reviews
                                                </Link>
                                            </span>
                                            <span
                                                className="text-st fw-semibold cursor-pointer"
                                                style={{ cursor: "pointer" }}
                                                onClick={toggleReview}
                                            >
                                                Write a review
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h5 className="fw-bold">Price Range</h5>
                                    <a href="#" className="text-st small">
                                        Validate Market Price with @ PropWorth
                                    </a>
                                    <Card className="mt-3 bg-light shadow-sm border-0" style={{ maxWidth: "350px" }}>
                                        <CardBody>
                                            <h6 className="fw-bold">Residential</h6>
                                            <p className="mb-1">
                                                Buy ₹ 18,200 - ₹ 27,900 /sqft
                                            </p>
                                            <p className="mb-3">
                                                Rent ₹ 26 - ₹ 46 /sqft
                                            </p>

                                            <div className="d-flex justify-content-between align-items-center text-st mb-2">
                                                <Link href="/">
                                                    <span>Flats for sale in Saket</span>
                                                    <FaArrowRight />
                                                </Link>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center text-st">
                                                <Link href="/">
                                                    <span>Flats for rent in Saket</span>
                                                    <FaArrowRight />
                                                </Link>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="mt-4">
                                    <h5 className="fw-bold">About Saket</h5>
                                    <h6 className="fw-semibold">
                                        Locality introduction and neighbourhood
                                    </h6>

                                    <p className="text-muted">
                                        Saket is a posh neighbourhood in South Delhi comprising a mix
                                        of residential units, high-end retail and commercial office spaces...
                                    </p>

                                    <span
                                        className="text-st fw-semibold"
                                        style={{ cursor: "pointer" }}
                                        onClick={toggleAbout}
                                    >
                                        Read more
                                    </span>
                                </div>

                                <div className="mt-4">
                                    <h5 className="fw-bold">Things to keep in mind</h5>
                                    <ul className="p-0" style={{listStyle:'none'}}>
                                        <li>
                                           <FaRegThumbsUp className="text-st"/> Well-Developed posh locality
                                        </li>
                                         <li>
                                           <FaRegThumbsUp className="text-st"/> Well-connected locality with ring road and metro
                                        </li>
                                         <li>
                                           <FaRegThumbsUp className="text-st"/> Green surroundings with many parks
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </section>

            {/* WRITE REVIEW MODAL */}
            <WriteReviewModal
                isOpen={reviewOpen}
                toggle={toggleReview}
            />

            {/* READ MORE MODAL */}
            <Modal isOpen={aboutModal} toggle={toggleAbout} size="lg" centered>
                <ModalHeader toggle={toggleAbout}>
                    About Saket
                </ModalHeader>
                <ModalBody>
                    <p>
                        Saket is a premium locality in South Delhi located along Mehrauli
                        Badarpur Road (MB Road). It offers proximity to Sri Aurobindo Marg,
                        top schools, hospitals, malls like Select Citywalk, DLF Avenue and
                        more.
                    </p>
                    <p>
                        The area has excellent metro connectivity via Saket Metro Station
                        (Yellow Line) and is well-connected to Gurgaon and Central Delhi.
                    </p>
                </ModalBody>
            </Modal>
        </>
    );
};

export default LocalitiesAbout;
