import React from "react";
import styles from "./index.css";
import DownArrow from "./down_arrow.svg";

const scrollIntoView = selector => {
  document.querySelector(selector).scrollIntoView({
    behavior: "smooth"
  });
};

// const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: {
//         ...animationData,
//         assets: animationData.assets.map(
//             asset => {
//                 if (asset.u === "images/") {
//                     return {
//                         ...asset,
//                         u: '',
//                         p: require("./" + asset.u + asset.p)
//                     }
//                 } else {
//                     return asset;
//                 }
//             }
//         )
//     }
//   };

const InfoSection = () => (
  <div className={styles.InfoSection}>


    <div className={styles.InfoSectionContainer + " container"}>
      <h2>A Global Cannabis Project.</h2>
      <div className={styles.Description}>
      Premium Canadian Cannabis, by Connoisseurs for Connoisseurs.
      </div>
      <div className={styles.NavigationSection}>
        <ul>
          <li onClick={() => scrollIntoView("#AboutSection")}>
            About us<DownArrow />
          </li>
          <li onClick={() => scrollIntoView("#GrowersSection")}>
            Growers<DownArrow />
          </li>
          <li onClick={() => scrollIntoView("#TeamSection")}>
            Our team<DownArrow />
          </li>
          <li onClick={() => scrollIntoView("#InvestorSection")}>
            Investment<DownArrow />
          </li>
        </ul>
      </div>
    </div>
    <video
      className={styles.InfoSectionBackground}
      autoPlay
      src={require("./background.mp4")}
    />
  </div>
);

export default InfoSection;
