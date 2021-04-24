module.exports = {
    title:"螺钉课堂",
    description:"我的个人博客",
    //添加浏览器图标
    head:[
      ["link",{rel:"icon",href:"/风车.png"}],
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?7dafb829fe0e679e0e9a38469fc6c8c3";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
      `
    ]
  ],
    themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '笔记', link: '/foo/' },
          { text: '收录', link: '/basics/' },
          { text: '前端', link: '/guide/' },
          { text: '后端', link: '/guide/' },
          { text: '一起学习', link: '/guide/' },
          { text: 'External=', link: 'https://google.com' },
        ],
        sidebar:{
            "/foo/":["","one","two"],
            "/basics/vue全家桶/":["","vue基础","vue-router","axios"],
        }
      }
}