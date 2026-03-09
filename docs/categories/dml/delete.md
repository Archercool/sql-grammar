# DELETE - 删除数据

`DELETE` 语句用于从表中删除数据。

## 语法

```sql
DELETE FROM table_name
WHERE condition;
```

## 参数说明

| 参数 | 说明 |
|------|------|
| table_name | 要删除数据的表名 |
| WHERE condition | 删除条件（非常重要！） |

## 警告

> ⚠️ **必须使用 WHERE 条件**
> 如果不指定 WHERE 条件，表中所有数据都会被删除！

## 基础示例

### 示例 1：删除指定行

```sql
DELETE FROM employees
WHERE id = 5;
```

### 示例 2：删除多行

```sql
DELETE FROM employees
WHERE department = 'Sales';
```

### 示例 3：使用多个条件

```sql
DELETE FROM employees
WHERE department = 'HR' AND salary > 7000;
```

### 示例 4：删除所有数据（慎用！）

```sql
DELETE FROM employees;
```

## 表示例

删除前 employees 表：

| id | name | department | salary |
|----|------|------------|--------|
| 1 | 张三 | IT | 8000.00 |
| 2 | 李四 | HR | 6000.00 |
| 3 | 王五 | IT | 9000.00 |
| 4 | 赵六 | Sales | 7000.00 |
| 5 | 钱七 | HR | 6500.00 |

执行删除：

```sql
DELETE FROM employees
WHERE department = 'Sales';
```

删除后：

| id | name | department | salary |
|----|------|------------|--------|
| 1 | 张三 | IT | 8000.00 |
| 2 | 李四 | HR | 6000.00 |
| 3 | 王五 | IT | 9000.00 |
| 5 | HR | 6500.00 | 钱七 |

## DELETE vs TRUNCATE

| 特性 | DELETE | TRUNCATE |
|------|--------|----------|
| 速度 | 较慢（逐行删除） | 快速（重建表） |
| WHERE 支持 | 支持 | 不支持 |
| 事务日志 | 记录每行删除 | 记录整个操作 |
| 自增重置 | 否 | 是 |

## 相关语法

- [SELECT](/categories/dml/select) - 查询数据
- [INSERT](/categories/dml/insert) - 插入数据
- [UPDATE](/categories/dml/update) - 更新数据
- [TRUNCATE](/categories/ddl/truncate) - 清空表
