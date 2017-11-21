#!/usr/bin/env node

const spy = require('./')

spy.listening.then(() => {
  console.log('Listening for DHCP requests')
})

spy.on('detected', (mac) => {
  console.log(`Detected a request from ${mac}`)
})
