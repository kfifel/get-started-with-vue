<template>
    <div>
    <article>
      <h1>Result Quiz</h1>
        Hello,
          your score is : <h2><b class="text-blue">{{ (result * 100 / questionsLength).toFixed(3)}}% </b> <br>
          {{ result }} from {{ questionsLength }} questions</h2>
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
                <h2> {{ question.text }} </h2><br>
                  <p> <b> correct answer: </b> {{ getCorrectAnswerById(question).text }} </p>
                </div>
            </div>
            <div v-else>
                <div class="text-bg-warning m-3 p-2">
                <h2> {{ question.text }} </h2><br>
                  <p> <b> correct answer: </b> {{ getCorrectAnswerById(question).text }} </p>
                </div>

            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ResultQuiz",
  data(){
  return {
    showMyAnswers: false,
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
    },
    getCorrectAnswerById(question){
      const [correct] = question.answers.filter(e => e.id === question.correctAnswer );
      return correct??null;
    }
  },
}
</script>

<style scoped>

</style>