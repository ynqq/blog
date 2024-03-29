import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog",
  title: "ynqq个人博客",
  description: "ynqq个人博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Vue", link: "/views/share/vue/" },
      { text: "React", link: "/views/share/react/" },
      { text: "ReactNative", link: "/views/share/reactNative/" },
      { text: "微前端", link: "/views/problem/vue/" },
      { text: "bug一生", link: "/views/problem/vue/" },
    ],

    sidebar: {
      "/views/share/vue/": [
        {
          text: "Vue3",
          collapsed: false,
          items: [
            {text: "监听子组件生命周期", link: "/views/share/vue/vue3/other/watchChildLife/index.md"}
          ]
        },
        // {
        //   text: "Vue3源码系列",
        //   collapsed: true,
        //   items: [
        //     { text: "前言", link: "/views/share/vue/vue3/source/preface.md" },
        //     {
        //       text: "响应式系统",
        //       link: "/views/share/vue/vue3/source/responsive/",
        //       items: [
        //         { text: "实现响应式函数", link: "/views/share/vue/vue3/source/responsive/responsiveFun.md" },
        //         { text: "ref", link: "/views/share/vue/vue3/source/responsive/ref.md" },
        //         { text: "reactive", link: "/views/share/" },
        //         { text: "computed", link: "/views/share/" },
        //         { text: "watch", link: "/views/share/" },
        //         { text: "watchEffect", link: "/views/share/" },
        //       ],
        //     },
        //     { text: "渲染器", link: "/views/share/" },
        //     { text: "虚拟dom和diff算法", link: "/views/share/" },
        //     { text: "编译器", link: "/views/share/" },
        //     { text: "解析器", link: "/views/share/" },
        //   ],
        // },
      ],
      "/views/share/react/": [
        {
          text: "Vue",
          collapsed: false,
          items: [
            { text: "WatchEffect", link: "/views/share/vue/watchEffect" },
            { text: "Runtime API Examples", link: "/views/share/" },
          ],
        },
      ],
      "/views/share/reactNative/": [
        {
          text: "Vue",
          collapsed: false,
          items: [
            { text: "WatchEffect", link: "/views/share/vue/watchEffect" },
            { text: "Runtime API Examples", link: "/views/share/" },
          ],
        },
      ],
      "/views/problem/vue/": [
        {
          text: "Examples",
          items: [
            { text: "Markdown Examples", link: "/markdown-examples" },
            { text: "Runtime API Examples", link: "/api-examples" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/ynqq/blog" },
    ],
    search: {
      provider: 'local'
    }
  },
});
