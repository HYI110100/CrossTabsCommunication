<!--
 * @Author: HYI
 * @Date: 2023-07-12 09:20:28
 * @LastEditors: HYI110100 53818512+HYI110100@users.noreply.github.com
 * @LastEditTime: 2023-07-12 15:41:18
 * @Description: 跨tab-主
-->
<script setup lang="ts">
const BroadCasChannelMap = ref<Record<string, BroadcastChannel>>({})
function newBroadCast() {
  const key = randomString()
  BroadCasChannelMap.value[key] = new BroadcastChannel(key)
  BroadCasChannelMap.value[key].onmessage = (event) => {
    myAlert({
      type: 'BroadCas Channel',
      id: key,
      msg: event.data,
    })
  }
}

const LocalStorageArr = ref<string[]>([])
function newLocalStorage() {
  const key = randomString()
  LocalStorageArr.value.push(key)
}
window.addEventListener('storage', (e) => {
  if (LocalStorageArr.value.includes(e.key)) {
    const data = JSON.parse(e.newValue)
    myAlert({
      type: 'LocalStorage',
      id: e.key,
      msg: data.data,
    })
  }
})

const newSharedWorkerMap = ref<Record<string, SharedWorker>>({})
function newSharedWorker() {
  const key = randomString()
  const url = new URL('./shared.js', import.meta.url)
  newSharedWorkerMap.value[key] = new SharedWorker(url, { name: key })
  newSharedWorkerMap.value[key].port.onmessage = (event) => {
    myAlert({
      type: 'SharedWorker',
      id: key,
      msg: event.data,
    })
  }
}

// ////////////////////////////////////
function openUrl(url: string) {
  window.open(url, '_blank')
}
function myAlert(data: {
  msg: string
  type: string
  id: string
}) {
  alert(`对话类型: ${data.type}\n对话ID: ${data.id}\n对话数据: ${data.msg}`)
}
function randomString(stringLength = 32) {
  const t = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  const a = t.length
  let n = ''
  for (let i = 0; i < stringLength; i++) n += t.charAt(Math.floor(Math.random() * a))
  return n
}
</script>

<template>
  <div class="p-3">
    <n-h1>跨tab</n-h1>

    <n-h2 class="flex items-center gap-2">
      <span>BroadCast Channel</span>
      <n-button type="primary" size="tiny" @click="newBroadCast">
        创建对话任务
      </n-button>
    </n-h2>
    <p>创建一个用于广播的通信频道。当所有页面都监听同一频道的消息时，其中某一个页面通过它发送的消息就会被其他所有页面收到</p>
    <p>用起来很简单,就是不能准确知道是按个tab页进行的广播。</p>
    <n-button type="primary" text class="block text-left" @click="openUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/BroadcastChannel')">
      https://developer.mozilla.org/zh-CN/docs/Web/API/BroadcastChannel
    </n-button>

    <div v-for="(_, key) in BroadCasChannelMap" :key="key" class="flex gap-2">
      <div>ID: {{ key }}</div>
      <router-link target="_blank" :to="{ path: `/broadCast/${key}` }">
        打开
      </router-link>
    </div>

    <n-h2 class="flex items-center gap-2">
      <span>LocalStorage</span>
      <n-button type="primary" size="tiny" @click="newLocalStorage">
        创建对话任务
      </n-button>
    </n-h2>
    <p>当 LocalStorage 变化时，会触发storage事件。可以侦听这个事件，但是storage事件只有在值真正改变时才会触发，每次修改带上时间戳就可以解决</p>
    <p>上手即用，但保存时需要处理一下。</p>
    <div v-for="(key) in LocalStorageArr" :key="key" class="flex gap-2">
      <div>ID: {{ key }}</div>
      <router-link target="_blank" :to="{ path: `/localStorage/${key}` }">
        打开
      </router-link>
    </div>

    <n-h2 class="flex items-center gap-2">
      <span>Shared Worker</span>
      <n-button type="primary" size="tiny" @click="newSharedWorker">
        创建对话任务
      </n-button>
    </n-h2>
    <p>不能上手即用，但如果处理好也挺好用的，因为new SharedWorker时需要定义自身的js，扩展性高。还有Shared Worker 是 Worker 家族的另一个成员，所有它有独立线程可以不影响主线程的特点</p>
    <p>调试：chrome://inspect/#workers</p>
    <n-button type="primary" text class="block text-left" @click="openUrl('https://cn.vitejs.dev/guide/features.html#web-workers')">
      Vite使用WebWorker
    </n-button>
    <n-button type="primary" text class="block text-left" @click="openUrl('https://juejin.cn/post/7154032607045353502#heading-0')">
      SharedWorker实现浏览器多页签通信使用总结
    </n-button>
    <n-button type="primary" text class="block text-left" @click="openUrl('https://juejin.cn/post/7173701460947894308')">
      SharedWorker 让你多个页面相互通信
    </n-button>
    <div v-for="(_, key) in newSharedWorkerMap" :key="key" class="flex gap-2">
      <div>ID: {{ key }}</div>
      <router-link target="_blank" :to="{ path: `/sharedWorker/${key}` }">
        打开
      </router-link>
    </div>
  </div>
</template>
