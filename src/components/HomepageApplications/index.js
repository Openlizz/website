import Link from "@docusaurus/Link";
import React from "react";
import styles from "./styles.module.css";

export default function HomepageApplications() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col col-6">
            <h1 className="margin-vert--lg">
              Discover the Lizz compatible applications 🌈
            </h1>
            <h2>
              A Lizz compatible application is a Git repository that contains
              the manifest templates of the application.
            </h2>
            <h2>
              When added, the application templates are rendered using values
              from the cluster and therefore the application is deployed with
              the best configuration possible.
            </h2>
            <h2>
              There are already many Lizz compatible applications and more are
              to come!
            </h2>
            <Link
              className="button button--secondary button--lg margin-vert--lg"
              to="/docs/intro"
            >
              Access the 5min tutorial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
