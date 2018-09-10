<template>
    <div class="container">

        <progress-bar :progress = "quoteCollection.length"></progress-bar>

        <!-- accept custom event coming from this child -->
        <add-quote @quoteAdded="addQuote"></add-quote>

        <quote-board :quoteCollection="quoteCollection" @quoteRemoved="removeQuote()"></quote-board>
    </div>
</template>

<script>
import QuoteBoard from "./components/QuoteBoard.vue";
import AddQuote from "./components/AddQuote.vue";
import ProgressBar from "./components/ProgressBar.vue";

export default {
  props: {},
  data: function() {
    return {
      quoteCollection: ["good quote", "bad quote"],
      maxQuote: 10
    };
  },
  components: {
    QuoteBoard,
    AddQuote,
    ProgressBar
  },
  methods: {
    addQuote(quote) {
      this.quoteCollection.push(quote);
      if (this.quoteCollection.length >= this.maxQuote) {
        alert("you reached limit");
        return;
      }
    },
    removeQuote(index) {
      this.quoteCollection.splice(index, 1);
    }
  }
};
</script>

<style>
</style>
