// pages/xiaobei/xiaobei.js
var num=0;
var util=require('../../utils/util'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTopHeight: wx.getSystemInfoSync().statusBarHeight+30+7,
    viewBg:'#19da27',
    infoMess: '',
    userName: '',
    userN:'',
    passWd: '',
    passW:''
  },
  userNameInput:function(e){
    this.setData({
      userN:e.detail.value
    })
  },
  passWdInput:function(e){
    this.setData({
      passW:e.detail.value
    })
  },
  changeBg(){
    num++;
    var result=num/2;
    if(num%2==0){      
      this.setData({
        viewBg:'#19da27'
      })
    }else{
      this.setData({
        viewBg:'red'
      })
    }
    console.log(num)
    console.log(result)
  },
 

  getTime:function(){

    var that=this;

    var currentTime = util.formatTime(new Date());

    this.setData({

      time:time

    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

    var that = this;

    var time = time;

    setInterval(function(){

      that.setData({

          time: util.formatTime(new Date())

      });    

  },1000); 

     console.log(time)//打印时间日志

     }
})