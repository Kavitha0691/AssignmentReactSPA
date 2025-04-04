import React, { useState } from 'react';
import { rides } from '../../data/data';
import styles from './category.module.css';
import { getImageUrl } from '../../utils/functions';

const CategoryPage = ({ category }) => {
  const filteredRides = rides.filter((ride) => ride.category === category);

  const [slideIndex, setSlideIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const slide = (direction) => {
    setExpandedIndex(null); // Collapse description when sliding
    if (direction === 'next' && slideIndex < filteredRides.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (direction === 'prev' && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.categoryContainer}>
      <h2 className={styles.categoryTitle}>{category}</h2>


      <div className={styles.carouselContainer}>
        {/* Left Slide Button (Hidden if first slide) */}
        {slideIndex > 0 && (
          <button className={styles.slideButton} onClick={() => slide('prev')}>
            &lt;
          </button>
        )}

        {/* Ride Information Slider */}
        <div className={styles.rideSlider}>
          {filteredRides.length > 0 ? (
            <div
              className={styles.rideGrid}
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
              {filteredRides.map((ride, index) => (
                <div key={index} className={styles.rideCard}>
                  <h2 className={styles.rideTitle}>{ride.name}</h2>

                  {ride.img_url && (
                    <img src={getImageUrl(ride.img_url)} alt={ride.name} className={styles.rideImage} />
                  )}

                  <button className={styles.toggleButton} onClick={() => toggleDescription(index)}>
                    {expandedIndex === index ? 'See Less' : 'See More'}
                  </button>

                  {expandedIndex === index && <p className={styles.description}>{ride.description}</p>}
                </div>
              ))}
            </div>
          ) : (
            <p>No rides available in this category.</p>
          )}
        </div>

        {/* Right Slide Button (Hidden if last slide) */}
        {slideIndex < filteredRides.length - 1 && (
          <button className={styles.slideButton} onClick={() => slide('next')}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
