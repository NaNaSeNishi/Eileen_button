# eileen-button
**A simple vtuber button site for Eileen.**

**A-Soul 虚拟偶像乃琳的音声按钮站。**

[eileenbtn.com](https://eileenbtn.com)

**Bilibili ：** [乃琳Queen](https://space.bilibili.com/672342685)

## 项目相关说明

### 项目结构
本项目采用Vue2.x开发
```
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- voices  音频文件
    |-- src
        |-- App.vue
        |-- main.js
        |-- voices.json  音频文件信息
        |-- components
        |   |-- Btn.vue  按钮
        |   |-- HelloWorld.vue  主页相关信息
        |-- router
        |   |-- index.js  路由
        |-- views
            |-- About.vue  主页面
            |-- Button.vue  按钮页面
```


### 参与完善本项目
- 在Issues提出您的建议。
- fork 本项目进行修改，创建新分支并发起 Pull Request。

### 参与完善收录音声音整理
**两种方法：**
- 直接提供音频文件：请将音频文件转为MP3格式，响度目前采用ITU-R BS.1770-2标准，目标响度 -23LUFS（采用AU等软件调整不会调也没关系直接给我发就行），注明分类名，音频名发送至邮箱cluckkyyy@gmail.com
- 前往[微博评论区](https://m.weibo.cn/5554866845/4708475081327511)留言，指出哪一期直播/哪一个视频 几分几秒到几分几秒的片段。

### 部署本地开发环境
- 配置好node环境，clone项目到本地。
- 安装：
  ```
  npm install
  ```
- 运行：
  ```
  npm run serve
  ```
- 打包
  ```
  npm run build
  ```
