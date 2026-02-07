"use client";
import React, { useState } from "react";
import { Card, CardBody, Button } from "reactstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const LocalityFaq = () => {
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      id: 1,
      question: "Which are the top projects in Saket?",
      answer:
        "Saket and its neighbourhood is a hotspot for upcoming and fully-developed projects. Some of the top projects include DDA Freedom Fighter Enclave, DDA Project Paryavaran Complex, DDA Gaurav Apartment, Anupam Apartment and DDA Golf View Apartments where you can easily find your dream home.",
    },
    {
      id: 2,
      question: "How many 3 BHK flats for sale in Saket?",
      answer:
        "3 BHK flats for sale in Saket are 90+ in number. Most of the 3 BHK apartments in this locality are well-constructed and offer a comfortable living.",
    },
    {
      id: 3,
      question: "How many villas available for sale in Saket?",
      answer:
        "The number of villas available for sale in Saket is 4. Generally, the villas in this locality are well-designed, thereby offering an experience like never before.",
    },
    {
      id: 4,
      question: "How many 2 BHK flats for sale in Saket?",
      answer:
        "The number of 2 BHK flats for sale in Saket is 30+. Most 2 BHK flats in this locality offer a comfortable living at affordable rates.",
    },
    {
      id: 5,
      question: "How many properties for sale in Saket?",
      answer:
        "Saket is well-connected and has many residential properties. Currently there are 200+ properties for sale in Saket.",
    },
    {
      id: 6,
      question: "How many properties available for rent in Saket?",
      answer:
        "Saket has many happy residents living here. There are 600+ properties available for rent in Saket at present.",
    },
  ];

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <section className="pt-5 pb-0" id="faq">
      <Card className="border-0 shadow-sm">
        <CardBody>
          <h4 className="fw-bold mb-4">Frequently Asked Questions</h4>

          {displayedFaqs.map((faq) => (
            <div key={faq.id} className="border-bottom py-3">
              <div className="mb-2">
                <span className="badge bg-warning text-dark me-2">
                  Q
                </span>
                <span className="fw-semibold">{faq.question}</span>
              </div>

              <div>
                <span className="badge bg-success me-2">
                  A
                </span>
                <span className="text-muted">{faq.answer}</span>
              </div>
            </div>
          ))}

          <div className="text-center mt-3">
            <Button
              color="link"
              className="text-decoration-none fw-semibold"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  Show Less <FaChevronUp />
                </>
              ) : (
                <>
                  Show More <FaChevronDown />
                </>
              )}
            </Button>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default LocalityFaq;
