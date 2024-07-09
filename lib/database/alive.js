




































const mongoose = require('mongoose');
const Alive = new mongoose.Schema({
  id: { type: String,  unique: true ,required: true, default:"Suhail_Md"},
  text: { type: String, default: `_Hy Mr \n\n i αм alive now how ¢αη ι нєℓρ уσυ* \n\n_If any query : ..._\n\n\n_type prefix alive & your message to update alive message_ \n*Eg: _.alive &Your_Alive_Message_*` },
  get:  { type: String, default:"you did'nt set alive message yet" },
  url: { type: String, default:""},  
  image: { type: Boolean, default: false },
  video: { type: Boolean, default: false }
})

const alive =mongoose.model("alive", Alive)
module.exports = { alive }
