'use client';

import { useState } from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Progress,
  Card,
  CardBody
} from 'reactstrap';
import classnames from 'classnames';
import {
  FaHome,
  FaBuilding,
  FaBriefcase,
  FaEllipsisH
} from 'react-icons/fa';

const DATA = {
  sale: {
    summary:
      '39% properties for sale in Saket lie in range of Above ₹5Cr while 9% properties fall in range of ₹20Lac - ₹40Lac.',
    priceRange: [
      { label: 'Above ₹5Cr', value: 39, color: 'success' },
      { label: '₹20Lac - ₹40Lac', value: 9, color: 'warning' },
      { label: '₹40Lac - ₹60Lac', value: 6, color: 'danger' },
      { label: 'Others', value: 46, color: 'secondary' }
    ],
    propertyType: [
      { label: 'Builder Floor Apartment', value: 64, icon: <FaHome /> },
      { label: 'Apartment', value: 28, icon: <FaBuilding /> },
      { label: 'Commercial Office Space', value: 3, icon: <FaBriefcase /> },
      { label: 'Others', value: 5, icon: <FaEllipsisH /> }
    ]
  },
  rent: {
    summary:
      '52% rental properties are priced above ₹50k/month while 18% fall under ₹20k/month.',
    priceRange: [
      { label: 'Above ₹50k', value: 52, color: 'success' },
      { label: '₹20k - ₹30k', value: 18, color: 'warning' },
      { label: '₹30k - ₹40k', value: 12, color: 'danger' },
      { label: 'Others', value: 18, color: 'secondary' }
    ],
    propertyType: [
      { label: 'Apartment', value: 58, icon: <FaBuilding /> },
      { label: 'Builder Floor', value: 25, icon: <FaHome /> },
      { label: 'Commercial', value: 10, icon: <FaBriefcase /> },
      { label: 'Others', value: 7, icon: <FaEllipsisH /> }
    ]
  }
};

const PropertySnapshot = () => {
  const [activeTab, setActiveTab] = useState('sale');
  const current = DATA[activeTab];

  return (
    <Card>
      <CardBody>
        <h5 className="mb-3">Properties' Snapshot</h5>

        <Nav tabs>
          {['sale', 'rent'].map(tab => (
            <NavItem key={tab}>
              <NavLink
                className={classnames(
                  'fw-semibold',
                  { active: activeTab === tab }
                )}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'sale' ? 'For Sale' : 'For Rent'}
              </NavLink>
            </NavItem>
          ))}
        </Nav>

        <TabContent activeTab={activeTab} className="pt-3">
          <TabPane tabId={activeTab}>
            <p className="text-muted small mb-4">
              {current.summary}
            </p>

            <div className="row">
              <div className="col-md-6 mb-3">
                <h6 className="fw-semibold">Price Range</h6>

                {current.priceRange.map((item, i) => (
                  <div key={i} className="mb-2">
                    <div className="d-flex justify-content-between small">
                      <span>{item.label}</span>
                      <span className="fw-semibold">{item.value}%</span>
                    </div>
                    <Progress
                      value={item.value}
                      color={item.color}
                    />
                  </div>
                ))}
              </div>

              <div className="col-md-6">
                <h6 className="fw-semibold">Property Type</h6>

                {current.propertyType.map((item, i) => (
                  <div
                    key={i}
                    className="d-flex align-items-center mb-2 small"
                  >
                    <span className="me-2 text-primary">
                      {item.icon}
                    </span>
                    <span className="flex-grow-1">
                      {item.label}
                    </span>
                    <span className="fw-semibold">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  );
};

export default PropertySnapshot;
