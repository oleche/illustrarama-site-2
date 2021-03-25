<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2 col-2"><a href="#" class="a-button-grey navbar-light navbar-nav nav-link" v-b-modal.modal-1 ref="btnShow">¡Suscribete!</a></div>
      <div class="col-md-8 col-xs-12 text-center">
        <span>&copy; Illustrarama.com 2018</span>
        <p>Hecho con <i class='fa fa-heart' /> por <a href='https://www.illustrarama.com/about'>Illustrarama</a></p>
      </div>
      <div class="col-md-2 col-xs-12 text-center">Siguenos en: <a href="https://www.facebook.com/illustrarama" target="_blank" class="pull-right" rel="noopener"><img class="img img-responsive" src="/ico-facebook.png" alt="Facebook logo to illustrarama fanpage"></a></div>
    </div>

    <b-modal id="modal-2" hide-header hide-footer body-class="">
      <template v-slot:modal-title>

      </template>
      <div class="text-center container">
        <b-row>
          <b-col class="col-sub">
            <h1 class="title-subs text-center">¡Gracias por tu suscripción!</h1>
            <p class="col text-center last-text-subs">Hemos enviado un correo a tu buzón de entrada</p>
            <b-button class="mt-3 btn btn-outline-danger button-subs-space" v-on:click="closeWelcomeModal">Cerrar</b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>

    <b-modal id="modal-1" hide-header hide-footer body-class="modalito">
      <template v-slot:modal-title>

      </template>
      <div class="d-block text-center">
        <b-row>
          <b-col cols="12" md="4" class="bgsubs">

          </b-col>
          <b-col class="col-sub">
            <h3 class="title-subs">Suscribete a nuestras noticias!</h3>
            <p class="text-justify last-text-subs">¡Puedes recibir noticias directamente a tu correo con solo suscribirte aquí!
              <br/>
              <small>Estarás recibiendo noticias semanales con lo mas relevante de la semana</small>
            </p>
            <form @submit.prevent="subscribe">
              <b-form-input
                  id="input-1"
                  v-model="email"
                  type="email"
                  required
                  placeholder="Escribe tu correo eletrónico"
                ></b-form-input>
              <span class="error">{{errorMsg}}</span>
              <b-button class="mt-3 btn btn-outline-danger button-subs-space" block type="submit">Suscribete</b-button>
            </form>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>
<style>
* {
  font-family: Raleway;
}
.last-text-subs{
  padding-bottom:10px;
  padding-top:20px;
}
.button-subs-space{
  margin-bottom:10px;

}
.modalito{
  padding:0 15px 0 0!important;
  display: block;
}
</style>
<style scoped>
.title-subs{
  font-family: "Poiret One", cursive, sans-serif!important;
  font-weight: bolder;
}
.error{
  color:#E02D19;
  top:5px;
  position:relative;
}
.modal-header{
  border:none!important;
  background-color: red;
}
.btn-secondary{
  background-color: #FFF!important;
}
.btn-secondary:hover, .btn-secondary:focus{
  color:#5a6268;
}
.bgsubs{
  background: url('https://picsum.photos/500/700?grayscale');
  background-size:cover;
}
@media only screen and (min-width: 600px) {
  .col-sub{
    padding:10px;
    display: block;
  }
}
@media only screen and (max-width: 600px) {
  .col-sub{
    display: block;
    margin-left: 10px;
  }
}
</style>
<script>
import axios from 'axios'

export default {
  name: 'i-footer',
  data: function({route}){
    let showSubs = ""
    if (this.$route.query.ss !== undefined && this.$route.query.ss !== null){
      showSubs = `${this.$route.query.ss}`;
    }
    return {
      email: '',
      errorMsg: '',
      showSubscription: showSubs
    }
  },
  async mounted() {
    await this.$recaptcha.init()
    if (this.showSubscription !== undefined && this.showSubscription !== ""){
      this.$root.$emit('bv::show::modal', 'modal-1', '#btnShow')
    }
  },
  methods: {
    closeWelcomeModal(){
      this.$root.$emit('bv::hide::modal', 'modal-2', '#btnShow')
    },
    async subscribe(){
      try {
        const token = await this.$recaptcha.execute('login')
        const payload = {
          email:this.email
        };
        try {
          if (this.email != ""){
            let response = await axios.post(`${process.env.API_URL || 'http://localhost:3000/api/v1'}/subscriptions`, payload, {
              headers: { Authorization: "Basic "+(process.env.API_AUTH || '123') }
            })
            this.$root.$emit('bv::hide::modal', 'modal-1', '#btnShow')
            this.$root.$emit('bv::show::modal', 'modal-2', '#btnShow')
          }else{
            this.errorMsg = "Debes escribir una dirección de correo electrónico"
          }
        }catch(error){
          this.errorMsg = "Ya estas suscrito!"
        }
      } catch (error) {
        console.log('Login error:', error)
      }
    }
  }

}
</script>
