# Getting Started

## 概覽

Slidev <sup>(slide + dev, **/slaɪdɪv/**)</sup> is a web-based slides maker and presenter. It's designed for developers to focus on writing content in Markdown while also having the power of HTML and Vue components to deliver pixel-perfect layouts and designs with embedded interactive demos in your presentations.

Slidev <sup>(slide + dev, **/slaɪdɪv/**)</sup> 是一個基於網頁的投影片製作與簡報工具。它專為開發者設計，讓你可以專注於使用 Markdown 撰寫內容，同時也能夠使用 HTML 與 Vue 元件來提供完美的佈局與設計，並在簡報中嵌入互動式示範。

It uses a feature-rich markdown file to generate beautiful slides with an instant reloading experience, along with many built-in integrations such as live coding, PDF exporting, presentation recording, and so on. Since it's powered by the web, you can do anything with Slidev - the possibilities are endless.

You can learn more about the rationale behind the project in the [Why Slidev](/guide/why) section.

### 功能

- 📝 [**基於 Markdown**](/guide/syntax.html) - use your favorite editors and workflow
- 🧑‍💻 [**開發者友善**](/guide/syntax.html#code-blocks) - built-in syntax highlighting, live coding, etc.
- 🎨 [**Themable**](/themes/gallery.html) - theme can be shared and used with npm packages
- 🌈 [**Stylish**](/guide/syntax.html#embedded-styles) - on-demand utilities via [UnoCSS](https://github.com/unocss/unocss) or [Windi CSS](https://windicss.org/).
- 🤹 [**可互動**](/custom/directory-structure.html#components) - embedding Vue components seamlessly
- 🎙 [**簡報者模式**](/guide/presenter-mode.html) - use another window, or even your phone to control your slides
- 🎨 [**繪製**](/guide/drawing.html) - draw and annotate on your slides
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - built-in LaTeX math equations support
- 📰 [**流程圖**](/guide/syntax.html#diagrams) - creates diagrams with textual descriptions
- 🌟 [**圖示**](/guide/syntax.html#icons) - Access to icons from any iconset directly
- 💻 [**編輯器**](/guide/editors.html) - integrated editor, or [extension for VS Code](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Recording**](/guide/recording.html) - built-in recording and camera view
- 📤 [**可攜式**](/guide/exporting.html) - export into PDF, PNGs, or even a hostable SPA
- ⚡️ [**Fast**](https://vitejs.dev) - instant reloading powered by [Vite](https://vitejs.dev)
- 🛠 [**Hackable**](/custom/config-vite.html) - using Vite plugins, Vue components, or any npm packages

### 技術堆疊

Slidev is made possible by combining these tools and technologies.

- [Vite](https://vitejs.dev) - An extremely fast frontend tooling
- [Vue 3](https://v3.vuejs.org/) powered [Markdown](https://daringfireball.net/projects/markdown/syntax) - Focus on the content while having the power of HTML and Vue components whenever needed
- [Windi CSS](https://github.com/windicss/windicss) or [UnoCSS](https://github.com/unocss/unocss) - On-demand utility-first CSS framework, style your slides at ease
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - First-class code snippets support with live coding capability
- [RecordRTC](https://recordrtc.org) - Built-in recording and camera view
- [VueUse](https://vueuse.org) family -  [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), etc.
- [Iconify](https://iconify.design/) - Iconsets collection.
- [Drauu](https://github.com/antfu/drauu) - Drawing and annotations support
- [KaTeX](https://katex.org/) - LaTeX math rendering.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Textual Diagrams.

### Scaffolding Your First Presentation

<br>

#### Try it Online

[sli.dev/new](https://sli.dev/new)

[![](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://sli.dev/new)

#### Create Locally

With NPM:

```bash
$ npm init slidev
```

With Yarn:

```bash
$ yarn create slidev
```

With pnpm:

```bash
$ pnpm create slidev
```

Follow the prompts and start making your slides now! For more details about the markdown syntax, read through the [syntax guide](/guide/syntax).

### Command Line Interface

In a project where Slidev is installed, you can use the `slidev` binary in your npm scripts.

```json
{
  "scripts": {
    "dev": "slidev", // start dev server
    "build": "slidev build", // build for production SPA
    "export": "slidev export" // export slides to pdf
  }
}
```

Otherwise, you can use it with [`npx`](https://www.npmjs.com/package/npx)

```bash
$ npx slidev
```

Run `slidev --help` for more options available.

### Markdown Syntax

Slidev reads your `slides.md` file under your project root and converts them into slides. Whenever you made changes to it, the content of the slides will be updated immediately. For example:

~~~md
# Slidev

Hello World

---

# Page 2

Directly use code blocks for highlighting

//```ts
console.log('Hello, World!')
//```

---

# Page 3
~~~

Read more about the Slidev Markdown syntax in the [syntax guide](/guide/syntax).
