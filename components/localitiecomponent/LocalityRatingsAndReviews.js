'use client';

import { useState } from 'react';
import {
    Card,
    CardBody,
    CardImg,
    Row,
    Col,
    Button,
} from 'reactstrap';
import { FaStar } from 'react-icons/fa';
import LocalityReviewsOffcanvas from './LocalityReviewsOffcanvas';
import localityImg from "../../assets/images/pro-1.jpg"
import Image from 'next/image';
import WriteReviewModal from './WriteReviewModal';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

const LocalityRatingsAndReviews = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

    const [reviewOpen, setReviewOpen] = useState(false);

    const toggleReview = () => setReviewOpen(!reviewOpen);

    return (
        <>
            <section className='pt-3'>
                <div className="">
                    <h5 className="fw-bold mb-3">Ratings & Reviews</h5>

                    <Row className="">
                        {[
                            {
                                title: 'Environment',
                                score: '4.2',
                                img: localityImg,
                                items: ['Neighbourhood', 'Roads', 'Safety', 'Cleanliness'],
                            },
                            {
                                title: 'Commuting',
                                score: '4.1',
                                img: localityImg,
                                items: [
                                    'Public Transport',
                                    'Parking',
                                    'Connectivity',
                                    'Traffic',
                                ],
                            },
                            {
                                title: 'Places of Interest',
                                score: '4.7',
                                img: localityImg,
                                items: ['Schools', 'Hospitals', 'Restaurants', 'Markets'],
                            },
                        ].map((card, index) => (
                            <Col md="4" key={index} className='mb-2'>
                                <Card className="h-100 shadow-sm border-0">
                                    <Image src={card.img} className="w-100 rounded"
                                        style={{ objectFit: "cover", height: "200px" }} />

                                    <CardBody>
                                        <div className="fw-semibold mb-2">
                                            {card.title}{' '}
                                            <span className="ms-2">
                                                {card.score}/5
                                            </span>
                                        </div>

                                        {card.items.map((item, i) => (
                                            <div
                                                key={i}
                                                className="d-flex justify-content-between small mb-1"
                                            >
                                                <span>{item}</span>
                                                <span className="text-warning">
                                                    {[...Array(5)].map((_, s) => (
                                                        <FaStar key={s} size={12} />
                                                    ))}
                                                </span>
                                            </div>
                                        ))}
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    <Card className="mt-2 border-0">
                        <CardBody>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerView={2}
                                navigation
                                breakpoints={{
                                    320: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    992: { slidesPerView: 2 },
                                    1200: { slidesPerView: 2 },
                                }}
                            >
                                <SwiperSlide>
                                    <Card>
                                        <CardBody>
                                            <div className="d-flex">
                                                <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                                                    style={{ width: "60px", height: "60px", fontSize: "24px", fontWeight: "bold" }}>
                                                    E
                                                </div>
                                                <div className="">
                                                    <h6 className="mb-0">Guest User
                                                    </h6>
                                                    <small>Owner</small>
                                                </div>
                                                <div className="small ms-auto">
                                                    <FaStar className="text-warning me-1" />
                                                    <FaStar className="text-warning me-1" />
                                                    <FaStar className="text-warning me-1" />
                                                    <FaStar className="text-warning me-1" />
                                                    <FaStar className="text-warning me-1" />
                                                    <p className="small">16/03/2021</p>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <h6 className="st-txt-o mb-1">East facing house, fully.</h6>
                                                <p className="small">
                                                    East facing house, fully as per vasthu and full of light. A corner flat with 3 sides open.
                                                </p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card>
                                        <CardBody>
                                            <div className="d-flex">
                                                <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                                                    style={{ width: "60px", height: "60px", fontSize: "24px", fontWeight: "bold" }}>
                                                    E
                                                </div>
                                                <div className="">
                                                    <h6 className="mb-0">Guest User
                                                    </h6>
                                                    <small>Owner</small>
                                                </div>
                                                <div className="small ms-auto">
                                                    <FaStar className="text-warning me-1" />
                                                    <FaStar className="text-warning me-1" />
                                                    <FaStar className="text-warning me-1" />
                                                    <FaStar className="text-warning me-1" />
                                                    <FaStar className="text-warning me-1" />
                                                    <p className="small">16/03/2021</p>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <h6 className="st-txt-o mb-1">East facing house, fully.</h6>
                                                <p className="small">
                                                    East facing house, fully as per vasthu and full of light. A corner flat with 3 sides open.
                                                </p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card>
                                        <CardBody>
                                            <div className="d-flex">
                                                <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                                                    style={{ width: "60px", height: "60px", fontSize: "24px", fontWeight: "bold" }}>
                                                    E
                                                </div>
                                                <div className="">
                                                    <h6 className="mb-0">Guest User
                                                    </h6>
                                                    <small>Owner</small>
                                                </div>
                                                <div className="small ms-auto">
                                                    <FaStar className="text-warning me-1" />
                                                    <FaStar className="text-warning me-1" />
                                                    <FaStar className="text-warning me-1" />
                                                    <FaStar className="text-warning me-1" />
                                                    <FaStar className="text-warning me-1" />
                                                    <p className="small">16/03/2021</p>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <h6 className="st-txt-o mb-1">East facing house, fully.</h6>
                                                <p className="small">
                                                    East facing house, fully as per vasthu and full of light. A corner flat with 3 sides open.
                                                </p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </SwiperSlide>
                            </Swiper>
                        </CardBody>
                    </Card>


                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <Button
                            color="link"
                            className="p-0 text-st"
                            onClick={toggle}
                        >
                            Show more Reviews
                        </Button>

                        <Button className='btn btn-danger btn-sm rounded-pill' onClick={toggleReview}>
                            Write a review
                        </Button>
                    </div>

                    <LocalityReviewsOffcanvas isOpen={open} toggle={toggle} />

                    {/* WRITE REVIEW MODAL */}
                    <WriteReviewModal
                        isOpen={reviewOpen}
                        toggle={toggleReview}
                    />
                </div>
            </section>
        </>
    );
};

export default LocalityRatingsAndReviews;
