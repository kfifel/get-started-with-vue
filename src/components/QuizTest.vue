<template>
  <div class="quiz-container">
    <h2>
        {{ questions[index].text }}
        <div class="timer-question">
            <box-icon name='timer' size='lg' ></box-icon>
            <span id="counter-question">20</span>
        </div>
    </h2>
    <div class="answer" v-for="(choice, i) of questions[index].answers" :key="i">
      <label
          :for="i"
          :id="'choice'+i"
          class="answer-items"
          :class="choice.id === answersSelected.id ? 'bg-color-2-100' : 'bg-color-2-50'"
          @click="setAnswer(choice)"
      >
          {{ choice }}
          <input type="radio" :id="i" name="choice" :value="i">
      </label>
    </div>
        <button class="btn-next" @click="submitAnswer">next</button>
  </div>

  <div>user: {{ user.first_name }}</div>
  {{ answersSelected }}
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      progress: 1,
      answersSelected: {},
      showExplanation: false
    };
  },
  computed: {
    user(){
      return this.$store.state.user
    },
    questions(){
      return this.$store.getters.getQuestion;
    }
  },
  methods: {
    setAnswer(answer){
      this.answersSelected = answer
    },
    submitAnswer() {
      if( !this.answersSelected.id ) {
        alert('please select one answer!')
      }
      else {
        console.log('good')
      }
    },
    getAnswerText(question, answerId) {
      return question.answers.find((answer) => answer.id === answerId)?.text;
    },
  },
};
</script>
  
<style scoped>
</style>