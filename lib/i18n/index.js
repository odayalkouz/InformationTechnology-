const ar = require('./ar')
const en = require('./en')
// console.log(ar, en)
const messages = {
  ar: { ...ar },
  en: { ...en }
}

module.exports = messages
