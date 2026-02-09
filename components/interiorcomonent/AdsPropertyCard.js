"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
    Card,
    CardBody,
    Button,
    ListGroup,
    ListGroupItem,
} from "reactstrap";
import { RiCheckboxCircleFill } from "react-icons/ri";

const EstimateCard = () => {

    return (
        <Card className="mb-4 ">
            <div style={{ position: "relative", width: "100%", height: "180px" }}>
                <Image
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
                    alt="Interior"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>

            <CardBody>
                <h5>
                    Instantly Estimate <br />
                    <span className="text-primary">your Interiors Budget</span>
                </h5>

                <p className="text-muted small">
                    Accurate estimates with material details
                </p>

                <Button color="danger btn-sm" block >
                    Get Quote Now
                </Button>
            </CardBody>
        </Card>
    );
};

const WhyChooseCard = () => {
    return (
        <Card className="">
            <div style={{ position: "relative", width: "100%", height: "180px" }}>
                <Image
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
                    alt="Living Room"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>

            <CardBody>
                <h5>
                    <span className="text-primary">Why choose</span> SmartMind
                </h5>

                <ListGroup flush className="small text-start">
                    <ListGroupItem className="border-0 ps-0">
                        <RiCheckboxCircleFill className="text-success me-2" />
                        Experienced & Verified Designers
                    </ListGroupItem>

                    <ListGroupItem className="border-0 ps-0">
                        <RiCheckboxCircleFill className="text-success me-2" />
                        Assistance in Comparing Quotes
                    </ListGroupItem>

                    <ListGroupItem className="border-0 ps-0">
                        <RiCheckboxCircleFill className="text-success me-2" />
                        Exclusive Offers & Discount Coupons
                    </ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
};

const AdsPropertyCard = () => {

    return (
        <>
            <div className="">
                <EstimateCard />
                <WhyChooseCard />
            </div>


        </>
    );
};

export default AdsPropertyCard;
