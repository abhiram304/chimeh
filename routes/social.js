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

exports.verbalSorted = function(req, res){
	
	var getVerbalSorted="select * from user where usertype='mentor' order by verbal_rating asc limit 2";
	//console.log("gettweetidquery is "+insertTweet);
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			res.render('social', { mentors: results });
		}
	},getVerbalSorted);

	
};

exports.mathSorted = function(req, res){
	
	var mathSortQuery="select * from user where usertype='mentor' order by math_rating asc limit 2";
	//console.log("gettweetidquery is "+insertTweet);
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			res.render('social', { mentors: results });
		}
	},mathSortQuery);

	
};

exports.temp = function(req, res){
	
	
	res.render('temp');
	

	
};