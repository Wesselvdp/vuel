<template>
    <div class="container">
        <div class="row">
        
            <div class="card-deck">
              <Card v-bind:key="post.id" v-bind:post="post" v-for="post in posts" />
            </div>

        </div>
    </div>
</template>

<script>
// components
import Card from '../cards/CardBlog.vue';

import axios from 'axios';


export default {
  name: 'LatestPosts',
  components: {
    Card
  },
  props: {
    limit: {
      type: Number,
      default: 3,
    }
  },
  data() {
    return {
      posts: [],
    }
  },
  async created() {
    try {
      const {data: posts} = await axios.get(`https://grommit.nl/wp-json/wp/v2/posts?_embed`)
      this.posts = posts.slice(0, this.limit)
      console.log(this.posts);
    } catch(e) {
      this.errors.push(e)
    } 
  }
}
</script>

<style lang="scss" scoped>
  .container {
    padding: 3em;
    margin-bottom: 3em;
  }
</style>

