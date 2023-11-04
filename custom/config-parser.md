# 設定並擴充分析器

Slidv 會分三步來分析您的簡報檔案（例如 `slides.md`）：

1. A "preparsing" step is carried out: the file is split into slides using the `---` separator, and considering the possible frontmatter blocks.
2. 每張投影片會使用外部程式庫來分析。
3. Slidev resolves the special frontmatter property `src: ....`, which allows to include other md files.

## Markdown 分析器

Configuring the markdown parser used in step 2 can be done by [configuring Vite internal plugins](/custom/config-vite#configure-internal-plugins).

## 預分析器擴充功能

> v0.37.0 後可用

:::warning
Important: when modifying the preparser configuration, you need to stop and start slidev again (restart might not be sufficient).
重要：
:::

預分析器 (上方的第 1 步) 的擴充性極高，您可以為您的 Markdown 檔案實作自訂語法。擴充預分析器被視為**進階功能**，且可能因為語法的隱含變更而導致[編輯器整合](/guide/editors)出現問題。

若要自訂，請建立 `./setup/preparser.ts` 檔案，並貼上下列程式碼：

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(({filepath, headmatter}) => {
  return [
    {
      transformRawLines(lines) {
        for (const i in lines) {
          if (lines[i] === '@@@')
            lines[i] = 'HELLO'
        }
      },
    }
  ]
})
```

This example systematically replaces any `@@@` line by a line with `hello`. It illustrates the structure of a preparser configuration file and some of the main concepts the preparser involves:

此範例會將任何 `@@@` 行替換為 `hello`。它說明了預分析器設定檔的結構以及預分析器涉及的一些主要概念：

- `definePreparserSetup` must be called with a function as parameter.
- The function receives the file path (of the root presentation file) and headmatter (from the md file). It could use this information (e.g., enable extensions based on the presentation file).
- The function must return a list of preparser extensions.
- An extension can contain:
  - a `transformRawLines(lines)` function that runs just after parsing the headmatter of the md file and receives a list of all lines (from the md file). The function can mutate the list arbitrarily.
  - a `transformSlide(content, frontmatter)` function that is called for each slide, just after splitting the file, and receives the slide content as a string and the frontmatter of the slide as an object. The function can mutate the frontmatter and must return the content string (possibly modified, possibly `undefined` if no modifications have been done).
  - a `name`

## Example Preparser Extensions

### 用例 1: compact syntax top-level presentation

Imagine a situation where (part of) your presentation is mainly showing cover images and including other md files. You might want a compact notation where for instance (part of) `slides.md` is as follows:

```md

@cover: /nice.jpg
# 歡迎
@src: page1.md
@src: page2.md
@cover: /break.jpg
@src: pages3-4.md
@cover: https://source.unsplash.com/collection/94734566/1920x1080
# 有問題嗎？
下次見

```

To allow these `@src:` and `@cover:` syntaxes, create a `./setup/preparser.ts` file with the following content:


```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformRawLines(lines) {
        let i = 0
        while (i < lines.length) {
          const l = lines[i]
          if (l.match(/^@cover:/i)) {
            lines.splice(i, 1,
              '---',
              'layout: cover',
              `background: ${l.replace(/^@cover: */i, '')}`,
              '---',
              '')
            continue
          }
          if (l.match(/^@src:/i)) {
            lines.splice(i, 1,
              '---',
              `src: ${l.replace(/^@src: */i, '')}`,
              '---',
              '')
            continue
          }
          i++
        }
      }
    },
  ]
})
```

And that's it.


### 用例 2: using custom frontmatter to wrap slides

Imagine a case where you often want to scale some of your slides but still want to use a variety of existing layouts so create a new layout would not be suited.
For instance, you might want to write your `slides.md` as follows:

```md



---
layout: quote
_scale: 0.75
---

# 歡迎

> 很棒！

---
_scale: 4
---
# 休息

---

# Ok

---
layout: center
_scale: 2.5
---
# 有問題嗎？
下次見

```

Here we used an underscore in `_scale` to avoid possible conflicts with existing frontmatter properties (indeed, the case of `scale`, without underscore would cause potential problems).


To handle this `_scale: ...` syntax in the frontmatter, create a `./setup/preparser.ts` file with the following content:


```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformSlide(content, frontmatter) {
        if ('_scale' in frontmatter) {
          return [
            `<Transform :scale=${frontmatter['_scale']}>`,
            '',
            content,
            '',
            '</Transform>'
          ].join('\n')
        }
      },
    },
  ]
})
```

就醬。
