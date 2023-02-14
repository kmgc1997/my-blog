module.exports = {
  title: "小小杂货铺",
  description: 'web前端技术博客,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,css3,html5,Node,git,github等技术文章。',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
    ],
    sidebar: {
      '/docs/theme-reco/': [
        '',
        'flex',
        'coordinates',
        'setGlobal',
        'tableClick',
        'editor',
        'swiperFadeEffect',
        'Vue笔记',
        '百度编辑器设置只读'
      ]
    },
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        avatar: "https://vuepress.vuejs.org/hero.png",
        link: 'https://vuepress.vuejs.org/zh/'
      },
      {
        title: 'vuepress-theme-reco',
        desc: '一款简洁而优雅的 vuepress 博客 & 文档 主题',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com/'
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: '上次更新',
    // 作者
    author: 'km_gc2016',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    // record: 'xxxx',
    // 项目开始时间
    startYear: '2021'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  markdown: {
    lineNumbers: true
  }
}