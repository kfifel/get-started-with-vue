<template>
  <div>
    <div>
      <aside>
        <SideBar />
      </aside>
    </div> 

    <div class="">
        <main>
            <div class="main-container">
                <div class="stepper-bar d-none">
                    <div class="stepper-item bg-color-1-50" id="stepper-item-1">
                        <box-icon name='info-circle' size='lg'></box-icon>
                    </div>
                    <div class="stepper-line" id="stepper-line-1"></div>
                    <div class="stepper-item" id="stepper-item-2">
                        <box-icon name='question-mark' size='lg'></box-icon>
                    </div>
                    <div class="stepper-line" id="stepper-line-2"></div>
                    <div class="stepper-item" id="stepper-item-3">
                        <box-icon name='last-page' size='lg'></box-icon>
                    </div>
                </div>
                <div class="progress d-none">
                    <span id="progress-counter">0%</span><div class="progress-bar"></div>
                </div>
                <div class="container bg-color-1-75">
                    
                    <router-view/>

                </div>
            </div>
        </main>
    </div>
  </div>
</template>

<style>

</style>
<script>
import SideBar from '@/components/SideBar.vue'
export default{
  components:{
    SideBar,
  }
}

</script>