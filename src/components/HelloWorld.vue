<template>
  <div class="hello" v-if="false">
    <h2 class="text-green">{{ data }}</h2>

    <div class="container">
      <form  v-on:submit.stop.prevent="log('clicked!', $event)">

        <h3> Test From</h3>

        <div class="form-groupe">
          <label for="first_name">First name:</label>
          <input type="text" id="first_name" v-model="formData.first_name">
        </div>

        <div class="form-groupe">
          <label for="last_name">Last name:</label>
          <input type="text" id="last_name" v-model="formData.last_name">
        </div>
        <button @click="clearForm"> cancel </button>
        <button @click="saveForm"> save </button>
      </form>  
    </div> 
    <div class="notification bg-blue">
        {{ message }}
    </div>
  </div>

  <div>
    <h1>Home page for quiz</h1>
    <ul>
      <li>
          this web site will offer to you a quiz
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    data: String
  },
  data() {
    return {
      formData: {
        id: 1,
        first_name: "",
        last_name: "",
      },
      message: ''
    }
  },
  methods: {
    saveForm(){
      this.message = this.formData
    },
    clearForm(){
      this.message = ''
      this.formData.first_name = ''
      this.formData.last_name = ''
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
