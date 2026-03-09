# INSERT - 插入数据

`INSERT` 语句用于向表中插入新数据。

## 语法

### 方式 1：指定列名插入

```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
```

### 方式 2：插入完整行

```sql
INSERT INTO table_name
VALUES (value1, value2, ...);
```

### 方式 3：批量插入

```sql
INSERT INTO table_name (column1, column2, ...)
VALUES 
    (value1, value2, ...),
    (value3, value4, ...),
    (value5, value6, ...);
```

## 参数说明

| 参数 | 说明 |
|------|------|
| table_name | 要插入数据的表名 |
| column1, column2 | 列名 |
| value1, value2 | 要插入的值 |

## 基础示例

### 示例 1：插入单条数据

```sql
INSERT INTO employees (id, name, department, salary)
VALUES (6, '孙八', 'Marketing', 7500);
```

### 示例 2：插入完整行

```sql
INSERT INTO employees
VALUES (7, '周九', 'Finance', 8500);
```

### 示例 3：批量插入

```sql
INSERT INTO employees (id, name, department, salary)
VALUES 
    (8, '吴十', 'IT', 9500),
    (9, '郑十一', 'Sales', 7200),
    (10, '陈十二', 'HR', 6800);
```

### 示例 4：使用 DEFAULT 值

```sql
INSERT INTO employees (id, name, department)
VALUES (11, '林十三', 'IT');
-- salary 将使用默认值或 NULL
```

## 表示例

插入后的 employees 表：

| id | name | department | salary |
|----|------|------------|--------|
| 1 | 张三 | IT | 8000.00 |
| 2 | 李四 | HR | 6000.00 |
| 3 | 王五 | IT | 9000.00 |
| 4 | 赵六 | Sales | 7000.00 |
| 5 | 钱七 | HR | 6500.00 |
| 6 | 孙八 | Marketing | 7500.00 |
| 7 | 周九 | Finance | 8500.00 |
| 8 | 吴十 | IT | 9500.00 |
| 9 | 郑十一 | Sales | 7200.00 |
| 10 | 陈十二 | HR | 6800.00 |
| 11 | 林十三 | IT | NULL |

## 注意事项

1. 字符串值需要用单引号包裹
2. 数值不需要引号
3. 如果列允许 NULL，可以不插入该列
4. 确保主键值不重复

## 相关语法

- [SELECT](/categories/dml/select) - 查询数据
- [UPDATE](/categories/dml/update) - 更新数据
- [DELETE](/categories/dml/delete) - 删除数据
