<template>
  <article>
    <!-- Post-->
    <div class="demo-title">&nbsp;</div>

    <a v-bind:href="'/news?v='+post._id"><div class="post-module">
      <!-- Thumbnail-->
      <div class="thumbnail">
        <div class="date">
          <div class="day">{{ post.published | moment("DD") }}</div>
          <div class="month">{{ post.published | moment("MMM") }}</div>
        </div><img v-bind:src="post.img" class="img img-responsive" v-bind:title="post.title" v-bind:alt="post.content" height="100%"/>
      </div>
      <!-- Post Content-->
      <div class="post-content">
        <div class="category">{{post.category}}</div>
        <h2 class="title">{{post.title}}</h2>
        <h3 class="sub_title">{{post.origin}}</h3>
        <p class="description">{{post.category}}</p>
        <div class="post-meta"><span class="timestamp"><i class="fa fa-clock"></i> {{post.published | moment("from", "now")}}</span><span class="comments"></span></div>
        <!-- <i class="fa fa-comments"></i> <i class="fa fa-heart"> </i>-->
      </div>
    </div></a>
  </article>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    post: { type: Object }
  }
}
</script>
