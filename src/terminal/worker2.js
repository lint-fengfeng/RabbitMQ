var Channel = require("../MQ/queue").channel; // 频道

var XDF_QUEUE = require("../MQ/queue").XDF_QUEUE; // 队列管道

var receiveMessage = require("../MQ/receive"); // 接收方法

Channel
  .then(function(channel) {
    return channel.assertQueue(XDF_QUEUE, {
      durable: true
    })
    .then(function(ok) {
      console.log(ok, 222222222222)
      receiveMessage(channel, XDF_QUEUE, ok, 2)
    })
  })
  .catch(console.warn)