<script setup lang="ts">
defineProps<{ type: 'node' | 'client' }>()
</script>

<template>
  <details class="px-4 py-3 mt-4 rounded bg-gray-400 bg-opacity-10">
    <summary class="outline-none">
      環境：
      <span class="capitalize" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
    </summary>

    <div class="mt-2 opacity-75">
      <span v-if="type === 'node'">
        此設定函數僅能在 Node.js 環境執行，你可以使用 Node.js 的 API。
      </span>
      <span v-else>
        此設定函數僅能在客戶端執行，匯入套件前請確認瀏覽器相容性。
      </span>
    </div>
  </details>
</template>
