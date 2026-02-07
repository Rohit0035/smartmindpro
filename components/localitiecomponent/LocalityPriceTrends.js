'use client';

import { useState } from 'react';
import {
    Card,
    CardBody,
    Nav,
    NavItem,
    NavLink,
    Button,
    ButtonGroup,
    Input,
    Badge,
    Table
} from 'reactstrap';
import classnames from 'classnames';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { FaChartLine, FaTable } from 'react-icons/fa';

const PROPERTY_TYPES = [
    'Residential',
    'Apartment',
    'Builder Floor',
    'Residential House',
    'Plot'
];

// ⬇️ DATA FROM ABOVE ⬇️
const DATA = {
    sale: {
        Residential: [
            { period: 'Jan 24', price: 1.2 },
            { period: 'Apr 24', price: 1.25 },
            { period: 'Jul 24', price: 1.3 },
            { period: 'Oct 24', price: 1.35 }
        ],
        Apartment: [
            { period: 'Jan 24', price: 1.1 },
            { period: 'Apr 24', price: 1.18 },
            { period: 'Jul 24', price: 1.22 },
            { period: 'Oct 24', price: 1.28 }
        ],
        'Builder Floor': [
            { period: 'Jan 24', price: 1.3 },
            { period: 'Apr 24', price: 1.35 },
            { period: 'Jul 24', price: 1.4 },
            { period: 'Oct 24', price: 1.45 }
        ],
        'Residential House': [
            { period: 'Jan 24', price: 1.6 },
            { period: 'Apr 24', price: 1.65 },
            { period: 'Jul 24', price: 1.7 },
            { period: 'Oct 24', price: 1.8 }
        ],
        Plot: [
            { period: 'Jan 24', price: 0.9 },
            { period: 'Apr 24', price: 1.0 },
            { period: 'Jul 24', price: 1.1 },
            { period: 'Oct 24', price: 1.15 }
        ]
    },

    rent: {
        Residential: [
            { period: 'Jan 24', price: 32 },
            { period: 'Apr 24', price: 34 },
            { period: 'Jul 24', price: 36 },
            { period: 'Oct 24', price: 38 }
        ],
        Apartment: [
            { period: 'Jan 24', price: 30 },
            { period: 'Apr 24', price: 32 },
            { period: 'Jul 24', price: 34 },
            { period: 'Oct 24', price: 36 }
        ],
        'Builder Floor': [
            { period: 'Jan 24', price: 35 },
            { period: 'Apr 24', price: 37 },
            { period: 'Jul 24', price: 39 },
            { period: 'Oct 24', price: 41 }
        ],
        'Residential House': [
            { period: 'Jan 24', price: 45 },
            { period: 'Apr 24', price: 47 },
            { period: 'Jul 24', price: 50 },
            { period: 'Oct 24', price: 52 }
        ],
        Plot: [
            { period: 'Jan 24', price: 20 },
            { period: 'Apr 24', price: 22 },
            { period: 'Jul 24', price: 24 },
            { period: 'Oct 24', price: 26 }
        ]
    }
};


const LocalityPriceTrends = () => {
    const [activeTab, setActiveTab] = useState('sale');
    const [propertyType, setPropertyType] = useState('Residential');
    const [range, setRange] = useState('Max');
    const [view, setView] = useState('chart');

    const chartData = DATA[activeTab][propertyType] || [];

    return (
        <Card id='pricetrend'>
            <CardBody>
                <h5 className="fw-semibold mb-3">Price Trends</h5>

                <Nav tabs>
                    {['sale', 'rent'].map(tab => (
                        <NavItem key={tab}>
                            <NavLink
                                className={classnames({ active: activeTab === tab })}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab === 'sale' ? 'For Sale' : 'For Rent'}
                            </NavLink>
                        </NavItem>
                    ))}
                </Nav>

                <div className="small text-muted mt-2">
                    No data found for current quarter
                </div>

                <div className="d-flex flex-wrap gap-2 mt-3 align-items-center">
                    <Input
                        type="select"
                        value={propertyType}
                        onChange={e => setPropertyType(e.target.value)}
                        style={{ width: 200 }}
                    >
                        {PROPERTY_TYPES.map(type => (
                            <option key={type}>{type}</option>
                        ))}
                    </Input>

                    {PROPERTY_TYPES.map(type => (
                        <Button
                            key={type}
                            size="sm"
                            outline
                            color="secondary"
                            active={propertyType === type}
                            onClick={() => setPropertyType(type)}
                        >
                            {type}
                        </Button>
                    ))}
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                    <ButtonGroup size="sm">
                        {['1 Yr', '3 Yr', 'Max'].map(r => (
                            <Button
                                key={r}
                                outline
                                color="secondary"
                                active={range === r}
                                onClick={() => setRange(r)}
                            >
                                {r}
                            </Button>
                        ))}
                    </ButtonGroup>

                    <ButtonGroup size="sm">
                        <Button
                            outline
                            color="secondary"
                            active={view === 'chart'}
                            onClick={() => setView('chart')}
                        >
                            <FaChartLine />
                        </Button>
                        <Button
                            outline
                            color="secondary"
                            active={view === 'table'}
                            onClick={() => setView('table')}
                        >
                            <FaTable />
                        </Button>
                    </ButtonGroup>
                </div>

                <div className="mt-4" style={{ height: 320 }}>
                    {view === 'chart' ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="period" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="price"
                                    stroke="#dc3545"
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    ) : (
                        <Table bordered responsive size="sm">
                            <thead className="table-light">
                                <tr>
                                    <th>Period</th>
                                    <th>
                                        Avg Price {activeTab === 'sale' ? '(₹ Cr)' : '(₹ / Month)'}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {chartData.map((row, i) => (
                                    <tr key={i}>
                                        <td>{row.period}</td>
                                        <td className="fw-semibold">{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </div>

                <div className="mt-3">
                    <Badge color="info" pill>
                        Saket
                    </Badge>
                </div>

                <div className="mt-3">
                    <a href="#" className="text-st fw-semibold small">
                        Explore Rates & Trends in detail
                    </a>
                </div>
            </CardBody>
        </Card>
    );
};

export default LocalityPriceTrends;
