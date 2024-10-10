import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Vừng ơi",
    link: "docs/Vungoi/",
    imgSrc: "/img/logo_tet.png",
    description: <>Vừng ơi</>,
  },
  {
    title: "Hỏi đáp 247",
    link: "docs/Hoidap247/",
    imgSrc: "/img/logo_h247.png",
    description: <>Hỏi đáp 247.</>,
  },
  {
    title: "Tuyển sinh 247",
    link: "docs/Ts247/",
    imgSrc: "/img/logo448x152.png",
    description: <>Tuyển sinh 247</>,
  },
];

function Feature({ imgSrc, title, description, link }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <a href={link} rel="noopener noreferrer">
          <img src={imgSrc} alt={title} className={styles.featureImg} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
