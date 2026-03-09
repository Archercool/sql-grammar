# DCL - 数据控制语言

DCL（Data Control Language）用于控制数据库访问权限。

## 包含内容

- **GRANT** - 授予权限
- **REVOKE** - 撤销权限

## 常用语句

| 语句 | 说明 |
|------|------|
| GRANT | 授予用户权限 |
| REVOKE | 撤销用户权限 |

## 示例

```sql
-- 授予权限
GRANT SELECT, INSERT ON database.table TO user;

-- 撤销权限
REVOKE INSERT ON database.table FROM user;
```

## 常用权限

| 权限 | 说明 |
|------|------|
| SELECT | 查询数据 |
| INSERT | 插入数据 |
| UPDATE | 更新数据 |
| DELETE | 删除数据 |
| CREATE | 创建对象 |
| DROP | 删除对象 |
| ALL | 所有权限 |
