function sendMessage(channel, queue, msg) {
  const isObject = typeof msg === "object" && msg !== null
  msg = isObject ? JSON.stringify(msg) : msg
  return channel.sendToQueue(queue, Buffer.from(msg),
    // mq挂了保留消息
    { persistent: true }
  );
}

module.exports = sendMessage