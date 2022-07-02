const mongoose = require('mongoose')

const url = 'mongodb+srv://arlequin:GgofXwQd1ZGP9t3B@cluster0.zcfebwx.mongodb.net/store?retryWrites=true&w=majority'

mongoose.connect(url, {}, () => {
  console.log('----------------------')
  console.log('Conexión a la base de datos exitosa')
  console.log('----------------------')
})

module.exports = mongoose