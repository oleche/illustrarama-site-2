<template>
    <!-- Main jumbotron for a primary marketing message or call to action -->
  <div class="container">
    <div class="info">
     <h2>&nbsp;</h2>
    </div>

    <ol class="breadcrumb">
        <li class="breadcrumb-item">
            <a v-bind:href="'https://www.illustrarama.com/'">
                Inicio
            </a>
        </li>
        <li class="breadcrumb-item">
            <a v-bind:href="'https://www.illustrarama.com/tag/'+posts.tag">
                {{posts.tag}}
            </a>
        </li>
        <li class="breadcrumb-item">
            <a v-bind:to="'https://www.illustrarama.com/news?v='+posts._id" class="active" v-html="posts.title"/>
        </li>
    </ol>

    <article class="container content text-center">
    	<div class="title">
        <h1 class="display-3" style="word-wrap: break-word;" v-html="posts.title"/>
        <p>V&iacute;a <a style="color#e74c3c;" v-bind:href="posts.source+'?utm_source=illustrarama.com'" target="_blank">{{posts.origin}}</a></p>
        <div class="container">
          <social-sharing v-bind:url="'https://www.illustrarama.com/news?v'+posts._id"
                      v-bind:title="posts.title"
                      v-bind:description="posts.content"
                      v-bind:quote="posts.content"
                      v-bind:hashtags="posts.keywordsString"
                      v-bind:twitter-user="'illustrarama'"
                      inline-template>
            <div class="row">
                <div class="col-sm-12 col-md-2">
                  &nbsp;
                </div><div class="col-3 col-sm-1 col-md-2">
                  <network network="facebook">
                    <img class="img img-responsive" src="/ico-facebook.png" alt="Facebook"/>
                  </network>
                </div><div class="col-3 col-sm-1 col-md-2">
                  <network network="googleplus">
                    <img class="img img-responsive" src="/ico-google.png" alt="Google plus"/>
                  </network>
                </div><div class="col-3 col-sm-1 col-md-2">
                  <network network="linkedin">
                    <img class="img img-responsive" src="/ico-linkedin.png" alt="Linkedin"/>
                  </network>
                </div><div class="col-3 col-sm-1 col-md-2">
                  <network network="twitter">
                    <img class="img img-responsive" src="/ico-twitter.png" alt="Twitter"/>
                  </network>
                </div><div class="col-sm-12 col-md-2">
                  &nbsp;
                </div>
            </div>
          </social-sharing>
        </div>
      </div>
    </article>
    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-12">
          <hr/>
          <adsbygoogle :ad-slot="slot" />
          <hr/>
          <p>
            <small class="day">Publicado el {{ posts.published | moment("LL") }}</small>
          </p>
          <p>
            <img v-bind:src="posts.img" class="figure-img img-fluid rounded mx-auto d-block" v-bind:alt="posts.title"/>
          </p>
          <div v-for="(section, index) in posts.sections" :key="index">
            <p v-if="section.type=='TEXT' || section.type=='TITLE'|| section.type=='SPECIALTEXT'">
              <span v-if="section.type=='TEXT'">
                <small class="blockquote-footer" v-if="section.type=='TEXT' && index > 0 && (posts.sections[index-1].type === 'TWITTER' || posts.sections[index-1].type === 'INSTAGRAM')" v-html="section.content"/>
                <span v-else v-html="section.content"/>
              </span>

              <span v-if="section.type=='TITLE'">
                <h2 v-html="section.content"/>
              </span>

              <span v-html='section.content' v-if="section.type=='SPECIALTEXT'">
                {{section.content}}
              </span>
            </p>

            <div v-if="section.type=='TEXT_TWITTER'" class="figure text-center container">
              <figcaption class="figure-caption">{{section.content}}</figcaption>
              <br/>
            </div>

            <div class="embed-responsive embed-responsive-4by3" v-html='section.content' v-if="section.type=='SOCIAL'">
                {{section.content}}
            </div>

            <div class="d-flex justify-content-center" v-html='section.content' v-if="section.type=='TWITTER'">
              <blockquote v-twitter-widgets class="twitter-tweet">
                  {{section.content}}
              </blockquote>
            </div>

            <div class="d-flex px-md-5 col justify-content-center" v-html='section.content' v-if="section.type=='INSTAGRAM'">
                {{section.content}}
            </div>

            <ul class="row list" v-html='section.content' v-if="section.type=='LIST'">
            </ul>

            <div v-if="section.type=='IMAGE'" class="figure text-center container">
              <img v-bind:src="section.url" class="figure-img img-fluid rounded mx-auto d-block" v-bind:alt="section.content || 'imagen sin titulo'"/>
              <figcaption class="figure-caption" v-html="section.content"/>
            </div>
          </div>
        </div>
      </div>
      <div v-if="posts.next!=null" class="row text-center">
        <div class="col-md-6">
          <div class='btn-cont'>
             <a class='btn' v-bind:href="posts.source+'?utm_source=illustrarama.com'" style="margin-top:25px;" target="_blank">
               Artículo original <small>(Inglés)</small>
               <span class='line-1'></span>
               <span class='line-2'></span>
               <span class='line-3'></span>
               <span class='line-4'></span>
             </a>
           </div>
         </div>
         <div class="col-md-6">
           <div class='btn-cont'>
              <a class='btn' v-bind:href="'/news?v='+posts.next._id" style="margin-top:25px;">
                Siguiente articulo
                <span class='line-1'></span>
                <span class='line-2'></span>
                <span class='line-3'></span>
                <span class='line-4'></span>
              </a>
            </div>
          </div>

      </div>

      <hr/>
      <adsbygoogle :ad-slot="slot" />
      <hr/>
      <vue-disqus shortname="www-illustrarama-com-1" :identifier="posts._id" v-bind:url="'https://www.illustrarama.com/news?v='+posts._id"></vue-disqus>
    </div> <!-- /container -->

  </div>

