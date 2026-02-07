"use client";
import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaPlayCircle, FaCamera, FaMapMarkerAlt } from "react-icons/fa";

import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import mainimg from "../../assets/images/pro-1.jpg"
import Image from "next/image";
import MapImg from "../../assets/images/map-img.jpg"

const LocalitiesHeroGrid = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const slides = [
        {
            src: mainimg,
        },
        {
            src: mainimg,
        },
        {
            src: mainimg,
        },
        {
            type: "video",
            width: 1280,
            height: 720,
            sources: [
                {
                    src: "https://www.w3schools.com/html/mov_bbb.mp4",
                    type: "video/mp4",
                },
            ],
        },
    ];

    return (
        <>
            <section className="py-3 bg-light">
                <Container>
                    <Row className="g-3">

                        <Col lg="8" md="12">
                            <div className="position-relative rounded overflow-hidden">
                                <Image
                                    src={mainimg}
                                    alt="Locality"
                                    className="w-100"
                                    style={{ height: "400px", objectFit: "cover" }}
                                />

                                <Button
                                    color="light"
                                    className="position-absolute bottom-0 end-0 m-3 d-flex align-items-center gap-2"
                                    onClick={() => {
                                        setIndex(0);
                                        setOpen(true);
                                    }}
                                >
                                    <FaCamera /> 14 Photos
                                </Button>

                                <div className="position-absolute top-50 start-50 translate-middle">
                                    <FaPlayCircle
                                        size={70}
                                        color="#fff"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            setIndex(3); 
                                            setOpen(true);
                                        }}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="12">
                            <div className="d-flex flex-column gap-3">

                                <div className="position-relative rounded overflow-hidden">
                                    <Image
                                        src={MapImg}
                                        alt="Map"
                                        className="w-100"
                                        style={{ height: "190px", objectFit: "cover" }}
                                    />
                                    <Button
                                        size="sm"
                                        color="light"
                                        className="position-absolute top-50 start-50 translate-middle d-flex align-items-center gap-2"
                                    >
                                        <FaMapMarkerAlt /> View on map
                                    </Button>
                                </div>
                                <div
                                    className="position-relative rounded overflow-hidden"
                                    onClick={() => {
                                        setIndex(3);
                                        setOpen(true);
                                    }}
                                    style={{ cursor: "pointer" }}
                                >
                                    <Image
                                        src={mainimg}
                                        alt="Video"
                                        className="w-100"
                                        style={{ height: "190px", objectFit: "cover" }}
                                    />

                                    <div className="position-absolute top-50 start-50 translate-middle">
                                        <FaPlayCircle size={50} color="#fff" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={index}
                plugins={[Video]}
            />
        </>
    );
};

export default LocalitiesHeroGrid;
