// components/menuData.js
"use client";

const menuData = [
  {
    name: "Buy",
    path: "/buy",
    submenu: [
      {
        title: "Popular Choices",
        items: [
          { label: "Ready to Move", path: "/property" },
          { label: "Owner Properties", path: "/property" },
          { label: "Budget Homes", path: "/property" },
          { label: "Premium Homes", path: "/premium-home" },
          { label: "Magic Homes", path: "/property" },
        ],
      },
      {
        title: "Property Type",
        items: [
          { label: "Flats", path: "/property" },
          { label: "Villas", path: "/property" },
          { label: "Plots", path: "/property" },
        ],
      },
      {
        title: "Budget Range",
        items: [
          { label: "Under ₹50L", path: "/property" },
          { label: "₹50L–₹1Cr", path: "/property" },
          { label: "₹1Cr–₹1.5Cr", path: "/property" },
        ],
      },
      {
        title: "Explore",
        items: [
          { label: "Localities in Indore", path: "/property" },
          { label: "Projects in Indore", path: "/projects" },
          { label: "Find an Agent", path: "/agents" },
          { label: "Home Interiors in Indore", path: "/" },

        ],
      },
      {
        title: "Buying Tools",
        items: [
          { label: "Localities in Indore", path: "/property" },
          { label: "Projects in Indore", path: "/projects" },
          { label: "Find an Agent", path: "/agents" },
          { label: "Home Interiors in Indore", path: "/" },

        ],
      },

    ],
  },
  {
    name: "Rent",
    path: "/rent",
    submenu: [
      {
        title: "Popular Choices",
        items: [
          { label: "Owner Properties", path: "/rent/owner-properties" },
          { label: "Verified Properties", path: "/rent/verified-properties" },
          { label: "Furnished Homes", path: "/rent/furnished-homes" },
          { label: "Bachelor Friendly Homes", path: "/rent/bachelor-friendly" },
          { label: "Immediately Available", path: "/rent/immediate-availability" },
        ],
      },
      {
        title: "Property Types",
        items: [
          { label: "Flat for rent in Indore", path: "/rent/flats-indore" },
          { label: "House for rent in Indore", path: "/rent/house-indore" },
          { label: "Villa for rent in Indore", path: "/rent/villa-indore" },
          { label: "PG in Indore", path: "/rent/pg-indore" },
          { label: "Office Space in Indore", path: "/rent/office-space-indore" },
          { label: "Commercial Space in Indore", path: "/rent/commercial-space-indore" },
          { label: "Coliving Space in Indore", path: "/rent/coliving-indore" },
          { label: "Student Hostels in Indore", path: "/rent/student-hostels-indore" },
        ],
      },
      {
        title: "Budget",
        items: [
          { label: "Under ₹10,000", path: "/rent/budget-under-10000" },
          { label: "₹10,000 – ₹15,000", path: "/rent/10000-15000" },
          { label: "₹15,000 – ₹25,000", path: "/rent/15000-25000" },
          { label: "Above ₹25,000", path: "/rent/above-25000" },
        ],
      },
      {
        title: "Explore",
        items: [
          { label: "Localities", path: "/rent/localities" },
          { label: "Buy vs Rent", path: "/buy-vs-rent" },
          { label: "Find an Agent", path: "/agents" },
          { label: "Share Requirement", path: "/share-requirement" },
          { label: "Property Services", path: "/property-services" },
          { label: "Rent Agreement", path: "/rent-agreement" },
        ],
      },
    ],
  },


  {
    name: "Sell",
    path: "/sell",
    submenu: [
      {
        title: "For Owner",
        items: [
          { label: "Post Property", badge: "FREE", path: "/sell/post-property" },
          { label: "My Dashboard", path: "/sell/owner-dashboard" },
          { label: "Sell / Rent Ad Packages", path: "/sell/ad-packages" },
          { label: "+91 9870 260 930", path: "tel:+919870260930" },
          { label: "Email Us", path: "mailto:support@example.com" },
        ],
      },
      {
        title: "For Agent & Builder",
        items: [
          { label: "My Dashboard", path: "/sell/agent-dashboard" },
          { label: "Developer Lounge", path: "/sell/developer-lounge" },
          { label: "Sales Enquiry", path: "/sell/sales-enquiry" },
          { label: "Ad Packages", path: "/sell/ad-packages-agent" },
          { label: "0120-5153525", path: "tel:01205153525" },
        ],
      },
      {
        title: "Selling Tools",
        items: [
          { label: "Property Valuation", path: "/tools/property-valuation" },
          { label: "Find an Agent", path: "/agents" },
          { label: "Rates & Trends", path: "/rates-trends" },
          { label: "PropWorth", path: "/tools/propworth" },
          { label: "Digipin", path: "/tools/digipin" },
        ],
      },
    ],
  },
  {
    name: "Our Projects",
    path: "/projects",
  },
  {
    name: "Home Loans",
    path: "/loan",
  },
  {
    name: "Home Interiors",
    path: "/home-interiors",
    submenu: [
      {
        title: "Explore our services",
        items: [
          {
            label: "Home Interior Design Services",
            path: "/home-interiors/design-services",
          },
        ],
      },
    ],
  }

];

export default menuData;
