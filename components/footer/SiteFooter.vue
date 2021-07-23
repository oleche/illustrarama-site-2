<template>
  <footer>
    <div class="container-fluid">
      <div class="container">
          <div class="row">
              <div class="col-md-12 col-lg-4">
                  <div class="footer-info">
                      <a href="index.html" class="footer-logo">
                          <img src="/logo.png" alt="footer_logo" class="img-fluid footer-logo">
                      </a>
                      <p class="footer-info-text">
                         <small>Somos un colectivo de programadores y diseñadores dedicados con la idea de entregar contenido traducido de muchos sitios en ingles.</small>
                      </p>
                      <div class="footer-social-link">
                          <div class="section-heading">
                              <h3 class="title-subs">Siguenos</h3>
                          </div>
                          <ul>
                              <li>
                                  <a target="_blank" href="https://www.facebook.com/illustrarama">
                                    <img class="img img-responsive" src="/ico-facebook.png" alt="Facebook logo to illustrarama fanpage"/> Facebook
                                  </a>
                              </li>
                              <li>
                                  <a target="_blank" href="https://twitter.com/illustrarama">
                                    <img class="img img-responsive" src="/ico-twitter.png" alt="Twitter logo to illustrarama fanpage"/> Twitter
                                  </a>
                              </li>
                              <li>
                                  <a target="_blank" href="https://www.instagram.com/illustrarama">
                                    <img class="img img-responsive" src="/ico-instagram.png" alt="Instagram logo to illustrarama fanpage"/> Instagram
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <!-- End Social link -->
                  </div>
              </div>
              <!-- End Col -->
              <div class="footer-info col-md-12 col-lg-8">
                  <!-- End Contact Row -->
                  <div class="row">
                      <div class="col-md-12 col-lg-6">
                          <div class="footer-widget footer-left-widget">
                            <div class="section-heading">
                                <h3 class="title-subs">Artículos de...</h3>
                            </div>
                            <ul>
                                <li v-for="tag in tags" :key="tag._id">
                                  <a v-bind:href="'/tag/'+tag.tag">{{tag.name}}</a>
                                </li>
                            </ul>
                          </div>
                          <!-- End Footer Widget -->
                      </div>
                      <!-- End col -->
                      <div class="col-md-12 col-lg-6">
                          <div class="footer-widget">
                            <div class="section-heading">
                                <h3 class="title-subs">Suscribete a nuestras noticias!</h3>
                            </div>
                            <div v-if="sent">
                              <h1 class="title-subs text-center">¡Gracias por tu suscripción!</h1>
                              <p class="col text-center last-text-subs">Hemos enviado un correo a tu buzón de entrada</p>
                              <b-button class="mt-3 btn btn-outline-danger button-subs-space" v-on:click="closeWelcomeModal">Cerrar</b-button>
                            </div>
                            <div v-if="!sent">
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
                            </div>
                          </div>
                          <!-- End footer widget -->
                      </div>
                      <!-- End Col -->
                  </div>
                  <!-- End Row -->
              </div>
              <!-- End Col -->
          </div>
          <!-- End Widget Row -->
      </div>

      <hr/>
      <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <span>&copy; Illustrarama.com 2021</span>
                    </div>
                    <!-- End Col -->
                    <div class="col-md-8">
                        <div class="copyright-menu">
                            <ul>
                                <li>
                                    <a href="/">Inicio</a>
                                </li>
                                <li>
                                    <a href="/comments">Política de comentarios</a>
                                </li>
                                <li>
                                    <a href="/cookies">Política de privacidad</a>
                                </li>
                                <li>
                                    <a href="/about">Acerca de</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- End col -->
                </div>
                <!-- End Row -->
            </div>
            <!-- End Copyright Container -->
        </div>
        <!-- End Copyright -->

      <b-modal id="modal-2" hide-header hide-footer body-class="">
        <template v-slot:modal-title>

        </template>
        <div class="text-center container">
          <b-row>
            <b-col class="col-sub">

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

            </b-col>
          </b-row>
        </div>
      </b-modal>
    </div>
  </footer>

</template>
<style>
* {
  font-family: Raleway;
}
</style>
<style scoped>
a, a:hover {
  color: #E02D19;
}

.footer-logo {
  height:10vh;
}

.footer-social-link li {
  margin: 10px 0;
}

.footer-info ul {
   list-style-type: none;
   padding: 0;
   margin: 0;
 }

.copyright {
  padding: 28px 0;
  /* margin-top: 55px; */
  background-color: #fff;
}

.copyright span,
.copyright a {
  color: #878787;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.copyright a:hover {
  color:#007bff;
}

.copyright-menu ul {
  text-align: right;
  margin: 0;
}

.copyright-menu li {
  display: inline-block;
  padding-left: 20px;
}

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
  .section-heading {
    margin-top:20px;
  }
  .footer-logo {
    height:auto;
  }
}
</style>
<script>
import axios from 'axios'
import API from '~/lib/api.js'

export default {
  name: 'i-footer',
  data ({route}) {
    let showSubs = ""
    if (this.$route.query.ss !== undefined && this.$route.query.ss !== null){
      showSubs = `${this.$route.query.ss}`;
    }
    return {
      email: '',
      errorMsg: '',
      sent: false,
      showSubscription: showSubs,
      tags: []
    }
  },
  async mounted() {
    let tag = await API.tags();
    await this.$fb.enable();
    await this.$recaptcha.init();
    if (this.showSubscription !== undefined && this.showSubscription !== ""){
      this.sent = false;
    }
    this.tags = tag.tags;
  },
  methods: {
    closeWelcomeModal(){
      this.sent = false;
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
            this.sent = true;
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
