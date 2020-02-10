<template>
  <div>
    <AppHeader/>
    <nuxt/>
    <hr/>
    <AppFooter/>
  </div>
</template>
<style scoped>
* {
  font-family: Raleway;
}

.searchfix{
  flex-basis: unset!important;
}

.title-brand{
  font-family: "Poiret One", cursive, sans-serif!important;
  color:#555!important;
  font-weight: bold;
  font-size: 50px;
  line-height: 18px;
  padding-top: 15px;
}

.title-brand-sm{
  font-family: "Poiret One", cursive, sans-serif!important;
  color:#555!important;
  font-weight: bold;
  font-size: 45px;
  line-height: 18px;
  padding-top: 15px;
  margin-right: 0px!important;
}


.sub-title-brand{
  font-family: "Poiret One", cursive, sans-serif!important;
  color:#555!important;
  font-weight: bold;
  font-size: 15px;
  display:block;
  /* margin-top: 30px; */
}

.navbar-shadow{
  box-shadow: -1px -1px 25px #ccc;
  min-height: 95px;
  background-color: #fff;
}

.btn-secondary{
  background-color: #FFF!important;
}
.btn-secondary:hover, .btn-secondary:focus{
  color:#5a6268;
}

</style>
<script>
import AppFooter from '~/components/footer/SiteFooter.vue'
import AppHeader from '~/components/header/SiteHeader.vue'

export default {
  name: 'illustraramaSiteFull',
  components: {
    AppFooter, AppHeader
  }
}
</script>
