import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

var stompClient = null
const stompUrl = process.env.NODE_ENV === 'production'
? 'https://www.91film.top/api/courier'
: 'https://www.91film.top/api/courier'

function connect (userId) {
  try {
    var socket = new SockJS(stompUrl)
    stompClient = Stomp.over(socket)
  } catch (InvalidStateError) {
    window.console.log('--')
  }
  stompClient.connect({}, function (frame) {
    window.console.log('Connected: ' + frame)
    // 系统消息
    stompClient.subscribe('/topic/system-messages', function (message) {
      window.console.log(JSON.parse(message.body))
    })
    stompClient.subscribe('/user/' + userId + '/message', function (message) {
      window.console.log(JSON.parse(message.body))
    })
  })
}

function disconnect () {
  if (stompClient != null) {
    stompClient.disconnect()
  }
  window.console.log('Disconnected')
}

function sendMessage (msg) {
  window.console.log(msg)
  stompClient.send('/app/hello', {}, JSON.stringify(msg))
}

export default {
  connect,
  disconnect,
  sendMessage
}
