const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
    console.log("Connection open");
//   use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const personSchema = new mongoose.Schema({
    first:String,
    last: String
})

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

personSchema.pre('save',async function() {
    console.log("About to save");
})


personSchema.post('save',async function() {
    console.log("Saved !!");
})

const Person = mongoose.model('Person',personSchema);