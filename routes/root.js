const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});
router.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'new-page.html'));
});
router.get('/oldd-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'oldd-page.html')); 
});
router.get('/old-page(.html)?', (req, res) => {
    // sends 302 by default ... 301 tells search engines that this page has been permenantly moved.
    res.redirect(301, '/new-page.html');  
});


module.exports = router;