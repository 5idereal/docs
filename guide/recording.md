# 錄製

Slidv 內建了錄製和鏡頭檢視功能。您無須使用其他應用程式即可輕鬆地錄製您的簡報。

## 鏡頭檢視

點擊導覽列中的 <carbon-user-avatar class="inline-icon-btn"/> 按鈕，即可在投影片中顯示您的鏡頭。您可以拖曳來移動它，並使用右下角的控點來調整大小。大小和位置會儲存在 `localStorage` 中，因此在多次重新整理後仍會保持一致，不用擔心。

<Tweet id="1395006771027120133" />

## 錄製

點擊導覽列中的 <carbon-video class="inline-icon-btn"/> 按鈕，將會顯示對話框。在這裡，您可以選擇錄製內嵌在投影片中的鏡頭，或將其分成兩個影片檔。

此功能由 [RecordRTC](https://github.com/muaz-khan/RecordRTC) 驅動，並使用了 [WebRTC API](https://webrtc.org/)。

![](/screenshots/recording.png)
