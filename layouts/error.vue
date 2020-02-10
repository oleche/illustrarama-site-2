<template>
  <div class="container">
    <div v-if="error.statusCode === 404">
      <h1 class="hugeText text-right">{{error.statusCode}}</h1>
      <h2 class="text-right">¡Pagina no encontrada!</h2>
    </div>
    <div v-else>
      <h1 class="hugeText text-right">{{error.statusCode}}</h1>
      <h2 class="text-right">Ha ocurrido un error!</h2>
    </div>
    <div class="bottomLink">
      <hr/>
      <nuxt-link to="/">Regresa a la página principal</nuxt-link>
    </div>
  </div>
</template>
<style scoped>
  .container{
    height: 79vh;
  }
  .hugeText{
    font-size: 30vh;
  }
  .bottomLink{
    margin-top:20vh;
  }
</style>
<script>
export default {
  props: ['error']
}
</script>
