'use client';

import { Card, CardBody, CardImg, Button, Badge } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaCamera } from 'react-icons/fa';
import proimg from "../../assets/images/pro-1.jpg"
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css/navigation';

const PROPERTIES = [
    {
        id: 1,
        price: '₹93.1 Lac',
        title: '3 BHK Apartment 1100 sqft',
        subtitle: 'Ready to Move',
        location: '3 BHK, Multistorey Apartment',
        owner: 'Ramneeti',
        img: proimg,
        photos: 21,
        posted: 'Yesterday'
    },
    {
        id: 2,
        price: '₹90 Lac',
        title: '3 BHK Builder Floor 950 sqft',
        subtitle: 'Ready to Move',
        location: 'A Very Nice Newly Built 3BHK',
        agent: 'Nagpal Associates',
        img: proimg,
        photos: 14,
        posted: 'Jan 13, 26'
    },
    {
        id: 3,
        price: '₹75 Lac',
        title: '2 BHK Apartment 1800 sqft',
        subtitle: 'Ready to Move',
        location: 'Multistorey apartment is available',
        owner: 'Rajesh',
        img: proimg,
        photos: 21,
        posted: 'Jan 11, 26'
    },
     {
        id: 4,
        price: '₹75 Lac',
        title: '2 BHK Apartment 1800 sqft',
        subtitle: 'Ready to Move',
        location: 'Multistorey apartment is available',
        owner: 'Rajesh',
        img: proimg,
        photos: 21,
        posted: 'Jan 11, 26'
    }
];

const LocalityPropertySale = () => {
    return (

        <>
            <section className='pt-0'>
                <h5 className="mb-3 fw-semibold">
                    367 Properties for Sale
                </h5>

                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={16}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 }
                    }}
                >
                    {PROPERTIES.map(item => (
                        <SwiperSlide key={item.id}>
                            <Card className="h-100">
                                <div className="position-relative">
                                    <Image src={item.img} className='rounded-0 object-fit-cover' style={{ height: '200px' }} />

                                    <Badge
                                        color="dark"
                                        className="position-absolute bottom-0 start-0 m-2"
                                    >
                                        Posted: {item.posted}
                                    </Badge>

                                    <Badge
                                        color="secondary"
                                        className="position-absolute bottom-0 end-0 m-2 d-flex align-items-center gap-1"
                                    >
                                        <FaCamera />
                                        {item.photos} Photos
                                    </Badge>
                                </div>

                                <CardBody className="d-flex flex-column">
                                    <h6 className="fw-semibold mb-1">
                                        {item.price}
                                    </h6>

                                    <div className="small fw-semibold">
                                        {item.title}
                                    </div>

                                    <div className="small text-muted">
                                        {item.subtitle}
                                    </div>

                                    <div className="small text-muted mb-2">
                                        {item.location}
                                    </div>

                                    <div className="small text-muted mb-3">
                                        {item.owner
                                            ? `Owner: ${item.owner}`
                                            : `Agent: ${item.agent}`}
                                    </div>

                                    <Link
                                        href="#"
                                        className="mt-auto align-self-start btn btn-danger btn-sm rounded-pill px-3"
                                    >
                                        View Details
                                    </Link>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="mt-3">
                    <Link
                        href="#"
                        className="text-st fw-semibold small"
                    >
                        Check all Properties for Sale in Saket
                    </Link>
                </div>
            </section>

        </>
    );
};

export default LocalityPropertySale;
