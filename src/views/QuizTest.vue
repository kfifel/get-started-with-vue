<template>
  <div>
    <h1>Quiz App</h1>
    <QuizTest/>
  </div>
</template>

<script>
import QuizTest from '@/components/QuizTest.vue';

export default {
  name: 'QuizView',
  components: {
    QuizTest,
  },
  data() {
    return {
      
    };
  },
};
</script>
