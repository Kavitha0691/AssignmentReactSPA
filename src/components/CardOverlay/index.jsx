// import React from "react";
// import styles from "./cardOverlay.module.css";
// import BackgroundImage from '../../assets/ticketImage.png'; 

// const CardOverlay = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.background}></div> {/* Background div */}
//       <div className={styles.cards}>
//         {/* Left Card */}
//         <div className={styles.card}>
//           <h3>Disney Parks Dated Tickets</h3>
//           <p className={styles.tagline}>Enjoy the magic for 1 or several days</p>
//           <ul className={styles.cardList}>
//             <li> 1 or 2 Disney Parks</li>
//             <li> 1 to 4 days access</li>
//             <li> Dated tickets can be cancelled up to 3 days before arrival</li>
//           </ul>
//           <a href="#" className={styles.link}>Learn more</a>
//         </div>

//         {/* Right Card */}
//         <div className={styles.card}>
//           <h3>Hotel + Tickets Package</h3>
//           <p className={styles.tagline}>Stay close to the magic!</p>
//           <ul className={styles.cardList}>
//             <li> A high-quality hotel close to Disney Parks</li>
//             <li> Access to both Disney Parks</li>
//             <li> Modify or cancel without fees up to 7 days before arrival</li>
//           </ul>
//           <a href="#" className={styles.link}>Learn more</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardOverlay;


import React, { useState } from "react";
import styles from "./cardOverlay.module.css";
import BackgroundImage from '../../assets/ticketImage.png';

const CardOverlay = () => {
  // State to hold the 'Learn more' URL for each card
  const [learnMoreLink1, setLearnMoreLink1] = useState('https://www.imdb.com/title/tt1091722/');
  const [learnMoreLink2, setLearnMoreLink2] = useState('https://www.imdb.com/title/tt1091722/');

  return (
    <div className={styles.container}>
      <div className={styles.background}></div> {/* Background div */}
      <div className={styles.cards}>
        {/* Left Card */}
        <div className={styles.card}>
          <h3 className={styles.cardH3}>Disney Parks Dated Tickets</h3>
          <p className={styles.tagline}>Enjoy the magic for 1 or several days</p>
          <ul className={styles.cardList}>
            <li> 1 or 2 Disney Parks</li>
            <li> 1 to 4 days access</li>
            <li> Dated tickets can be cancelled up to 3 days before arrival</li>
          </ul>
          {/* 'Learn more' link without target="_blank" */}
          <a href={learnMoreLink1} className={styles.link}>
            Learn more
          </a>
        </div>

        {/* Right Card */}
        <div className={styles.card}>
          <h3 className={styles.cardH3}>Hotel + Tickets Package</h3>
          <p className={styles.tagline}>Stay close to the magic!</p>
          <ul className={styles.cardList}>
            <li> A high-quality hotel close to Disney Parks</li>
            <li> Access to both Disney Parks</li>
            <li> Modify or cancel without fees up to 7 days before arrival</li>
          </ul>
          {/* 'Learn more' link without target="_blank" */}
          <a href={learnMoreLink2} className={styles.link}>
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardOverlay;

