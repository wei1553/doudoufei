var express = require('express');
var router = express.Router();
var UserModel = require("../model/User");
var PageModel = require("../model/Page");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录页面' });
});

router.get('/list_page1', function(req, res, next) {
  res.render('list_page1', {});
});

router.get('/list_page2', function(req, res, next) {
  res.render('list_page2', {});
});




//  点击编辑跳转页面
//router.get('/list_page3', function(req, res, next) {
//res.render('bianji', {});
//});


////  点击编辑跳转页面
//router.get("/api.bianji", function(req, res, next) {   //  get一般用来跳转页面，post一般用来验证用户名密码
//	console.log(req.query.bian_id);
//res.render('bianji', { title: req.body.bian_id });
//});


//   登录获取数据
router.post('/api/login4ajax', function(req, res, next) {
	console.log(req.body.username);
  var username = req.body.username;
  var psw = req.body.psw;
  var codes = req.body.codes;
  var result = {
  	code : 1,
  	message : "登录成功"
  };
  UserModel.find({username : username,psw : psw},(err,docs)=>{
  	if(docs.length == 0){
  		result.code = -101;
  		result.message = "您的账号或密码错误。请重新登录。"
  	}
  	res.json(result);
  })
});



//  点击后台一  的删除按钮  数据库删除
router.post('/api.remove_', function(req, res, next) {
		console.log(req.body.remove_id)
		var remove_id = req.body.remove_id;
		console.log(req.body.remove_id)
		var result = {
			code : 1,
			message : "删除成功"
		}
		PageModel.remove({shopname : remove_id},function(err,docs){
			 res.json(result);
		})
});




//  后台       一    获取数据后动态创建
 router.post('/api/goods_1', function(req, res, next) {
  	PageModel.find({}, function (err, docs) { 
  			res.send(docs);
  	})
});

//  后台        编辑       获取数据
router.post('/api.bianji', function(req, res, next) {
	console.log(req.body.bian_id);
	var bian_id = req.body.bian_id;
	console.log(bian_id)
  var shopname1 = req.body.shopname1;
  console.log(shopname1);
  var shopnum1 = req.body.shopnum1;
  var shopclass1 = req.body.shopclass1;
  var extend1 = req.body.extend1;
  var shopbard1 = req.body.shopbard1;
  var shopprice1 = req.body.shopprice1;
  var streetprice1 = req.body.streetprice1;
  var vitualsales1 = req.body.vitualsales1;
  var result = {
  	code : 1,
  	message : "登录成功"
  };
	var um = new PageModel();
	um.update({shopname : bian_id},{$set:{shopname : shopname1,shopnum : shopnum1}},function(err,docs){
		if(err){
			console.log(docs)
		}else{
			res.json(docs);
		}
	})
	})

//  后台        二       获取数据
router.post('/api/goods', function(req, res, next) {
	console.log(req);
  var shopname = req.body.shopname;
  var shopnum = req.body.shopnum;
  var shopclass = req.body.shopclass;
  var extend = req.body.extend;
  var shopbard = req.body.shopbard;
  var shopprice = req.body.shopprice;
  var streetprice = req.body.streetprice;
  var vitualsales = req.body.vitualsales;
  var result = {
  	code : 1,
  	message : "登录成功"
  };
	var um = new PageModel();
	um.code = 1;
	um.shopname = shopname;
	um.shopnum = shopnum;
	um.shopclass = shopclass;
	um.extend = extend;
	um.shopbard = shopbard;
	um.shopprice = shopprice;
	um.streetprice = streetprice;
	um.vitualsales = vitualsales;
	um.save(function(err){
		if(err){
			result.code = -110;
				result.message = "注册失败";
				res.send("注册失败");
	  		}
	  		res.json(result);
	  })
	})

//  分页处理
router.post('/fenye', function(req, res, next) {
  	var shuNum = req.body.shuNum;
  	shuNum = parseInt(shuNum);
  	var yeNum = req.body.yeNum;
  	yeNum = parseInt(yeNum);
  	//console.log(shuNum,yeNum);
  	
  	
  	PageModel.count({code: 1}, function(err, count){
		console.log("数量:" + count);
		var query = PageModel.find({code: 1}).skip((shuNum-1)*yeNum).limit(yeNum);
		query.exec(function(err, docs){
			console.log(err, docs);
			res.json(docs);
		});
	})	
});

router.post('/api/sum', function(req, res, next) {
	PageModel.find({code : 1},function(err,docs){
		//console.log(docs.length);
		res.json(docs);
	})
})




 //  设置点击搜索关键字
router.post('/api/keyword', function(req, res, next) {
	var reg = req.body.keyword;
	console.log(reg)
	PageModel.find({$or : [{shopname : {$regex : reg}},{shopnum : {$regex : reg}}]},function(err,docs){
		res.json(docs);
		console.log(docs)
	})
})



//  编辑获取信息


router.get('/bianji', function(req, res, next) {  // 第三页面
	res.render('bianji', {});
});



router.post('/updata', function(req, res, next) {
	var shopname = req.body.shopname;
	PageModel.find({shopname : shopname},function(err,docs){
		//console.log(docs.length);
		res.json(docs);
	})
})

router.post('/api.bianbian', function(req, res, next) {

  var shopname = req.body.shopname1;
  var shopnum = req.body.shopnum1;
  var shopprice = req.body.shopprice1;
  var streetprice = req.body.streetprice1;
  var vitualsales = req.body.vitualsales1;

  var result = {
  	code : 1,
  	message : "登录成功"
  };
	PageModel.update({shopname : shopname},{$set:{shopnum : shopnum,shopprice:shopprice,streetprice:streetprice,vitualsales:vitualsales}},function(err){
		if(err){
					result.code = -110;
					result.message = "注册失败";
					res.send("注册失败");
	  		}
	  		res.json(result);
	  })
	})









router.get('/main', function(req, res, next) {
  res.render('main', { title: '后台页面' });
});
module.exports = router;
