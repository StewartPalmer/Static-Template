// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Strapi Gridsome Blog',
  siteDescription: 'A blog site made using Gridsome and Strapi',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: (process.env.GRIDSOME_STRAPI_URL || "https://thawing-harbor-87936.herokuapp.com") + "/graphql",
        fieldName: 'strapi',
        typeName: 'strapiTypes'
      }
    },
    {
      use: "gridsome-plugin-tailwindcss",
      /**
      * These are the default options. You don't need to set any options to get
      * going. Seriously, you don't need to declare tailwind.config.js.

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    },
  ],
}
