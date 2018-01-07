//console.log('  > importing comments.')


module.exports = {
  logtoComment: () => {
    console.log('hello from comments');
  },
  getComments(req, res) {
    console.log('sending post')
    //res.status(200).send(JSON.stringify(req.store.posts, null, 2))
    let comments = req.store.posts[req.params.id].comments 
    res.status(200).send(comments)
  },
  addComment(req, res) {
    let newComment = req.body;
    let commentid = req.store.posts[req.params.id].length;
    req.store.posts[req.params.id].comments.push(newComment);
    res.status(201).send({
      commentid: commentid
    })
  },
  updateComment(req, res) {
    res.status(201).send({id: id})
  },
  removeComment(req, res) {
    //let commentid = req.params.commentId;
    req.store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
    res.status(204).send()
  }
}