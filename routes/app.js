var express = require('express');
var router = express.Router();
// var User = require('../models/user');

router.get('/', function(req, res, next) {
	res.render('index');
});



/*router.get('/', function (req, res, next) {
	User.findOne({}, function(err, doc) {
		if(err) {
			return res.send('Error!');
		}
		res.render('node', {email: doc.email});
	});
});

router.post('/', function(req, res, next) {
	var email = req.body.email;
	var user = new User({
		firstName: 'Rebecca',
		lastName: 'Goveia',
		password: 'spider',
		email: email
	});
	user.save();
	res.redirect('/');
});
*/
/*router.get('/message/:msg', function (req, res, next) {
    res.render('node', {message: req.params.msg});
});
router.post('/message', function (req, res, next) {
    var message = req.body.message;
    res.redirect('/message/' + message);
});
*/

module.exports = router;
