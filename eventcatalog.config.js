/** @type {import('@eventcatalog/core/bin/eventcatalog.config').Config} */
export default {
  title: 'EventCatalog',
  tagline: 'Discover, Explore and Document your Event Driven Architectures',
  organizationName: 'NHS Notify',
  homepageLink: 'https://eventcatalog.dev/',
  editUrl: 'https://github.com/boyney123/eventcatalog-demo/edit/master',
  // By default set to false, add true to get urls ending in /
  trailingSlash: false,
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

  // generators: [
  //   [
  //     '@eventcatalog/generator-asyncapi',
  //     {
  //       licenseKey: 'Z7Z5-1J5U-PA3C-FOAA-O25F-1R67',
  //       services: [
  //         { path: "https://raw.githubusercontent.com/event-catalog/generators/refs/heads/main/examples/generator-asyncapi/basic/asyncapi-files/orders-service.yml", id: 'Orders Service' },
  //         { path: "https://raw.githubusercontent.com/event-catalog/generators/refs/heads/main/examples/generator-asyncapi/basic/asyncapi-files/order-fulfillment-service.yml", id: 'Order Fulfillment' },
  //         { path: "https://raw.githubusercontent.com/event-catalog/generators/refs/heads/main/examples/generator-asyncapi/basic/asyncapi-files/inventory-service.yml", id: 'Inventory Service' },
  //       ],
  //       domain: { id: 'orders', name: 'Orders', version: '0.0.1' },
  //     },
  //   ],
  //   [
  //     '@eventcatalog/generator-asyncapi',
  //     {
  //       licenseKey: 'Z7Z5-1J5U-PA3C-FOAA-O25F-1R67',
  //       services: [
  //         { path: "https://raw.githubusercontent.com/event-catalog/generators/refs/heads/main/examples/generator-asyncapi/basic/asyncapi-files/payment-service.yml", id: 'Payment Service' },
  //         { path: "https://raw.githubusercontent.com/event-catalog/generators/refs/heads/main/examples/generator-asyncapi/basic/asyncapi-files/fraud-detection-service.yml", id: 'Fraud Detection' },
  //       ],
  //       domain: { id: 'payment', name: 'Payment', version: '0.0.1' },
  //     },
  //   ],
  //   [
  //     '@eventcatalog/generator-asyncapi',
  //     {
  //       licenseKey: 'Z7Z5-1J5U-PA3C-FOAA-O25F-1R67',
  //       services: [
  //         { path: "https://raw.githubusercontent.com/event-catalog/generators/refs/heads/main/examples/generator-asyncapi/basic/asyncapi-files/user-service.yml", id: 'User Service' },
  //       ],
  //       domain: { id: 'user-domain', name: 'User Domain', version: '0.0.1' },
  //       debug: true
  //     },
  //   ],
  // ],
};
