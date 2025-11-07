"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import gplayimg from "../assets/images/gplay.png"
import SmallForm from "./SmallForm";

const Footer = () => {
  return (
    <>
      <footer className="bg-light  pt-5 pb-3 mt-5">
        <div className="container">
          <div className="row gy-4">
            {/* About Section */}
            <div className="col-lg-4 col-md-6">
              <h6 className="fw-bold mb-2">About SmartMind</h6>
              <p className="small text-muted">
                As the largest platform connecting property buyers and sellers, SmartMind helps you find verified listings for properties, projects, and home services across India.{" "}
              </p>

              <h6 className="fw-bold mt-4 mb-2">More from our Network</h6>
              <div className="d-flex gap-3">
                <Link href="#" className="text-muted small">Times Now</Link>
                <Link href="#" className="text-muted small">ET Now</Link>
              </div>

              <div className="d-flex align-items-center gap-2 mt-3">
                <Link href="#">
                  <Image
                    src={gplayimg}
                    alt="Google Play"
                    width="150"
                  />
                </Link>
              </div>

              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-dark fs-5"><FaFacebookF /></a>
                <a href="#" className="text-dark fs-5"><FaTwitter /></a>
                <a href="#" className="text-dark fs-5"><FaLinkedinIn /></a>
                <a href="#" className="text-dark fs-5"><FaYoutube /></a>
                <a href="#" className="text-dark fs-5"><FaInstagram /></a>
              </div>
            </div>

            {/* Properties in India */}
            <div className="col-lg-4 col-md-6">
              <h6 className="fw-bold mb-3">Properties in India</h6>
              <div className="d-flex flex-wrap gap-2">
                {[
                  "New Delhi",
                  "Mumbai",
                  "Chennai",
                  "Pune",
                  "Noida",
                  "Gurgaon",
                  "Bangalore",
                  "Ahmedabad",
                ].map((city) => (
                  <Link
                    key={city}
                    href={`/property-in-${city.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-muted small text-decoration-none"
                  >
                    Property in {city}
                  </Link>
                ))}
              </div>

              <h6 className="fw-bold mt-4 mb-3">New Projects in India</h6>
              <div className="d-flex flex-wrap gap-2">
                {[
                  "New Delhi",
                  "Mumbai",
                  "Chennai",
                  "Pune",
                  "Noida",
                  "Gurgaon",
                  "Bangalore",
                  "Ahmedabad",
                ].map((city) => (
                  <Link
                    key={city}
                    href={`/new-projects-${city.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-muted small text-decoration-none"
                  >
                    New Projects in {city}
                  </Link>
                ))}
              </div>
            </div>

            {/* Property Services */}
            <div className="col-lg-4 col-md-6">
              <h6 className="fw-bold mb-3">Property Services</h6>
              <div className="d-flex flex-column gap-1">
                <Link href="/home-loan" className="text-muted small text-decoration-none">
                  Home Loan
                </Link>
                <Link href="/home-interior" className="text-muted small text-decoration-none">
                  Home Interior
                </Link>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          {/* Bottom Footer */}
          <div className="text-center text-muted small">
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-2">
              <Link href="/sitemap" className="text-muted text-decoration-none">Sitemap</Link>
              <Link href="/terms" className="text-muted text-decoration-none">Terms & Conditions</Link>
              <Link href="/privacy-policy" className="text-muted text-decoration-none">Privacy Policy</Link>
              <Link href="/whistle-blower" className="text-muted text-decoration-none">Whistle Blower Policy</Link>
              <Link href="/blog" className="text-muted text-decoration-none">Blog</Link>
              <Link href="/careers" className="text-muted text-decoration-none">Careers</Link>
              <Link href="/testimonials" className="text-muted text-decoration-none">Testimonials</Link>
              <Link href="/unsubscribe" className="text-muted text-decoration-none">Unsubscribe</Link>
              <Link href="/help-center" className="text-muted text-decoration-none">Help Center</Link>
              <Link href="/sales-enquiry" className="text-muted text-decoration-none">Sales Enquiry</Link>
              <Link href="/buy-services" className="text-muted text-decoration-none">Buy Services</Link>
              <Link href="/news" className="text-muted text-decoration-none">News</Link>
            </div>

            <p className="small mt-3">
              Disclaimer: SmartMind Realty Services Limited is an intermediary offering its platform to advertise properties for Seller or Customer/Buyer.
              © Copyright 2025 SmartMind Realty Services Limited. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* small form */}
      <SmallForm />
    </>

  );
};

export default Footer;
