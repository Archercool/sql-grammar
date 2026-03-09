import { defineConfig } from 'vitepress'
import { resolve } from 'path'

export default defineConfig({
  title: "SQL 语法参考",
  description: "完整的 SQL 语法和函数参考手册",
  appearance: 'dark',
  lastUpdated: true,
  cleanUrls: true,
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'SQL 语法参考',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '入门', link: '/guide/getting-started' },
      { 
        text: '语法分类', 
        items: [
          { text: 'DDL - 数据定义', link: '/categories/ddl/' },
          { text: 'DML - 数据操作', link: '/categories/dml/' },
          { text: 'DCL - 数据控制', link: '/categories/dcl/' },
          { text: 'TCL - 事务控制', link: '/categories/tcl/' },
          { text: '函数', link: '/categories/functions/' },
          { text: '约束', link: '/categories/constraint/' }
        ]
      }
    ],

    sidebar: {
      '/categories/ddl/': [
        {
          text: 'DDL 数据定义',
          collapsed: false,
          items: [
            { text: 'CREATE TABLE', link: '/categories/ddl/create-table' },
            { text: 'ALTER TABLE', link: '/categories/ddl/alter-table' },
            { text: 'DROP TABLE', link: '/categories/ddl/drop-table' },
            { text: 'TRUNCATE', link: '/categories/ddl/truncate' }
          ]
        }
      ],
      '/categories/dml/': [
        {
          text: 'DML 数据操作',
          collapsed: false,
          items: [
            { text: 'SELECT', link: '/categories/dml/select' },
            { text: 'INSERT', link: '/categories/dml/insert' },
            { text: 'UPDATE', link: '/categories/dml/update' },
            { text: 'DELETE', link: '/categories/dml/delete' }
          ]
        }
      ],
      '/categories/functions/': [
        {
          text: '函数',
          collapsed: false,
          items: [
            { text: '字符串函数', link: '/categories/functions/string-functions' },
            { text: '日期函数', link: '/categories/functions/date-functions' },
            { text: '聚合函数', link: '/categories/functions/aggregate-functions' },
            { text: '数学函数', link: '/categories/functions/math-functions' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/sql-grammar' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: '基于 MIT 许可证开源',
      copyright: 'Copyright © 2024 SQL 语法参考'
    },

    outline: {
      level: [2, 3],
      label: '目录'
    }
  },

  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})
