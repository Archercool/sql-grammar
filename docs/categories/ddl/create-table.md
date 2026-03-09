# CREATE TABLE - 创建表

`CREATE TABLE` 用于在数据库中创建新表。

## 语法

```sql
CREATE TABLE table_name (
    column1 datatype constraints,
    column2 datatype constraints,
    column3 datatype constraints,
    ...
);
```

## 常用数据类型

| 数据类型 | 说明 | 示例 |
|----------|------|------|
| INT | 整数 | 1, 100, -5 |
| BIGINT | 大整数 | 9223372036854775807 |
| DECIMAL(p, s) | 精确数值 | DECIMAL(10, 2) = 12345678.90 |
| FLOAT | 浮点数 | 3.14 |
| DOUBLE | 双精度浮点 | 3.1415926535 |
| VARCHAR(n) | 可变长度字符串 | VARCHAR(50) |
| CHAR(n) | 固定长度字符串 | CHAR(10) |
| TEXT | 长文本 | TEXT |
| DATE | 日期 | '2024-01-15' |
| DATETIME | 日期时间 | '2024-01-15 10:30:00' |
| TIMESTAMP | 时间戳 | 1705312200 |
| BOOLEAN | 布尔值 | TRUE / FALSE |

## 常用约束

| 约束 | 说明 |
|------|------|
| PRIMARY KEY | 主键，唯一标识 |
| NOT NULL | 非空 |
| UNIQUE | 唯一 |
| DEFAULT value | 默认值 |
| CHECK condition | 条件检查 |
| AUTO_INCREMENT | 自动增长 |

## 创建表示例

### 示例 1：创建员工表

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    department VARCHAR(50),
    salary DECIMAL(10, 2) DEFAULT 0,
    hire_date DATE,
    is_active BOOLEAN DEFAULT TRUE
);
```

### 示例 2：创建产品表

```sql
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    price DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 示例 3：创建订单表（带外键）

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10, 2),
    status VARCHAR(20) DEFAULT 'pending',
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
```

### 示例 4：带 CHECK 约束

```sql
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT,
    score DECIMAL(5, 2),
    CHECK (age >= 0 AND age <= 150),
    CHECK (score >= 0 AND score <= 100)
);
```

### 示例 5：使用 IF NOT EXISTS

```sql
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY,
    username VARCHAR(50)
);
```

## 复制表结构

```sql
-- 复制表结构（不复制数据）
CREATE TABLE new_table LIKE original_table;

-- 复制表结构和数据
CREATE TABLE new_table AS SELECT * FROM original_table;
```

## 查看表结构

```sql
-- 查看表结构（MySQL）
DESCRIBE employees;
-- 或
DESC employees;

-- 查看建表语句
SHOW CREATE TABLE employees;
```

## 删除表

```sql
-- 删除表（不可恢复！）
DROP TABLE employees;

-- 如果存在则删除
DROP TABLE IF EXISTS employees;
```

## 相关语法

- [ALTER TABLE](/categories/ddl/alter-table) - 修改表结构
- [DROP TABLE](/categories/ddl/drop-table) - 删除表
- [SELECT](/categories/dml/select) - 查询数据
