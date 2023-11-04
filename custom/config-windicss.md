# 設定 Windi CSS

<Environment type="node" />

::: warning
自 Slidev v0.42.0 起，[UnoCSS](/custom/config-unocss) 已成為 Slidev 的預設 CSS 框架。

您仍然可以透過在前言區塊中設定 `css: windicss` 來使用 Windi CSS。
```md
---
css: windicss
---
```
:::

Markdown 原生支援內嵌 HTML 標記。因此您可以自由調整樣式。

例如：

```html
<div class="grid pt-4 gap-4 grid-cols-[100px,1fr]">

### 名稱

- 項目 1
- 項目 2

</div>
```

The [Attributify Mode](https://windicss.org/posts/v30.html#attributify-mode) in [Windi CSS v3.0](https://windicss.org/posts/v30.html) is enabled by default.

## 設定

若要設定 Windi CSS，請建立 `setup/windicss.ts`，並貼上下列程式碼以擴充內建設定：

```ts
// setup/windicss.ts

import { defineWindiSetup } from '@slidev/types'

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
  shortcuts: {
    // 變更預設背景
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  theme: {
    extend: {
      // 字體可以在此替換，記得更新 `index.html` 中的網頁字體連結
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code", monospace',
      },
    },
  },
}))
```

了解關於 [Windi CSS 設定](https://windicss.org/guide/configuration.html)的更多資訊
