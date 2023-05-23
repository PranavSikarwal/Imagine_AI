const express = require('express');

const router = express.Router();

router.get('/',(_req,res,_next)=>{
    res.render('home.ejs',{path: '/'}); // passed path to track active <a> class in header.ejs
});

router.get('/generateImg',(_req,res,_next)=>{
    res.render('imagineAI.ejs',{path: '/generateImg'});
});

module.exports = router;