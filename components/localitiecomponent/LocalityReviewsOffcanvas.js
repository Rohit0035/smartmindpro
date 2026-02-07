'use client';

import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from 'reactstrap';
import { FaStar } from 'react-icons/fa';

const LocalityReviewsOffcanvas = ({ isOpen, toggle }) => {
  const reviews = [
    {
      name: 'Neeraj',
      date: '08/02/2025',
      title: 'Nice Locality',
      desc:
        'Well connected via metro, surrounded by schools, hospitals and markets.',
    },
    {
      name: 'Ravinder',
      date: '07/03/2024',
      title: 'One of the best...',
      desc:
        'Select City Walk and Saket District Centre make it ideal for offices.',
    },
    {
      name: 'Key Homes',
      date: '06/03/2024',
      title: 'Saket is a nice locality',
      desc:
        'Good connectivity to school, college, mall, hospital, metro station.',
    },
  ];

  return (
    <Offcanvas
      isOpen={isOpen}
      toggle={toggle}
      direction="end"
      className="w-75"
    >
      <OffcanvasHeader toggle={toggle}>
        Ratings & Reviews of Saket
      </OffcanvasHeader>

      <OffcanvasBody>
        {reviews.map((item, index) => (
          <div key={index} className="border-bottom pb-3 mb-3">
            <div className="d-flex justify-content-between">
              <div>
                <div className="fw-semibold">{item.name}</div>
                <div className="text-muted small">
                  Agent (Local Guide)
                </div>
              </div>

              <div className="text-warning text-end">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
                <div className="text-muted small">
                  {item.date}
                </div>
              </div>
            </div>

            <div className="fw-semibold mt-2">
              {item.title}
            </div>
            <div className="text-muted small">
              {item.desc}
            </div>
          </div>
        ))}
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default LocalityReviewsOffcanvas;
