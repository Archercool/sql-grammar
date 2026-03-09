# 日期函数

日期函数用于处理日期和时间类型的数据。

## 常用日期函数

| 函数 | 说明 | 示例 |
|------|------|------|
| NOW() | 返回当前日期时间 | NOW() = '2024-01-15 10:30:45' |
| CURDATE() | 返回当前日期 | CURDATE() = '2024-01-15' |
| CURTIME() | 返回当前时间 | CURTIME() = '10:30:45' |
| DATE() | 提取日期部分 | DATE('2024-01-15 10:30:45') = '2024-01-15' |
| TIME() | 提取时间部分 | TIME('2024-01-15 10:30:45') = '10:30:45' |
| YEAR() | 提取年份 | YEAR('2024-01-15') = 2024 |
| MONTH() | 提取月份 | MONTH('2024-01-15') = 1 |
| DAY() | 提取日期 | DAY('2024-01-15') = 15 |
| HOUR() | 提取小时 | HOUR('10:30:45') = 10 |
| MINUTE() | 提取分钟 | MINUTE('10:30:45') = 30 |
| SECOND() | 提取秒数 | SECOND('10:30:45') = 45 |
| DATE_ADD() | 日期加法 | DATE_ADD('2024-01-15', INTERVAL 10 DAY) |
| DATE_SUB() | 日期减法 | DATE_SUB('2024-01-15', INTERVAL 1 MONTH) |
| DATEDIFF() | 日期差 | DATEDIFF('2024-01-15', '2024-01-01') = 14 |
| DATE_FORMAT() | 日期格式化 | DATE_FORMAT(date, format) |

## 函数详解

### NOW() / CURDATE() / CURTIME()

```sql
SELECT NOW();        -- 2024-01-15 10:30:45
SELECT CURDATE();    -- 2024-01-15
SELECT CURTIME();    -- 10:30:45
```

### DATE() / TIME() - 提取部分

```sql
SELECT 
    DATE('2024-01-15 10:30:45') AS only_date,
    TIME('2024-01-15 10:30:45') AS only_time;
-- 结果: 2024-01-15 | 10:30:45
```

### YEAR() / MONTH() / DAY()

```sql
SELECT 
    YEAR('2024-01-15') AS year,
    MONTH('2024-01-15') AS month,
    DAY('2024-01-15') AS day;
-- 结果: 2024 | 1 | 15
```

### DATE_ADD() / DATE_SUB() - 日期运算

```sql
-- 加法
SELECT DATE_ADD('2024-01-15', INTERVAL 10 DAY);
-- 结果: 2024-01-25

SELECT DATE_ADD('2024-01-15', INTERVAL 2 MONTH);
-- 结果: 2024-03-15

SELECT DATE_ADD('2024-01-15 10:30:45', INTERVAL 3 HOUR);
-- 结果: 2024-01-15 13:30:45

-- 减法
SELECT DATE_SUB('2024-01-15', INTERVAL 1 WEEK);
-- 结果: 2024-01-08
```

### DATEDIFF() - 日期差

```sql
SELECT DATEDIFF('2024-01-31', '2024-01-01');
-- 结果: 30

-- 计算年龄
SELECT DATEDIFF(CURDATE(), birth_date) / 365 AS age_years
FROM users;
```

### DATE_FORMAT() - 日期格式化

```sql
SELECT DATE_FORMAT('2024-01-15 10:30:45', '%Y-%m-%d');
-- 结果: 2024-01-15

SELECT DATE_FORMAT('2024-01-15 10:30:45', '%Y年%m月%d日');
-- 结果: 2024年01月15日

SELECT DATE_FORMAT('2024-01-15 10:30:45', '%H:%i:%s');
-- 结果: 10:30:45

SELECT DATE_FORMAT('2024-01-15', '%W %M %Y');
-- 结果: Monday January 2024
```

#### 常用格式化符

| 格式符 | 说明 | 示例 |
|--------|------|------|
| %Y | 4位年份 | 2024 |
| %y | 2位年份 | 24 |
| %m | 2位月份 | 01 |
| %c | 1位月份 | 1 |
| %d | 2位日期 | 15 |
| %H | 24小时制 | 10 |
| %h | 12小时制 | 10 |
| %i | 分钟 | 30 |
| %s | 秒数 | 45 |
| %W | 星期几全称 | Monday |
| %a | 星期几简称 | Mon |

## 综合示例

```sql
-- 查询本月入职的员工
SELECT *
FROM employees
WHERE DATE_FORMAT(hire_date, '%Y-%m') = DATE_FORMAT(CURDATE(), '%Y-%m');

-- 查询工作满3年的员工
SELECT *
FROM employees
WHERE DATEDIFF(CURDATE(), hire_date) > 365 * 3;

-- 计算员工年龄
SELECT 
    name,
    birth_date,
    TIMESTAMPDIFF(YEAR, birth_date, CURDATE()) AS age
FROM employees;
```

## 相关函数

- [字符串函数](/categories/functions/string-functions) - 字符串处理
- [聚合函数](/categories/functions/aggregate-functions) - 数据统计
