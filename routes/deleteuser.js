var express = require('express');
var router = express.Router();


/* DELETE users listing. */
router.delete('/', function(req, res, next) {

//the statement below contains a render function - the first argument is the view name and the second argument is an object with one key/value pair.
res.render('deleteuser', { title: 'Delete Account'})
});

module.exports = router;