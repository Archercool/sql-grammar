# 数学函数

数学函数用于执行数学运算。

## 常用数学函数

| 函数 | 说明 | 示例 |
|------|------|------|
| ABS() | 绝对值 | ABS(-5) = 5 |
| CEIL() | 向上取整 | CEIL(4.3) = 5 |
| FLOOR() | 向下取整 | FLOOR(4.7) = 4 |
| ROUND() | 四舍五入 | ROUND(4.5) = 5 |
| TRUNCATE() | 截断 | TRUNCATE(4.567, 2) = 4.56 |
| MOD() | 取模 | MOD(10, 3) = 1 |
| POW() / POWER() | 幂运算 | POW(2, 3) = 8 |
| SQRT() | 平方根 | SQRT(16) = 4 |
| RAND() | 随机数 | RAND() = 0.xxxx |
| GREATEST() | 最大值 | GREATEST(1, 5, 3) = 5 |
| LEAST() | 最小值 | LEAST(1, 5, 3) = 1 |

## 函数详解

### ABS() - 绝对值

```sql
SELECT ABS(-5);     -- 5
SELECT ABS(5);      -- 5
SELECT ABS(-3.14);  -- 3.14
```

### CEIL() / FLOOR() - 取整

```sql
SELECT CEIL(4.3);   -- 5 (向上取整)
SELECT CEIL(4.9);   -- 5

SELECT FLOOR(4.7);  -- 4 (向下取整)
SELECT FLOOR(4.1);  -- 4
```

### ROUND() - 四舍五入

```sql
SELECT ROUND(4.5);      -- 5
SELECT ROUND(4.4);      -- 4
SELECT ROUND(4.567);    -- 5

-- 指定小数位数
SELECT ROUND(4.567, 2); -- 4.57
SELECT ROUND(4.567, 0); -- 5
```

### TRUNCATE() - 截断

```sql
SELECT TRUNCATE(4.567, 2);  -- 4.56
SELECT TRUNCATE(4.567, 0);  -- 4
SELECT TRUNCATE(4567, -2);  -- 4500
```

### MOD() - 取模

```sql
SELECT MOD(10, 3);     -- 1
SELECT MOD(10, 2);     -- 0
SELECT MOD(15, 7);     -- 1
```

### POW() / POWER() - 幂运算

```sql
SELECT POW(2, 3);      -- 8
SELECT POWER(2, 10);   -- 1024
SELECT POW(5, 0);      -- 1
SELECT POW(3, -2);     -- 0.11
```

### SQRT() - 平方根

```sql
SELECT SQRT(16);       -- 4
SELECT SQRT(2);        -- 1.41421356
SELECT SQRT(0);        -- 0
SELECT SQRT(-1);       -- NULL (某些数据库会报错)
```

### RAND() - 随机数

```sql
-- 0-1 之间的随机数
SELECT RAND();          -- 0.123456789

-- 指定范围
SELECT RAND() * 100;   -- 0-100 之间的数

-- 随机整数
SELECT FLOOR(RAND() * 100);  -- 0-99 的随机整数

-- 获取随机记录
SELECT * FROM users
ORDER BY RAND()
LIMIT 5;
```

### GREATEST() / LEAST() - 最大/最小值

```sql
SELECT GREATEST(1, 5, 3, 8, 2);  -- 8
SELECT LEAST(1, 5, 3, 8, 2);    -- 1

SELECT GREATEST(10, 20, NULL);  -- NULL (有NULL返回NULL)
```

## 综合示例

### 计算员工年终奖（薪资的 15%）

```sql
SELECT 
    name,
    salary,
    ROUND(salary * 0.15, 2) AS bonus
FROM employees;
```

### 按部门计算平均薪资并四舍五入

```sql
SELECT 
    department,
    ROUND(AVG(salary)) AS avg_salary
FROM employees
GROUP BY department;
```

### 分页查询

```sql
-- 每页显示10条，第3页
SELECT * FROM products
LIMIT 10 OFFSET 20;
-- 或者
SELECT * FROM products
LIMIT 20, 10;
```

### 四舍五入 vs 截断

```sql
SELECT 
    4.5 AS original,
    ROUND(4.5) AS rounded,      -- 5
    TRUNCATE(4.5, 0) AS truncated;  -- 4
```

## 相关函数

- [字符串函数](/categories/functions/string-functions) - 字符串处理
- [聚合函数](/categories/functions/aggregate-functions) - 数据统计
