var MQ = require("./mq");

var channel = MQ.then(function(connect) {
  return connect.createChannel()
})

var XDF_QUEUE = "XDF_QUEUE"

module.exports = { 
  channel: channel,
  XDF_QUEUE: XDF_QUEUE
}

