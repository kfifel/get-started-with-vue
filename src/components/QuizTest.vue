<template>
  <div class="quiz-container">
    <h2>
        {{ questions[index].text }}
        <div class="timer-question">
            <box-icon name='timer' size='lg' ></box-icon>
            <span id="counter-question">{{  count }}</span>
        </div>
    </h2>
    <div class="answer">
      <div v-for="(choice, i) of questions[index].answers" :key="i">
        <label
            :for="i"
            :id="'choice'+i"
            class="answer-items"
            :class="choice.id === selectedAnswer.id ? 'bg-color-2-100' : 'bg-color-2-50'"
            @click="setAnswer(choice)"
        >
            {{ choice.text }}
            <input type="radio" :id="i" name="choice" :value="i" class="d-none">
        </label>
      </div>
    </div>
        <button class="btn-next" 
                :disabled="nextDisabled"
                :class="nextDisabled? 'bg-red' : ''"
                @click="submitAnswer"
        >
          next
        </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      selectedAnswer: {},
      count: 20,
      nextDisabled: true
    };
  },
  computed: {
    user(){
      return this.$store.state.user
    },
    questions(){
      return this.$store.getters.getQuestion;
    },
  },
  methods: {
    setAnswer(answer){
      this.selectedAnswer = answer
      this.nextDisabled = false;
    },
    submitAnswer() {
      if(!this.selectedAnswer.id){
        alert('select some answer');
        return;
      }
      else if( this.selectedAnswer.id === this.questions[this.index].correctAnswer ) {
        //alert('bravo');
        this.$store.commit('setCorrectAnswer', this.questions[this.index].id);
      }else{
        //alert('faux!');
        this.$store.commit('setWrongAnswer', this.questions[this.index].id)
      }
        if(this.index === this.questions.length -1 ){
          alert('done')
          this.$router.push('/result');
        } else {
          this.index++;
        }
        this.selectedAnswer = {};
        this.nextDisabled = true;
    },
  },
  created() {
    // const interval = setInterval(() => {
    //   if (this.count > 0) {
    //     this.count--;
    //   } else {
    //     clearInterval(interval);
    //     document.querySelector(".btn-next").setAttribute("disabled", "disabled");
    //     setTimeout(() => {
    //       this.count = '--';
    //       setTimeout(() => {
    //         this.index++;
    //         document.querySelector(".btn-next").removeAttribute("disabled");
    //       }, 1000);
    //     }, 1000);
    //   }
    // }, 1000);
  },
};
</script>
  
<style scoped>
</style>