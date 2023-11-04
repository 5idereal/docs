# 全域圖層

> v0.17 後可用

全域圖層允許自訂元件在每張投影片都**持續**顯示。這對頁尾、跨投影片動畫、全域效果等功能非常有用。

Slidev 提供了三個圖層供使用，只要在您的專案根目錄下建立 `global-top.vue`、`global-bottom.vue` 或 `custom-nav-controls.vue`，Slidev 就會自動載入。

圖層關係：

- 全域頂層 (`global-top.vue`)
- 投影片
- 全域底層 (`global-bottom.vue`)
- NavControls
  - 自訂瀏覽控制 (`custom-nav-controls.vue`)

## 範例

```html
<!-- global-bottom.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">您的名字</footer>
</template>
```

文字 `您的名字` 會顯示在所有投影片上。

```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="下一頁" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

按鈕 `下一頁` 會顯示在瀏覽控制上。

若要根據條件啟用，您可以使用[Vue 全域 Context](/custom/vue-context)。

```html
<!-- 在第 4 頁隱藏頁尾-->
<template>
  <footer
    v-if="$slidev.nav.currentPage !== 4"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Your Name
  </footer>
</template>
```

```html
<!-- hide the footer from "cover" layout -->
<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    您的名字
  </footer>
</template>
```

```html
<!-- 頁面的範例頁尾 -->
<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
  </footer>
</template>
```

```html
<!-- custom-nav-controls -->
<!-- hide the button in Presenter model -->
<template>
  <button v-if="!$slidev.nav.isPresenter" class="icon-btn" title="Next" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
