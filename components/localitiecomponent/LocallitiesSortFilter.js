"use client";

import React, { useState } from "react";
import { Container } from "reactstrap";
import { FiX } from "react-icons/fi";

const filterOptions = [
    "Demand",
    "Price/Sqft",
    "Rating",
    "Ranking",
    "Price: High to Low",
    "Price: Low to High",
];

const LocallitiesSortFilter = () => {
    const [selected, setSelected] = useState("Price: Low to High");

    return (
        <>

            <div className="filter-navbar bg-white d-none d-sm-block py-2"
                style={{
                    zIndex: 1000,
                    position: "sticky",
                    top: "4.5rem",
                }}>
                <Container>
                    <div className="d-flex align-items-center flex-wrap gap-2">

                        {/* Title */}
                        <span className="fw-bold me-2">Sort & Filter</span>

                        {/* Filter Pills */}
                        {filterOptions.map((item, index) => {
                            const isActive = selected === item;

                            return (
                                <div
                                    key={index}
                                    role="button"
                                    onClick={() => setSelected(item)}
                                    className={`px-3 py-1 rounded-pill border d-flex align-items-center gap-1 
                                           ${isActive
                                            ? "bg-info bg-opacity-10 text-info border-info"
                                            : "bg-light text-dark border"
                                        }`}
                                    style={{ fontSize: "14px" }}
                                >
                                    {item}

                                    {isActive && (
                                        <FiX
                                            size={14}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelected("");
                                            }}
                                            role="button"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </div>
        </>

    );
};

export default LocallitiesSortFilter;
