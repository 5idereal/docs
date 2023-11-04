# 字體

> v0.20 後可用

除了使用 HTML 和 CSS 來自訂您的投影片字體和樣式外，Slidev 也提供了一種輕鬆的方式來輕鬆使用它們。

在您的前言區塊中，設定：

```yaml
---
fonts:
  # basically the text
  sans: 'Robot'
  # use with `font-serif` css class from windicss
  serif: 'Robot Slab'
  # for code blocks, inline code, etc.
  mono: 'Fira Code'
---
```

就完成了。

字體會**自動從 [Google Fonts](https://fonts.google.com/) 匯入**。這表示您可以直接使用 Google Fonts 上提供的任何字體。

## 本機字體

預設情況下，Slidev 會假定所有透過 `fonts` 設定指定的字體都來自 Google Fonts。如果您想使用本機字體，請指定 `fonts.local` 來停用自動匯入。

```yaml
---
fonts:
  # like font-family in css, you can use `,` to separate multiple fonts for fallback
  sans: 'Helvetica Neue,Robot'
  # mark 'Helvetica Neue' as local font
  local: 'Helvetica Neue'
---
```

## Weights & Italic

By default, Slidev imports three weights `200`,`400`,`600` for each font. You can configure them by:

```yaml
---
fonts:
  sans: 'Robot'
  # default
  weights: '200,400,600'
  # import italic fonts, default `false`
  italic: false
---
```

This configuration applies to all web fonts. For more fine-grained controls of each font's weights, you will need to manually import them with [HTML](/custom/directory-structure.html#index-html) and CSS.

## 後援字體

大部分的情況下，您只需要指定「特殊字體」，Slidev 就會自動為您加上後援字體，例如：

```yaml
---
fonts:
  sans: 'Robot'
  serif: 'Robot Slab'
  mono: 'Fira Code'
---
```

的結果會是

```css
.font-sans {
  font-family: "Robot",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.font-serif {
  font-family: "Robot Slab",ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;
}
.font-mono {
  font-family: "Fira Code",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
```

如果您想要停用後援字體，請設定

```yaml
---
fonts:
  mono: 'Fira Code, monospace'
  fallback: false
---
```

## 提供者

- 選項：`google` | `none`
- 預設：`google`

目前只支援 Google Fonts，我們計畫在未來加入更多的提供者。指定為 `none` 會完全停用自動匯入功能，並將所有字體視為本機字體。

```yaml
---
fonts:
  provider: 'none'
---
```
