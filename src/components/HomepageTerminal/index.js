import "asciinema-player/dist/bundle/asciinema-player.css";

import React, {useEffect, useRef} from "react";

import BrowserOnly from "@docusaurus/BrowserOnly";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const AsciinemaPlayer = ({src, lib, ...asciinemaOptions}) => {
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    lib.create(src, currentRef, asciinemaOptions);
  }, [src]);

  return <div ref={ref} />;
};

export default function HomepageTerminal() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col col-6">
            <h1 className="margin-vert--lg">See Lizz in action 🦥</h1>
            <h2>Lizz allows you to easily:</h2>
            <ul>
              <li>
                <h2>• setup of a multi-tenant cluster managed by Flux2,</h2>
              </li>
              <li>
                <h2>• manage Kubernetes secrets with Mozilla SOPS,</h2>
              </li>
              <li>
                <h2>• add Lizz compatible applications.</h2>
              </li>
            </ul>
            <Link
              className="button button--secondary button--lg margin-vert--lg"
              to="/docs/intro"
            >
              Access the 5min tutorial
            </Link>
          </div>
          <div className="col col-6">
            <BrowserOnly fallback={<div>Loading...</div>}>
              {() => {
                const AsciinemaPlayerLibrary = require("asciinema-player");
                return (
                  <AsciinemaPlayer
                    src="data:text/plain;base64,eyJ2ZXJzaW9uIjogMiwgIndpZHRoIjogODAsICJoZWlnaHQiOiAyNH0KWzAuMSwgIm8iLCAiaGVsbCJdClswLjUsICJvIiwgIm8gIl0KWzIuNSwgIm8iLCAid29ybGQhXG5cciJdCg=="
                    lib={AsciinemaPlayerLibrary}
                    rows={30}
                    idleTimeLimit={3}
                    preload={true}
                  />
                );
              }}
            </BrowserOnly>
          </div>
        </div>
      </div>
    </section>
  );
}
