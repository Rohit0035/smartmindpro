"use client";

import { useState, useMemo } from "react";
import { Container } from "reactstrap";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Proimg from "../../assets/images/pro-1.jpg";

export const galleryData = [
    { id: 1, src: Proimg, tag: "Parks" },
    { id: 2, src: Proimg, tag: "Parks" },
    { id: 3, src: Proimg, tag: "Parks" },
    { id: 4, src: Proimg, tag: "Streets and Roads" },
    { id: 5, src: Proimg, tag: "Streets and Roads" },
    { id: 6, src: Proimg, tag: "Parking" },
    { id: 7, src: Proimg, tag: "Parking" },
    { id: 8, src: Proimg, tag: "Residential Area" },
    { id: 9, src: Proimg, tag: "Residential Area" },
    { id: 10, src: Proimg, tag: "Schools" },
];

const LocalityPhotosVideos = () => {
    const [activeTag, setActiveTag] = useState("All");
    const [lightboxIndex, setLightboxIndex] = useState(-1);

    const tags = useMemo(() => {
        const map = {};
        galleryData.forEach((item) => {
            map[item.tag] = (map[item.tag] || 0) + 1;
        });

        return [
            { label: "All", count: galleryData.length },
            ...Object.entries(map).map(([label, count]) => ({
                label,
                count,
            })),
        ];
    }, []);

    const filteredImages =
        activeTag === "All"
            ? galleryData
            : galleryData.filter((img) => img.tag === activeTag);

    return (
        <section id="photovideos">
            <Container className="py-3">

                <h5 className="fw-bold mb-3">Photos & Videos</h5>

                <div className="d-flex flex-wrap gap-2 mb-3">
                    {tags.map((tag) => (
                        <div
                            key={tag.label}
                            onClick={() => setActiveTag(tag.label)}
                            className={`px-3 py-1 rounded-pill small border ${activeTag === tag.label
                                    ? "bg-dark text-white"
                                    : "bg-light"
                                }`}
                            style={{ cursor: "pointer" }}
                        >
                            {tag.label} ({tag.count})
                        </div>
                    ))}
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={10}
                    slidesPerView={3}
                    breakpoints={{
                        320: { slidesPerView: 1.2 },
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                    }}
                >
                    {filteredImages.map((img, index) => (
                        <SwiperSlide key={img.id}>
                            <div
                                style={{
                                    height: 180,
                                    borderRadius: 8,
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    position: "relative",
                                }}
                                onClick={() => setLightboxIndex(index)}
                            >
                                <Image
                                    src={img.src}
                                    alt="gallery"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Lightbox
                    open={lightboxIndex >= 0}
                    close={() => setLightboxIndex(-1)}
                    index={lightboxIndex}
                    slides={filteredImages.map((img) => ({
                        src: img.src.src, 
                    }))}
                />

            </Container>
        </section>
    );
};

export default LocalityPhotosVideos;
