"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Input,
  Button,
  Card,
  CardBody
} from "reactstrap";
import { FaStar } from "react-icons/fa";

const categories = [
  {
    title: "Environment",
    items: ["Neighbourhood", "Roads", "Safety", "Cleanliness"]
  },
  {
    title: "Commuting",
    items: ["Public Transport", "Parking", "Connectivity", "Traffic"]
  },
  {
    title: "Places of Interest",
    items: ["Schools", "Hospitals", "Restaurants", "Markets"]
  }
];

const WriteReviewModal = ({ isOpen, toggle }) => {
  const [ratings, setRatings] = useState({});
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");

  const handleRating = (key, value) => {
    setRatings({ ...ratings, [key]: value });
  };

  const renderStars = (key) => {
    return [1, 2, 3, 4, 5].map((star) => (
      <FaStar
        key={star}
        role="button"
        size={16}
        className={star <= (ratings[key] || 0) ? "text-warning" : "text-secondary"}
        onClick={() => handleRating(key, star)}
      />
    ));
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg" centered>
      <ModalHeader toggle={toggle}>
        Write your review in Saket, New-Delhi
      </ModalHeader>

      <ModalBody>

        <h6 className="fw-bold mb-3">Add Rating</h6>
        <Row className="mb-4">
          {categories.map((cat, index) => (
            <Col md="4" key={index}>
              <Card className="border">
                <CardBody>
                  <div className="fw-semibold mb-3">{cat.title}</div>
                  {cat.items.map((item, i) => (
                    <div key={i} className="d-flex justify-content-between align-items-center mb-2">
                      <small>{item}</small>
                      <div className="d-flex gap-1">
                        {renderStars(`${cat.title}-${item}`)}
                      </div>
                    </div>
                  ))}
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mb-3">
          <Col md="6">
            <h6 className="fw-bold">Add a Title</h6>
            <Input
              placeholder="Add subject line to your review"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Col>

          <Col md="6">
            <h6 className="fw-bold invisible">Select</h6>
            <Input type="select">
              <option>I own a property here</option>
              <option>I rented here</option>
              <option>I visited here</option>
            </Input>
          </Col>
        </Row>

        <div className="mb-4">
          <h6 className="fw-bold">Write Review</h6>
          <Input
            type="textarea"
            rows="5"
            placeholder="Tell us what you like & dislike about this locality"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>

        <Button color="danger" className="px-4">
          Submit
        </Button>

      </ModalBody>
    </Modal>
  );
};

export default WriteReviewModal;
