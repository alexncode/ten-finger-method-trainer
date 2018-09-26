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
