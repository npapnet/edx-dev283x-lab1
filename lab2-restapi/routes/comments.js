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
    let newComment = req.body.text;
    req.store.posts[req.params.id].comments.push(newComment);
    res.status(201).send({
      commentid: req.store.posts[req.params.id].length
    })
    console.log ("added comment: ", newComment)
  },
  updateComment(req, res) {
    let CommentContent = req.body.text;
    req.store.posts[req.params.postId].comments[req.params.commentId] = CommentContent;
    res.status(201).send({id: req.params.postId})
    console.log ("update comment [", req.params.postId, "]: " , CommentContent)
  },
  removeComment(req, res) {
    //let commentid = req.params.commentId;
    req.store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
    res.status(204).send()
  }
}