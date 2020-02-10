<template>
  <b-navbar toggleable="md" class="bg-faded navbar-shadow">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand class="d-inline d-sm-none d-xs-none title-brand-sm text-center" href="/">Illustrarama<span class="sub-title-brand"><br/>Source of illustration & design news</span></b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="mr-auto">
        <b-nav-item href="/">Inicio</b-nav-item>
        <b-nav-item href="/about">Acerca de</b-nav-item>
        <b-button class="btn btn-outline-danger btn-susbcribe" v-b-modal.modal-1 ref="btnShow">¡Suscribete!</b-button>
      </b-navbar-nav>
    </b-collapse>
    <b-navbar-brand class="d-none d-lg-block d-xl-block title-brand text-center" href="/">Illustrarama<span class="sub-title-brand"><br/>Source of illustration & design news</span></b-navbar-brand>
    <b-collapse is-nav id="nav_collapse" class="searchfix">
      <b-navbar-nav class="ml-auto">
        <br class="d-block d-sm-none d-xs-none"/>
        <b-nav-form action="/search">
          <b-form-input size="sm" :name="'q'" class="mr-sm-2" type="text" placeholder="Buscar"/>
          <b-button size="sm" class="btn btn-outline-danger my-2 my-sm-0" type="submit">Buscar</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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

.btn-susbcribe{
  /* background: radial-gradient(circle, rgba(220,53,69,1) 52%, rgba(0,0,0,1) 100%); */
  background: white;
}
</style>
<script>
export default {
  name: 'i-header',
}
</script>
