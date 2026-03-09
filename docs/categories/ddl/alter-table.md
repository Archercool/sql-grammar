# ALTER TABLE - 修改表结构

`ALTER TABLE` 用于修改已存在的表结构。

## 语法

```sql
-- 添加列
ALTER TABLE table_name ADD column_name datatype constraints;

-- 修改列
ALTER TABLE table_name MODIFY column_name new_datatype;

-- 删除列
ALTER TABLE table_name DROP column_name;

-- 重命名表
ALTER TABLE old_name RENAME TO new_name;
```

## 操作详解

### 1. 添加列 ADD

```sql
-- 添加单列
ALTER TABLE employees
ADD phone VARCHAR(20);

-- 添加多列
ALTER TABLE employees
ADD (
    phone VARCHAR(20),
    address VARCHAR(200),
    emergency_contact VARCHAR(50)
);

-- 在指定列后添加
ALTER TABLE employees
ADD nickname VARCHAR(50) AFTER name;

-- 在第一列添加
ALTER TABLE employees
ADD first_col INT FIRST;
```

### 2. 修改列 MODIFY

```sql
-- 修改列的数据类型
ALTER TABLE employees
MODIFY salary DECIMAL(12, 2);

-- 修改列名和数据类型
ALTER TABLE employees
CHANGE phone contact_phone VARCHAR(30);

-- 修改列的约束
ALTER TABLE employees
MODIFY email VARCHAR(150) NOT NULL;
```

### 3. 删除列 DROP

```sql
-- 删除单列
ALTER TABLE employees
DROP column_name;

-- 删除多列
ALTER TABLE employees
DROP phone,
DROP address;
```

### 4. 重命名表

```sql
ALTER TABLE employees RENAME TO staff;
```

### 5. 添加约束

```sql
-- 添加主键
ALTER TABLE employees
ADD PRIMARY KEY (id);

-- 添加外键
ALTER TABLE orders
ADD FOREIGN KEY (customer_id) REFERENCES customers(id);

-- 添加唯一约束
ALTER TABLE employees
ADD UNIQUE (email);

-- 添加默认约束
ALTER TABLE employees
ALTER salary SET DEFAULT 0;
```

### 6. 删除约束

```sql
-- 删除主键
ALTER TABLE employees
DROP PRIMARY KEY;

-- 删除外键
ALTER TABLE orders
DROP FOREIGN KEY fk_customer;

-- 删除唯一约束
ALTER TABLE employees
DROP INDEX email;
```

### 7. 修改自增起始值

```sql
ALTER TABLE employees AUTO_INCREMENT = 1000;
```

## 综合示例

```sql
-- 完整的表结构修改流程
ALTER TABLE employees
ADD (
    department_id INT,
    manager_id INT
);

ALTER TABLE employees
MODIFY department VARCHAR(100);

ALTER TABLE employees
ADD FOREIGN KEY (department_id) REFERENCES departments(id),
ADD FOREIGN KEY (manager_id) REFERENCES employees(id);

ALTER TABLE employees
DROP COLUMN old_field;
```

## 注意事项

1. 修改列数据类型可能导致数据丢失
2. 删除列会同时删除该列的所有数据
3. 外键约束需要确保引用的表存在
4. 在生产环境中修改大表结构需谨慎

## 相关语法

- [CREATE TABLE](/categories/ddl/create-table) - 创建表
- [DROP TABLE](/categories/ddl/drop-table) - 删除表
- [SELECT](/categories/dml/select) - 查询数据
