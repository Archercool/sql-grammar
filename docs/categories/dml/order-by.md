# ORDER BY - 排序

`ORDER BY` 子句用于对查询结果进行排序。

## 语法

```sql
SELECT column1, column2
FROM table_name
ORDER BY column1 [ASC|DESC], column2 [ASC|DESC];
```

## 参数说明

| 参数 | 说明 |
|------|------|
| ASC | 升序（默认） |
| DESC | 降序 |

## 示例

### 示例 1：升序排序（默认）

```sql
SELECT * FROM employees
ORDER BY salary;
-- 等同于 ORDER BY salary ASC;
```

### 示例 2：降序排序

```sql
SELECT * FROM employees
ORDER BY salary DESC;
```

### 示例 3：按多列排序

```sql
SELECT * FROM employees
ORDER BY department ASC, salary DESC;
```

### 示例 4：按列位置排序

```sql
SELECT name, salary, department
FROM employees
ORDER BY 2 DESC;
-- 按第2列（salary）降序
```

### 示例 5：使用表达式排序

```sql
SELECT *
FROM employees
ORDER BY LENGTH(name);
```

### 示例 6：结合 WHERE 和 ORDER BY

```sql
SELECT *
FROM employees
WHERE department = 'IT'
ORDER BY salary DESC;
```

## 表示例

原始数据：

| id | name | department | salary |
|----|------|------------|--------|
| 1 | 张三 | IT | 8000.00 |
| 2 | 李四 | HR | 6000.00 |
| 3 | 王五 | IT | 9000.00 |
| 4 | 赵六 | Sales | 7000.00 |

按薪资降序：

```sql
SELECT * FROM employees ORDER BY salary DESC;
```

结果：

| id | name | department | salary |
|----|------|------------|--------|
| 3 | 王五 | IT | 9000.00 |
| 1 | 张三 | IT | 8000.00 |
| 4 | 赵六 | Sales | 7000.00 |
| 2 | 李四 | HR | 6000.00 |

## 注意事项

1. 默认升序（ASC），可省略
2. NULL 值通常排在最前或最后
3. 多列排序时，从左到右优先级递减

## 相关语法

- [SELECT](/categories/dml/select) - 查询数据
- [WHERE](/categories/dml/where) - 条件过滤
- [LIMIT](/categories/dml/limit) - 限制数量
