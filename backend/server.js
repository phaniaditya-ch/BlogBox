const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Blog = require('./models/blog');
const morgan = require('morgan');

const app = express();

const dbURI = 'mongodb+srv://phaniaditya_ch:phani1234@cluster0.senx8yw.mongodb.net/blogbox?retryWrites=true&w=majority';

app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));
mongoose.connect(dbURI)
    .then((result) => {
        console.log('connected to database');
        app.listen(6969, () => {
            console.log('listening to post 6969 for requests')
        })
    })
    .catch((err) => {
        console.log(`error: ${err}`);
    })

app.get('/add-blog/:title/:desc', (req, res) => {
    const blog = new Blog({
        title: req.params.title,
        description: req.params.desc
    })

    blog.save()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
})