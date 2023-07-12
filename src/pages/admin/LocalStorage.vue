<!--
 * @Author: HYI
 * @Date: 2023-07-12 10:24:11
 * @LastEditors: HYI110100 53818512+HYI110100@users.noreply.github.com
 * @LastEditTime: 2023-07-12 10:34:16
 * @Description: LocalStorageArr
-->
<script setup lang="ts">
const msg = ref('')
const route = useRoute()

function sendMsg() {
  window.localStorage.setItem(`${route.params.id}`, JSON.stringify({
    data: msg.value,
    msg: '成功',
    time: new Date().getTime(),
  }))
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
