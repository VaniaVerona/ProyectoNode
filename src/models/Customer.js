const mongoose = requiere ('mongoose')

const customerSchema =mongoose.Schema ({

name: {
    type: String,
    required: true,
  },

  lastName :{
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },
})


const Customer = mongoose.model ('Customer',customerSchema ) //dar , modficiar leer datos 

module.export = Customer