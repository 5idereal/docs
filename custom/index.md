# Customizations

Slidev is fully customizable, from styling to tooling configurations. It allows you to configure the tools underneath ([Vite](/custom/config-vite), [UnoCSS](/custom/config-unocss), [Monaco](/custom/config-monaco), etc.)

## Frontmatter Configures

You can configure Slidev in the frontmatter of your first slide, the following shows the default value for each option.

```yaml
---
# 主題 id 或套件名稱
# 了解詳情：https://sli.dev/themes/use.html
theme: 'default'
# 投影片標題，如果沒有指定，將從第一個標題自動推斷
title: 'Slidev'
# titleTemplate for the webpage, `%s` will be replaced by the page's title
titleTemplate: '%s - Slidev'
# 關於您投影片的資訊，可輸入 markdown 字串。
info: false
# 匯出 PDF 的作者欄位
author: Your Name Here
# 匯出 PDF 的關鍵字欄位，以逗號分隔。
keywords: keyword1,keyword2

# enable presenter mode, can be boolean, 'dev' or 'build' 啟用簡報者模式，可以是布林值、'dev' 或 'build'
presenter: true
# enabled pdf downloading in SPA build, can also be a custom url
download: false
# filename of the export file
exportFilename: 'slidev-exported'
# 匯出選項
# use export CLI options in camelCase format
# 了解詳情：https://sli.dev/guide/exporting.html
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
  withToc: false
# syntax highlighter, can be 'prism' or 'shiki'
highlighter: 'prism'
# 在程式碼區塊中顯示行號
lineNumbers: false
# enable monaco editor, can be boolean, 'dev' or 'build' 啟用 monaco 編輯器，可以是布林值、'dev' 或 'build'
monaco: 'dev'
# download remote assets in local using vite-plugin-remote-assets, can be boolean, 'dev' or 'build'
remoteAssets: false
# controls whether texts in slides are selectable
selectable: true
# enable slide recording, can be boolean, 'dev' or 'build' 啟用投影片錄製，可以是布林值、'dev' 或 'build'
record: 'dev'

# force color schema for the slides, can be 'auto', 'light', or 'dark'
colorSchema: 'auto'
# router mode for vue-router, can be "history" or "hash"
routerMode: 'history'
# 投影片的長寬比
aspectRatio: '16/9'
# 畫布的實際寬度，單位為 px
canvasWidth: 980
# used for theme customization, will inject root styles as `--slidev-theme-x` for attribute `x`
themeConfig:
  primary: '#5d8392'

# favicon, can be a local file path or URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# URL of PlantUML server used to render diagrams
plantUmlServer: 'https://www.plantuml.com/plantuml'
# 字體會從 Google Fonts 自動匯入
# 了解詳情：https://sli.dev/custom/fonts
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

# default frontmatter applies to all slides
defaults:
  layout: 'default'
  # ...

# 繪製選項
# 了解詳情：https://sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true

# HTML tag attributes
htmlAttrs:
  dir: 'ltr'
  lang: 'en'
---
```

Check out the [type definitions](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts) for more options.

## Per slide configuration

In addition, every slide accepts the following configuration in the Frontmatter block:

* `clicks` (`number`): Custom clicks count (learn more [here](/guide/animations.html#custom-clicks-count)).
* `disabled` (`boolean`): Completely disable the slide.
* `hide` (`boolean`): Hide sub-slides when using `src` (learn more [here](/guide/syntax.html#multiple-entries)).
* `hideInToc` (`boolean`): Hide the slide for the `<Toc>` components (learn more [here](/builtin/components.html#toc)).
* `layout` (`string`): Defines the layout component applied to the slide (learn more [here](/guide/syntax.html#front-matter-layouts) and [here](/builtin/layouts.html)).
* `level` (`number`): Override the title level for the `<Title>` and `<Toc>` components (only if `title` has also been declared, learn more [here](/builtin/components.html#titles)).
* `preload` (`boolean`, default `true`): 預載下一張投影片 (learn more [here](/guide/animations.html#motion)).
* `routeAlias` (`string`): create a route alias that can be used in the URL or with the `<Link>` component (learn more [here](/builtin/components.html#link)).
* `src` (`string`): Includes a markdown file (learn more [here](/guide/syntax.html#multiple-entries)).
* `title` (`string`): Override the title for the `<Title>` and `<Toc>` components (learn more [here](/builtin/components.html#titles)).
* `transition` (`string | TransitionProps`): Defines the transition between the slide and the next one (learn more [here](/guide/animations.html#slide-transitions)).

## Directory Structure

Slidev uses directory structure conventions to minimalize the configuration surface and make extensions in functionality flexible and intuitive.

Refer to the [Directory Structure](/custom/directory-structure) section.

## 設定工具

- [Highlighters](/custom/highlighters)
- [設定 Vue](/custom/config-vue)
- [設定 Vite](/custom/config-vite)
- [設定 UnoCSS](/custom/config-unocss)
- [設定 Windi CSS](/custom/config-windicss)
- [設定 Monaco](/custom/config-monaco)
- [設定 KaTeX](/custom/config-katex)
- [設定 Mermaid](/custom/config-mermaid)
