// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Openlizz",
  tagline:
    "Managing a GitOps Kubernetes cluster and deploying applications has never been made so easy!",
  url: "https://openlizz.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en"],
  // },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/openlizz/website/edit/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/openlizz/website/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Openlizz",
        logo: {
          alt: "Openlizz Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Docs",
          },
          {to: "/docs/tutorials", position: "right", label: "Tutorials"},
          {to: "/applications", position: "right", label: "Applications"},
          // {to: "/blog", label: "Blog", position: "right"},
          {
            href: "https://github.com/openlizz/lizz",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Installation",
                to: "/docs/installation",
              },
              {
                label: "Get Started",
                to: "/docs/intro",
              },
              {
                label: "Concepts",
                to: "/docs/category/concepts",
              },
              {
                label: "Guides",
                to: "/docs/category/guides",
              },
              {
                label: "Lizz CLI",
                to: "/docs/category/lizz-cli",
              },
            ],
          },
          {
            title: "Tutorials",
            items: [
              {
                label: "Scaleway",
                to: "/docs/category/deploy-applications-in-scaleway",
              },
              {
                label: "Rasberry Pis",
                to: "/docs/category/manage-your-rasberry-pis-cluster",
              },
            ],
          },
          {
            title: "Other",
            items: [
              {
                label: "Applications",
                href: "/applications",
              },
              {
                label: "GitHub",
                href: "https://github.com/openlizz",
              },
              {
                label: "GitLab",
                href: "https://gitlab.com/openlizz",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Openlizz.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
