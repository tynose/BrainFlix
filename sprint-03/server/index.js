const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const PORT = process.env.PORT || 8080;
const app = express();

////////// ----------------- //////////

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
  next();
});

///////// data imports //////////

const videos = require('./videos');
const activeVideo = require('./activeVideo');

//////////// GET /videos ////////////////

app.get('/videos', (req, res) => {
  res.json(videos);
})

//////////// GET /videos/:id ////////////////

app.get('/videos/:id', (req, res) => {
  const activeVideoId = activeVideo.find(video => {
    res.json(video.id === req.params.id)
  });  
  res.json(activeVideoId)
})

//////////// POST /videos/:id ////////////////

app.post('/videos/:id/comments', (req, res) => {
  const { name, comment } = req.body;
  const newComment = {
    name: name,
    comment: comment,
    id: uuid(),
    timestamp: new Date()
  }

  const activeVideoId = activeVideo.find(video => {
    return video.id === req.params.id
  }); 
  activeVideoId.comments.unshift(newComment);
  res.status(201).json({ msg: 'your comment has been added' });
});

/////////////////////////////////////////////////

//////////// DELETE /videos/:videoId/comments/:commentId ////////////////

app.delete('/videos/:videoId/comments/:commentId', (req, res) => {
  const { videoId, commentId } = req.params;

  const filterVideo = activeVideo.find(video => {
    return  video.id === videoId
  });
  const comments = filterVideo.comments;
  comments.splice(comments.findIndex(comment => comment.id === commentId), 1);
  res.status(200).json({ msg: 'your comment has been deleted' })
});

app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log(`listening on ${PORT}...`);
});