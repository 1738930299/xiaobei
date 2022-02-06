// 云函数入口文件
const cloud = require('wx-server-sdk')
var rp = require('request-promise');
cloud.init()
// 云函数入口函数
exports.main = async (event, context) => {
  return rp(`https://api.isoyu.com/api/News/new_list?type=3&page=5`).then(function (res) {
    console.log(res);
    return res;
  }).catch(function (err) {
    console.error(err);
  })
}
