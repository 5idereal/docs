# 版面配置

## 內建的版面配置

> 主題可能會覆蓋版面配置的行為，參閱他們的說明文件是了解使用方式、參數和範例的好方法。

### `center`

在畫面正中央顯示內容。

### `cover`

用於顯示投影片的封面，可以包含投影片標題、說明等。

### `default`

最基本的版面，用於顯示任何類型的內容。

### `end`

簡報的最後一頁。

### `fact`

在畫面上顯示顯著事實或資料。

### `full`

使用所有畫面空間來顯示內容。

### `image-left`

在畫面左側顯示圖片，右側顯示內容。

#### 用法

```yaml
---
layout: image-left

# 圖片來源
image: ./path/to/the/image

# 內容的自訂 class 名稱
class: my-cool-content-on-the-right
---
```

### `image-right`

在畫面右側顯示圖片，左側顯示內容。

#### 用法

```yaml
---
layout: image-right

# 圖片來源
image: ./path/to/the/image

# 內容的自訂 class 名稱
class: my-cool-content-on-the-left
---
```

### `image`

顯示圖片作為頁面的主要內容。

#### 用法

```yaml
---
layout: image

# 圖片來源
image: ./path/to/the/image
---
```


### `iframe-left`

在畫面左側顯示網頁，右側顯示內容。

#### 用法

```yaml
---
layout: iframe-left

# 網頁來源
url: https://github.com/slidevjs/slidev

# 內容的自訂 class 名稱
class: my-cool-content-on-the-right
---
```

### `iframe-right`

在畫面右側顯示網頁，左側顯示內容。

#### 用法

```yaml
---
layout: iframe-right

# 網頁來源
url: https://github.com/slidevjs/slidev

# 內容的自訂 class 名稱
class: my-cool-content-on-the-left
---
```

### `iframe`

顯示網頁作為頁面的主要內容。

#### 用法

```yaml
---
layout: iframe

# 網頁來源
url: https://github.com/slidevjs/slidev
---
```


### `intro`

介紹簡報，通常包含簡報標題、簡短說明、作者等。

### `none`

無任何樣式的版面配置。

### `quote`

凸顯引文。

### `section`

用於標記簡報新章節的開頭。

### `statement`

將肯定/陳述句作為頁面的主要內容。

### `two-cols`

將頁面內容分為兩欄。

#### 用法

```md
---
layout: two-cols
---

# 左邊

這會顯示在左邊

::right::

# 右邊

這會顯示在右邊
```

### `two-cols-header`

分隔頁面內容的上下兩行，第二行分隔左右兩欄。

#### 用法

```md
---
layout: two-cols-header
---

這會橫跨兩欄

::left::

# 左邊

這會顯示在左邊

::right::

# 右邊

這會顯示在右邊
```

## 自訂版面配置

在專案根目錄下建立 `layouts/` 資料夾，然後將您自訂的 Vue 版面配置元件放進去。

在[自訂](/custom/directory-structure#layouts)章節中查看更多資訊。

## 由主題提供的版面配置

主題能夠提供版面配置或覆蓋現有的版面配置。請參閱其說明文件以瞭解它們所提供的版面配置。
