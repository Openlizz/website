import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

function Illustration({Svg, description, advantages, reversed}) {
  return (
    <div className="container">
      <div className={`row ${reversed ? styles.reversed : ""}`}>
        <div className={clsx(`col col--4 ${styles.description}`)}>
          <h2>{description}</h2>
          <ul className={styles.advantages}>
            {advantages.map((value, idx) => (
              <li key={idx}>{value}</li>
            ))}
          </ul>
        </div>
        <div className={clsx("col col--8")}>
          <Svg className="illuSvg" role="img" />
        </div>
      </div>
    </div>
  );
}

export default function HomepageIllustrations() {
  return (
    <section className={styles.illustrations}>
      <Illustration
        Svg={require("@site/static/img/illustrations/templating.svg").default}
        description="Lizz automatically configures the application according to the cluster in which it will be added."
        advantages={[
          "🧨 performance",
          "👋 accessibility",
          "🔄 reproducibility",
        ]}
      />
      <Illustration
        Svg={require("@site/static/img/illustrations/repositories.svg").default}
        description="Lizz creates and manages the Git repositories following the multi-tenant GitOps structure."
        advantages={["⏱ quick setup", "🔒 security"]}
        reversed={true}
      />
      <Illustration
        Svg={require("@site/static/img/illustrations/flux.svg").default}
        description="Lizz doesn’t interact with the Kubernetes cluster directly, the manifest files in the Git repositories are deployed in the cluster using Flux2 as GitOps tool."
        advantages={["🤝 reliable", "✅ cluster clean"]}
      />
    </section>
  );
}
