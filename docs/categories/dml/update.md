# UPDATE - 更新数据

`UPDATE` 语句用于修改表中已存在的数据。

## 语法

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

## 参数说明

| 参数 | 说明 |
|------|------|
| table_name | 要更新数据的表名 |
| column1 = value1 | 列名和新值 |
| WHERE condition | 更新条件（非常重要！） |

## 警告

> ⚠️ **必须使用 WHERE 条件**
> 如果不指定 WHERE 条件，表中所有行的数据都会被更新！

## 基础示例

### 示例 1：更新单列

```sql
UPDATE employees
SET salary = 10000
WHERE name = '张三';
```

### 示例 2：更新多列

```sql
UPDATE employees
SET department = 'IT', salary = 12000
WHERE id = 3;
```

### 示例 3：使用表达式

```sql
UPDATE employees
SET salary = salary * 1.1
WHERE department = 'IT';
```

### 示例 4：使用 WHERE 子句

```sql
UPDATE employees
SET salary = 8000
WHERE department = 'HR' AND salary < 6500;
```

## 表示例

更新前 employees 表：

| id | name | department | salary |
|----|------|------------|--------|
| 1 | 张三 | IT | 8000.00 |
| 2 | 李四 | HR | 6000.00 |

执行更新：

```sql
UPDATE employees
SET salary = 9000
WHERE id = 1;
```

更新后：

| id | name | department | salary |
|----|------|------------|--------|
| 1 | 张三 | IT | 9000.00 |
| 2 | 李四 | HR | 6000.00 |

## 批量更新示例

给所有员工涨薪 15%：

```sql
UPDATE employees
SET salary = salary * 1.15;
```

给 IT 部门员工额外涨薪：

```sql
UPDATE employees
SET salary = salary * 1.2
WHERE department = 'IT';
```

## 相关语法

- [SELECT](/categories/dml/select) - 查询数据
- [INSERT](/categories/dml/insert) - 插入数据
- [DELETE](/categories/dml/delete) - 删除数据
