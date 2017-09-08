var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    let list = [{id: 1, name: "Post número 1", text: "Lorem Ipsum"},
                      {id: 2, name: "Post número 2", text: "Lorem Ipsum"}];

  res.send(list);
});

module.exports = router;
