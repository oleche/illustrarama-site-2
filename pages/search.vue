<template slot="posts">
  <section class="container">
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="container">
      <div class="info">
        <h2 class="title-1">Resultados de: <span>{{search}}</span></h2>
      </div>
      <hr/>
      <adsbygoogle :ad-slot="slot" />
      <hr/>
     <!-- Normal Demo-->
     <div v-if="posts !== undefined && posts.length==0" class="row text-center">
       <h1 class="noresults">No hay resultados</h1>
     </div>
     <PostList :posts="posts" />
     <hr/>
     <adsbygoogle :ad-slot="slot" />
     <hr/>
     <div v-if="posts !== undefined && posts.length>0" class="row text-center">
       <div class='btn-cont'>
          <a class='btn' v-bind:href="'/search?q='+encodeURI(search)+'&page='+page" style="margin-top:25px;">
            M&aacute;s resultados
            <span class='line-1'></span>
            <span class='line-2'></span>
            <span class='line-3'></span>
            <span class='line-4'></span>
          </a>
        </div>

     </div>
     <client-only>
        <CookieControl locale="es"/>
     </client-only>

    </div>
  </section>
</template>

<script>
import PostList from '~/components/PostList.vue'
import API from '~/lib/api.js'

export default {
  head () {
    return {
      htmlAttrs: {
        lang: 'es'
      },
      title: `Illustrarama | Source of illustration and design news | Busqueda de ${this.search}`,
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: `Las mejores noticias de diseño e ilustración todos los dias. Tu dosis diaria de inspiración | Busqueda de ${this.search}`
        },
        {
          hid: `keywords`,
          name: 'keywords',
          keywords: 'ilustracion, ilustración, diseno, diseño, diseño gráfico, diseno grafico, arte, artistas, ilustradores, noticias, noticias de ilustracion, noticias de ilusatración, recursos de diseno, recursos de diseño',
          content: 'ilustracion, ilustración, diseno, diseño, diseño gráfico, diseno grafico, arte, artistas, ilustradores, noticias, noticias de ilustracion, noticias de ilusatración, recursos de diseno, recursos de diseño'
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
          content: `Illustrarama | Busqueda de ${this.search}`
        },
        {
          hid: `og:description`,
          property: 'og:description',
          content: `Las mejores noticias de ${this.search}`
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
          content: 'Illustrarama.com'
        },
        {
          hid: `og:url`,
          property: 'og:url',
          content: `https://www.illustrarama.com/`
        },
        {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: `Illustrarama | Busqueda de ${this.search}`
        },
        {
          hid: `twitter:summary`,
          name: 'twitter:summary',
          content: `Las mejores noticias de ${this.search}`
        },
        {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: `Las mejores noticias de ${this.search}`
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
      script: [
        { innerHTML:
          `{
              "@context": "http://schema.org",
              "@type": "Organization",
              "url": "https://www.illustrarama.com",
              "name": "Illustrarama.com",
              "logo": "https://www.illustrarama.com/logo.png",
              "sameAs": ["https://www.facebook.com/illustrarama/"]
          }`,
          type: 'application/ld+json'
        },
        {
          innerHTML: `
          {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@id": "https://www.illustrarama.com/",
                "name": "Illustrarama",
                "image": "http://www.illustrarama.com/logo.png"
              }
            }]
          }
          `,
          type: 'application/ld+json'
        }
      ],
      link: [
        { rel: 'canonical', href: `https://www.illustrarama.com/` }
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
    if (route.query.page !== undefined){
      page = `${route.query.page}`;
    }
    let search = route.query.q || "";
    let postentries = await API.search(search,page)
    page = +page+1;
    return { posts: postentries.results, page: page, search: search}
  },
  components: {
    PostList
  }
}
</script>

<style>
.noresults{
  width: 100%!important;
}
.title-1 {
  font-size: 2.0rem!important;
  font-weight: lighter!important;
}
.title-1 span{
  font-size: 2.0rem!important;
  font-weight: bolder!important;
  color: #E02D19!important;
}
.post-module {
  position: relative;
  z-index: 1;
  display: block;
  background: #FFFFFF;
  min-width: 270px;
  height: 470px;
  -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -ms-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
  transition: all 0.3s linear 0s;
}
.post-module:hover,
.hover {
  -webkit-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
}
.post-module:hover .thumbnail img,
.hover .thumbnail img {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  transform: scale(1.1);
  opacity: .6;
}
.post-module .thumbnail {
  background: #000000;
  height: 400px;
  overflow: hidden;
}
.post-module .thumbnail .date {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  background: #E02D19;
  width: 55px;
  height: 55px;
  padding: 3.5px 0;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  color: #FFFFFF;
  font-weight: 700;
  text-align: center;
  -webkti-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.post-module .thumbnail .date .day {
  font-size: 18px;
}
.post-module .thumbnail .date .month {
  font-size: 12px;
  text-transform: uppercase;
}
.post-module .thumbnail img {
  display: block;
  width: 120%;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -ms-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
  transition: all 0.3s linear 0s;
}
.post-module .post-content {
  position: absolute;
  bottom: 0;
  background: #FFFFFF;
  width: 100%;
  padding: 30px;
  -webkti-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  -moz-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  -ms-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  -o-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
}
.post-module .post-content .category {
  position: absolute;
  top: -34px;
  left: 0;
  background: #E02D19;
  padding: 10px 15px;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}
.post-module .post-content .title {
  margin: 0;
  padding: 0 0 10px;
  color: #333333;
  font-size: 26px;
  font-weight: 700;
}
.post-module .post-content .sub_title {
  margin: 0;
  padding: 0 0 20px;
  color: #E02D19;
  font-size: 20px;
  font-weight: 400;
}
.post-module .post-content .description {
  display: none;
  color: #666666;
  font-size: 14px;
  line-height: 1.8em;
}
.post-module .post-content .post-meta {
  margin: 30px 0 0;
  color: #999999;
}
.post-module .post-content .post-meta .timestamp {
  margin: 0 16px 0 0;
}
.post-module .post-content .post-meta a {
  color: #999999;
  text-decoration: none;
}
.hover .post-content .description {
  display: block !important;
  height: auto !important;
  opacity: 1 !important;
}
.container .column {
  width: 50%;
  padding: 0 25px;
  -webkti-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  float: left;
}
.container .column .demo-title {
  margin: 0 0 15px;
  color: #666666;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
}
.container .info {
  /* width: 300px; */
  margin: 50px auto;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 24px;
  font-weight: bold;
  color: #333333;
}
.container .info span {
  color: #666666;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #E02D19;
}


.btn-cont {
  text-align: center;
  margin: 0 auto;
}
.btn-cont .btn {
  position: relative;
  padding: 20px 70px;
  border: 1px solid black;
  color: black;
  text-decoration: none;
  font-size: 1.125em;
  text-transform: uppercase;
  letter-spacing: 2px;
  -webkit-font-smoothing: antialiased;
}
.btn-cont .btn:hover {
  border: none;
}
.btn-cont .btn:hover .line-1 {
  -webkit-animation: move1 1500ms infinite ease;
          animation: move1 1500ms infinite ease;
}
.btn-cont .btn:hover .line-2 {
  -webkit-animation: move2 1500ms infinite ease;
          animation: move2 1500ms infinite ease;
}
.btn-cont .btn:hover .line-3 {
  -webkit-animation: move3 1500ms infinite ease;
          animation: move3 1500ms infinite ease;
}
.btn-cont .btn:hover .line-4 {
  -webkit-animation: move4 1500ms infinite ease;
          animation: move4 1500ms infinite ease;
}
.btn-cont .line-1 {
  content: "";
  display: block;
  position: absolute;
  width: 1px;
  background-color: black;
  left: 0;
  bottom: 0;
}
.btn-cont .line-2 {
  content: "";
  display: block;
  position: absolute;
  height: 1px;
  background-color: black;
  left: 0;
  top: 0;
}
.btn-cont .line-3 {
  content: "";
  display: block;
  position: absolute;
  width: 1px;
  background-color: black;
  right: 0;
  top: 0;
}
.btn-cont .line-4 {
  content: "";
  display: block;
  position: absolute;
  height: 1px;
  background-color: black;
  right: 0;
  bottom: 0;
}

@-webkit-keyframes move1 {
  0% {
    height: 100%;
    bottom: 0;
  }
  54% {
    height: 0;
    bottom: 100%;
  }
  55% {
    height: 0;
    bottom: 0;
  }
  100% {
    height: 100%;
    bottom: 0;
  }
}

@keyframes move1 {
  0% {
    height: 100%;
    bottom: 0;
  }
  54% {
    height: 0;
    bottom: 100%;
  }
  55% {
    height: 0;
    bottom: 0;
  }
  100% {
    height: 100%;
    bottom: 0;
  }
}
@-webkit-keyframes move2 {
  0% {
    width: 0;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}
@keyframes move2 {
  0% {
    width: 0;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}
@-webkit-keyframes move3 {
  0% {
    height: 100%;
    top: 0;
  }
  54% {
    height: 0;
    top: 100%;
  }
  55% {
    height: 0;
    top: 0;
  }
  100% {
    height: 100%;
    top: 0;
  }
}
@keyframes move3 {
  0% {
    height: 100%;
    top: 0;
  }
  54% {
    height: 0;
    top: 100%;
  }
  55% {
    height: 0;
    top: 0;
  }
  100% {
    height: 100%;
    top: 0;
  }
}
@-webkit-keyframes move4 {
  0% {
    width: 0;
    right: 0;
  }
  55% {
    width: 100%;
    right: 0;
  }
  100% {
    width: 0;
    right: 100%;
  }
}
@keyframes move4 {
  0% {
    width: 0;
    right: 0;
  }
  55% {
    width: 100%;
    right: 0;
  }
  100% {
    width: 0;
    right: 100%;
  }
}

</style>
