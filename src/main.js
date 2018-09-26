import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

var VueFire = require('vuefire')
var firebase = require("firebase/app");
require("firebase/database");

// explicit installation required in module environments
Vue.use(VueFire)

var config = {
  apiKey: "AIzaSyCAPZYpHwebDDhmsaAmOZLfp0q2WkjE1c4",
  authDomain: "manytest-8f880.firebaseapp.com",
  databaseURL: "https://manytest-8f880.firebaseio.com/"
};

var firebaseApp = firebase.initializeApp(config);
var db = firebaseApp.database();

Vue.config.productionTip = false

new Vue({
  firebase: {
    samples: db.ref("samples"),
    // can also bind to a query
    // anArray: db.ref('url/to/my/collection').limitToLast(25)
    // testsObj: {
    //   source: db.ref("tests"),
    //   asObject: true
    // }
  },
  render: h => h(App)
}).$mount('#app')