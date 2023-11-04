# 設定 Vue

<Environment type="client" />

Slidev 使用 [Vue 3](https://v3.vuejs.org/) 在客戶端渲染應用程式。您可以擴充應用程式以新增自訂的外掛程式或設定。

建立 `./setup/main.ts`，並貼上下列程式碼：

```ts
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Vue 應用程式
  app.use(YourPlugin)
})
```

This could also be used as the main entrance of your Slidev app to do some initializations before the app starts.

這也可以用作您 Slidev 應用程式的主入口，以便在應用程式啟動前進行一些初始化操作。

了解詳情：[Vue 應用程式 API](https://v3.vuejs.org/api/application-api.html#component).
