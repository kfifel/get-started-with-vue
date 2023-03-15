<template>
  <article>
    <h1>Result Quiz</h1>
      Hello,
        your score is : <h2><b class="text-blue">{{ (result * 100 / questionsLength).toFixed(3)}}% </b> from {{ questionsLength }} questions</h2>
  </article>

  <button
      class="btn btn-info"
      @:click="displayMyAnswers"

  >
    show my answers
  </button>
  <div v-if="showMyAnswers">
      <div v-for="question in questions" :key="question.id">
          <div v-if="question.userAnswer">
              <div class="text-bg-success m-2 p-2">
                {{ question.text }}
              </div>
          </div>
          <div v-else>
              <div class="text-bg-warning m-3 p-2">
                {{ question.text }}
              </div>

          </div>
      </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "ResultQuiz",
  data(){
  return {
    showMyAnswers: ref(false),
  }
  },
  computed: {
    result() {
      return this.$store.getters.getCorrectAnswers;
    },
    questionsLength(){
      return this.$store.state.questions.length;
    },
    questions(){
      let data = this.$store.getters.getQuestion;
      return data.sort((a,b)=>a.userAnswer - b.userAnswer)
    }
  },
  methods: {
    displayMyAnswers() {
      this.showMyAnswers = true;
      alert(this.showMyAnswers)
    }
  },
}
</script>

<style scoped>

</style>