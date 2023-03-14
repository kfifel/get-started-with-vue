<template>
  <article>
    <h1>Result Quiz</h1>
      Hello,
        your score is : <h2><b class="text-blue">{{ (result * 100 / questionsLength).toFixed(3)}}% </b> from {{ questionsLength }} questions</h2>
  </article>

</template>

<script>
export default {
  name: "ResultQuiz",
  data(){

  },
  computed: {
    result() {
      return this.$store.getters.getCorrectAnswers;
    },
    questionsLength(){
      return this.$store.state.questions.length;
    }
  }
}
</script>

<style scoped>

</style>