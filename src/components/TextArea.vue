<template>
  <div class="text-area">
      <textarea name="main" id="text" cols="30" rows="10" @input="$emit('textChanged', $event.target.value)"></textarea>
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
  width: 100%;
  height: 300px;
  textarea {
    height: 95%;
    width: 95%;
  }
}
</style>
