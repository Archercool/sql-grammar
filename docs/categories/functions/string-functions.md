# 字符串函数

字符串函数用于处理字符串类型的数据。

## 常用字符串函数

| 函数 | 说明 | 示例 |
|------|------|------|
| LENGTH() | 返回字符串长度 | LENGTH('Hello') = 5 |
| UPPER() | 转换为大写 | UPPER('hello') = 'HELLO' |
| LOWER() | 转换为小写 | LOWER('HELLO') = 'hello' |
| SUBSTRING() | 截取字符串 | SUBSTRING('Hello', 1, 3) = 'Hel' |
| CONCAT() | 连接字符串 | CONCAT('Hello', 'World') = 'HelloWorld' |
| TRIM() | 去除首尾空格 | TRIM('  Hello  ') = 'Hello' |
| REPLACE() | 替换字符串 | REPLACE('Hello', 'l', 'r') = 'Herro' |
| LEFT() | 从左边截取 | LEFT('Hello', 2) = 'He' |
| RIGHT() | 从右边截取 | RIGHT('Hello', 2) = 'lo' |
| LPAD() | 左填充 | LPAD('5', 4, '0') = '0005' |
| RPAD() | 右填充 | RPAD('5', 4, '0') = '5000' |

## 函数详解

### LENGTH() - 字符串长度

```sql
SELECT LENGTH('Hello World');
-- 结果: 11
```

### UPPER() / LOWER() - 大小写转换

```sql
SELECT 
    UPPER(name) AS uppercase_name,
    LOWER(name) AS lowercase_name
FROM employees;
```

### SUBSTRING() - 字符串截取

```sql
-- 语法: SUBSTRING(string, start, length)
SELECT SUBSTRING('Hello World', 1, 5);
-- 结果: 'Hello'

SELECT SUBSTRING('Hello World', 7);
-- 结果: 'World' (从第7位到末尾)
```

### CONCAT() - 字符串连接

```sql
SELECT CONCAT('Hello', ' ', 'World');
-- 结果: 'Hello World'

SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM users;
```

### TRIM() - 去除空格

```sql
SELECT TRIM('   Hello   ');
-- 结果: 'Hello'

-- 去除特定字符
SELECT TRIM(LEADING '0' FROM '000123');  -- 前导0: '123'
SELECT TRIM(TRAILING '0' FROM '123000'); -- 尾部0: '123'
SELECT TRIM(BOTH '0' FROM '0012300');    -- 两端0: '123'
```

### REPLACE() - 字符串替换

```sql
SELECT REPLACE('Hello World', 'World', 'SQL');
-- 结果: 'Hello SQL'

-- 实际应用：更新数据
UPDATE products
SET name = REPLACE(name, 'Old', 'New');
```

### LEFT() / RIGHT() - 字符串截取

```sql
SELECT LEFT('Hello World', 5);
-- 结果: 'Hello'

SELECT RIGHT('Hello World', 5);
-- 结果: 'World'
```

### LPAD() / RPAD() - 字符串填充

```sql
SELECT LPAD('5', 5, '0');
-- 结果: '00005'

SELECT RPAD('5', 5, '0');
-- 结果: '50000'
```

## 综合示例

```sql
SELECT 
    name,
    UPPER(name) AS upper_name,
    LENGTH(name) AS name_length,
    SUBSTRING(name, 1, 1) AS first_letter
FROM employees
WHERE LENGTH(name) > 3;
```

## 相关函数

- [数字函数](/categories/functions/math-functions) - 数学计算
- [日期函数](/categories/functions/date-functions) - 日期处理
- [聚合函数](/categories/functions/aggregate-functions) - 数据统计
