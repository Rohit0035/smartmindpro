'use client';

import { useState } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Collapse,
} from 'reactstrap';
import {
    FaSchool,
    FaSubway,
    FaMapMarkerAlt,
    FaHospital,
    FaShoppingBag,
    FaTree,
} from 'react-icons/fa';

/* ---------- Reusable Card ---------- */
const HoverExpandCard = ({ title, icon: Icon, items }) => {
    const [open, setOpen] = useState(false);

    const visibleItems = items.slice(0, 2);
    const hiddenItems = items.slice(2);

    return (
        <Card
            className="h-100 shadow-sm border-0"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <CardBody>
                <CardTitle className="d-flex align-items-center gap-2 fw-semibold mb-1 fw-bold justify-content-between">
                    {title}
                    <Icon  className="text-st fs-4"/>
                </CardTitle>

                <ListGroup flush>
                    {visibleItems.map((item, index) => (
                        <ListGroupItem key={index} className="px-0 small">
                            {item}
                        </ListGroupItem>
                    ))}
                </ListGroup>

                <Collapse isOpen={open}>
                    <ListGroup flush>
                        {hiddenItems.map((item, index) => (
                            <ListGroupItem key={index} className="px-0">
                                {item}
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Collapse>

                {hiddenItems.length > 0 && (
                    <div className="text-st fw-semibold mt-2">
                        + {hiddenItems.length} more
                    </div>
                )}
            </CardBody>
        </Card>
    );
};

/* ---------- Main Component ---------- */
const LocalityNeighbourhood = () => {
    return (
        <div className="my-4">
            <h5 className="fw-bold mb-4">Locality Neighbourhood</h5>

            <Row className="g-3">
                <Col md="6">
                    <HoverExpandCard
                        title="Educational Institute"
                        icon={FaSchool}
                        items={[
                            'Vir Chander Singh Garhwali',
                            'Ch Malook Singh Govt Sarvodaya Bal',
                            'Vidya Niketan Senior Secondary School Saket',
                            'SDMC Pratibha Vidyalaya',
                            'New Green Field School Saket',
                            'Little Ones Public School',
                        ]}
                    />
                </Col>

                <Col md="6">
                    <HoverExpandCard
                        title="Transportation Hub"
                        icon={FaSubway}
                        items={[
                            'Saket Metro Station',
                            'Hauz Rani',
                            'Malviya Nagar',
                            'Qutub Minar',
                            'Chirag Delhi',
                            'Panchsheel Park',
                        ]}
                    />
                </Col>

                <Col md="6">
                    <HoverExpandCard
                        title="Nearby Localities"
                        icon={FaMapMarkerAlt}
                        items={[
                            'Block D Saket, New Delhi',
                            'Block J Saket, New Delhi',
                            'Block E Saket',
                            'Press Enclave',
                            'Sheikh Sarai',
                            'Panchsheel Enclave',
                        ]}
                    />
                </Col>

                <Col md="6">
                    <HoverExpandCard
                        title="Commercial Hub"
                        icon={FaShoppingBag}
                        items={[
                            'MGF Metropolitan Mall',
                            'J Block Market Saket New Delhi',
                        ]}
                    />
                </Col>

                <Col md="6">
                    <HoverExpandCard
                        title="Hospital"
                        icon={FaHospital}
                        items={[
                            'Max Hospital Saket',
                            'Sawan Neelu Angel Hospital',
                            'Pushpawati Singhania',
                            'Fortis Hospital',
                        ]}
                    />
                </Col>

                <Col md="6">
                    <HoverExpandCard
                        title="Tourist Spot"
                        icon={FaTree}
                        items={['RK Khanna Tennis Park']}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default LocalityNeighbourhood;
