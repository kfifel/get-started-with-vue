<template>
  <div class="quiz-container">
    <h2>
        {{ questions[index].text }}
        <div class="timer-question">
            <box-icon name='timer' size='lg' ></box-icon>
            <span id="counter-question">20</span>
        </div>
    </h2>
    <div class="answer" v-for="(choice, i) of questions[index].choices" :key="i">
      <label :for="i" :id="'choice'+i" class="answer-items bg-color-2-50">
          {{ choice }}
          <input :type="choice.answers.length>1? 'radio' : 'checkbox'" :id="i" name="choice" :value="i">
      </label>
    </div>
        <button class="btn-next" >next</button>
  </div>

  <div>user: {{ user.first_name }}</div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      progress: 1,
      answers: {},
      showExplanation: {},
      showResults: false,
      questions: [
        {
          id: 1,
          text: 'What is the capital of France?',
          answers: [
            { id: 1, text: 'Paris' },
            { id: 2, text: 'London' },
            { id: 3, text: 'Madrid' },
            { id: 4, text: 'Berlin' },
          ],
          correctAnswer: 1,
          explanation: 'Paris is the capital of France.',
        },
        {
          id: 2,
          text: 'What is the largest planet in our solar system?',
          answers: [
            { id: 1, text: 'Mars' },
            { id: 2, text: 'Jupiter' },
            { id: 3, text: 'Venus' },
            { id: 4, text: 'Saturn' },
          ],
          correctAnswer: 2,
          explanation: 'Jupiter is the largest planet in our solar system.',
        },
      ],
    };
  },
  computed: {
    progressPercentage() {
      return (this.progress / this.quiz.questions.length) * 100 + "%";
    },
    correctAnswers() {
      return this.quiz.questions.filter(
        (question) => this.answers[question.id] === question.correctAnswer
      ).length;
    },
    
    user(){
      return this.$store.state.user
    } 
  },
  methods: {
    submitAnswer(questionId) {
      if (!this.answers[questionId]) {
        alert("Please select an answer first.");
        return;
      }

      if (this.progress === this.quiz.questions.length) {
        this.showResults = true;
      } else {
        this.progress++;
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