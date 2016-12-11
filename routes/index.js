
/*
 * GET home page.
 */


exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


exports.login = function(req, res){
  var user = req.param('username');
  var pw = req.param('password');
  var cookie = req.cookies.uid;

  if (user === pw){
  	 
	  if (cookie === undefined)
	  {
	    // no: set a new cookie
	    var randomNumber=Math.random().toString();
	    randomNumber=randomNumber.substring(2,randomNumber.length);
	    res.cookie('uid',"This is Cookie of USERID +"+Math.random());
	    console.log('cookie created successfully');
	  } 
	  else
	  {
	    // yes, cookie was already present 
	    console.log('cookie exists', cookie);
	  } 
  }
	res.render('login', { title: 'Express' });
};

exports.logout = function(req, res){
	res.clearCookie("uid");
	res.redirect("/");
};

exports.getcookie = function(req, res){
	res.render('getcookie', { title: 'Express' });
};