<template>
  <div class="statistic">
    <span>Speed of writing: <span v-html="speedColorized"></span> c/m </span>
    <span>Chars: {{ stats.totalChar }} </span>
    <span>Words: {{ stats.totalWords }} </span>
    <span>Time: {{ totalTimeHuman }} </span>
    <span>Errors: {{ stats.errorCount }}</span>
  </div>
</template>

<script>
export default {
  name: "Statistic",
  props: {
    stats: {
      speed: Number,
      totalChar: Number,
      totalWords: Number,
      totalTime: Number,
      errorCount: Number
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  computed: {
    totalTimeHuman: function() {
      return new Date(1000 * this.stats.totalTime).toISOString().substr(14, 5);
    },
    speedColorized: function() {
      let result = "";
      const speed = this.stats.speed;
      if (speed > 300) {
        result = `<span style="color: orange;">${speed}</span>`;
      } else if (speed > 200) {
        result = `<span style="color: blue;">${speed}</span>`;
      } else if (speed > 100) {
        result = `<span style="color: green;">${speed}</span>`;
      } else if (speed > 50) {
        result = `<span style="color: red;">${speed}</span>`;
      } else {
        result = speed;
      }
      return result;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.statistic {
  font-weight: bold;
  line-height: 2rem;
  text-align: center;
}
</style>
