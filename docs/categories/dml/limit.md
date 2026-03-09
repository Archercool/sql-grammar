# LIMIT - 限制数量

`LIMIT` 子句用于限制查询返回的记录数量。

## 语法

```sql
-- 方式1：指定数量
SELECT * FROM table_name LIMIT count;

-- 方式2：指定起始位置和数量
SELECT * FROM table_name LIMIT offset, count;

-- 方式3：MySQL 8.0 语法
SELECT * FROM table_name LIMIT count OFFSET offset;
```

## 参数说明

| 参数 | 说明 |
|------|------|
| count | 返回的记录数 |
| offset | 跳过的记录数 |

## 示例

### 示例 1：获取前 5 条记录

```sql
SELECT * FROM employees
LIMIT 5;
```

### 示例 2：跳过前 10 条，获取接下来的 5 条

```sql
SELECT * FROM employees
LIMIT 10, 5;
-- 或
SELECT * FROM employees
LIMIT 5 OFFSET 10;
```

### 示例 3：分页查询

```sql
-- 第1页（每页10条）
SELECT * FROM employees
LIMIT 10;

-- 第2页
SELECT * FROM employees
LIMIT 10, 10;

-- 第3页
SELECT * FROM employees
LIMIT 20, 10;
```

### 示例 4：结合 ORDER BY

```sql
-- 薪资最高的前3名
SELECT * FROM employees
ORDER BY salary DESC
LIMIT 3;
```

### 示例 5：获取薪资第 4-6 名

```sql
SELECT * FROM employees
ORDER BY salary DESC
LIMIT 3, 3;
```

## 表示例

| id | name | salary |
|----|------|--------|
| 1 | 张三 | 8000 |
| 2 | 李四 | 6000 |
| 3 | 王五 | 9000 |
| 4 | 赵六 | 7000 |
| 5 | 钱七 | 5500 |

获取前3条：

```sql
SELECT * FROM employees LIMIT 3;
```

结果：

| id | name | salary |
|----|------|--------|
| 1 | 张三 | 8000 |
| 2 | 李四 | 6000 |
| 3 | 王五 | 9000 |

## 相关语法

- [SELECT](/categories/dml/select) - 查询数据
- [ORDER BY](/categories/dml/order-by) - 排序
- [WHERE](/categories/dml/where) - 条件过滤
