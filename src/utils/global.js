const erp = erp || {}

//const bg = 'http://localhost:8086/music'
//const bg = 'http://116.196.68.87/music'
const bg = 'http://music.allstackcoding.com/music'

const HOST = bg + '/api'

erp.net163Search = HOST + '/net163/search'  //搜索网易云音乐
erp.net163TopList = HOST + '/net163/topList'  //网易云音乐热歌排行榜

erp.qqSearch = HOST + '/qq/search'  //搜索qq音乐
erp.qqGetUrls = HOST + '/qq/getUrls'  //获取vKey
erp.qqTopList = HOST + '/qq/topList'  //qq音乐热歌排行榜


export default erp
