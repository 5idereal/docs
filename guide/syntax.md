# Markdown 語法

Slides are written within **a single markdown file** (by default `./slides.md`).

You can use [the Markdown features](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) as you normally would, with the additional support of inlined HTML and Vue Components. Styling using [UnoCSS](/custom/config-unocss) is also supported. Use `---` padded with a new line to separate your slides.

~~~md
# Slidev

Hello, World!

---

# Page 2

Directly use code blocks for highlighting

//```ts
console.log('Hello, World!')
//```

---

# Page 3

You can directly use Windi CSS and Vue components to style and enrich your slides.

<div class="p-3">
  <Tweet id="20" />
</div>
~~~

## Front Matter & Layouts

Specify layouts and other metadata for each slide by converting the separators into [front matter blocks](https://jekyllrb.com/docs/front-matter/). Each frontmatter starts with a triple-dash and ends with another. Texts between them are data objects in [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/) format. For example:

~~~md
---
layout: cover
---

# Slidev

這是封面頁。

---
layout: center
background: './images/background-1.png'
class: 'text-white'
---​

# 第 2 頁

This is a page with the layout `center` and a background image.

---

# 第 3 頁

This is a default page without any additional metadata.
~~~

Refer to [customization](/custom/) for more details.

## 程式碼區塊

One big reason I am building Slidev is needing to make my code look just right in the slides. So just as you expected, you can use Markdown flavored code block to highlight your code.

~~~ts
//```ts
console.log('Hello, World!')
//```
~~~

We support [Prism](https://prismjs.com) and [Shiki](https://github.com/shikijs/shiki) as syntax highlighters. Refer to [the highlighters section](/custom/highlighters) for more details.

### 指定行突顯

To highlight specific lines, simply add line numbers within bracket `{}`. Line numbers start counting from 1 by default.

~~~ts
//```ts {2,3}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

You can enable line number to all slides by setting `lineNumbers: true` on the config or enable each code block individually by setting `lines:true`. In case you want to disable the numbering for an specific block when `lineNumbers: true` you can set `lines:false` for that block:

~~~ts
//```ts {2,3} {lines:true}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

You can also set the starting line for each code block and highlight the lines accordingly, defaults to 1:

~~~ts
//```ts {6,7} {lines:true, startLine:5}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

To change the highlight in multiple steps, you can use `|` to separate them. For example

~~~ts
//```ts {2-3|5|all}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

This will first highlight `a: Ref<number> | number` and `b: Ref<number> | number`, and then `return computed(() => unref(a) + unref(b))` after one click, and lastly, the whole block. Learn more in the [clicks animations guide](/guide/animations).

To skip highlighting any lines, you can set the line number to `0`. For example

~~~ts {0}
//```ts {0}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

If the code doesn't fit into one slide, you can pass an extra maxHeight option which will set fixed height
and enable scrolling

~~~ts {2|3|7|12}
//```ts {2|3|7|12} {maxHeight:'100px'}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
/// ...as many lines as you want
const c = add(1, 2)
//```
~~~

### Monaco 編輯器

Whenever you want to do some modification in the presentation, simply add `{monaco}` after the language id — it turns the block into a fully-featured Monaco editor!

~~~ts
//```ts {monaco}
console.log('HelloWorld')
//```
~~~

Learn more about [configuring Monaco](/custom/config-monaco).

### Monaco diff

Monaco can also generate a diff between two code blocks. Use `{monaco-diff}` to turn the block into a [diff Monaco editor](https://microsoft.github.io/monaco-editor/playground.html?source=v0.36.1#example-creating-the-diffeditor-multi-line-example) and use `~~~` to separate both original and modified version of the code!

```md
//```ts {monaco-diff}
This line is removed on the right.
just some text
abcd
efgh
Some more text
~~~
just some text
abcz
zzzzefgh
Some more text.
This line is removed on the left.
//```
```

## 內嵌樣式

您可以在 Markdown 中直接使用 `<style>` 標籤來覆寫**目前投影片**的樣式。

```md
# 這是紅色的

<style>
h1 {
  color: red
}
</style>

---

# 下張投影片不受影響
```

`<style>` tag in Markdown is always [scoped](https://vuejs.org/api/sfc-css-features.html#scoped-css). As an outstanding result, a selector with the child combinator (`.a > .b`) is unusable as such; see the previous link. To have global style overrides, check out the [customization section](/custom/directory-structure#style).

Powered by [UnoCSS](/custom/config-unocss), you can directly use nested css and [directives](https://windicss.org/features/directives.html) (e.g. `@apply`)

由 [UnoCSS](/custom/config-unocss) 驅動，您可以直接使用巢狀 CSS 和 [指令](https://windicss.org/features/directives.html) (例如 `@apply`)

```md

```md
# Slidev

> Hello `world`

<style>
blockquote {
  code {
    @apply text-teal-500 dark:text-teal-400;
  }
}
</style>
```

## Static Assets

Just like you would do in markdown, you can use images pointing to a remote or local url.

For remote assets, the built-in [`vite-plugin-remote-assets`](https://github.com/antfu/vite-plugin-remote-assets) will cache them into the disk at the first run so you can have instant loading even for large images later on.

```md
![Remote Image](https://sli.dev/favicon.png)
```

For local assets, put them into the [`public` folder](/custom/directory-structure.html#public) and reference them with **leading slash**.

```md
![Local Image](/pic.png)
```

For you want to apply custom sizes or styles, you can convert them to the `<img>` tag

```html
<img src="/pic.png" class="m-40 h-40 rounded shadow" />
```

## 筆記

You can also take notes for each slide. They will show up in [Presenter Mode](/guide/presenter-mode) for you to reference during presentations.

In Markdown, the last comment block in each slide will be treated as a note.

~~~md
---
layout: cover
---

# 第 1 頁

這是封面頁。

<!-- 這是筆記 -->

---

# 第 2 頁

<!-- This is NOT a note because it precedes the content of the slide -->

第二頁

<!--
這是另一則筆記
-->
~~~

## 圖示

Slidev allows you to have the accessing to almost all the popular open-source iconsets **directly** in your markdown. Powered by [`unplugin-icons`](https://github.com/antfu/unplugin-icons) and [Iconify](https://iconify.design/).

The naming follows [Iconify](https://iconify.design/)'s conversion `{collection-name}-{icon-name}`. For example:

- `<mdi-account-circle />` - <mdi-account-circle /> from [Material Design Icons](https://github.com/Templarian/MaterialDesign)
- `<carbon-badge />` - <carbon-badge /> from [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons)
- `<uim-rocket />` - <uim-rocket /> from [Unicons Monochrome](https://github.com/Iconscout/unicons)
- `<twemoji-cat-with-tears-of-joy />` - <twemoji-cat-with-tears-of-joy /> from [Twemoji](https://github.com/twitter/twemoji)
- `<logos-vue />` - <logos-vue /> from [SVG Logos](https://github.com/gilbarbara/logos)
- And much more...

Browse and search for all the icons available with [Icônes](https://icones.js.org/).

### Styling Icons

You can style the icons just like other HTML elements. For example:

```html
<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping" />
```

<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping ml-2" />

## Slots

> v0.18 後可用

Some layouts can provide multiple contributing points using [Vue's named slots](https://v3.vuejs.org/guide/component-slots.html).

For example, in [`two-cols` layout](https://github.com/slidevjs/slidev/blob/main/packages/client/layouts/two-cols.vue), you can have two columns left (`default` slot) and right (`right` slot) side by side.

```md
---
layout: two-cols
---

<template v-slot:default>

# 左側

這會在左側顯示

</template>
<template v-slot:right>

# 右側

這會在右側顯示

</template>
```

<div class="grid grid-cols-2 rounded border border-gray-400 border-opacity-50 px-10 pb-4">
<div>
<h3>左側</h3>
<p>這會在左側顯示</p>
</div>
<div>
<h3>右側</h3>
<p>這會在右側顯示</p>
</div>
</div>

We also provide a shorthand syntax sugar `::name::` for slot name. The following example works exactly the same as the previous one.

```md
---
layout: two-cols
---

# 左側

這會在左側顯示

::right::

# 右側

這會在右側顯示
```

You can also explicitly specify the default slot and provide in the custom order

```md
---
layout: two-cols
---

::right::

# 右側

這會在右側顯示

::default::

# 左側

這會在左側顯示
```

## 設定

您所需的所有設定都可以在 Markdown 檔案中定義。例如：

```md
---
theme: seriph
layout: cover
background: 'https://source.unsplash.com/1600x900/?nature,water'
---

# Slidev

這是封面頁。
```

了解[前言設定](/custom/#frontmatter-configures)。

## LaTeX

Slidev 原生支援 LaTeX，由 [KaTeX](https://katex.org/) 驅動。

<Tweet id="1392246507793915904" />

### 行內

用 `$` 把您的 LaTeX 包起來以在行內渲染。

```md
$\sqrt{3x-1}+(1+x)^2$
```

### 區塊

使用 `$$` 來渲染區塊。此模式會使用較大的符號並將結果置中。

```md
$$
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
$$
```

了解詳情：[展示](https://sli.dev/demo/starter/8) | [KaTeX](https://katex.org/) | [`markdown-it-katex`](https://github.com/waylonflinn/markdown-it-katex)

### LaTex line highlighting

> Available since v0.43.1

To highlight specific lines, simply add line numbers within bracket `{}`. Line numbers start counting from 1 by default.

```md
$$ {1|3|all}
\begin{array}{c}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} & = 0
\end{array}
$$
```

## 圖表

您也可以在您的 Markdown 中使用文字描述來建立圖表，由 [Mermaid](https://mermaid-js.github.io/mermaid) 驅動。

標記 `mermaid` 的程式碼區塊會被轉換成圖表，例如：

~~~md
//```mermaid
sequenceDiagram
  Alice->John: 哈囉 John，你好嗎？
  Note over Alice,John: 常見互動
//```
~~~

您還可以用選項 Object 來指定縮放和主題。語法與 JavaScript 的 Object 相同，字串需加上引號 (`'`)，並用逗號 (`,`) 來分隔鍵。

~~~md
//```mermaid {theme: 'neutral', scale: 0.8}
graph TD
B[Text] --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
//```
~~~

了解詳情：[展示](https://sli.dev/demo/starter/9) | [Mermaid](https://mermaid-js.github.io/mermaid)

## 多項目

> v0.15 後可用

您可以將 `slides.md` 分成多個檔案，並依您的風格整理。

`slides.md` :

```md
# 第 1 頁

這是普通頁面

---
src: ./subpage2.md
---

<!-- 此頁面會從 './subpage2.md' 載入 -->
行內內容會被忽略
```

`subpage2.md` :

```md
# 第 2 頁

這一頁來自其他檔案
```

### 前言合併

您可以為主進入點和外部的 markdown 檔案提供前言。如果它們有相同的鍵，則**主進入點的前言優先**。例如

`slides.md` :

```md
---
src: ./cover.md
background: https://sli.dev/bar.png
class: text-center
---
```

`cover.md` :

```md
---
layout: cover
background: https://sli.dev/foo.png
---

# 封面

封面頁
```

會等於以下頁面：

```md
---
layout: cover
background: https://sli.dev/bar.png
class: text-center
---

# 封面

封面頁
```

### 頁面重複使用

有了多項目支援，重複使用頁面簡直易如反掌。例如：

```yaml
---
src: ./cover.md
---

---
src: ./intro.md
---

---
src: ./content.md
---

---
# 重複使用
src: ./content.md
---
```

## MDC 語法

> v0.43.0 後可用

Slidev 支援 [MDC (Markdown Components) Syntax](https://content.nuxtjs.org/guide/writing/mdc) (實驗性)，由 [`markdown-it-mdc`](https://github.com/antfu/markdown-it-mdc) 驅動。

您可以在您的 Markdown 檔案的前言區塊中加上 `mdc: true` 來啟用。

```md
---
mdc: true
---

這段字是[紅色的]{style="color:red"} :inline-component{prop="value"}

![](/image.png){width=500px lazy}

::block-component{prop="value"}
The **default** slot
::
```

了解關於[語法](https://content.nuxtjs.org/guide/writing/mdc)的更多細節。
