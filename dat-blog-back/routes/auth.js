var express = require('express');
var router  = express.Router();
var User    = require('../models/user'); // get our mongoose model
var jwt     = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config  = require('../config'); // get our config file

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
router.post('/', function(req, res) {

    // find the user
    User.findOne({
      name: req.body.name
    }, function(err, user) {
  
      if (err) throw err;
  
      if (!user) {
        res.json({ success: false, message: 'Auth failed. User not found.' });
      } else if (user) {
  
        // check if password matches
        if (user.password != req.body.password) {
          res.json({ success: false, message: 'Auth failed. Wrong password.' });
        } else {

        // if user is found and password is right
        // create a token with only our given payload
        // we don't want to pass in the entire user since that has the password
        const payload = {
            admin: user.admin 
        };

        console.log(payload);
        
            var token = jwt.sign(payload, config.secret, {

            });

            // return the information including token as JSON
            res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token
            });
            }   
        }
    });
  });

module.exports = router;