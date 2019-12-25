const erp = erp || {}

//const bg = 'http://localhost:8086/music'
const bg = 'http://116.196.68.87/music'


const HOST = bg + '/api'

erp.net163Search = HOST + '/net163/search'  //搜索网易云音乐

erp.qqSearch = HOST + '/qq/search'  //搜索qq音乐
erp.qqGetUrls = HOST + '/qq/getUrls'  //获取vKey


export default erp
