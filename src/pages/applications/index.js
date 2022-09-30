import {Applications} from "@site/src/data/applications";
import GitHubLogo from "@site/static/img/github.svg";
import GitLabLogo from "@site/static/img/gitlab.svg";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

function ApplicationsHeader() {
  return (
    <section className={`margin-top--lg margin-bottom--lg text--center`}>
      <h1>Applications</h1>
      <p>Discover the Lizz-compatible applications 🌈</p>
    </section>
  );
}

function ApplicationCard({application}) {
  return (
    <div className="card-demo">
      <div className={`card ${styles.card}`}>
        <div
          className={`card__image ${styles.cardImage}`}
          style={{backgroundColor: application.color}}
        >
          {application.logo ? (
            <img
              src={application.logo}
              alt={`${application.title} Logo`}
              title={application.title}
            />
          ) : null}
        </div>
        <div className="card__body">
          <h4>{application.title}</h4>
          <p>{application.description}</p>
        </div>
        <div className={`card__footer ${styles.cardFooter}`}>
          {"github" in application.repositories ? (
            <Link
              className={`button  button--block ${styles.button} ${styles.buttonGithub}`}
              href={application.repositories.github}
            >
              <GitHubLogo role="img" />
              Visit on GitHub
              <span />
            </Link>
          ) : null}
          {"gitlab" in application.repositories ? (
            <Link
              className={`button  button--block ${styles.button} ${styles.buttonGitlab}`}
              href={application.repositories.gitlab}
            >
              <GitLabLogo role="img" />
              Visit on GitLab
              <span />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ApplicationsCards() {
  return (
    <section className="margin-top--lg margin-bottom--xl">
      <div className={styles.applications}>
        <div className="container">
          <ul
            className={clsx("container", "clean-list", styles.applicationsList)}
          >
            {Applications.map((app) => (
              <ApplicationCard key={app.title} application={app} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function ApplicationsPage() {
  return (
    <Layout
      title={`Applications`}
      description="Discover the Lizz-compatible applications."
    >
      <main className={`padding-vert--lg ${styles.main}`}>
        <ApplicationsHeader />
        <ApplicationsCards />
      </main>
    </Layout>
  );
}
