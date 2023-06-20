const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Blog = require('./models/blog');
const morgan = require('morgan');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const querystring = require('querystring');

const app = express();

const dbURI = 'mongodb+srv://phaniaditya_ch:phani1234@cluster0.senx8yw.mongodb.net/blogbox?retryWrites=true&w=majority';

app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(cors());

mongoose
  .connect(dbURI)
  .then((result) => app.listen(6969, () => {console.log('listening to 6969 port for requests: ')}))
  .catch((err) => console.log(err));


app.get('/', (req, res) => {
    res.send('<h1>homepage</h1>');
})

app.get('/add-blog/:title/:desc', (req, res) => {
  const blog = new Blog({
    title: req.params.title,
    description: req.params.desc
  })

  console.log(req.params);

  blog.save()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
    })
})

app.delete('/deleteblog/:id', (req, res) => {
  console.log('check');
  console.log('id is : ', req.params.id)
  Blog.findByIdAndDelete(req.params.id)
    .then((result) => {
      if(!result){
        res.status(404).send('unsuccessful');
      }
      res.send('successful');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    })
})

app.get('/api', (req, res) => {
    console.log('check');
    Blog.find({}).then((result) => {
        console.log('result success');
        res.json(result);
    })
    .catch(err => console.log(err))
})