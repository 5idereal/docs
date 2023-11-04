# Configure Mermaid

<Environment type="client" />

建立 `./setup/mermaid.ts`，並貼上下列程式碼：

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})
```

設置完成後，您即可為 [Mermaid](https://mermaid-js.github.io/) 提供自訂的預設設定。請參考類型定義和其文件以獲得更多資訊。參閱類型定義和其說明文件以了解更多資訊。

## 自訂主題/樣式

若您想要建立自訂的 Mermaid 主題或樣式，可以透過定義 `themeVariables` 來達成，如下所示：

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // 一般主題變數
      noteBkgColor: "#181d29",
      noteTextColor: "#F3EFF5cc",
      noteBorderColor: "#404551",
      // 流程圖變數
      actorBkg: "#0E131F",
      actorBorder: "#44FFD2",
      actorTextColor: "#F3EFF5",
      actorLineColor: "#F3EFF5",
      signalColor: "#F3EFF5",
      signalTextColor: "#F3EFF5",
    }
  }
})
```

您可以在 [Mermaid 主題設定](https://mermaid-js.github.io/mermaid/#/theming)頁面找到所有的主題變數。
