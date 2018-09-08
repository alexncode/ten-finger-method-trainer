<template>
  <div class="text-area">
      <textarea class="written-text" name="main" id="text" @input="$emit('textChanged', $event.target.value)"></textarea>
      <div class="sample-text">
        Some sample text
      </div>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text-area {
  display: flex;
  width: 100%;
  height: 300px;
  .written-text {
    flex: 1;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    padding: 0.5rem;
    resize: none;
  }
  .sample-text {
    text-align: left;
    border: 1px solid gray;
    flex: 1;
    padding: 0.5rem;
    margin-left: 1px;
  }
}
</style>
