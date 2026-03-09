# TRUNCATE - 清空表

`TRUNCATE` 用于快速删除表中的所有数据。

## 语法

```sql
TRUNCATE TABLE table_name;
```

## 参数说明

| 参数 | 说明 |
|------|------|
| table_name | 要清空的表名 |

## 警告

> ⚠️ **不可恢复！**
> TRUNCATE 删除的数据无法回滚！

## 示例

```sql
TRUNCATE TABLE employees;
```

## TRUNCATE vs DELETE

| 特性 | TRUNCATE | DELETE |
|------|----------|--------|
| 速度 | 快 | 慢 |
| WHERE | 不支持 | 支持 |
| 事务日志 | 少 | 多 |
| 重置自增 | 是 | 否 |
| 可回滚 | 否 | 是（事务内） |

## 相关语法

- [DELETE](/categories/dml/delete) - 删除数据
- [DROP TABLE](/categories/ddl/drop-table) - 删除表
