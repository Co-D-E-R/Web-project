const jokes=  require("give-me-a-joke");
const color = require("colors");
const cow=require("cowsay")
jokes.getRandomDadJoke(function (joke){
    console.log(joke.rainbow);
})