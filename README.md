## imart
一个 JavaScript 常用工具库


签名方式：

```
pkgsign sign --signer pgp --pgp-private-key-path ./openpgp_prikey.txt --pgp-private-key-passphrase kjc_true --pgp-public-key-https-url https://keybase.io/kjc233/pgp_keys.asc .
```

验证方式：

```
pkgsign verify . --full
```

公钥地址

https://keybase.io/troncoredev/pgp_keys.asc