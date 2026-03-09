# 聚合函数

聚合函数用于对一组值执行计算并返回单个结果。

## 常用聚合函数

| 函数 | 说明 | 示例 |
|------|------|------|
| COUNT() | 统计数量 | COUNT(*) = 10 |
| SUM() | 求和 | SUM(salary) = 50000 |
| AVG() | 平均值 | AVG(salary) = 5000 |
| MAX() | 最大值 | MAX(salary) = 10000 |
| MIN() | 最小值 | MIN(salary) = 3000 |
| GROUP_CONCAT() | 字符串连接 | GROUP_CONCAT(name) = 'a,b,c' |

## 函数详解

### COUNT() - 计数

```sql
-- 统计所有行数（包括NULL）
SELECT COUNT(*)
FROM employees;
-- 结果: 10

-- 统计指定列的非空值数量
SELECT COUNT(department)
FROM employees;
-- 结果: 10

-- 统计不重复的数量
SELECT COUNT(DISTINCT department)
FROM employees;
-- 结果: 4 (IT, HR, Sales, Marketing)
```

### SUM() - 求和

```sql
-- 计算薪资总和
SELECT SUM(salary)
FROM employees;
-- 结果: 75000

-- 带条件求和
SELECT SUM(salary)
FROM employees
WHERE department = 'IT';
-- 结果: 26000
```

### AVG() - 平均值

```sql
-- 计算平均薪资
SELECT AVG(salary)
FROM employees;
-- 结果: 7500.00

-- 计算部门平均薪资
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department;
```

### MAX() / MIN() - 最大/最小值

```sql
-- 最高薪资
SELECT MAX(salary)
FROM employees;
-- 结果: 10000

-- 最低薪资
SELECT MIN(salary)
FROM employees;
-- 结果: 5000

-- 找出薪资最高的员工
SELECT *
FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees);
```

### GROUP_CONCAT() - 分组连接

```sql
-- 连接同一部门的员工名字
SELECT 
    department,
    GROUP_CONCAT(name ORDER BY salary DESC SEPARATOR ', ') AS employees
FROM employees
GROUP BY department;
```

## GROUP BY 分组

### 基本分组

```sql
-- 按部门统计人数
SELECT 
    department,
    COUNT(*) AS employee_count
FROM employees
GROUP BY department;
```

### 分组结果示例

| department | employee_count |
|------------|----------------|
| IT | 3 |
| HR | 2 |
| Sales | 2 |
| Marketing | 1 |

### 多列分组

```sql
SELECT 
    department,
    job_title,
    COUNT(*) AS count,
    AVG(salary) AS avg_salary
FROM employees
GROUP BY department, job_title;
```

## HAVING 过滤分组

```sql
-- 人数大于2的部门
SELECT 
    department,
    COUNT(*) AS count
FROM employees
GROUP BY department
HAVING count > 2;
```

## 综合示例

```sql
SELECT 
    department,
    COUNT(*) AS total_employees,
    SUM(salary) AS total_salary,
    AVG(salary) AS avg_salary,
    MAX(salary) AS max_salary,
    MIN(salary) AS min_salary
FROM employees
GROUP BY department
HAVING COUNT(*) >= 2
ORDER BY total_salary DESC;
```

结果示例：

| department | total_employees | total_salary | avg_salary | max_salary | min_salary |
|------------|-----------------|--------------|------------|------------|------------|
| IT | 3 | 26000 | 8666.67 | 10000 | 7000 |
| HR | 2 | 11500 | 5750 | 6000 | 5500 |
| Sales | 2 | 14000 | 7000 | 8000 | 6000 |

## 注意事项

1. 聚合函数通常与 GROUP BY 一起使用
2. WHERE 在分组前过滤，HAVING 在分组后过滤
3. COUNT(*) 包含 NULL 行，COUNT(column) 不包含 NULL 值

## 相关函数

- [字符串函数](/categories/functions/string-functions) - 字符串处理
- [日期函数](/categories/functions/date-functions) - 日期处理
