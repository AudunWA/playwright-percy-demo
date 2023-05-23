module.exports = {
  version: 2,
  snapshot: {
    widths: [375, 1280],
    minHeight: 1024,
    percyCSS: "",
    disableShadowDOM: false,
  },
  discovery: {
    allowedHostnames: [
      "cdn.sanity.io",
      "registration.checkin.no",
      "ndcoslo.com",
    ],
    disallowedHostnames: [],
    networkIdleTimeout: 750,
  },
  upload: {
    files: "**/*.{png,jpg,jpeg}",
    ignore: "",
    stripExtensions: false,
  },
};
