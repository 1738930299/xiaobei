// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: "dangjian-2gl0l4af8dd6dcb4"
})
// 云函数入口函数
exports.main = async(event, context) => {
  return await cloud.database().collection('user').get();
}