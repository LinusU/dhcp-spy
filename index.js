const dgram = require('dgram')
const { EventEmitter } = require('events')

const emitter = new EventEmitter()
const server = dgram.createSocket('udp4')

function formatMacAddress (raw) {
  return [raw.substr(0, 2), raw.substr(2, 2), raw.substr(4, 2), raw.substr(6, 2), raw.substr(8, 2), raw.substr(10, 2)].join(':')
}

server.on('message', (msg, rinfo) => {
  const mac = formatMacAddress(msg.toString('hex', 28, 34))

  emitter.emit('detected', mac)
  emitter.emit(mac)
})

const listening = new Promise((resolve) => {
  server.on('listening', resolve)
  server.bind(67)
})

module.exports = Object.assign(emitter, { listening })
