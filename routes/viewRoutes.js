const express = require('express');

const router = express.Router();

router.get('/',(_req,res,_next)=>{
    res.render('home',{path: '/'}); // passed path to track active <a> class in header.ejs
});

router.get('/generateImg',(_req,res,_next)=>{
    res.render('imagineAI',{path: '/generateImg'});
});

router.get('/contactUs',(_req,res,_next)=>{
    res.render('contactUs',{path: '/contactUs'});
});

module.exports = router;