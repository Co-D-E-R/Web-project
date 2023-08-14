const express = require('express');
const app = express();

// app.use((req, res) =>{
//     console.log("WE Got A New Request !!");
//     res.send({color : 'red'});
// })
app.get('/',(req,res) =>{
    res.send('This is the home page !!!!');

 })
 app.get('/r/:subreddit',(req,res)=>{
        const {subreddit}=req.params;
        res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)

 })
 app.get('/r/:subreddit/:postId',(req,res)=>{
    const {subreddit,postId}=req.params;
    res.send(`<h1>Viewing Post id ${postId} on the ${subreddit} subreddit</h1>`)
    
})

 
// /cats=>'mewo'
app.get('/cats',(req,res) =>{
   res.send('MEWO!!')
})
app.get('/dogs',(req,res) =>{
    res.send('woof!!')

 })
 //query search
 app.get('/search',(req,res)=>{
    const{ q } =req.query;
    if(!q){
        res.send('Nothing found if nothing search');
    }
    res.send(`<h1>Search result for : ${q}</h1>`);

 })
 //it is diffult as long as there is request this will send as diffult;
 app.get('*',(req,res) =>{
    res.send('I dont konw that path')

 })

app.listen(3000, ()=>{
    console.log("LISTENNING ON PORT 3000!")
})