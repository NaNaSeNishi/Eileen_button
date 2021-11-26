<template>
  <v-app>
        <v-navigation-drawer v-model="drawer" app>
      <div id="title1">Eileen btn</div>
      <v-list>
        <v-list-item>
            <v-img :src= "require('./assets/qeileen.png')"></v-img>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.linker">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text" class="font1"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title id="titlename">Eileen-button</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- 根据应用组件来调整你的内容 -->
    <v-main>
      <!-- 给应用提供合适的间距 -->
      <v-container fluid>
        <!-- 如果使用 vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app class="font1">
      2021 - Eileen btn Project
      <v-spacer></v-spacer>
      <v-btn icon href="https://github.com/NaNaSeNishi/Eileen_button">
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn icon href="https://twitter.com/Ckucky_lalala">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    drawer: false,
    selectedItem: 0,
    group: null,
        items: [
          { text: "About", icon: "mdi-home", linker: "/" },
      { text: "Button", icon: "mdi-play", linker: "/Button" },
    ],
  }),
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital@1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fruktur&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
#titlename {
     font-family: "ZCOOL KuaiLe", cursive;
    color: rgb(154, 179, 231);
    padding-left: 5px;
    font-size: 27px;
}
.font1 {
  font-family: "ZCOOL KuaiLe", cursive;
  font-size: 19px;
}
#test {
  text-align: center;
}
#title1 {
    font-family: "ZCOOL KuaiLe", cursive;
    color: rgb(154, 179, 231);
    font-size: 35px;
    padding-left: 20px;
    padding-top: 10px;
}

</style>