</template>

<script>
export default {
  data() {
      return {
        slot: process.env.ADSENSE_SLOT || "0000000000",
      };
    },
  head () {
    let posts = this.posts
    return {
      htmlAttrs: {
        lang: 'es'
      },
      title: `Illustrarama.com | ${posts.titleShort}`,
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: posts.content
        },
        {
          hid: `keywords`,
          name: 'keywords',
          keywords: posts.keywordsString,
          content: posts.keywordsString
        },
        {
          hid: `image`,
          name: 'image',
          content: posts.img
        },
        {
          hid: `name`,
          name: 'name',
          content: posts.titleShort
        },
        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: '541685809560665'
        },
        {
          hid: `og:title`,
          property: 'og:title',
          content: posts.titleShort
        },
        {
          hid: `og:description`,
          property: 'og:description',
          content: posts.content
        },
        {
          hid: `og:image`,
          property: 'og:image',
          content: posts.img
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
          content: `https://www.illustrarama.com/news?v=${posts._id}`
        },
        {
          hid: `twitter:title`,
          name: 'twitter:title',
          content: posts.titleShort
        },
        {
          hid: `twitter:summary`,
          name: 'twitter:summary',
          content: posts.content
        },
        {
          hid: `twitter:description`,
          name: 'twitter:description',
          content: posts.content
        },
        {
          hid: `twitter:image`,
          name: 'twitter:image',
          content: posts.img
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
              "@type": "NewsArticle",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.illustrarama.com/news?v=${posts._id}"
              },
              "headline": "${encodeURI(posts.title)}",
              "image": [ "${posts.img}" ],
              "datePublished": "${posts.createdAt}",
              "dateModified": "${posts.updatedAt}",
              "description": "${encodeURI(posts.content)}",
              "author": {
                  "@type": "Organization",
                  "name": "${posts.origin}"
                },
              "publisher": {
                "@type": "Organization",
                "name": "Illustrarama.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.illustrarama.com/logo.png"
                },
                "sameAs": ["https://www.facebook.com/illustrarama/"]
              },
              "url": "https://www.illustrarama.com/news?v=${posts._id}"
          }`,
          type: 'application/ld+json'
        },{
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
            },{
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@id": "https://www.illustrarama.com/tag/${posts.tag}",
                "name": "${posts.tag}",
                "image": "${posts.img}"
              }
            },{
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@id": "https://www.illustrarama.com/news?v=${posts._id}",
                "name": "${posts.titleShort.replace(/['"]+/g, '')}",
                "image": "${posts.img}"
              }
            }]
          }`,
          type: 'application/ld+json'
        }
      ],
      link: [
        { rel: 'canonical', href: `https://www.illustrarama.com/news?v=${posts._id}` }
      ]
    }
  },
  props: {
    posts: { type: Object }
  }
}
</script>

<style scoped>
.post-list {
  padding: 0;
}

.post-list-item {
  list-style: none;
}

.breadcrumb-item a{
  word-wrap: break-word;
}

.list {
  display:block!important;
}

@media screen and (max-width: 768px) {
    h1{
        font-size:30px;
    }
}
</style>
