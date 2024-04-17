# 使用 npm 过程中遇到的问题

- npm i 报错 reason: certificate has expired
  - 取消 ssl 验证
    ```bash
    npm config set strict-ssl false
    ```
