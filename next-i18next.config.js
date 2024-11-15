// next-i18next.config.js
module.exports = {
    i18n: {
      locales: ['fr', 'de', 'it', 'en'], // Ajouter les langues que vous souhaitez prendre en charge
      defaultLocale: 'fr',
      localeDetection: false,
    },
    
    reloadOnPrerender: process.env.NODE_ENV === 'development',
    fallbackLng: {
      default: ['fr'],
      'de-CH': ['fr'],
    },
    //serializeConfig:false,
  };
  