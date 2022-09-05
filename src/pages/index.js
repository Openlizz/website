import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import OpenlizzImageUrl from "@site/static/img/openlizz.png";
import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div>
        <img className={clsx(styles.imgBanner)} src={OpenlizzImageUrl} />
      </div>
      <div class="container">
        <h1 class="hero__title">{siteConfig.tagline}</h1>
        {/* <p>
          <b>Openlizz</b> is the combination of <b>Lizz</b>, a CLI to facilitate
          the creation of a Flux2 managed k8s cluster and the deployment of
          applications, and <b>Lizz compatible applications</b> to be installed
          in one command with the best possible configuration.
        </p> */}
        <p class="hero__subtitle">
          <b>Openlizz</b> is the combination of <b>Lizz</b> and the{" "}
          <b>Lizz compatible applications</b>.
        </p>
        <p class="hero__subtitle">
          <b>Lizz</b> is a CLI to facilitate the creation of a Flux2 managed k8s
          cluster and the deployment of applications.
        </p>
        <p class="hero__subtitle">
          <b>Lizz compatible applications</b> can be installed in one command
          with the best possible configuration depending of the applications
          already deployed.
        </p>
        <Link className="button button--primary button--lg" to="/docs/intro">
          Get started
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Mainpage`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
