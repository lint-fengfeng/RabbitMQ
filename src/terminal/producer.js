var Channel = require("../MQ/queue").channel; // 频道

var XDF_QUEUE = require("../MQ/queue").XDF_QUEUE; // 队列管道

var sendMessage = require("../MQ/send"); // 发送方法

function product(msg) {
  Channel
  .then(function(channel) {
    /** 
   * 在有两名工人的情况下，当所有奇怪的消息都很重，甚至消息很轻时，
   * 一位工人将一直忙碌而另一位工人将几乎不做任何工作。
   * RabbitMQ对此一无所知，并且仍将平均分配消息。
   * 发生这种情况是因为RabbitMQ在消息进入队列时才调度消息。它
   * 不会查看使用者的未确认消息数。
   * 它只是盲目地将每第n条消息发送给第n个使用者。
   * 为了公平派遣 设置预取为1
  **/
  channel.prefetch(1)
  // 需要确保RabbitMQ永远不会丢失我们的队列  durable: true自动重启
  return channel.assertQueue(XDF_QUEUE, { durable: true })
    .then(function(ok) {
      msg = msg || {text: "初始化"}
      sendMessage(channel, XDF_QUEUE, msg)
    });
  })
  .catch(console.warn);
}
// run demo 需要注释
// product()
module.exports = product;