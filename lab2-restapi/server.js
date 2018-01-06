const express = require('express');
const logger = require('morgan');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');
const routes = require('./routes');



let store = {
  posts: [{
    name: 'Top 10 ES6 Features every Web Developer must know',
    url: 'https://webapplog.com/es6',
    text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
    comments: [
        'Cruel…..var { house, mouse} = No type optimization at all',
        'I think you’re undervaluing the benefit of ‘let’ and ‘const’.',
        '(p1,p2)=>{ … } ,i understand this ,thank you !'
    ]
  }]
}


let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
//app.use(errorhandler())

app.use((req,res, next)=>{
  req.store = store;
  next()
})


app.get('/posts', routes.posts.getPosts)

app.post('/posts', routes.posts.addPost)

app.put('/posts/:id', routes.posts.updatePost)

app.delete('/posts/:id', routes.posts.removePost)

app.listen(3000)