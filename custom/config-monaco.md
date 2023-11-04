# Configure Monaco

<Environment type="client" />

建立 `./setup/monaco.ts`，並貼上下列程式碼：

```ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // 使用 `monaco` 來設定
})
```

了解關於[設定 Monaco](https://github.com/Microsoft/monaco-editor) 的更多資訊。

## 用法

在程式碼片段後方加上 `{monaco}` 即可在投影片中使用 Monaco：

~~~js
//```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

會變成

~~~js
//```js {monaco}
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

## 匯出

預設情況下，Monaco 只會在 `dev` 模式中運作。若您希望在匯出的 SPA 中使用，請在前言區塊中設定：

```yaml
---
monaco: true # 預設為 "dev"
---
```

## Types Auto Installing

When use TypeScript with Monaco, types for dependencies will be installed to the client-side automatically.

~~~ts
//```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
//```
~~~

在上方的範例中，請確保 `vue` 和 `@vueuse/core` 已經作為 dependencies 或 devDependencies 安裝到本機，Slidev 會自動處理其餘的事情，讓編輯器中的類型自動運作！

## 設定主題

主題由 Slidev 根據淺色/深色主題控制。如果您想自訂，可以將主題 id 傳給設定函數：

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    theme: {
      dark: 'vs-dark',
      light: 'vs',
    },
  }
})
```

如果您想要載入自訂主題：

```ts
import { defineMonacoSetup } from '@slidev/types'

// change to your themes
import dark from 'theme-vitesse/themes/vitesse-dark.json'
import light from 'theme-vitesse/themes/vitesse-light.json'

export default defineMonacoSetup((monaco) => {
  monaco.editor.defineTheme('vitesse-light', light as any)
  monaco.editor.defineTheme('vitesse-dark', dark as any)

  return {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  }
})
```

> If you are creating a theme for Slidev, use dynamic `import()` inside the setup function to get better tree-shaking and code-splitting results.

## 設定編輯器

> v0.43.0 後可用

If you would like to customize the Monaco editor you may pass an `editorOptions` object that matches the [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html) definition.

~~~ts
//```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
//```
~~~

Alternatively if you would like these options to be applied to every Monaco instance, you can return them in the `defineMonacoSetup` function

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      wordWrap: 'on'
    }
  }
})
```