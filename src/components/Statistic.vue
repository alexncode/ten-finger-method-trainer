<template>
  <div class="statistic">
      <span>Speed of writing: {{ speed }} c/m | Characters count: {{totalChar}} | Words count: {{totalWords}}</span>
  </div>
</template>

<script>
export default {
  name: "Statistic",
  props: {
    speed: Number,
    totalChar: Number,
    totalWords: Number
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
