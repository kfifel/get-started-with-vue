<template>
    <div class="">
        <img src="@/../public/assets/images/logo.png" alt="logo" class="logo">
    </div>
    <div class="nav-header">
        <ul v-for="(nav, index) of navs" :key="index">
                <router-link :to="nav.path" class="a">
                    <li>
                        <h3>{{ nav.title }}</h3>
                    </li>
                </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    
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
        },
        {
          path :'/quiz',
          title: 'quiz'
        }]
    }
  }
}
</script>

<style>

</style>