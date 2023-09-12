<template>
  <div>
    <h4>{{ count }}</h4>
    <button @click="count++">点击</button>
  </div>
</template>

<script>
export default {
    name:'HButton',
    data(){
        return {
            count:0
        }
    }
}
</script>

<style>

</style>
