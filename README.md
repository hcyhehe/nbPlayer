# nbPlayer

#### 介绍
1. 全名“随搜听”音乐播放器
2. 支持网易云音乐和QQ音乐的在线搜索的音乐播放器
3. 当前使用的后台API：https://github.com/hcyhehe/music_api.git


#### 软件架构
1. 基于vue2.x全家桶开发而成
2. UI框架采用vant-ui


#### 安装教程
1. 安装依赖：npm install 
2. 运行：npm run dev
3. 打包部署: npm run build


#### 接口说明
1. 接口地址统一归纳到utils/global.js下
2. 若后台API在本地，则将const bg = 'http://localhost:8086/music' 这句去掉注释即可


#### 界面说明
目前界面风格较为简洁，主要以搜索为主，后期会继续优化


#### 版本更新计划
1.  后期加入虾米音乐的搜索功能
2.  加入歌曲详情页
3.  加入判断当前歌曲是否需要vip才能播放