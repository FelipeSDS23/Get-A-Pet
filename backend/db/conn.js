const mongoose = require('mongoose')

async function main() {
    await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log("Conectou ao Mongoose!")
}

main().catch((err) => console.log(err))

module.exports = mongoose