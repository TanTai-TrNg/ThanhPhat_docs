// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Thành phát Documents",
  tagline: "Nơi lưu trữ cấp phát tài liệu dự án",
  favicon: "img/favicon.png",
  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars_docs.js"),
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    blog: {
      sidebar: {
        groupByYear: true,
      },
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Home",
      logo: {
        alt: "My Site Logo",
        src: "img/logo-bounded.png",
      },
      items: [
        // {
        //   type: "docsVersionDropdown",
        //   position: "right",
        //   disableVersioning: false,
        // },
        {
          // type: "docSidebar",
          // sidebarId: "defaultSidebar",
          position: "left",
          label: "Tài liệu",
          items: [
            {
              label: "Hoidap247",
              to: "/docs/Hoidap247/",
            },
            {
              label: "Hoidap247",
              to: "/docs/Hoidap247/",
            },
          ],
        },
        {
          label: "Blog",
          position: "left",
          items: [
            {
              label: "Các tài liệu về docusaurus",
              to: "/blog",
            },
            {
              label: "Time line",
              to: "/blog/archive", // Đường dẫn đến archive blog
            },
          ],
        },
      ],
    },
    footer: {
      logo: {
        alt: "Meta Open Source Logo",
        src: "img/logo_white.png",
        href: "https://tuyensinh247.com/",
        width: 160,
        height: 51,
      },
      copyright: `Copyright © ${new Date().getFullYear()} Giấy phép cung cấp dịch vụ mạng xã hội trực tuyến số 337/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 10/07/2017.
      Giấy phép kinh doanh: MST-0106478082 do Sở Kế hoạch và Đầu tư cấp ngày 05/04/2023 (Lần 5).
      Chịu trách nhiệm nội dung: Phạm Đức Tuệ`,
      style: "light",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
