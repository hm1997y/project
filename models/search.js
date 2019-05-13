import {Request} from "../utils/request.js"
class SearchModel extends Request{
    getSearchRecommon(word){
        return this.getData({
            url:`/searchArticleRecommend/${word}`
        })
    }
    getSearchArticleList(word, start=0){
        return this.getData({
            url:`/searchArticleList/${word}/${start}`
        })
    }
    

}
export {SearchModel}