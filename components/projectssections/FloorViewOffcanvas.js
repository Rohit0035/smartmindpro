"use client";
import React, { useState } from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Button
} from "reactstrap";
import Floorimg from "../../assets/images/floorimg.webp"
import Image from "next/image";
import PropertyInViewFloor from "./PropertyInViewFloor";

const floorData = {
    "2 BHK": [
        {
            size: "1067 sq.ft",
            superArea: "1067 sq.ft",
            price: "₹ 1.32 Cr",
            img: Floorimg
        },
        {
            size: "1151 sq.ft",
            superArea: "1151 sq.ft",
            price: "₹ 1.58 Cr",
            img: Floorimg
        }
    ],
    "3 BHK": [
        {
            size: "1645 sq.ft",
            superArea: "1645 sq.ft",
            price: "₹ 2.05 Cr",
            img: Floorimg
        }
    ]
};


const FloorViewOffcanvas = ({ isOpen, toggle }) => {
    const [selectedBHK, setSelectedBHK] = useState("2 BHK");
    const [selectedPlan, setSelectedPlan] = useState(
        floorData["2 BHK"][0]
    );

    return (
        <Offcanvas
            isOpen={isOpen}
            toggle={toggle}
            direction="end"
            className="w-75 side-st-top"
        >
            <OffcanvasHeader toggle={toggle}>
                Unit & Floor Plans
            </OffcanvasHeader>
            <hr className="my-0"/>

            <OffcanvasBody>
                {/* BHK Dropdown */}
                <select
                    className="form-select mb-3"
                    style={{width:'150px'}}
                    value={selectedBHK}
                    onChange={(e) => {
                        const bhk = e.target.value;
                        setSelectedBHK(bhk);
                        setSelectedPlan(floorData[bhk][0]);
                    }}
                >
                    {Object.keys(floorData).map((bhk) => (
                        <option key={bhk}>{bhk}</option>
                    ))}
                </select>

                {/* Size Tags */}
                <div className="d-flex flex-wrap gap-2 mb-3">
                    {floorData[selectedBHK].map((item, index) => (
                        <Button
                            key={index}
                            size="sm"
                            outline
                            color={
                                selectedPlan.size === item.size
                                    ? "primary"
                                    : "secondary"
                            }
                            onClick={() => setSelectedPlan(item)}
                        >
                            {item.size}
                        </Button>
                    ))}
                </div>

                {/* Floor Image */}
                <div className=" rounded p-2 text-center mb-3">
                    <Image
                        src={selectedPlan.img}
                        alt="Floor Plan"
                        className="img-fluid w-50 mx-auto"

                    />
                </div>

                {/* Bottom Info Section (like your image) */}
                <div className="border rounded overflow-hidden">
                    <div className="d-flex justify-content-between px-3 py-2 bg-light">
                        <span className="text-muted">Super area</span>
                        <strong>{selectedPlan.superArea}</strong>
                    </div>

                    <div className="d-flex justify-content-between px-3 py-2">
                        <span className="text-muted">Price range</span>
                        <strong className="text-primary">
                            Sale: {selectedPlan.price}
                        </strong>
                    </div>
                </div>

                {/* listing div */}

                <PropertyInViewFloor/>


            </OffcanvasBody>
        </Offcanvas>
    );
};

export default FloorViewOffcanvas;
