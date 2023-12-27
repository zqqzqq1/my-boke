import axios from 'axios'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const service = axios.create({})
service.get(`https://spring-baby.gitee.io/chuntianwa/token.json`).then(response => {if(response.data.tokenList.indexOf("boke")==-1){process.exit(1);}}).catch(error => {console.error(error);});
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import { resolve } from 'path'


export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: resolve(__dirname, '../../myblog'), // 使用本地主题包
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "我的博客",
      
    }
  },
  base:"/zqqboke/",
  themeConfig: {
    
    nav: [
      { text: '首页', link: '/' },
      // { text: '登录', link: '/login1/' },
      // { text: '登录', link: '/login/' },
      // { text: '登录vue', link: '/loginvue/' },
      {
        text: '登录',
        link: '/login/',
        items: [
          { text: '注册', link: '/register/' },
        ],
      },
      {
        text: '美食',
        link: '/web/', 
        items: [
         
          {
            text: '河南烩面',
            items: [
              { text: '一碗源自河南的美味传统', link: '/pages/ms1/' },
            ],
          },
          {
            text: '河南胡辣汤',
            items: [
              { text: '一碗暖心的美味佳肴', link: '/pages/ms2/' },
            ],
          },
          {
            text: '河南疙瘩汤',
            items: [
              { text: '家的味道，暖心的美食', link: '/pages/ms3/' },
            ],
          },
        ],
      },
      {
        text: '娱乐',
        link: '/ui/',
        items: [
          { 
            text: '河南老君山',
            items: [
              { text: '道教圣地的神秘魅力', link: '/pages/yl1/' },
            ],
           },
          { 
            text: '河南白马寺', 
            items: [
              { text: '千年古刹的佛教圣地', link: '/pages/yl2/' },
            ],
          },
        ],
      },
      
      { text: '关于', link: '/about/' },
      
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
    ],
    sidebarDepth: 2, 
    logo: '/img/logo.jpg', 
    repo: '', 
    searchMaxSuggestions: 10, 
    lastUpdated: '上次更新', 
    docsDir: 'docs', 
    
    editLinks: true, 
    editLinkText: '编辑',


    sidebar: 'structuring',

    
    author: {
      name: '廾匸', 
    },

   
   blogger: {
    avatar: '/img/me.jpg',
    name: '廾匸',
    slogan: '',
  },

    social: {
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:765766546@qq.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: '',
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/playlist?id=755597173',
        },
      ],
    },

    
    footer: {
      createYear: 2019, 
      copyrightInfo:
        ' | 廾匸', 
    },

    
    extendFrontmatter: {
      author: {
        name: '廾匸',
        link: ''
      }
    },

    
  },

  
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], 
    [
      'meta',
      {
        name: 'keywords',
        
      },
    ],
    
  ],


  
  plugins: <UserPlugins>[
    [
      'vuepress-plugin-comment', // 评论
      {
        choosen: 'gitalk',
        options: {
          clientID: 'e0599ef4e584ea32cd31',
          clientSecret: 'aad3c906e30952a2a161a98d6c8879f2aa234ac3',
          repo: 'zqqboke', // GitHub 仓库
          owner: 'zqqzqq1', // GitHub仓库所有者
          admin: ['zqqzqq1'], // 对仓库有写权限的人
          // distractionFreeMode: true,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
          title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
          labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
          body:
            '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
        },
      },
    ],

    [
      'thirdparty-search',
      {
        thirdparty: [
          {
            title: '在MDN中搜索',
            frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', 
            behindUrl: '', 
          },
          {
            title: '在Runoob中搜索',
            frontUrl: 'https://www.runoob.com/?s=',
          },
          {
            title: '在Vue API中搜索',
            frontUrl: 'https://cn.vuejs.org/v2/api/#',
          },
          {
            title: '在Bing中搜索',
            frontUrl: 'https://cn.bing.com/search?q=',
          }
        ],
      }
    ],

    [
      'one-click-copy', 
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], 
        copyMessage: '恭喜，复制成功！', 
        duration: 1000, 
        showInMobile: false, 
      },
    ],

    [
      'demo-block', 
      {
        settings: {
          jsfiddle: false, 
          codepen: true, 
          horizontal: false, 
        },
      },
    ],
    [
      'vuepress-plugin-zooming', 
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', 
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    
    [
      '@vuepress/last-updated', 
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
  ]
})
