<template>
  <div class="container-fluid">
    <div class="info">
      <h1 class="title-1">Inspiration @ Illustrarama</h1>
    </div>
  </div>
</template>

<script>
import API from '~/lib/api.js'

export default {
  head () {
    return {
      htmlAttrs: {
        lang: 'es'
      },
      title: `Inspiration @ Illustrarama ${this.pageText}`,
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
          content: `Las mejores noticias de diseño e ilustración todos los dias. Tu dosis diaria de inspiración | Inspiración ${this.pageText}`
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
          hid: 'facebook-domain-verification',
          name: 'facebook-domain-verification',
          content: process.env.FACEBOOK_DOMAIN || "0000000000"
        },
        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: '438661783871304'
        },
        {
          hid: `name`,
          name: 'name',
          content: 'Illustrarama.com'
        },
        {
          hid: `og:title`,
          property: 'og:title',
          content: 'Inspiration @ Illustrarama'
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
          content: 'Illustrarama.com | Politica de privacidad'
        },
        {
          hid: `og:url`,
          property: 'og:url',
          content: `https://www.illustrarama.com/about`
        },
        {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: 'Illustrarama | Politica de privacidad'
        },
        {
          hid: `twitter:summary`,
          name: 'twitter:summary',
          content: 'Las mejores noticias de diseño e ilustración todos los dias. Tu dosis diaria de inspiración | Politicas de cookies'
        },
        {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: 'Las mejores noticias de diseño e ilustración todos los dias. Tu dosis diaria de inspiración | Politicas de cookies'
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
        { rel: 'canonical', href: `https://www.illustrarama.com/inspiration` }
      ]
    }
  },
  data() {
      return {
        slot: process.env.ADSENSE_SLOT || "0000000000",
      };
    },
  async asyncData ({ route }) {
    let page = 1;
    let pageText = "";
    if (route.query.page !== undefined){
      page = `${route.query.page}`;
    }
    let tag = await API.tags();
    let postentries = await API.showcase(page); //axios.get(`https://api.illustrarama.com/api/v1/news?page=${page}`)
    page = +page+1;
    if (page > 2){
      pageText = `| Página ${page-1}`;
    }
    // if (postentries.data.length > 0){
    //   for (let i=0; i<postentries.data.length; i++){
    //
    //     let disqus = await axios.get(`https://disqus.com/api/3.0/threads/list.json?api_secret=1dGauS5aMUoSEFuFFyy2vser61CJvliz04noYV8e5Qm3TTzjW4mFn0x6j6d67xQ2&forum=www-illustrarama-com-1&thread=link:https://www.illustrarama.com/news?v=${postentries.data[i]._id}`);
    //
    //     if (disqus.data.response !== undefined && disqus.data.response.length > 0){
    //       postentries.data[i].comments = disqus.data.response[0].posts;
    //       postentries.data[i].likes = disqus.data.response[0].likes;
    //     }else{
    //       postentries.data[i].comments = 0;
    //       postentries.data[i].likes = 0;
    //     }
    //   }
    // }
    return { posts: postentries.posts, page: page, tags: tag.tags, pageText: pageText }
  }
}
</script>

<style>
.container-fluid .info {
  /* width: 300px; */
  margin: 50px auto;
}
.container-fluid .info h1 {
  margin: 0 0 15px;
  padding: 0;
  color: #333333;
}
</style>
