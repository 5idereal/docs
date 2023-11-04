# 為什麼選 Slidev

已經有很多功能豐富、通用的所見即所得投影片製作工具，例如 [Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) 和 [Apple Keynote](https://www.apple.com/keynote/)。它們可以很好地製作漂亮的投影片，並具有動畫、圖表和許多其他功能，同時非常直觀和易於學習。那麼為什麼還要開發 Slidev 呢？

Slidev 致力於提供開發者更大的靈活性和互動性，讓他們能夠使用他們已經熟悉的工具和技術來製作更有趣、更具表現力和吸引力的簡報。

使用所見即所得編輯器時，很容易因為樣式選項而分心。Slidev 通過分離內容和視覺效果來解決這個問題。這樣您就可以一次專注於一件事情，同時還可以重複使用社群提供的主題。Slidev 不是要完全取代其他投影片製作工具。相反，它專注於迎合開發者社群的需求。

## Slidev

![](/screenshots/cover.png)

以下列出幾個 Slidev 最酷炫的功能：

## 基於 Markdown

Slidev uses an extended Markdown format to store and organize your slides in a single plain text file. This lets you focus on making the content. And since the content and styles are separated, this also made it possible to switch between different themes effortlessly.

Learn more about [Slidev's Markdown Syntax](/guide/syntax).

## 主題

Slidev 的主題可以透過 npm 套件分享和安裝。只需一行設定即可套用。

逛逛[主題庫](/themes/gallery)或了解如何[開發主題](/themes/write-a-theme)。

## 開發者友善

Slidev provides first-class support for code snippets for developers. It supports both [Prism](https://prismjs.com/) and [Shiki](https://github.com/shikijs/shiki) to get pixel perfect syntax highlighting, while still being able to modify the code at any time. With [Monaco editor](https://microsoft.github.io/monaco-editor/) built-in, it also empowers you to do live coding / demonstration in your presentation with autocompletion, type hovering, and even TypeScript type check support.

Learn more about [highlighters](/custom/highlighters) and [Monaco configuration](/custom/config-monaco).

## 飛快

Slidev 由 [Vite](https://vitejs.dev/)、[Vue 3](https://v3.vuejs.org/) 和 [UnoCSS](https://unocss.dev/) 驅動，為您提供最美好的編寫體驗。您所做的每一個更改都會**立即**反映到您的投影片中。

Find more about [our tech stack](/guide/#tech-stack).

## Interactive & Expressive

您可以撰寫自訂的 Vue 元件，並在您的 Markdown 檔案中直接使用。您也可以在簡報中與它們互動，以更有趣和直觀的方式表達您的想法。

## 錄製支援

Slidev 內建錄製和鏡頭檢視功能。您可以在簡報中分享您的鏡頭畫面，或是錄製並分別儲存您的螢幕和鏡頭畫面。一次完成，無需額外工具。

Learn more about [recording here](/guide/recording).

## Portable

只需一行命令即可將您的投影片匯出成 PDF、PNG，甚至是可託管的單頁應用程式 (SPA)，並在任何地方分享。

Read more about that in the [exporting docs](/guide/exporting).

## Hackable

Slidev 由網頁技術驅動，任何能在網頁應用程式中完成的事情都可以在 Slidev 中完成。例如 WebGL、API 請求、iframe，甚至是即時共享。想像力就是你的超能力！

## 親自試試

說這麼多，不如您親自上手試試。只需一行命令：

```bash
$ npm init slidev
```

或者來個預覽：

<div class="aspect-9/16 relative">
<iframe class="rounded w-full shadow-md border-none" src="https://www.youtube.com/embed/eW7v-2ZKZOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
