<template>
  <div id="app">
    <div class="container">
      <TextArea v-on:textChanged='calcSpeed'/>
      <Statistic v-bind:speed="speedOfWriting" v-bind:totalChar="totalCharacters" v-bind:totalWords="totalWords"/>
      <Keyboard/>
    </div>
  </div>
</template>

<script>
import TextArea from "./components/TextArea.vue";
import Statistic from "./components/Statistic.vue";
import Keyboard from "./components/Keyboard.vue";

let delay = null;

export default {
  name: "app",
  components: {
    Keyboard,
    TextArea,
    Statistic
  },
  data() {
    return {
      text: "",
      active: false,
      startTime: Date,
      endTime: Date,
      speedOfWriting: 0,
      characterOffset: 0
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
      }, 5000);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  max-width: 900px;
  margin: auto;
}
</style>
