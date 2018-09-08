<template>
  <div class="text-area">
      <textarea class="written-text" name="main" id="text" 
                @input="$emit('textChanged', $event.target.value)" 
                v-model="inputText"></textarea>
      <div v-if="!layout" class="sample-text" v-html="sampleText"></div>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    layout: false
  },
  data() {
    return {
      inputText: ""
    };
  },
  created: function() {
    this.class = '<span style="background-color: lightgreen;">';
    this.sample =
      "From the comfort of our modern lives we tend to look back at the turn of the twentieth century as a dangerous time for sea travellers. With limited communication facilities, and shipping technology still in its infancy in the early nineteen hundreds, we consider ocean travel to have been a risky business. But to the people of the time it was one of the safest forms of transport. At the time of the Titanic’s maiden voyage in 1912, there had only been four lives lost in the previous forty years on passenger ships on the North Atlantic crossing. And the Titanic was confidently proclaimed to be unsinkable. She represented the pinnacle of technological advance at the time. Her builders, crew and passengers had no doubt that she was the finest ship ever built. But still she did sink on April 14, 1912, taking 1,517 of her passengers and crew with her.";
    String.prototype.insert = function(idx, str) {
      return this.slice(0, idx) + str + this.slice(idx);
    };
  },
  computed: {
    sampleText: function() {
      return (
        this.class +
        this.sample.replace("</span>", "").insert(this.pos, "</span>")
      );
    },
    pos: function() {
      return this.inputText.length;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text-area {
  display: flex;
  width: 100%;
  height: 300px;
  background-color: #fff;
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
    border: 1px solid #b0b0b0;
    flex: 1;
    padding: 0.5rem;
    margin-left: 1px;
  }
}
.right {
  background-color: lightgreen;
  color: green;
}
</style>
