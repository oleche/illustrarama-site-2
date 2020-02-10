<template slot="posts">
  <div>
    <NewsList :posts="posts" />
  </div>
</template>

<script>
import NewsList from '~/components/post/NewsList.vue'
import API from '~/lib/api.js'
//import axios from 'axios'

export default {
  async asyncData ({ error, params }) {
    let page = 1;
    if (params.id === undefined){
      return error({ statusCode: 404, message: "Not found" })
    }
    let id = params.id;
    if (id.indexOf("bootstrap.css.map") !== -1){
        return { posts: {}}
    }
    let postentries = await API.entry(id)// axios.get(`https://api.illustrarama.com/api/v1/news/${id}`)
    if (postentries.error){
      return error({ statusCode: postentries.error.response.status, message: postentries.error.response.data.message })
    }else{
      postentries.post.keywordsString = postentries.post.keywordsString.replace(" , ' s ", "").replace(" , 'd ","");
      postentries.post.titleShort = (postentries.post.title.length > 79)?postentries.post.title.substring(0,79):postentries.post.title;
      postentries.post.content = (postentries.post.content.length > 130)?postentries.post.content.substring(0,130):postentries.post.content;
      postentries.post.tag = postentries.post.categories[1];
      return { posts: postentries.post }
    }
  },
  components: {
    NewsList
  }
}
</script>

<style>
a {
  color:#e74c3c!important;
}

.btn-cont {
  text-align: center;
  margin: 0 auto;
}
.btn-cont .btn {
  position: relative;
  padding: 20px 50px;
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

h1 { word-wrap: break-word; }


</style>
