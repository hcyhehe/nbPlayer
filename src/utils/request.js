import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'


exports.aGet = async function aGet(url, params, noIndicator){
  try{
    if(!noIndicator) Toast.loading({message: '加载中...', forbidClick: true})
    let res = await axios.get(url, {
      params: params,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      timeout: 8000,
    })
    if(!noIndicator) Toast.clear()
    return res
  } catch(e) {
    if(!noIndicator) Toast.clear()
    console.log(e)
    Toast.fail('服务器忙')
  }
}


//x-www-form-urlencoded
exports.aPost = async function aPost(url, params, noIndicator){
  try{
    if(!noIndicator) Toast.loading({message: '加载中...', forbidClick: true})
    let res = await axios.post(url, qs.stringify(params),
      {headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      timeout: 8000,
    }
    )
    if(!noIndicator) Toast.clear()
    return res
  } catch(e) {
    if(!noIndicator) Toast.clear()
    console.log(e)
    Toast.fail('服务器忙')
  }
}


//application/json
exports.aPost2 = async function aPost2(url, params, noIndicator){
  try{
    if(!noIndicator) Toast.loading({message: '加载中...', forbidClick: true})
    let res = await axios.post(url, params, {headers: {'Content-Type': 'application/json'},timeout: 8000})
    if(!noIndicator) Toast.clear()
    return res
  } catch(e) {
    if(!noIndicator) Toast.clear()
    console.log(e)
    Toast.fail('服务器忙')
  }
}


