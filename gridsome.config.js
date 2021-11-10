// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path');

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // path.resolve(__dirname, './src/assets/sass/*.scss'),
        path.resolve(__dirname, './src/styles/abstract/*.scss'),
      ],
    });
}

module.exports = {
  siteName: 'JoPeCodes',
  siteDescription:
    'Hello, my name is Joao Pedro and I am a Web Developer aspiring to be full-stack and software developer!',
  // transformers: {
  // remark: {
  // externalLinksTarget: '_blank',
  // externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
  // anchorClassName: 'icon icon-link',
  // },
  // },
  // templates: {
  // AboutMe: '/about/',
  // },
  plugins: [
    {
      use: 'gridsome-plugin-typescript',
    },
    {
      use: '@noxify/gridsome-source-git',
      options: {
        name: 'AboutMe',
        remote: 'https://github.com/BitInByte/portfolio-content.git',
        target: 'git-source',
        typeName: 'Content',
        pattern: `**/*.md`,
        cache: false,
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Project',
        path: 'git-source/projects/*.md', // Or specify a specific filetype, like *.jpg
        // remark: {
        // plugins: ['remark-images'],
        // },
      },
    },
    // {
    // use: 'gridsome-transformer-netlify',
    // options: {
    // imageKey: 'image', // default value (optional)
    // markdownKey: 'body', // default value (optional)
    // },
    // },
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        typeName: 'Content',
        sourceField: 'remoteImage',
        targetField: 'amazingImage',
        targetPath: `./src/assets/images`,
        schemaType: 'url',
        // cache: false,
      },
    },
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        typeName: 'Project',
        sourceField: 'remoteImage',
        targetField: 'image',
        targetPath: `./src/assets/images`,
        schemaType: 'url',
      },
    },
  ],
  templates: {
    Project: [
      {
        path: '/project/:id',
        component: `./src/templates/Project.vue`,
      },
    ],
  },
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

    // types.forEach(type => {
    // addStyleResource(config.module.rule('sass').oneOf(type))
    // })

    // or if you use scss
    types.forEach((type) => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });
  },
};
