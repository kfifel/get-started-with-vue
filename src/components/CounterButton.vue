<template>
    <button 
        class="btn btn-success"
        @click="counter++"
    >
        {{counter}}
    </button>
</template>

<script >
    export default{
        data(){
            return {
                counter : 0
            }
        }
    }
</script>