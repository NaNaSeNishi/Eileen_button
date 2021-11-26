<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card color="rgb(229, 233, 243)" class="control">
          <v-card-actions>
            <v-btn @click="random"    
              ><v-icon>mdi-shuffle-variant</v-icon>随机挑一个</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn @click="stopPlay" rounded><v-icon>mdi-stop</v-icon>停止</v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="autoPlay" rounded :color="autoColor"
              ><v-icon>mdi mdi-repeat</v-icon>持续播放</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="rgb(255, 250, 244)" class="rounded-xl" id="Playingac">
              {{playText}}
        </v-card>
      </v-col>
       <audio id="player" @ended="voiceEnd(false)"></audio>
      <v-col
        cols="12"
        v-for="category in voices"
        v-bind:key="category.categoryName"
      >
        <v-card color="rgb(255, 250, 244)" class="rounded-xl">
          <v-card-title class="category">{{
            category.categoryName
          }}</v-card-title>
          <v-card-text>
            <button-press
              color = "light"	
              class="voicebtn"
              v-for="voiceItem in category.voiceList"
              v-bind:key="voiceItem.name"
              @click="play(voiceItem)"
            >
              {{ voiceItem.name }}
            </button-press>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
      <div class="removeHome">
    <span class="t-suspend-button"
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
          ref="remove"
          :style="`left: ${oLeft}px; top: ${oTop}px;`">
    </span>
  </div>
  </v-container>
</template>

<script>
import VoiceList from "../voices.json";
export default {

  data: () => ({
    playText:"🎵 请点击按钮播放 🎵",
    ran: false,
    voices: VoiceList.voices,
    autoCheck: false,
    autoColor: undefined,
    voice: {},
          oLeft: "",
      oTop: "",
      $vm: null, // 悬浮按钮
      moving: false, // 移动状态
      oW: null, // 悬钮距离
      oH: null,
      htmlWidth: null, // 页面宽度
      htmlHeight: null,
      bWidth: null, // 悬钮宽度
      bHeight: null,
      click: false // 是否是点击
  }),
  mounted() {
    this.$refs.remove.addEventListener(
      "touchmove",
      e => {
        if (e.cancelable) {
          e.preventDefault();
        }
      },
      { passive: false }
    );
  },
  methods: {
    play(item) {
      this.stopPlay();
      let player = document.getElementById("player");
      player.src = "voices/" + item.path;
      this.playText = "🎵 正在播放："+item.name+" 🎵"
      this.voice = item;
      player.play();
    },
    stopPlay() {
      let player = document.getElementById("player");
      player.pause();
      this.playText = "🎵 请点击按钮播放 🎵"
      this.voiceEnd(true);
    },
    voiceEnd(flag) {
      if ((flag !== true && this.autoCheck)) {
        this.random();
      } else {
        this.voice = {};
      }
    },
    random() {
        var tempList = this.voices[this.getRndInteger(0, this.voices.length)];
        console.log(tempList.voiceList);
        this.play(
        tempList.voiceList[this.getRndInteger(0, tempList.voiceList.length)]
      );
    },
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    autoPlay() {
      this.autoCheck = !this.autoCheck;
      if(this.autoCheck == true){
        this.autoColor = "#f19797"
      } else{
        this.autoColor = undefined
      }
      console.log(this.autoCheck);
    },
    onTouchStart(e) {
      e = e.touches[0];
      this.click = true;
      this.oW = e.clientX - this.$refs.remove.getBoundingClientRect().left;
      this.oH = e.clientY - this.$refs.remove.getBoundingClientRect().top;
      this.htmlWidth = document.documentElement.clientWidth;
      this.htmlHeight = document.documentElement.clientHeight;
  
      this.bWidth = this.$refs.remove.offsetWidth;
      this.bHeight = this.$refs.remove.offsetHeight; 
      let oLeft = e.clientX - this.oW;
      let oTop = e.clientY - this.oH;
 
      this.oLeft = oLeft;
      this.oTop = oTop;
 
      this.moving = true;
    },
    // 移动结束
    onTouchEnd(e) {
      this.moving = false;
 
      this.$refs.remove.class + " t-suspend-button-animate";
 
      // 左侧距离
      let oLeft = this.oLeft;
      if (oLeft < (this.htmlWidth - this.bWidth) / 2) {
        oLeft = 0;
      } else {
        oLeft = this.htmlWidth - this.bWidth;
      }
      this.oLeft = oLeft;
    },
    // 开始移动
    onTouchMove(e) {
      this.$refs.remove.class = "t-suspend-button";
      this.moving && this.onMove(e);
    },
    // 移动中
    onMove(e) {
      e = e.touches[0];
      this.click = false;
 
      // 左侧距离
      let oLeft = e.clientX - this.oW;
      let oTop = e.clientY - this.oH;
      if (oLeft < 0) {
        oLeft = 0;
      } else if (oLeft > this.htmlWidth - this.bWidth) {
        oLeft = this.htmlWidth - this.bWidth;
      }
      if (oTop < 0) {
        oTop = 0;
      } else if (oTop > this.htmlHeight - this.bHeight) {
        oTop = this.htmlHeight - this.bHeight;
      }
 
      this.oLeft = oLeft;
      this.oTop = oTop;
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap');
.control {
    font-family: "ZCOOL KuaiLe", cursive;
  font-size: 17px;
}

#Playingac {
  font-family: "ZCOOL KuaiLe", cursive;
  font-size: 17px;
    text-align: center;
}

.voicebtn {
font-family: 'Ma Shan Zheng', cursive;
  margin: 0.5em;
}
.category {
font-family: "ZCOOL KuaiLe", cursive;
  font-size: 25px;
  color: rgb(98, 81, 81);
}
.v-card__title {
  padding-bottom: 2px;
  padding-left: 30px;
}

.removeHome {
  .t-suspend-button {
    position: fixed;
    bottom: 45px;
    right: 9px;
    width: 100px;
    height: 100px;
    z-index: 99999;
    background-image: url("../assets/eileen3.png");
  }
 
  .t-suspend-button img {
    width: 100%;
    height: 100%;
  }
 
  .t-suspend-button-animate {
    transition-duration: 0.4s;
  }
}
</style>
