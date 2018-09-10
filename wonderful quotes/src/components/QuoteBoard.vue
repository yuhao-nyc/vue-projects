<template>
  <div>
    <quote v-for="(quote, index) in quoteCollection" :key="index" @click.native="removeQuote(index)">
      <h1>{{ quote }}</h1>
    </quote>
    <div>Info: click on a Quote to delete it</div>
  </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  components: {
    Quote
  },
  props: ["quoteCollection"],
  data: function() {
    return {};
  },
  methods: {
    removeQuote(index) {
      this.$emit("quoteRemoved", index);
    }
  }
};
</script>