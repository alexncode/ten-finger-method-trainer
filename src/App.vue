<template>
  <div id="app">
    <div class="container">
      <Header v-on:withoutSample='withoutSample = !withoutSample' v-on:withoutKeyboard='withoutKeyboard = !withoutKeyboard' />
      <TextArea v-on:statistic="updateStats" v-bind:layout="withoutSample" />
      <Statistic v-bind:stats="stats" />
      <Keyboard v-if="!withoutKeyboard" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import TextArea from "./components/TextArea.vue";
import Statistic from "./components/Statistic.vue";
import Keyboard from "./components/Keyboard.vue";

let delay = null;

export default {
  name: "app",
  components: {
    Keyboard,
    TextArea,
    Statistic,
    Header
  },
  data() {
    return {
      withoutSample: false,
      withoutKeyboard: false,
      stats: {
        speed: 0,
        totalChar: 0,
        totalWords: 0,
        totalTime: 0,
        errorCount: 0
      }
    };
  },
  methods: {
    updateStats: function(val) {
      this.stats = val;
    }
  }
};
</script>

<style lang="scss">
body {
  background-color: #414141;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 0.2rem;
}

.container {
  max-width: 900px;
  margin: auto;
  padding: 15px 20px;
  background-color: rgb(223, 223, 223);
  border-radius: 15px;
  display: flex;
  height: 95vh;
  flex-flow: column;
}
</style>
