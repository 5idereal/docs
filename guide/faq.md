# FAQ

## 網格

由於 Slidev 基於網頁，您可以隨心所欲地套用任何網格格式。[CSS 網格](https://css-tricks.com/snippets/css/complete-guide-grid/)、[flexboxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)，甚至是 [Masonry](https://css-tricks.com/native-css-masonry-layout-in-css-grid/)，盡在您的掌控之中。

由於我們內建了 [UnoCSS](https://unocss.dev/)，這裡有一個簡單的範例供您參考：

```html
<div class="grid grid-cols-2 gap-4">
<div>

第一欄

</div>
<div>

第二欄

</div>
</div>
```

Go further, you can customize the size of each column like:

```html
<div class="grid grid-cols-[200px_1fr_10%] gap-4">
<div>

第一欄 (200px)

</div>
<div>

第二欄 (auto fit)

</div>
<div>

第三欄 (10% width to parent container)

</div>
</div>
```

Learn more about [Windi CSS Grids](https://windicss.org/utilities/layout/grid.html).

## Positioning

Slides are defined in fixed sizes (default `980x552px`) and scale to fit with the user screen. You can safely use absolute position in your slides as they will scale along with the screen.

例如：

```html
<div class="absolute left-30px bottom-30px">
這是一個對齊左下角的頁尾
</div>
```

To change the canvas' actual size, you can pass the `canvasWidth` options in your first frontmatter:

若要

```yaml
---
canvasWidth: 800
---
```

## 字體大小

如果您覺得投影片的字體太小，有幾種方式可以調整：

### 覆寫區域樣式

You can override styles for each slide with the inlined `<style>` tag.

```md
# 第 1 頁

<style>
h1 {
  font-size: 10em;
}
</style>

---

# 第 2 頁

這不會受影響。
```

Learn more: [Embedded Styles](/guide/syntax.html#embedded-styles)

### 覆寫全域樣式

You can provide custom global styles by creating `./style.css`, for example

```css
/* style.css */

h1 {
  font-size: 10em !important;
}
```

Learn more: [Global Style](/custom/directory-structure.html#style)

### 縮放畫布

Changing the canvas' actual size will scale all your contents(text, images, components, etc.) and slides

```yaml
---
# default: 980
# since the canvas gets smaller, the visual size will become larger
canvasWidth: 800
---
```

### Use Transform

We provide a built-in component `<Transform />`, which is a thin wrapper of CSS transform property.

```md
<Transform :scale="1.4">

- Item 1
- Item 2

</Transform>
```
