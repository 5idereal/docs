# 元件

## 內建元件

### `Arrow`

繪製一個箭頭。

#### 用法

~~~md
<Arrow x1="10" y1="20" x2="100" y2="200" />
~~~

或：

~~~md
<Arrow v-bind="{ x1:10, y1:10, x2:200, y2:200 }" />
~~~

參數：

* `x1` (`string | number`，必填)：x 軸起始位置
* `y1` (`string | number`，必填)：y 軸起始位置
* `x2` (`string | number`，必填)：x 軸結束位置
* `y2` (`string | number`，必填)：x 軸結束位置
* `width` (`string | number`，預設：`2`)：線寬
* `color` (`string`，預設：`'currentColor'`)：顏色

### `AutoFitText`

> 實驗性功能

字體大小會自動適應內容的方框。類似 PowerPoint 或 Keynote 的文字框。

#### 用法

~~~md
<AutoFitText :max="200" :min="100" modelValue="一些文字"/>
~~~

參數：

* `max` (`string | number`, 預設 `100`): 字體大小最大值
* `min` (`string | number`, 預設 `30`): 字體大小最小值
* `modelValue` (`string`, 預設 `''`): 文字內容

### `LightOrDark`

依照目前使用的是淺色或深色主題，顯示不同的內容。

#### 用法

與 `#dark` 和 `#light` slot 搭配使用：
~~~md
<LightOrDark>
  <template #dark>Dark mode is on</template>
  <template #light>Light mode is on</template>
</LightOrDark>
~~~

 `LightOrDark` 元件提供的 prop 需與 scoped slot prop 合併使用：
~~~md
<LightOrDark width="100" alt="some image">
  <template #dark="props">
    <img src="/dark.png" v-bind="props"/>
  </template>
  <template #light="props">
    <img src="/light.png" v-bind="props"/>
  </template>
</LightOrDark>
~~~

您可以在 slot 中提供 markdown，但需要在內容前後加上空行：
~~~md
<LightOrDark>
  <template #dark>

![dark](/dark.png)

  </template>
  <template #light>

![light](/light.png)

  </template>
</LightOrDark>
~~~

### `Link`

插入可以前往指定投影片的連結。

#### 用法

~~~md
<Link to="42">前往第 42 張投影片</Link>
<Link to="42" title="前往第 42 張投影片"/>
<Link to="solutions" title="前往解答"/>
~~~

參數：

* `to` (`string | number`)：要前往的投影片路徑 (投影片從 `1` 開始編號)
* `title` (`string`)：要顯示的標題

您可以在 `to` 使用字串，只要對應的路徑存在即可，例如：
~~~md
---
routeAlias: solutions
---
# 解答來囉！
~~~


### `RenderWhen`

僅在條件符合時渲染 slot (例如在簡報者檢視中)。

#### 用法

~~~md
<RenderWhen context="presenter">這只會在簡報者檢視中渲染。</RenderWhen>
~~~

條件類型：`'main' | 'slide' | 'overview' | 'presenter' | 'previewNext'`

參數：

* `context` (`Context | Context[]`)：您想要渲染 slot 的條件或條件陣列

### `SlideCurrentNo`

目前投影片的編號。

#### 用法

~~~md
<SlideCurrentNo />
~~~

### `SlidesTotal`

投影片總數。

#### 用法

~~~md
<SlidesTotal />
~~~

### `Titles`

從投影片中解析出的 HTML 插入主標題。

標題和標題層級會自動從每張投影片的首個標題元素中取得。

您可以使用前言語法來覆寫這個自動行為：

```yml
---
title: 超讚投影片標題
level: 2
---
```

#### 用法

`<Titles>` 元件是虛擬元件，您可以直接匯入：
```js
import Titles from '/@slidev/titles.md'
```

然後這樣使用：
~~~md
<Titles no="42" />
~~~

參數：

* `no` (`string | number`)：要顯示標題的投影片編號 (投影片從 `1` 開始編號)

### `Toc`

插入目錄。

如果您希望某張投影片不要出現在 `<Toc>` 元件中，可以在投影片的前言區塊中使用：
```yml
---
hideInToc: true
---
```

標題透過 [`<Titles>` 元件](#titles)顯示。

#### 用法

~~~md
<Toc />
~~~

參數：

* `columns` (`string | number`, 預設：`1`)：顯示的欄數
* `listClass` (`string | string[]`, 預設：`''`)：要套用到目錄清單的 class
* `maxDepth` (`string | number`, 預設：`Infinity`)：顯示標題的最大深度
* `minDepth` (`string | number`, 預設：`1`)：顯示標題的最小深度
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, 預設：`'all'`):
  * `'all'`：顯示所有項目
  * `'onlyCurrentTree'`：僅顯示目前樹狀結構中的項目 (使用中項目、父項目、子項目)
  * `'onlySiblings'`：僅顯示目前樹狀結構中的項目及同層項目

### `Transform`

對元素進行縮放或移動。

#### 用法

~~~md
<Transform :scale="0.5">
  <YourElements />
</Transform>
~~~

參數：

* `scale` (`number | string`, default `1`)：縮放比例
* `origin` (`string`, default `'top left'`)：縮放原點

### `Tweet`

內嵌推文。

#### 用法

~~~md
<Tweet id="20" />
~~~

參數：

* `id` (`number | string`，必填)：推文 id
* `scale` (`number | string`, default `1`)：縮放比例
* `conversation` (`string`, default `'none'`)：[推文內嵌參數](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)

### `VAfter`, `VClick` and `VClicks`

參見 https://sli.dev/guide/animations.html
### `Youtube`

內嵌 Youtube 影片。

#### 用法

~~~md
<Youtube id="luoMHjh-XcQ" />
~~~

參數：

* `id` (`string`，必填)：影片 id
* `width` (`number`)：影片寬度
* `height` (`number`)：影片高度

## 自訂元件

在專案根目錄下建立 `components/` 資料夾，然後將您自訂的 Vue 元件放進去，就可以在 Markdown 檔案中使用相同名稱的元件了！

在[自訂](/custom/directory-structure#components)章節中查看更多資訊。

## 由主題提供的元件

主題也能提供元件。請參閱其說明文件以瞭解它們所提供的元件。

在[目錄結構](/custom/directory-structure)章節中查看更多資訊。
