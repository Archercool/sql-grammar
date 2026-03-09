# TCL - 事务控制语言

TCL（Transaction Control Language）用于管理数据库事务。

## 包含内容

- **COMMIT** - 提交事务
- **ROLLBACK** - 回滚事务
- **SAVEPOINT** - 设置保存点

## 事务特性

ACID 特性：
- **Atomicity（原子性）** - 事务是最小执行单位
- **Consistency（一致性）** - 事务执行前后数据库状态一致
- **Isolation（隔离性）** - 事务之间互不影响
- **Durability（持久性）** - 事务提交后永久生效

## 常用语句

| 语句 | 说明 |
|------|------|
| COMMIT | 提交事务 |
| ROLLBACK | 回滚事务 |
| SAVEPOINT | 设置保存点 |

## 示例

```sql
-- 开始事务
START TRANSACTION;

-- 执行操作
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- 提交
COMMIT;
```

```sql
-- 回滚
ROLLBACK;
```

```sql
-- 使用保存点
SAVEPOINT sp1;

ROLLBACK TO SAVEPOINT sp1;
```
