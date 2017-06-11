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

exports.filterSuggestions = function(req, res){
	
	console.log('filtering suggestions');
	
	console.log(req.session.userid);
	var signedInUsr  = req.session.userid;
	var filterQuery="select * from user where fbid ="+ signedInUsr;
	console.log('Filter query '+filterQuery);
	mysql.fetchData(function(err,results){
		if(err){
			console.log("errrors...");
			throw err;
		}
		else 
		{
			
			//mentors: results; 
		//console.log("All the values are :"+ results)
		//console.log(results.length);
		console.log(results[0].age);
		
		if(results[0].age!=null){
			var age = parseInt(results[0].age, 10);
			var myID = results[0].fbid;
			var similarQuery = "select * from user where age between "+ (age - 2) + " and "+ (age + 2) +" and location= '"+ results[0].location+"' and fbid not in ('"+myID+"')";
			console.log("Similar friends search :: "+ similarQuery);
			//Fetching friends for the girl
			mysql.fetchData(function(error,res){
				if(error){
					console.log("errrors...");
					throw err;
				}
				else 
				{
					console.log(res.length);
					console.log(res[0].name);
					res.render('social', { mentors: res });
				}
			}, similarQuery);
			
			}
		}
	},filterQuery);

	
};

exports.findMentor = function(req, res){
	
	console.log(req.session.userid);
	var signedInUsr  = req.session.userid;
	var filterQuery="select * from user where fbid ="+ signedInUsr;
	console.log('Filter query '+filterQuery);
	
	mysql.fetchData(function(err,results){
		if(err){
			console.log("errors...");
			throw err;
		}
		else 
		{
			console.log(results[0].math_rating + ' '+ results[0].verbal_rating);
			var math = results[0].math_rating;
			var verbal = results[0].verbal_rating;
			console.log("Math is greater ? "+ math>verbal);
			if(math < verbal){
				var mathSortQuery="select * from user where usertype='mentor' order by math_rating desc limit 2";
				mysql.fetchData(function(error,ress){
					if(error){
						throw error;
					}
					else 
					{
						res.render('social', { mentors: ress });
					}
				}, mathSortQuery);
			} else {

				var getVerbalSorted="select * from user where usertype='mentor' order by verbal_rating desc limit 2";

				mysql.fetchData(function(erroe,ress){
					if(erroe){
						throw erroe;
					}
					else 
					{
						res.render('social', { mentors: ress });
					}
				},getVerbalSorted);
			}
	
		}; 
}, filterQuery);
}

exports.verbalSorted = function(req, res){
	
	var getVerbalSorted="select * from user where usertype='mentor' order by verbal_rating desc limit 2";
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
	
	var mathSortQuery="select * from user where usertype='mentor' order by math_rating desc limit 2";
	//console.log("gettweetidquery is "+insertTweet);
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			res.render('social', { mentors: results });
		}
	}, mathSortQuery);

	
};

exports.temp = function(req, res){
	
	
	res.render('temp');
	

	
};