# 設定 KaTeX

<Environment type="node" />

建立 `./setup/katex.ts`，並貼上下列程式碼：

```ts
import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    /* ... */
  }
})
```

設置完成後，您即可為 [KaTeX 選項](https://katex.org/docs/options.html)提供自訂設定。請參考類型定義和其文件以獲得更多資訊。參閱類型定義和其說明文件以了解更多資訊。
