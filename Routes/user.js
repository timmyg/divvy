exports.home = function (req, res){

};

exports.account = function (req, res){

};

exports.snippet = function (req, res){

};

exports.getposts = function (req, res){

};

exports.newpost = function(req, res) {
	//get parameters from post

    //send them back to home
	res.redirect('/');
    response.end();

    //update counts for skills
};

exports.signup = function(req, res) {
	var username = req.body.user.username;
	var password = req.body.user.password;
	var email = req.body.user.email;
	var name = req.body.user.name;

// add new user
// log new user in
// return new content
};

exports.login = function(req, res) {
	var username = req.body.user.username;
	var password = req.body.user.password;

// login return json of new content
};