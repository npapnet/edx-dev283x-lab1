//console.log ('  > importing posts.js')

module.exports = {
    test(){
      console.log('hello');
    },
    getPosts(req, res) {
      console.log('sending post')
      res.status(200).send(req.store.posts)
    },
    addPost (req, res){
      console.log('adding post')
        let newPost = req.body
        let id = req.store.posts.length
        req.store.posts.push(newPost)
        res.status(201).send({id: id})
    },
    updatePost (req, res) {
      console.log('updating post')
      store.posts[req.params.id] = req.body
      res.status(200).send(store.posts[req.params.id])
      
    },
    removePost(req, res){
      // store.accounts.splice(req.params.id, 1)
      // res.status(204).send()
    }
  }
  