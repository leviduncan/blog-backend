const express = require('express')
const router = express.Router()
const BlogPost = require('../models/post')

router.get('/', async(req, res) => {
    try{
        const posts = await BlogPost.find()
        res.json(posts)
    }catch(err){
        res.send('Error: ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const post = await BlogPost.findById(req.params.id)
        res.json(post)
    }catch(err){
        res.send('Error: ' + err)
    }
})

router.post('/', async(req, res) => {
    const post = new BlogPost({
        title: req.body.title,
        content: req.body.content
    })
    try{
        const p1 = await post.save()
        res.json(p1)
    }catch(err){
        res.send('Error: ' + err)
    }
})

router.patch('/:id', async(req, res) => {
    try{
        const post = await BlogPost.findById(req.params.id)
        post.title = req.body.title
        post.content = req.body.content
        const p1 = await post.save()
        res.json(p1)
    }catch(err){
        res.send('Error: ' + err)
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const post = await BlogPost.findById(req.params.id)
        const p1 = await post.remove()
        res.json(p1)
    }catch(err){
        res.send('Error: ' + err)
    }
})
module.exports = router