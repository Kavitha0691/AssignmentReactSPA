import React, { useState } from "react";
import styles from "./home.module.css";
import { homedata } from "../../data/data";
import HomeMain from "../../components/HomeMainContent";
import Border from "../../components/Border";
import HomeToggle from "../../components/HomeToggle";

const Home = () => {
  const [home, setHome] = useState(homedata);

  const [expanded, setExpanded] = useState(null);

  const toggleDescription = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className={styles.homeContainer}>
      <HomeMain />
      <Border />

      {home ? (
        <div className={styles.list}>
          {home.map((item, index) => (
            <div key={index} className={styles.card}>
              {/* Card Image */}
              {item.img_url && (
                <img
                  src={item.img_url}
                  alt={item.name}
                  className={styles.cardImage}
                />
              )}

              {/* Card Content */}
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{item.name}</h2>

                {/*"See More" link */}
                <p className={styles.cardDescription}>{expanded === index ? item.description : null}</p>

                {/* Use HomeToggle Component */}
                <HomeToggle isExpanded={expanded === index} onClick={() => toggleDescription(index)} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No home data loaded.</p>
      )}
      <Border />
    </div>
  );
};

export default Home;
