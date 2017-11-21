# DHCP Spy

Silently listen for DHCP requests on the network. Useful for monitoring when devices connects to the network, and can be used to detect presses on an [Amazon Dash Button](https://www.amazon.co.uk/Amazon-Dash-Button/b?ie=UTF8&node=10833773031).

Requires root priveligies in order to listen on port 67.

## Installation

```sh
npm install --save dhcp-spy
```

## Usage

```js
const spy = require('dhcp-spy')

spy.listening.then(() => {
  console.log('Listening for DHCP requests')
})

spy.on('detected', (mac) => {
  console.log(`Detected a request from ${mac}`)
})

spy.on('78:e1:03:b0:08:24', () => {
  console.log('Someone pressed the "Mentos" dash button')
})
```
