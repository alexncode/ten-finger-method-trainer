<template>
  <div id="app">
    <div class="container">
      <Header v-on:withoutSample='withoutSample = !withoutSample' v-on:withoutKeyboard='withoutKeyboard = !withoutKeyboard' />
      <TextArea v-on:textChanged='updateStats' v-on:errorCount='setErrorCount' v-bind:layout="withoutSample" />
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
      // characterOffset: 0,
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
    updateStats: function(val) {
      this.text = val;
      let vm = this;
      if (!vm.active) {
        vm.active = true;
        vm.startTime = Date.now();
        // vm.characterOffset = vm.totalCharacters;
      }
      clearTimeout(delay);
      vm.endTime = Date.now();
      vm.calcSpeed();
      vm.totalTime = Math.round((vm.endTime - vm.startTime) / 1000);
      delay = setTimeout(function() {
        vm.active = false;
        vm.saveStats();
      }, 5000);
    },
    setErrorCount: function(val) {
      this.errorCount = val;
    },
    calcSpeed: function() {
      //Calculate speed of writing character in minute. (totalCharacters / totalSeconds * 60sec)
      this.speedOfWriting = Math.round(
        (this.totalCharacters / ((this.endTime - this.startTime) / 1000)) * 60
      );
      if (this.speedOfWriting < 0 || !this.speedOfWriting) {
        this.speedOfWriting = 0;
      }
    },
    saveStats: function() {
      if (
        this.speedOfWriting !== 0 &&
        (this.totalTime >= 180 || this.totalCharacters >= 500)
      ) {
        let date = new Date();
        let today =
          date.getDate() +
          ":" +
          (parseInt(date.getMonth()) + 1) +
          ":" +
          date.getFullYear();
        let stats = JSON.parse(window.localStorage.getItem("stats")) || [];
        stats.push({
          speed: this.speedOfWriting,
          totalChar: this.totalCharacters,
          totalWords: this.totalWords,
          totalTime: this.totalTime,
          errorCount: this.errorCount,
          errorPerChar: (this.errorCount / this.totalCharacters) * 100, //Percentage
          data: today
        });
        // if (stats[key]) {
        //   stats[key].speed = Math.round(
        //     (stats[key].speed + this.speedOfWriting) / 2
        //   );
        //   stats[key].totalChar += this.totalCharacters;
        //   stats[key].totalWords += this.totalWords;
        //   stats[key].totalTime += this.totalTime;
        //   stats[key].errorCount += this.errorCount;
        //   stats[key].count += 1;
        // } else {
        //   stats[key] = {
        //     speed: this.speedOfWriting,
        //     totalChar: this.totalCharacters,
        //     totalWords: this.totalWords,
        //     totalTime: this.totalTime,
        //     errorCount: this.errorCount,
        //     count: 1
        //   };
        // }
        window.localStorage.setItem("stats", JSON.stringify(stats));
      }
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
  text-align: center;
  color: #2c3e50;
  margin-top: 0.5rem;
}

.container {
  max-width: 900px;
  margin: auto;
  padding: 15px 20px;
  background-color: rgb(223, 223, 223);
  border-radius: 15px;
}
</style>
