module.exports = {
  title: 'Bu mening yangiliglarim',
  base: '/',
  description: 'Bu sahifada men o\'z yangiliklarimni qo\'yib boraman',
  logo: '/assets/img/logo.svg',
  theme: require.resolve('../../'),
  plugins: [
  	'latex'
  ],
  themeConfig: {
  authors: [
      {
      name: 'Adxamjon',
      avatar: '/assets/img/avatar.jpg',
      link: '#',
      linktext: 'Follow',
      },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/adxamjon97/adxamjon97.github.io',
        },
        {
          type: 'mail',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },
        {
          type: 'web',
          link: '#',
        }
      ],
      copyright: [
        {
          text: 'Adxamjon97',
          link: 'https://github.com/adxamjon97',
        },
      ],
    },

    sitemap: {
      hostname: '',//'https://github.com/wowthemesnet/vuepress-theme-mediumish/'
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    newsletter: {
      endpoint: '',//'https://wowthemes.us11.list-manage.com/subscribe/post?u=8aeb20a530e124561927d3bd8&id=8c3d2d214b'
    },
    feed: {
      canonical_base: '',//'https://github.com/wowthemesnet/vuepress-theme-mediumish/',
    },
    smoothScroll: true
  },
}
