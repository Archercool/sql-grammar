# SELECT - 查询数据

`SELECT` 是 SQL 中最常用的语句，用于从数据库表中查询数据。

## 语法

```sql
SELECT column1, column2, ...
FROM table_name;
```

或查询所有列：

```sql
SELECT *
FROM table_name;
```

## 参数说明

| 参数 | 说明 |
|------|------|
| column1, column2 | 要查询的列名，使用逗号分隔 |
| * | 表示查询所有列 |
| table_name | 要查询的表名 |

## 基础示例

### 示例 1：查询所有员工的名字和薪资

```sql
SELECT name, salary
FROM employees;
```

### 示例 2：查询所有列

```sql
SELECT *
FROM employees;
```

### 示例 3：使用 DISTINCT 去重

```sql
SELECT DISTINCT department
FROM employees;
```

### 示例 4：使用别名

```sql
SELECT 
    name AS '员工姓名',
    salary AS '薪资'
FROM employees;
```

## 表示例

首先创建员工表：

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10, 2)
);
```

插入测试数据：

```sql
INSERT INTO employees VALUES
(1, '张三', 'IT', 8000),
(2, '李四', 'HR', 6000),
(3, '王五', 'IT', 9000),
(4, '赵六', 'Sales', 7000),
(5, '钱七', 'HR', 6500);
```

查询结果：

| id | name | department | salary |
|----|------|------------|--------|
| 1 | 张三 | IT | 8000.00 |
| 2 | 李四 | HR | 6000.00 |
| 3 | 王五 | IT | 9000.00 |
| 4 | 赵六 | Sales | 7000.00 |
| 5 | 钱七 | HR | 6500.00 |

## 扩展用法

### WHERE 条件过滤

```sql
SELECT *
FROM employees
WHERE department = 'IT';
```

### ORDER BY 排序

```sql
SELECT *
FROM employees
ORDER BY salary DESC;
```

### LIMIT 限制数量

```sql
SELECT *
FROM employees
LIMIT 3;
```

## 相关语法

- [INSERT](/categories/dml/insert) - 插入数据
- [UPDATE](/categories/dml/update) - 更新数据
- [DELETE](/categories/dml/delete) - 删除数据
- [WHERE 子句](/categories/dml/where) - 条件过滤
- [ORDER BY](/categories/dml/order-by) - 排序
