var mysql = require('./mysql');
exports.homePage = function(req, res){
	
	var getUsers="SELECT * FROM user where usertype like 'mentor';";
	//console.log("gettweetidquery is "+insertTweet);
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{

			//console.log("search.js  users"+results2[0].username);
			res.render('social', { mentors: results });
			//res.render('social', { mentors: results });
			//console.log("hashtag.js1 userid "+hashtagid);



		}
	},getUsers);
	
};