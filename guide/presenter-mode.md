# 簡報者模式

點擊導覽列中的 <carbon-user-speaker class="inline-icon-btn"/> 按鈕，或手動前往 `http://localhost:3030/presenter`，即可進入簡報者模式。每當您進入簡報者模式時，其他頁面實例都會自動與簡報者保持同步。

![](/screenshots/presenter-mode.png)

## 停用

預設情況下，簡報者模式是啟用的。

您可以使用以下設定來停用此功能：

```md
---
presenter: false
---
```

或您可以在設定中設定 `dev` 或 `build` 模式來在指定模式下才啟用：

```md
---
presenter: dev
---
```

在上面的範例中，簡報者模式只會在執行 `slidev` 時可用，但執行 `slidev build` 時則會停用。

## 遠端限制存取

執行 `slidev --remote` 來遠端存取您的簡報。

在您想與其他人分享投影片，但不想讓他們存取簡報者模式以搞亂您的簡報時，這種情況下，您可以執行 `slidev --remote=your_password` 來為伺服器設定密碼。

您在存取 `/presenter/*` 路徑時則需輸入密碼。
