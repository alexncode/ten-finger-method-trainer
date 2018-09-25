<template>
  <div class="statistic">
    <span>Speed of writing: {{ speed }} c/m | Chars: {{totalChar}} | Words: {{totalWords}} | Time: {{ totalTimeHuman }} | Errors: {{ errorCount }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Statistic",
  props: {
    speed: Number,
    totalChar: Number,
    totalWords: Number,
    totalTime: Number,
    errorCount: Number
  },
  data() {
    return {
      showModal: false
    };
  },
  computed: {
    totalTimeHuman: function() {
      return new Date(1000 * this.totalTime).toISOString().substr(11, 8);
    }
  },
  watch: {
    speed: function() {
      if (this.speed !== 0) {
        let date = new Date();
        let key =
          date.getDate() +
          ":" +
          (parseInt(date.getMonth()) + 1) +
          ":" +
          date.getFullYear();
        console.log(key);
        let stats = JSON.parse(window.localStorage.getItem("stats")) || {};
        if (stats[key]) {
          stats[key].speed = (stats[key].speed + this.speed) / 2;
          stats[key].totalChar += this.totalChar;
          stats[key].totalWords += this.totalWords;
          stats[key].totalTime += this.totalTime;
          stats[key].errorCount += this.errorCount;
          stats[key].count += 1;
        } else {
          stats[key] = {
            speed: this.speed,
            totalChar: this.totalChar,
            totalWords: this.totalWords,
            totalTime: this.totalTime,
            errorCount: this.errorCount,
            count: 1
          };
        }
        window.localStorage.setItem("stats", JSON.stringify(stats));
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.statistic {
  font-weight: bold;
  line-height: 2rem;
}
</style>
