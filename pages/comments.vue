<template>
  <section class="container">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Politica de comentarios</h1>
      </div>
    </div>

    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-12">
          <h2>Reglas</h2>
          <p>Estamos utilizando <a href="https://disqus.com/">Disqus</a> para administrar y moderar todos los comentarios del sitio. Para poder tener la mejor experiencia, toma en cuenta las siguientes reglas para poder participar en las discusiones en los articulos:</p>
      		<p><strong>1.</strong> No se admitirá propaganda de productos, servicios, organizaciones u otras entidades comerciales.</p>
          <p><strong>2.</strong> Se eliminarán aquellas publicaciones que sólo contengan un enlace o que éste no refuerce los argumentos publicados junto a él.</p>
          <p><strong>3.</strong> Seguimos una política de tolerancia cero con todo aquello que consideramos “discurso del odio”. Se bloqueará al usuario y se eliminarán publicaciones que contengan: Lenguaje vulgar, obsceno u ofensivo; ataques personales de cualquier forma – incluyendo imágenes/memes- ; comentarios inadecuados de índole religiosa, sexual, política o racial; acusaciones sin fundamento o calumnias.</p>
          <p><strong>4.</strong> Relevancia: Se ruega a los usuarios que sus opiniones sean relevantes con la noticia que se esté comentando.</p>
          <p><strong>5.</strong> Información personal. Rogamos no compartir ningún tipo de información personal, números de teléfono, correos electrónicos, páginas web, redes sociales.</p>
        </div>
      </div>

      <hr>


    </div> <!-- /container -->
  </section>
</template>

<script>

export default {
  head () {
    return {
      htmlAttrs: {
        lang: 'es'
      },
      title: `Illustrarama | Source of illustration and design news | Politica de comentarios`,
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
          content: `Las mejores noticias de diseño e ilustración todos los dias. Tu dosis diaria de inspiración | Politica de comentarios`
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
          content: 'Illustrarama | Politica de comentarios'
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
          content: 'Illustrarama.com | Politica de comentarios'
        },
        {
          hid: `og:url`,
          property: 'og:url',
          content: `https://www.illustrarama.com/about`
        },
        {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'Illustrarama | Politica de comentarios'
        },
        {
          hid: `twitter:summary`,
          name: 'twitter:summary',
          content: 'Las mejores noticias de diseño e ilustración todos los dias. Tu dosis diaria de inspiración | Politicas de comentarios'
        },
        {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: 'Las mejores noticias de diseño e ilustración todos los dias. Tu dosis diaria de inspiración | Politicas de comentarios'
        },
        {
          hid: `twitter:image`,
          name: 'twitter:image',
          content: 'https://www.illustrarama.com/logo.png'
        },
        {
          hid: `twitter:card`,
          name: 'twitter:card',
          content: 'summary'
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

</style>
