module.exports = {
  title: 'Uni',
  description: '',
  themeConfig: {
    sidebar: {
      "/": [
        {
          text: '全局',
          children: [
            {
              text: 'Vue实例',
              link: '/global',
            },
          ]
        },
        {
          text: '开发',
          children: [
            {
              text: '路由管理',
              link: '/router',
            },
            {
              text: '状态管理',
              link: '/vuex',
            },
            {
              text: '分页',
              link: 'zpadding',
            },
          ]
        },
        {
          text: '工具',
          children: [
            {
              text: '验证',
              link: '/utils/verify'
            },
            {
              text: '加密',
              link: '/utils/encrypt'
            }
          ]
        },
      ],
    },
    head: [
      [
        "meta", { name: "keywords", content: "Uni" },
      ],
    ],
    nav: [
      // {
      //   text: '工具',
      //   link: '/utils/',
      //   children: [
      //     {
      //       text: 's',
      //       link: 's'
      //     }
      //   ]
      // },
      // {
      //   text: '组件',
      //   link: '/components/',
      // },
      {
        text: "Gitee",
        link: "https://gitee.com/taoya7/uni_template_start",
      },
    ],
  }
}