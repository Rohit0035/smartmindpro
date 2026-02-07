"use client";

import React from "react";
import { Container } from "reactstrap";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const saleData = [
    { title: "Upto ₹5,000 per sqft", count: 14, link: "/sale/upto-5000" },
    { title: "₹5,000 - ₹10,000 per sqft", count: 13, link: "/sale/5000-10000" },
    { title: "₹10,000 - ₹15,000 per sqft", count: 1, link: "/sale/10000-15000" },
];

const rentData = [
    { title: "1 BHK : ₹5,000 - ₹10,000", count: 17, link: "/rent/1bhk" },
    { title: "2 BHK : ₹5,000 - ₹10,000", count: 50, link: "/rent/2bhk" },
];

const LocalitiesPriceRange = () => {
    const renderCard = (item, index) => (
        <Link href={item.link} key={index} className="text-decoration-none">
            <div className=" rounded-3 p-3 mb-2 bg-white d-flex justify-content-between align-items-start">
                <div>
                    <div className="text-muted">{item.title}</div>
                    <div className="text-st fw-semibold">
                        {item.count} Localities
                    </div>
                </div>

                <FiArrowUpRight className="text-st fs-5" />
            </div>
        </Link>
    );

    return (
        <>
            <div>

                {/* Sale Section */}
                <h4 className="fw-bold mb-3">Price range for Sale</h4>
                {saleData.map(renderCard)}

                {/* Rent Section */}
                <h4 className="fw-bold mt-4 mb-3">Price range for Rent</h4>
                {rentData.map(renderCard)}

            </div>
        </>

    );
};

export default LocalitiesPriceRange;
