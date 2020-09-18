// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Online Personal Trainers',
  siteDescription: 'For all your online personal training needs',
  siteUrl: 'http://hopeful-gates-338463.netlify.app',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: (process.env.GRIDSOME_STRAPI_URL || "http://localhost:1337") + "/graphql",
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
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {        
        config: {
          '/articles/*': {
            changefreq: 'weekly',
            priority: 0.5,
            lastmod: '2020-02-19',
          },          
        }
      }
    }
  ],
}
