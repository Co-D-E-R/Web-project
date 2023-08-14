//CU
const express = require('express');
const app = express();
const path = require('path');
const methodoverride = require('method-override');




const { v4: uuid } = require('uuid');



app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodoverride('_method'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

let comments = [
    {
        id: uuid(),
        username: 'todd',
        comment: 'the todd is good'
    },
    {
        id:uuid(),
        username: 'reset',
        comment: 'Rest can be feeded free'
    },
    {
        id:uuid(),
        username: 'jet',
        comment: 'jet beans is very popular'
    },
    {
        id:uuid(),
        username: 'res',
        comment: 'requesting the server sites'
    }
]


app.get('/comments/new',(req,res)=> {
    res.render('comments/new')
})

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})


app.post('/comments',(req,res)=>{
    const {username,comment}=req.body;
    comments.push({username,comment, id: uuid() })
    res.redirect('/comments')
})

app.get('/comments/:id',(req,res) =>{
    const { id } = req.params;
    const comment=comments.find(c => c.id === id);
    res.render('comments/show',{ comment });
})

app.patch('/comments/:id',(req,res) =>{
    const { id } = req.params;
    const newcomment =req.body.comment;
    const foundcomment=comments.find(c => c.id === id);
    foundcomment.comment = newcomment;
    res.redirect("/comments")
})
app.get('/comments/:id/edit',(req,res)=>{
    const { id } = req.params;
    const comment=comments.find(c => c.id === id);
    res.render('comments/edit',{ comment })
})
app.delete('/comments/:id',(req,res)=>{
    const {id} =req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect("/comments");
})

app.listen(3000, () => {
    console.log("ON PPRT");
})