/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-07 11:49:31
 * @LastEditors: jiahui.qin
 * @LastEditTime: 2024-04-15 16:48:34
 * @FilePath: \blog\.vitepress\config.mts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog",
  title: "ynqq个人博客",
  description: "ynqq个人博客",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Vue", link: "/views/share/vue/" },
      { text: "React", link: "/views/share/react/" },
      { text: "ReactNative", link: "/views/share/reactNative/" },
      { text: "微前端", link: "/views/share/micro/" },
      { text: "Vscode", link: "/views/share/vscode/" },
      { text: "bug一生", link: "/views/problem/" },
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
      "/views/problem/": [
        {
          text: "react-naive",
          collapsed: false,
          items: [
            { text: "adb", link: "/views/problem/react-native/adb/" },
            { text: "keystore", link: "/views/problem/react-native/keystore/" },
          ],
        },
        {
          text: "npm",
          collapsed: false,
          items: [
            { text: "install", link: "/views/problem/npm/install/" },
          ],
        },
        // {
        //   text: "代码规范",
        //   items: [
        //     { text: "husky", link: "/views/problem/formatter/husky/" },
        //   ],
        // },
      ],
      "/views/share/micro/": [
        {
          text: "微前端",
          collapsed: false,
          items: [
            {text: "无界", link: "/views/share/micro/wujie/index.md"}
          ]
        }
      ],
      "/views/share/vscode/": [
        {
          text: "Vscode",
          collapsed: false,
          items: [
            {text: "开发一个简单的插件", link: "/views/share/vscode/toFile/index.md"}
          ]
        }
      ]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/ynqq/blog" },
    ],
    search: {
      provider: 'local'
    }
  },
});
