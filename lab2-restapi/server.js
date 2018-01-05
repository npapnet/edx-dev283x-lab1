const express = require('express');
const logger = require('morgan');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');

let store = {
    posts: [
      {name: 'Top 10 ES6 Features every Web Developer must know',
      url: 'https://webapplog.com/es6',
      text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
      comments: [
        text: 'Cruel…..var { house, mouse} = No type optimization at all',
        text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.',
        text: '(p1,p2)=>{ … } ,i understand this ,thank you !'      
      ]
      }
    ]
  }

  
let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

app.get('/accounts', (req, res) => {
    res.status(200).send(store.accounts)
  })

  app.post('/accounts', (req, res) => {
    let newAccount = req.body
    let id = store.accounts.length
    store.accounts.push(newAccount)
    res.status(201).send({id: id})
  })

  app.put('/accounts/:id', (req, res) => {
    store.accounts[req.params.id] = req.body
    res.status(200).send(store.accounts[req.params.id])
  })

app.delete('/accounts/:id', (req, res) => {
  store.accounts.splice(req.params.id, 1)
  res.status(204).send()
})

app.listen(3000)
