var express = require('express');
var router = express.Router();
var User   = require('../models/user'); // get our mongoose model

router.get('/list', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});  

router.get('/new', function(req, res) {

    // create a sample user
    var nick = new User({ 
      name: 'admin', 
      password: '123',
      admin: true 
    });
  
    // save the sample user
    nick.save(function(err) {
      if (err) throw err;
  
      console.log('User saved successfully');
      res.json({ success: true });
    });
  });

module.exports = router;