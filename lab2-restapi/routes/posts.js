//console.log ('  > importing posts.js')

module.exports = {
  test() {
    console.log('hello');
  },
  getPosts(req, res) {
    //res.status(200).send(JSON.stringify(req.store.posts, null, 2))
    if (req.query.id) {
      res.status(200).send(req.store.posts[req.query.id]);
    } else {
      res.status(200).send(req.store.posts);
    }
  },
  addPost(req, res) {
    console.log('adding post');
    let newPost = req.body;
    let id = req.store.posts.length;
    req.store.posts.push(newPost);
    res.status(201).send({
      id: id
    });
    console.log('> post added');
  },
  updatePost(req, res) {
    req.store.posts[req.params.id] = req.body;
    res.status(200).send(req.store.posts[req.params.id]);
    console.log('> post updated');
  },
  removePost(req, res) {
    req.store.posts.splice(req.params.id, 1);
    res.status(204).send();
    console.log('> post deleted');
  }
}