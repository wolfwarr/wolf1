# vuepress搭建个人博客

## 1.安装vuepress
### 1.安装
npm install -g vuepress //或者 yarn  global add vuepress
## 2.首页搭建
### 2.新建一个项目文件夹,并且初始化
// 创建一个目录 叫 myblog
mkdir myblog
// 进入这个目录
cd myblog
// 初始化项目
npm init -y
### 3.创建博客相关目录
在myblog目录下新建docs目录，在docs目录里新建.vuepress文件夹，然后在里面创建config.js文件 用于存放配置信息
module.exports = {
title: '螺钉博客',
description: '欢迎来到我的博客'
}
### 4.在docs目录里面创建一个README.md的文件，输入内容
---
home: true
heroImage: /hero.png
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
### 5.运行博客
在package.json里面添加脚本
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
}
然后在终端(命令行工具)输入启动命令
npm run dev
## 3.导航配置
### 1.基础设置
module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ]
  }
}
### 1.我的nav配置
nav: [
    { text: "首页", link: "/" },
    { text: "基础教程", link: "/basics/" },
    { text: "项目实战", link: "/project/" },
    { text: "零散文章", link: "/article/" },
    { text: "一起学习", link: "/association/" },
    { text: "前端架构师", link: "/architect/" },
    { text: "github", link: "https://github.com/nodeing666/" }
]
对应上面的导航栏，我们需要在docs文件夹下去新建basics、project、article、association、architect等文件夹
## 4.配置侧边栏
.
├─ README.md
├─ contact.md
├─ about.md
├─ foo/
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar/
   ├─ README.md
   ├─ three.md
   └─ four.md
配置：
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}
## 5.配置head和自定义样式
### 1.静态文件要放到.vuepress/public目录下

### 2.// 添加浏览器图标
head: [
    ["link", { rel: "icon", href: "/logo.png" }],
]
### 3.自定义样式可以放到.vuepress/styles/index.styl下

.theme-default-content 
  h1
    border-bottom  3px solid rgb(0, 172, 193)
    padding 20px 0px 20px 0px
    font-size 24px

 
.theme-default-content 
  h2
    border-bottom  2px solid rgb(0, 172, 193)
    padding 15px 0px 15px 0px;
    font-size 20px
 
.theme-default-content 
  p 
    margin: 15px 0px 15px 0px;


/* PrismJS 1.17.1
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript */
/**
 * okaidia theme for JavaScript, CSS and HTML
 * Loosely based on Monokai textmate theme by http://www.monokai.nl/
 * @author ocodia
 */

code[class*="language-"],
pre[class*="language-"] {
	color: #f8f8f2;
	background: none;
	text-shadow: 0 1px rgba(0, 0, 0, 0.3);
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
	border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #272822;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: slategray;
}

.token.punctuation {
	color: #f8f8f2;
}

.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
	color: #f92672;
}

.token.boolean,
.token.number {
	color: #ae81ff;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #a6e22e;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
	color: #f8f8f2;
}

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
	color: #e6db74;
}

.token.keyword {
	color: #66d9ef;
}

.token.regex,
.token.important {
	color: #fd971f;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}
## 6.添加百度统计代码
### 1.第一步，你需要去百度统计添加一个网站，然后获取到统计代码
### 2.获取统计代码
### 3.最后，把统计代码添加到head配置项里面
module.exports = {
  title: "螺钉前端",
  description: "帮助零基础同学转行，入职前端开发，薪资5000-12000",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?e2bd54b8015cec977c6f30d0896b8a1b";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
      `
    ]
  ],
  ...
}