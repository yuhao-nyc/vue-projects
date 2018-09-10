<template>
  <div>
    <textarea v-model="quote"></textarea>
    <button @click="addQuote()">Add Quote</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      quote: ""
    };
  },
  methods: {
    addQuote: function() {
      this.$emit("quoteAdded", this.quote); //emit a custom event to parent
      this.quote = "";
    }
  }
};
</script>