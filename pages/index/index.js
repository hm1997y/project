import { IndexModel } from "../../models/index.js"
// import {random} from "../../utils/randomStr.js"
import {random} from "../../utils/randomStr"
const indexModel = new IndexModel()
// import { Request } from "../../utils/request.js"
// const request = new Request()


// pages/type/type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList:[],
    markList:[],
    recommendInfo:[],
    getMore:'',
    magazineId:0,
    loading:true

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    // request.getData({
    //   url: '/getIndexArticleList/0/0'
    // }).then(res => {
    //   console.log(res)
    // })
    // indexModel.getArticleList().then(res => {
    //   console.log(res)
    // })
    // indexModel.markList().then(res => {
    //   console.log(res)
    // })
    // indexModel.recommendInfo().then(res => {
    //   console.log(res)
    // })
    this.getData()
    // wx.showLoading() 
    this.hideLoading()


  },
//   onReachBottom(){

//     // this.setData({
//     //   getMore:random(20)
//     // })
//     console.log(111)
// // console.log(getMore)
//   },
  onReachBottom() {
    console.log(111)
    console.log(this.data.getMore)
    this.setData({
      getMore: random(20)
      
    })
    console.log(this.data.getMore)

  },
 
onCatalog(){
  wx.switchTab({
    url:"/pages/catalog/catalog"
  })
},
onNav(e){
  // console.log(e)
  const magazineId = e.detail.index
 this.resetData()
 this.scrollPageTop()
 this.setMagazineId(magazineId)
  
  this.getData(magazineId)

},


  getData(magazineId) {
    const articleList = indexModel.getArticleList(magazineId)
    const markList = indexModel.markList(magazineId)
    const recommend = indexModel.recommendInfo(magazineId)
    Promise.all([articleList, markList, recommend]).then(res => {
      // console.log(res, res[0], res[1], res[2])
      this.setData({
        articleList:res[0],
        markList:res[1],
        recommend:res[2]
      })
      this.hideLoading()
      // wx.hideLoading()
    })
  },
  hideLoading(){
    this.setData({
      loading:false
    })

  },
  resetData(){
    this.setData({
      articleList:[],
      markList:[],
      recommendInfo:[]
    })
  },
  scrollPageTop(){
    wx.pageScrollTo({
      scrollTop:0,
      duration:0
    })
  },
  setMagazineId(magazineId){
    this.setData({
      magazineId:magazineId
    })
  }

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // onReady: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  // onHide: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload: function () {

  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh: function () {

  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // // onReachBottom: function () {

  // // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage: function () {

  // }
})
