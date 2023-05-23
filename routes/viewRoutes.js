const express = require('express');

const router = express.Router();

router.get('/',(_req,res,_next)=>{
    res.render('home',{path: '/'}); // passed path to track active <a> class in header.ejs
});

router.get('/generateImg',(_req,res,_next)=>{
    res.render('imagineAI',{path: '/generateImg'});
});

module.exports = router;