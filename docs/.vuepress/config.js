module.exports = {
  title: 'MyBlog',
  base: '/',
  description: 'Ushbu sahifada men yangiliklarimni joylashtiraman',
  logo: '/assets/img/logo.svg',
  theme: require.resolve('../../'),
  
  head: [
    ['link', { rel:  'icon', 	href: '/logo.png' }],
    ['link', { rel:  'manifest', href: '/manifest.json' }],
    
    ['meta', { name: 'theme-color', 							content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', 			content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', 	content: 'black' }],
    
    ['link', { rel:  'apple-touch-icon', href: 'logo.png' }],
    ['link', { rel:  'mask-icon', 		 href: 'logo.svg', color: '#3eaf7c' }],
    
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  
  plugins: [
  	'latex',
  	'img-lazy',
	'vuepress-plugin-mermaidjs',
  	[
      'vuepress-plugin-mathjax',
      { target: 'svg', macros: {'*': '\\times',},},
    ],
    
    ['container', {
      type: 'right',
      defaultTitle: '',
    }],

    ['container', {
      type: 'blok',
      before: info => `<div class="custom-block blok">`,
      after: '</div>',
    }],
    
    ['container', {
      type: 'yashil',
      before: info => `<div class="custom-block yashil">`,
      after: '</div>',
    }],
    
    ['container', {
      type: 'sariq',
      before: info => `<div class="custom-block sariq">`,
      after: '</div>',
    }],
    
    ['container', {
      type: 'qizil',
      before: info => `<div class="custom-block qizil">`,
      after: '</div>',
    }],
    
    ['container', {
      type: 'detal',
      before: info => `<details class="custom-block detal" align="left">
    	<summary>To'liqroq</summary>`,
      after: '</details>',
    }],
  ],
  themeConfig: {
	authors: [
      { name: 'Adxamjon', avatar: '/assets/img/avatar.jpg',
        link: '#', linktext: 'Follow',},
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/adxamjon97/adxamjon97.github.io',
        },
        { type: 'mail',  link: '#', },
        { type: 'phone', link: '#', },
        { type: 'web', 	 link: '#', }
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
