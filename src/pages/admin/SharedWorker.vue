<!--
 * @Author: HYI
 * @Date: 2023-07-12 10:46:20
 * @LastEditors: HYI110100 53818512+HYI110100@users.noreply.github.com
 * @LastEditTime: 2023-07-12 14:24:23
 * @Description: Shared Worker
-->
<script setup lang="ts">
const msg = ref('')
const route = useRoute()
const url = new URL('./shared.js', import.meta.url)
const b = new SharedWorker(url, { name: route.params.id as string })
function sendMsg() {
  b.port.postMessage(msg.value)
}
</script>

<template>
  <div class="p-3">
    <n-input v-model:value="msg" type="textarea" />
    <n-button @click="sendMsg">
      发送消息
    </n-button>
  </div>
</template>
