# WHERE - 条件过滤

`WHERE` 子句用于过滤查询结果，只返回满足条件的记录。

## 语法

```sql
SELECT column1, column2
FROM table_name
WHERE condition;
```

## 比较运算符

| 运算符 | 说明 |
|--------|------|
| = | 等于 |
| <> 或 != | 不等于 |
| > | 大于 |
| < | 小于 |
| >= | 大于等于 |
| <= | 小于等于 |

## 示例

### 示例 1：基本条件

```sql
SELECT * FROM employees
WHERE department = 'IT';
```

### 示例 2：数值比较

```sql
SELECT * FROM employees
WHERE salary > 7000;
```

### 示例 3：多个条件（AND）

```sql
SELECT * FROM employees
WHERE department = 'IT' AND salary > 8000;
```

### 示例 4：多个条件（OR）

```sql
SELECT * FROM employees
WHERE department = 'HR' OR department = 'Sales';
```

### 示例 5：IN 操作符

```sql
SELECT * FROM employees
WHERE department IN ('IT', 'HR', 'Sales');
```

### 示例 6：BETWEEN 范围

```sql
SELECT * FROM employees
WHERE salary BETWEEN 5000 AND 9000;
```

### 示例 7：LIKE 模糊匹配

```sql
SELECT * FROM employees
WHERE name LIKE '张%';

SELECT * FROM employees
WHERE email LIKE '%@example.com';
```

### 示例 8：IS NULL

```sql
SELECT * FROM employees
WHERE manager_id IS NOT NULL;
```

## 表示例

| id | name | department | salary |
|----|------|------------|--------|
| 1 | 张三 | IT | 8000.00 |
| 2 | 李四 | HR | 6000.00 |
| 3 | 王五 | IT | 9000.00 |

查询 IT 部门员工：

```sql
SELECT * FROM employees WHERE department = 'IT';
```

结果：

| id | name | department | salary |
|----|------|------------|--------|
| 1 | 张三 | IT | 8000.00 |
| 3 | 王五 | IT | 9000.00 |

## 相关语法

- [SELECT](/categories/dml/select) - 查询数据
- [ORDER BY](/categories/dml/order-by) - 排序
