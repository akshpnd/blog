const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const https = require("https");
const ejs = require('ejs');
const mongoose = require('mongoose');
const _= require("lodash");


app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));

const blog1 = 'Bankai refers to a Zanpakutō second release, and it can usually only be achieved by Captain-level Soul Reapers. Fans have seen more than a dozen of these Bankai, and they are all extremely powerful, but some are far stronger than others.';
const q = 'will be posting everything i am going through';

let posts = []; 



app.get('/', function(req, res){
    res.render('home',{posts:posts});
    
})

app.get('/contact', function(req, res){
    res.render('contact');
})

app.get('/about', function(req, res){
    res.render('about');
})

app.get('/compose', function(req, res){
    res.render('compose');
})
app.post('/', function(req, res){
    const blog1={
        blog_title: req.body.blogtitle,
        blogcontent: req.body.blogcontent
    };

    posts.push(blog1);
    res.redirect("/");
})

app.get("/posts/:postname",function(req,res){
    const req_title = _.lowerCase(req.params.postname);
    
    
    posts.forEach(function(post){
       
           if (_.lowerCase(post.blog_title) == req_title){
            res.render('post',{title:post.blog_title,content:post.blogcontent})
        }
    })
    
})

app.listen( 3000,function(){
    
    console.log("server is running ");



});