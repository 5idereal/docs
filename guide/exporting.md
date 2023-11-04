# 匯出

## 投影片

### PDF

> Exporting to PDF or PNG relies on [Playwright](https://playwright.dev) for rendering. You will therefore need to install [`playwright-chromium`](https://playwright.dev/docs/installation#download-single-browser-binary) to use this feature.
> If you are doing exporting in a CI environment, [the playwright CI guide](https://playwright.dev/docs/ci) can be helpful.

Install `playwright-chromium`

```bash
$ npm i -D playwright-chromium
```

Now export your slides to PDF using the following command

```bash
$ slidev export
```

After a few seconds, your slides will be ready at `./slides-export.pdf`.

### PNG 和 Markdown

When passing in the `--format png` option, Slidev will export PNG images for each slide instead of a PDF.

```bash
$ slidev export --format png
```

You can also compile a markdown file composed of compiled png using `--format md`.

```bash
$ slidev export --format md
```

### 深色模式

如果您想以深色主題匯出投影片，請使用 `--dark` 選項：

```bash
$ slidev export --dark
```

### Export Clicks Steps

> Available since v0.21

By default, Slidev exports one page per slide with clicks animations disabled. If you want export slides with multiple steps into multiple pages, pass the `--with-clicks` option.

```bash
$ slidev export --with-clicks
```

### 投影片範圍

You can also specify a range of slides to export with the `--range` option.

```bash
$ slidev export --range 1,4-5,6
```

### PDF 大綱

> Available since v0.36.10

You can generate the PDF outline by passing the `--with-toc` option.

```bash
$ slidev export --with-toc
```

### 輸出檔名

You can specify the output filename with the `--output` option.

```bash
$ slidev export --output my-pdf-export
```

Or in the frontmatter configuration:

```yaml
---
exportFilename: my-pdf-export
---
```

### 匯出指定範圍的投影片

預設情況下會匯出簡報中的所有投影片。如果您想要匯出指定的投影片或範圍，您可以設定 `--range` 選項，並指定您想匯出哪些投影片。

```bash
$ slidev export --range 1,6-8,10
```

此選項接受特定的投影片編號和範圍。

上面的範例會匯出第 1、6、7、8、10 張投影片。

### 多個項目

您也可以一次匯出多張投影片。

```bash
$ slidev export slides1.md slides1.md
```

或

```bash
$ slidev export *.md
```

在此情況下，每個輸入檔案都會產生自己的 PDF 檔。

## 簡報者筆記

> v0.36.8 後可用

Export only the presenter notes (the last comment block for each slide) into a text document in PDF.
僅將

```bash
$ slidev export-notes
```

This command also accept multiple entries like for the [export command](#multiple-entries)

## 單頁式應用程式 (SPA)

參閱[靜態架設](/guide/hosting)。

## 疑難排解

### 逾時

對於大型簡報，您可能需要使用 `--timeout` 來增加 playwright 的逾時時間

```bash
$ slidev export --timeout 60000
```

### 可執行檔路徑

您可以使用 `--executable-path` 來為 playwright 指定瀏覽器的可執行檔路徑

```bash
$ slidev export --executable-path [path_to_chromium]
```
