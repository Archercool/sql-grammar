# SQL 语法参考网站

一个使用 VitePress 构建的 SQL 语法参考手册。

## 特性

- 📂 分类清晰（DDL、DML、DCL、TCL、函数、约束）
- 🔍 关键词搜索
- 🎨 毛玻璃设计风格
- 📱 响应式布局

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run docs:dev

# 构建
npm run docs:build

# 预览
npm run docs:preview
```

## 部署到 GitHub Pages

```bash
npm run docs:build
```

构建输出在 `docs/.vitepress/dist` 目录。

## 内容结构

```
docs/
├── guide/           # 入门指南
├── categories/
│   ├── ddl/        # 数据定义语言
│   ├── dml/        # 数据操作语言
│   ├── dcl/        # 数据控制语言
│   ├── tcl/        # 事务控制语言
│   ├── functions/ # 函数
│   └── constraint/# 约束
```

## 贡献

欢迎提交 PR 完善内容！
