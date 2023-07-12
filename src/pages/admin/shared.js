const ports = []

self.onconnect = (e) => {
  const port = e.ports[0]
  ports.push(port)

  // 监听消息
  port.onmessage = (e) => {
    // 群发消息
    broadcast(e.data)
  }
}

// 群发消息
const broadcast = (data) => {
  ports.forEach((port) => {
    port.postMessage(data)
  })
}
