// components/articleList/cmp.js
import {
  IndexModel
} from "../../models/index.js"
import { SearchModel } from "../../models/search.js";
// import {
//   random
// } from "../../utils/randomStr.js"
const indexModel = new IndexModel()
const searchModel = new SearchModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList: {
      type: Array,
      value: [],
      observer() { }
    },

    more: {
      type: String,
      value: '',
      observer: 'loadMore'
    },
    magazineId: {
      type: Number,
      value: 0,
      observer: 'hasMoreData'
    },
    word: String
  },


  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    noMoreData: false,
    type: ''
  },
  attached() {
    let curPage = getCurrentPages()
    let type = ''
    console.log(curPage, 123)
    const index = curPage.length - 1;
    if (curPage[index].route === 'pages/search/search') {
      type = 'search'
    } else {
      type = 'index'
    }
    this.setData({
      type
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {


    loadMore() {
      if (this._isLock() || this.data.noMoreData) {
        return
      }




      this._loadLock()

     this.getMoreData()


    },
    getMoreData(){
      const start = this.data.articleList.length;
      let getMore = null;
      if (this.data.type === 'search') {

        const word = this.data.word
        
getMore = searchModel.getSearchArticleList(word, start)
        // searchModel.getSearchArticleList(word, start).then(res => {
        //   console.log(res)
        //   this.setMoreData(res)
        //   this._unloadLock()
        // })
      } else {
        const magazineId = this.data.magazineId
        getMore = indexModel.getArticleList(magazineId, start)
        // const start = this.data.articleList.length
        // indexModel.getArticleList(magazineId, start).then(res => {
        //   // const combineList = this.data.articleList.concat(res)
        //   // this.setData({
        //   //   articleList: combineList,

        //   // })
        //   this.setMoreData(res)
        //   this._unloadLock()
        // })
      }
      getMore.then(res => {
        this.setMoreData(res)
        this._unloadLock()
      })
    },
    hasMoreData() {
      this.setData({
        noMoreData: false
      })
    },
    _isLock() {
      return this.data.loading
    },
    _loadLock() {
      this.setData({
        loading: true
      })
    },
    _unloadLock() {
      this.setData({
        loading: false
      })
    },
    setMoreData(list) {
      const combineList = this.data.articleList.concat(list)
      if (combineList.length == this.data.articleList.length) {
        this.setData({
          noMoreData: true
        })
        return
      }
      this.setData({
        articleList: combineList,

      })
    }

  }
})