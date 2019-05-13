// pages/mark/mark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    authorized: false,
    likeList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.userAuthorized()
    // const likeList = wx.getStorageSync('likeList') || []
    // this.setData({
    //   likeList
    // })
    // load函数只执行一次
  },
  onShow() {
    if (this.data.authorized) {
      this.getMyLike()
    }
    // this.getMyLike()
  },
  onGetUserInfo(e) {
    // console.log(e)
    const userInfo = e.detail.userInfo;
    console.log(userInfo)
    if (userInfo) {
      this.setData({
        userInfo: userInfo
      })
      this.getMyLike()
    }
  },
  getMyLike() {
    const likeList = wx.getStorageSync('likeList') || []
    this.setData({
      likeList
    })
  },
  userAuthorized() {
    wx.getSetting({
      success: res => {
        console.log(res.authSetting)
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              console.log(res.userInfo)
              this.setData({
                userInfo: res.userInfo,
                authorized: true
              })
              this.getMyLike()
            }
          })



        }
      }
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
  // onReachBottom: function () {

  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage: function () {

  // }
})