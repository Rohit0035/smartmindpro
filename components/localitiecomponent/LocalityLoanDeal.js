"use client";

import { Container, Card, CardBody } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaHome } from "react-icons/fa";
import "swiper/css/navigation";
import Link from "next/link";

export const homeLoanData = [
    {
        id: 1,
        bankName: "Indian Overseas Bank",
        interestRate: "7.35% – 10%",
        logoIcon: "home",
        ctaText: "Apply for affordable home loan",
    },
    {
        id: 2,
        bankName: "HDFC Bank",
        interestRate: "7.45% – 9.95%",
        logoIcon: "home",
        ctaText: "Apply for affordable home loan",
    },
    {
        id: 3,
        bankName: "SBI Home Loan",
        interestRate: "7.40% – 9.85%",
        logoIcon: "home",
        ctaText: "Apply for affordable home loan",
    },
    {
        id: 4,
        bankName: "ICICI Bank",
        interestRate: "7.50% – 10.05%",
        logoIcon: "home",
        ctaText: "Apply for affordable home loan",
    },
];


const LocalityLoanDeal = () => {
    return (
        <>
            <div className="py-3">
                <h5 className="fw-bold mb-3">
                    Top Home Loan Deals in Saket, New Delhi
                </h5>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={12}
                    slidesPerView={1.2}
                    breakpoints={{
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 4 },
                    }}
                >
                    {homeLoanData.map(item => (
                        <SwiperSlide key={item.id}>
                            <Card
                                className="h-100 border-0 shadow-sm"
                                style={{
                                    borderRadius: 10,
                                    cursor: "pointer",
                                }}
                            >
                                <CardBody className="text-center">
                                    <div
                                        className="d-flex align-items-center justify-content-center mb-2"
                                        style={{
                                            height: 60,
                                            width: 60,
                                            margin: "0 auto",
                                            border: "1px solid #d9eefc",
                                            borderRadius: 8,
                                        }}
                                    >
                                        <FaHome size={26} color="#1a73e8" />
                                    </div>

                                    <div className="fw-semibold small text-truncate">
                                        {item.bank}
                                    </div>

                                    <div className="text-muted small">
                                        {item.interest} Interest Rate
                                    </div>

                                    <div
                                        className="text-st small mt-2"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <Link href="/loan">
                                            Apply for affordable home loan
                                        </Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>

    );
};

export default LocalityLoanDeal;
