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
          { label: "Ready to Move", path: "/buy/ready-to-move" },
          { label: "Owner Properties", path: "/buy/owner-properties" },
          { label: "Budget Homes", path: "/buy/budget-homes" },
          { label: "Premium Homes", path: "/buy/premium-homes" },
          { label: "Magic Homes", path: "/buy/magic-homes" },
        ],
      },
      {
        title: "Property Type",
        items: [
          { label: "Flats", path: "/buy/flats" },
          { label: "Villas", path: "/buy/villas" },
          { label: "Plots", path: "/buy/plots" },
        ],
      },
      {
        title: "Budget Range",
        items: [
          { label: "Under ₹50L", path: "/buy/budget/under-50l" },
          { label: "₹50L–₹1Cr", path: "/buy/budget/50l-1cr" },
          { label: "₹1Cr–₹1.5Cr", path: "/buy/budget/1cr-1-5cr" },
        ],
      },
    ],
  },
  {
    name: "Rent",
    path: "/rent",
  },
  {
    name: "Sell",
    path: "/sell",
  },
  {
    name: "Our Projects",
    path: "/projects",
  },
  {
    name: "Home Interiors",
    path: "/home-interiors",
  },
  {
    name: "MB Advice",
    path: "/advice",
  },
];

export default menuData;
