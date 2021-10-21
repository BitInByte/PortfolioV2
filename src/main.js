// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import {
  faUser,
  faArrowLeft,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import '~/styles/base.scss';

config.autoAddCss = false;
library.add(
  faSun,
  faMoon,
  faUser,
  faArrowLeft,
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faYoutube,
  faEnvelope
);

export default function(Vue, { router, head, isClient }) {
  // Global head metadata
  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  });
  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
  });
  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;700&family=Rouge+Script&display=swap" rel="stylesheet',
  });
  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap',
  });

  Vue.component('font-awesome', FontAwesomeIcon);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}
