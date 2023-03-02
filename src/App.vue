<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Quiz</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li 
            v-for="(nav, index) of navs"
            :key="index"
            class="nav-item"  
          >
            <router-link :to="nav.path">
              {{ nav.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>

</style>
<script>

export default{
  data() {
    return {
      navs: [ 
        {
          path :'/',
          title: 'home'
        }, 
        {
          path :'/about',
          title: 'about'
        }]
    }
  }
}

</script>