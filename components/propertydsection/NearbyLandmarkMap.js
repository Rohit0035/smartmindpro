"use client";
import React, { useState } from "react";
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import { FaBuilding, FaBus, FaTrain, FaSchool, FaShoppingBag, FaHospital } from "react-icons/fa";
import L from "leaflet";

// Custom map marker icon
const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

const locations = {
  1: {
    name: "Commercial Hub",
    points: [{ name: "Brigade Opus", distance: "2.5 Km", lat: 13.035, lng: 77.58 }],
  },
  2: {
    name: "Transportation Hub",
    points: [{ name: "Bangalore Baptist Hospital", distance: "0.9 Km", lat: 13.03, lng: 77.59 }],
  },
  3: {
    name: "Metro Stations",
    points: [{ name: "Hebbal Metro Station", distance: "1.2 Km", lat: 13.04, lng: 77.59 }],
  },
  4: {
    name: "Educational Institutes",
    points: [
      { name: "Air Force School", distance: "3.0 Km", lat: 13.05, lng: 77.58 },
      { name: "Jain Heritage School", distance: "1.5 Km", lat: 13.03, lng: 77.58 },
    ],
  },
  5: {
    name: "Shopping Centre",
    points: [{ name: "Esteem Mall", distance: "1.6 Km", lat: 13.03, lng: 77.59 }],
  },
  6: {
    name: "Hospital",
    points: [
      { name: "Columbia Asia Hospital", distance: "1.8 Km", lat: 13.035, lng: 77.59 },
      { name: "Hebbal Hospital", distance: "0.9 Km", lat: 13.03, lng: 77.595 },
    ],
  },
};

// Component that moves map when tab changes
function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, 14);
  return null;
}

const NearbyLandmarkMap = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const activePoints = locations[activeTab].points;
  const center = [activePoints[0].lat, activePoints[0].lng];

  return (
    <Container fluid className="p-3 border rounded bg-white shadow-sm">
      <h5 className="fw-bold mb-3">Popular Landmarks Nearby</h5>

      {/* Live Map Section */}
      <div className="rounded overflow-hidden mb-4" style={{ height: "300px" }}>
        <MapContainer
          center={center}
          zoom={14}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ChangeMapView coords={center} />
          {activePoints.map((point, i) => (
            <Marker
              key={i}
              position={[point.lat, point.lng]}
              icon={markerIcon}
            >
              <Popup>
                <b>{point.name}</b>
                <br />
                Distance: {point.distance}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Tabs Navigation */}
      <Nav tabs className="border-bottom mb-3 flex-nowrap overflow-auto small">
        <NavItem>
          <NavLink
            className={`small fw-semibold  d-flex st-txt-o  ${activeTab === "1" ? "text-st border-st border-bottom" : ""}`}
            onClick={() => toggleTab("1")}
            style={{ cursor: "pointer" , fontSize:'12px'}}
          >
            <FaBuilding className="me-2" style={{fontSize:'12px'}} /> Commercial Hub
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`small fw-semibold d-flex st-txt-o ${activeTab === "2" ? "text-st border-st border-bottom" : ""}`}
            onClick={() => toggleTab("2")}
            style={{ cursor: "pointer", fontSize:'12px' }}
          >
            <FaBus className="me-2" style={{fontSize:'12px'}} /> Transportation Hubs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`px-1 small fw-semibold d-flex st-txt-o ${activeTab === "3" ? "text-st border-st border-bottom" : ""}`}
            onClick={() => toggleTab("3")}
            style={{ cursor: "pointer", fontSize:'12px' }}
          >
            <FaTrain className="me-2" style={{fontSize:'12px'}} /> Metro Stations
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`px-1 small fw-semibold d-flex st-txt-o ${activeTab === "4" ? "text-st border-st border-bottom" : ""}`}
            onClick={() => toggleTab("4")}
            style={{ cursor: "pointer", fontSize:'12px' }}
          >
            <FaSchool className="me-2" style={{fontSize:'12px'}} /> Educational Institutes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`px-1 small fw-semibold d-flex st-txt-o ${activeTab === "5" ? "text-st border-st border-bottom" : ""}`}
            onClick={() => toggleTab("5")}
            style={{ cursor: "pointer", fontSize:'12px' }}
          >
            <FaShoppingBag className="me-2" style={{fontSize:'12px'}} /> Shopping Centre
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`px-1 small fw-semibold d-flex st-txt-o ${activeTab === "6" ? "text-st border-st border-bottom" : ""}`}
            onClick={() => toggleTab("6")}
            style={{ cursor: "pointer", fontSize:'12px' }}
          >
            <FaHospital className="me-2" style={{fontSize:'12px'}} /> Hospital
          </NavLink>
        </NavItem>
      </Nav>

      {/* Tab Content */}
      <TabContent activeTab={activeTab}>
        <TabPane tabId={activeTab}>
          <Row>
            {activePoints.map((item, index) => (
              <Col md="6" key={index}>
                <Card className="mb-2 border-0">
                  <CardBody>
                    <p className="mb-1 fw-semibold">
                      {item.name}{" "}
                      <span className="text-muted small">
                        ({item.distance})
                      </span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </TabPane>
      </TabContent>
    </Container>
  );
};

export default NearbyLandmarkMap;
