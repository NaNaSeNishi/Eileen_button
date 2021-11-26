// vue.config.js
module.exports = {
    lintOnSave: false,

    transpileDependencies: [
      'vuetify'
    ],
    outputDir: 'dist',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/Eileen_button/'
      : '/'

}
