<template>
    <button @click="counter++">{{counter}}</button>
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