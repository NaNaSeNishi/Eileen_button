<template>
  <v-container>
    <v-row >
      <v-col cols="12">
        <v-card  >
            <v-img
              :src= "require('../assets/Eileen1.png')"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="100px"
            >
              <v-card-title class="text-h5"> What is this ? </v-card-title>
            </v-img>
          <v-card-text class="font4"
           >这里是虚拟偶像乃琳Eileen的音声按钮站！</v-card-text
          >
          <v-card-text class="font2" style="padding-bottom: 0px">什么...你不知道乃琳是谁？
             <p>乃琳(Eileen)是一名从2020年11月26日在<a href="https://space.bilibili.com/672342685/" title="Bilibili">Bilibili</a>及<a href=" https://v.douyin.com/R2YHDCd/" class="mw-redirect" title="抖音">抖音</a>开始活动的虚拟UP主</a>，所属团体为乐华娱乐旗下的女子偶像团体<a href="https://zh.wikipedia.org/wiki/A-SOUL" title="A-SOUL">A-SOUL</a>。
</p>
             <p>官方设定是控制欲偏强的法学在读冷艳御姐,实际上她也是一个温柔知性，游戏力高，共情力强的可爱文学 <s>宅女</s>。</p>
             <p>一起走进枝江音色流氓的甜蜜声音陷阱吧！</p>
          </v-card-text>
                     <v-card-actions>
              <button-basic	 class="font1"  @click="toButton">
                      <v-icon left>
        mdi-launch
      </v-icon>
                Start Now
              </button-basic>
            </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12"> 
        <v-card>
          <v-card-title class="font2">关于本按钮站的说明</v-card-title>
          <v-card-subtitle class="font3">Description of the button site</v-card-subtitle>
          <v-card-text class="font2">本站为爱好者开发作品，与ASOUL官方无关，所有音声资源均来源互联网。</v-card-text>
          <v-card-text class="font2">开源地址：<a href="https://github.com/NaNaSeNishi/Eileen_button" title="Bilibili">Github</a>
          <p>联系作者：新浪微博<a href="https://weibo.com/5554866845/" title="Bilibili">@Clucky酱</a></p></v-card-text>

        </v-card>
      </v-col>
            <v-col cols="12"> 
        <v-card>
          <v-card-title class="font2">Todolist</v-card-title>
          <v-card-text class="font2">
            <p>1.本人十级美工苦手网页做得不好看(大家还是拿手机看吧)，会慢慢改善的 QAQ</p>
            <p>2.收集整理好更多的音声资源，欢迎大家来投稿嘿嘿 !</p>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  methods:{
    toButton(){
    this.$router.push("/Button");}
  }

};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap");
.font1 {
  font-family: "ZCOOL KuaiLe", cursive;
  font-size: 15px;
  font-weight: bold;
}
.v-btn.color-primary[data-v-2bdbacb5]{
  background-color: #8aadfa;
}
.font2 {
  font-family: "ZCOOL KuaiLe", cursive;
  font-size: 17px;
}
.font3 {
  font-family: "ZCOOL KuaiLe", cursive;
  font-size: 12px;
}
.font4 {
  font-family: "ZCOOL KuaiLe", cursive;
  font-size: 20px;
  font-weight: bold;
}
</style>
