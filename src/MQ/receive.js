function receiveMessage(channel, queue, ok, flag) {
  return channel.consume(queue, function(msg) {
    if (msg !== null) {
      // todo
      let len = msg.content.toString().length
      console.log("Receive message", msg.content.toString(), len);
      setTimeout(function() {
        channel.ack(msg)
        // todo(flag, msg)
      }, 5000)
    }
  })
}

// const todo = (flag) => {
//   const content = window.document.querySelector(`.content${flag}`)
//   content.innerHTML = JSON.parse(msg).text
// }

module.exports = receiveMessage;