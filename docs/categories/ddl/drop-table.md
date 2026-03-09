# DROP TABLE - 删除表

`DROP TABLE` 用于永久删除表及其所有数据。

## 语法

```sql
DROP TABLE table_name;
DROP TABLE IF EXISTS table_name;
```

## 参数说明

| 参数 | 说明 |
|------|------|
| table_name | 要删除的表名 |
| IF EXISTS | 如果表存在才删除，避免报错 |

## 警告

> ⚠️ **危险操作！**
> DROP TABLE 会永久删除表及其所有数据，无法恢复！

## 示例

### 基本删除

```sql
DROP TABLE employees;
```

### 安全删除（推荐）

```sql
DROP TABLE IF EXISTS employees;
```

### 删除多个表

```sql
DROP TABLE IF EXISTS orders, products, customers;
```

## DROP vs DELETE vs TRUNCATE

| 特性 | DROP TABLE | DELETE | TRUNCATE |
|------|------------|--------|----------|
| 删除内容 | 表结构 + 数据 | 数据（可条件） | 数据 |
| 速度 | 最快 | 较慢 | 快 |
| 可恢复 | 否 | 是（事务） | 否 |
| 重置自增 | 是 | 否 | 是 |

## 相关语法

- [CREATE TABLE](/categories/ddl/create-table) - 创建表
- [ALTER TABLE](/categories/ddl/alter-table) - 修改表
- [TRUNCATE](/categories/ddl/truncate) - 清空表
