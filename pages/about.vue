<template>
  <section class="container">
    <div class="jumbotron bg-nice">
      <div class="container">
        <h1 class="display-3">Sobre Illustrarama</h1>
        <p class="display-3">La pasión por la ilustración y el diseño gráfico nos une.</p>
      </div>
    </div>

    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-12">
          <h2>Quienes somos?</h2>
          <p>Buena pregunta, somos un colectivo de programadores y diseñadores dedicados con la idea de entregar contenido traducido de muchos sitios en ingles. Lo descargamos, traducimos y entregamos asi de simple.</p>
          <p>Soñamos con ayudar a la comunidad y entregar una ventana de inspiracion con contendio en español</p>
          <p>A inspirarse se ha dicho</p>
        </div>
        <div class="col-md-12 text-center">
          Puedes apoyarnos con una pequeña donación para un café :@ <br/>
          <i class="fas fa-arrow-down"></i>
          <br/>
          <a href='https://ko-fi.com/Y8Y7FTTW' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi2.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
        </div>
      </div>

      <hr/>
      <div class="row">
        <div class="col-md-4">
          <h2>Politicas de privacidad y cookies</h2>
          <p>Conoce acerca de nuestras politicas de privacidad </p>
          <p><a class="btn btn-secondary" href="/cookies" role="button">Ir &raquo;</a></p>
        </div>
        <div class="col-md-4">
          <h2>Politica de comentarios</h2>
          <p>Conoce acerca de nuestra politica de comentarios</p>
          <p><a class="btn btn-secondary" href="/comments" role="button">Ir &raquo;</a></p>
       </div>
       <small>Este sitio esta protegido por reCAPTCHA y las
          <a href="https://policies.google.com/privacy">Politicas de privacidad</a> de Google y aplica los
          <a href="https://policies.google.com/terms">Terminos de servicio</a>.
      </small>
      </div>

      <hr>


    </div> <!-- /container -->

  </section>
</template>

<script>

export default {
  head () {
    return {
      title: `Illustrarama | Source of illustration and design news | Acerca de`,
      meta: [
        {
          "http-equiv": `content-language`,
          content:  `ll-cc`
        },
        {
          name: `msvalidate.01`,
          content: `CDA680649F7C99151274ACD92D05990E`
        },
        {
          hid: `description`,
          name: 'description',
          content: `Las mejores noticias de diseño e ilustración todos los dias. Tu dosis diaria de inspiración | Acerca de`
        },
        {
          hid: `keywords`,
          name: 'keywords',
          keywords: 'illustrarama, ilustracion, ilustración, diseno, diseño, diseño gráfico, diseno grafico, arte, artistas, ilustradores, noticias, noticias de ilustracion, noticias de ilusatración, recursos de diseno, recursos de diseño',
          content: 'illustrarama, ilustracion, ilustración, diseno, diseño, diseño gráfico, diseno grafico, arte, artistas, ilustradores, noticias, noticias de ilustracion, noticias de ilusatración, recursos de diseno, recursos de diseño'
        },
        {
          hid: `image`,
          name: 'image',
          content: 'https://www.illustrarama.com/logo.png'
        },
        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: '541685809560665'
        },
        {
          hid: `name`,
          name: 'name',
          content: 'Illustrarama.com'
        },
        {
          hid: `og:title`,
          property: 'og:title',
          content: 'Illustrarama | Acerca de'
        },
        {
          hid: `og:description`,
          property: 'og:description',
          content: 'Las mejores noticias de diseño e ilustración todos los dias. Tu dosis diaria de inspiración'
        },
        {
          hid: `og:image`,
          property: 'og:image',
          content: 'https://www.illustrarama.com/logo.png'
        },
        {
          hid: `og:type`,
          property: 'og:type',
          content: 'article'
        },
        {
          hid: `og:site_name`,
          property: 'og:site_name',
          content: 'Illustrarama.com | Acerca de'
        },
        {
          hid: `og:url`,
          property: 'og:url',
          content: `https://www.illustrarama.com/about`
        },
        {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'Illustrarama | Acerca de'
        },
        {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: 'Las mejores noticias de diseño e ilustración todos los dias. Tu dosis diaria de inspiración'
        },
        {
          hid: `twitter:image`,
          name: 'twitter:image',
          content: 'https://www.illustrarama.com/logo.png'
        },
        {
          hid: `twitter:card`,
          name: 'twitter:card',
          content: 'article'
        }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      link: [
        { rel: 'canonical', href: `https://www.illustrarama.com/about` }
      ]
    }
  },
  components: {
  }
}
</script>

<style>
  .display-3{
    font-family: "Poiret One", cursive, sans-serif!important;
    color:#fff;
  }
  p.display-3{
    font-size: 1.5em;
  }
  .bg-nice{
    animation: colorchange 50s; /* animation-name followed by duration in seconds*/
        /* you could also use milliseconds (ms) or something like 2.5s */
   -webkit-animation: colorchange 50s; /* Chrome and Safari */
  }
  @keyframes colorchange
  {
    0%   {background: red;}
    25%  {background: yellow;}
    50%  {background: blue;}
    75%  {background: green;}
    100% {background: red;}
  }

  @-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */
  {
    0%   {background: red;}
    25%  {background: yellow;}
    50%  {background: blue;}
    75%  {background: green;}
    100% {background: red;}
  }

  .codito{
    color:#000;
    line-height: 0px;
  }
</style>
