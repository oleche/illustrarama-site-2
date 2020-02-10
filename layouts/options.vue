<template>
  <div>
    <b-navbar toggleable="md" class="bg-faded navbar-shadow">
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="mr-auto">
          <b-nav-item href="/">Inicio</b-nav-item>
          <b-nav-item href="/events">Convocatorias</b-nav-item>
          <b-nav-item href="/showcase">Showcase</b-nav-item>
          <b-nav-item href="/about">Acerca de</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand class="title-brand text-center" href="/">Illustrarama<span class="sub-title-brand"><br/>Source of illustration & design news</span></b-navbar-brand>
      <b-collapse is-nav id="nav_collapse" class="searchfix">
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/account"><i class='fa fa-user' /> Tu cuenta</b-nav-item>
          <b-nav-form action="/search">
            <b-form-input size="sm" :name="'q'" class="mr-sm-2" type="text" placeholder="Buscar"/>
            <b-button size="sm" class="btn btn-outline-danger my-2 my-sm-0" type="submit">Buscar</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nuxt/>
    <hr/>
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-2">&nbsp;</div>
        <div class="col-md-8 col-8 text-center">
          <span>&copy; Illustrarama.com 2018</span>
          <p>Hecho con <i class='fa fa-heart' /> por <a href='https://www.illustrarama.com/about'>Illustrarama</a></p>
        </div>
        <div class="col-md-2 col-2 text-right">Siguenos en: <a href="https://www.facebook.com/illustrarama" target="_blank" class="pull-right"><img class="img img-responsive" src="/ico-facebook.png" alt="Facebook logo to illustrarama fanpage"></a></div>
      </div>
    </div>
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
  height: 95px;
  background-color: #fff;
}

</style>
