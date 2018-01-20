var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Page = new Schema({
	code : Number,
    shopname : String,
	shopnum : String,
	shopclass : String,
	extend : String,
	shopbard : String,
	shopprice : String,
	streetprice : String,
	vitualsales : String,
    create_date: { type: Date, default: Date.now }
});
// ����model����
var PageModel = mongoose.model('pages', Page);  // pages表单会自动创建不用自己手动创建
// �������󣬱�¶�ӿ�
module.exports = PageModel;