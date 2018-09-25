<template>
  <div id="app">
    <div class="container">
      <Header v-on:withoutSample='withoutSample = !withoutSample' v-on:withoutKeyboard='withoutKeyboard = !withoutKeyboard' />
      <TextArea v-on:textChanged='calcSpeed' v-on:errorCount='setErrorCount' v-bind:layout="withoutSample" />
      <Statistic v-bind:speed="speedOfWriting" v-bind:totalChar="totalCharacters" v-bind:totalWords="totalWords" v-bind:totalTime="totalTime" v-bind:errorCount="errorCount" />
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
      text: "",
      active: false,
      startTime: Date,
      endTime: Date,
      speedOfWriting: 0,
      characterOffset: 0,
      withoutSample: false,
      withoutKeyboard: false,
      totalTime: 0,
      errorCount: 0
    };
  },
  computed: {
    totalCharacters: function() {
      return this.text.length;
    },
    totalWords: function() {
      //Counting the amount of words
      return this.text.split(" ").length;
    }
  },
  methods: {
    calcSpeed: function(val) {
      this.text = val;
      let vm = this;
      if (!vm.active) {
        vm.active = true;
        vm.startTime = Date.now();
        vm.characterOffset = vm.totalCharacters;
      }
      clearTimeout(delay);
      delay = setTimeout(function() {
        vm.active = false;
        vm.endTime = Date.now();
        //Calculate speed of writing character in minute. (totalCharacters / totalSeconds * 60sec)
        vm.speedOfWriting = Math.round(
          (vm.totalCharacters - vm.characterOffset) /
            ((vm.endTime - vm.startTime - 5000) / 1000) *
            60
        );
        if (vm.speedOfWriting < 0 || !vm.speedOfWriting) {
          vm.speedOfWriting = 0;
        }
        vm.totalTime = Math.round((vm.endTime - vm.startTime - 5000) / 1000);
      }, 5000);
    },
    setErrorCount: function(val) {
      this.errorCount = val;
    }
  }
};
</script>

<style lang="scss">
body {
  background-color: #d1d1d1;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
}

.container {
  max-width: 900px;
  margin: auto;
}
</style>
