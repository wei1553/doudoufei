var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var User = new Schema({
    username   : String,
    psw        : String,
    create_date: { type: Date, default: Date.now }
});
// 创建model对象
var UserModel = mongoose.model('admin', User);  //  admin表单会自动创建不需要自己手动创建
// 公开对象，暴露接口
module.exports = UserModel;