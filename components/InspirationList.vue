<template>
  <div class="row">
    <div v-for="post in posts" :key="post._id" class="col-md-6 col-sm-12">
      <PostExcerpt :post="post" />
    </div>
  </div>
</template>

<script>
import PostExcerpt from './PostExcerpt.vue'

export default {
  props: {
    posts: { type: Array }
  },
  components: {
    PostExcerpt
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
</style>
