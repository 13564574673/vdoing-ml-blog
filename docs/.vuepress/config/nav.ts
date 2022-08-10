// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "首页", link: "/" },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
      {
        text: '前端文章',
        items: [
          { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
        ],
      },
  //     {
  //       text: '学习笔记',
  //       items: [
  //         { text: '《JavaScript教程》', link: '/note/javascript/' },
  //         { text: '《JavaScript高级程序设计》', link: '/note/js/' },
  //         { text: '《ES6 教程》', link: '/note/es6/' },
  //         { text: '《Vue》', link: '/note/vue/' },
  //         { text: '《React》', link: '/note/react/' },
  //         {
  //           text: '《TypeScript 从零实现 axios》',
  //           link: '/note/typescript-axios/',
  //         },
  //         {
  //           text: '《Git》',
  //           link: '/note/git/',
  //         },
  //         {
  //           text: 'TypeScript',
  //           link: '/pages/51afd6/',
  //         },
  //         {
  //           text: 'JS设计模式总结',
  //           link: '/pages/4643cd/',
  //         },
  //       ],
  //     },
    ],
  },
  {
    text: '页面',
    link: '/ui/',
    items: [
      { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
      { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
    ],
  },
  {
    text: "友情链接",
    items: [
      {
        text:"参考博客",
        link:"https://xugaoyi.com/",
      },
      {
        text: "vuepress",
        link: "https://vuepress.vuejs.org/",
      },
      {
        text: "vuepress-theme-vdoing",
        link: "https://doc.xugaoyi.com/",
      },
      {
        text: "U2SB",
        link: "https://www.u2sb.com/",
      },
      {
        text: "MonoLogueChi",
        link: "https://blog.xxwhite.com/",
      },
    ],
  },
];
