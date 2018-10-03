<template>
  <div class="statistic">
    <span>Speed of writing: <span v-html="speedColorized"></span> c/m </span>
    <span>Chars: {{totalChar}} </span>
    <span>Words: {{totalWords}} </span>
    <span>Time: {{ totalTimeHuman }} </span>
    <span>Errors: {{ errorCount }}</span>
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
      return new Date(1000 * this.totalTime).toISOString().substr(14, 5);
    },
    speedColorized: function() {
      let result = "";
      if (this.speed > 300) {
        result = `<span style="color: orange;">${this.speed}</span>`;
      } else if (this.speed > 200) {
        result = `<span style="color: blue;">${this.speed}</span>`;
      } else if (this.speed > 100) {
        result = `<span style="color: green;">${this.speed}</span>`;
      } else if (this.speed > 50) {
        result = `<span style="color: red;">${this.speed}</span>`;
      } else {
        result = this.speed;
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
}
</style>
