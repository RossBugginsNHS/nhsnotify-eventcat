/** @type {import('@eventcatalog/core/bin/eventcatalog.config').Config} */
export default {
  title: 'EventCatalog',
  tagline: 'Discover, Explore and Document your Event Driven Architectures',
  organizationName: 'NHS Notify',
  homepageLink: 'https://eventcatalog.dev/',
  editUrl: 'https://github.com/boyney123/eventcatalog-demo/edit/master',
  // By default set to false, add true to get urls ending in /
  trailingSlash: true,
  // Change to make the base url of the site different, by default https://{website}.com/docs,
  // changing to /company would be https://{website}.com/company/docs,
  base: '/',
  // Customize the logo, add your logo to public/ folder
  logo: {
    alt: 'EventCatalog Logo',
    src: '/logo.png',
    text: 'EventCatalog'
  },
  docs: {
    sidebar: {
      // TREE_VIEW will render the DOCS as a tree view and map your file system folder structure
      // FLAT_VIEW will render the DOCS as a flat list (no nested folders)
      type: 'TREE_VIEW'
    },
  },
  // Enable RSS feed for your eventcatalog
  rss: {
    enabled: true,
    // number of items to include in the feed per resource (event, service, etc)
    limit: 20
  },
  // required random generated id used by eventcatalog
  cId: 'f88df989-a646-4476-9e3b-d32e52c822d4',

  generators: [
    [
      '@eventcatalog/generator-asyncapi',
      {
        licenseKey: 'Z7Z5-1J5U-PA3C-FOAA-O25F-1R67',
        services: [
          { path: "https://raw.githubusercontent.com/RossBugginsNHS/nhsnotify-eventcat/refs/heads/main/remote-schemas/producer01.yaml", id: 'Notify Message Service' },
        ],
        domain: { id: 'notifymessages', name: 'Notify Messages', version: '0.0.1' },
      },
    ],
  ],
};
