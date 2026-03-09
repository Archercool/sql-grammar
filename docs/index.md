---
layout: home

hero:
  name: "SQL 语法参考"
  text: "完整的 SQL 语法与函数手册"
  tagline: "分类清晰的 SQL 文档，包含详细示例和表结构演示"
  actions:
    - theme: brand
      text: 开始浏览
      link: /categories/dml/select
    - theme: alt
      text: 入门指南
      link: /guide/getting-started

features:
  - title: 📂 分类清晰
    details: "按 DDL、DML、DCL、TCL、函数、约束等分类，易于查找"

  - title: 🔍 智能搜索
    details: "支持关键词搜索，快速定位需要的语法和函数"

  - title: 📝 详细示例
    details: "每个语法都包含语法说明、参数解释、代码示例和表结构示例"
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const content = document.querySelector('.VPContent')
  if (content) {
    content.style.background = `
      linear-gradient(135deg, 
        rgba(100, 108, 255, 0.08) 0%, 
        rgba(0, 0, 0, 0.02) 50%,
        rgba(100, 108, 255, 0.08) 100%
      )
    `
  }
})
</script>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #646cff 30%, #a8c0ff);
}

.dark {
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #a8c0ff 30%, #3f2b96);
}
</style>
