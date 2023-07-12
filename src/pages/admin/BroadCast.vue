<!--
 * @Author: HYI
 * @Date: 2023-07-12 09:29:37
 * @LastEditors: HYI110100 53818512+HYI110100@users.noreply.github.com
 * @LastEditTime: 2023-07-12 15:27:45
 * @Description: BroadCast
-->
<script setup lang="ts">
const msg = ref('')
const route = useRoute()
const b = new BroadcastChannel(`${route.params.id}`)
function sendMsg() {
  b.postMessage(msg.value)
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
