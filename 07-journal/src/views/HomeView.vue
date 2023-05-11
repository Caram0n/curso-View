<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Hola Mundo</h1>

    <button v-on:click="goToDaybook" class="btn btn-primary">Primary</button>
    <button v-on:click="goToDaybook" class="btn btn-secondary">Secondary</button>
    <button v-on:click="goToDaybook" class="btn btn-success">Success</button>
  </div>
</template>

<script>

export default {
 methods:{
  goToDaybook(){
   this.$router.push({name:'daybook'})
  }
 }
}

</script>

