# nbPlayer
随搜听音乐播放器，采用vue3.x开发，目前可在线搜索网易云音乐和QQ音乐

#### 介绍
1. 全名“随搜听”音乐播放器
2. 支持网易云音乐和QQ音乐的在线搜索的音乐播放器
3. 当前使用的后台API：https://github.com/hcyhehe/music_api.git


#### 软件架构
1. 基于vue3.x全家桶开发而成
2. UI框架采用vant-ui


#### 安装教程
1. 安装依赖：npm install 
2. 运行：npm run serve
3. 打包部署: npm run build


#### 接口说明
1. 接口地址统一归纳到utils/global.js下
2. 若后台API在本地，则将const bg = 'http://localhost:8086/music' 这句去掉注释即可


#### 界面说明
目前界面风格较为简洁，主要以搜索为主，后期会继续优化


#### 版本更新日志
1.  2019-12-27  判断该歌曲是否为收费歌曲
2.  2019-12-29  由vue2.x升级为vue3.x
3.  2019-12-31  新增音乐排行榜
