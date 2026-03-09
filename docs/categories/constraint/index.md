# 数据库约束

约束用于保证数据的完整性和准确性。

## 约束类型

| 约束 | 说明 |
|------|------|
| PRIMARY KEY | 主键，唯一标识 |
| FOREIGN KEY | 外键，关联其他表 |
| UNIQUE | 唯一值，不重复 |
| NOT NULL | 非空值 |
| DEFAULT | 默认值 |
| CHECK | 条件限制 |

## 主键约束 PRIMARY KEY

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);
```

## 外键约束 FOREIGN KEY

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## 唯一约束 UNIQUE

```sql
CREATE TABLE users (
    email VARCHAR(100) UNIQUE
);
```

## 非空约束 NOT NULL

```sql
CREATE TABLE users (
    name VARCHAR(50) NOT NULL
);
```

## 默认值约束 DEFAULT

```sql
CREATE TABLE users (
    status VARCHAR(20) DEFAULT 'active'
);
```

## 检查约束 CHECK

```sql
CREATE TABLE users (
    age INT CHECK (age >= 0 AND age <= 150)
);
```

## 相关语法

- [CREATE TABLE](/categories/ddl/create-table) - 创建表
- [ALTER TABLE](/categories/ddl/alter-table) - 修改表
