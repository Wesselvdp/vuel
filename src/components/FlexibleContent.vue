<template>
  <component :fields="fields" v-bind:is="componentName" />
</template>

<script>
//components
import LatestPosts from './flex/LatestPosts.vue';
import Content from './Content.vue';
import ContentImage from './flex/ContentImage.vue';
import CardRow from './flex/CardRow.vue';

export default {
  name: 'FlexibleContent',
  components: {
    LatestPosts,
    Content,
    ContentImage,
    CardRow,
  },
  props: {
    item: {}
  },
  data() {
    return {
      componentName: this.item.acf_fc_layout,
      fields: this.item
    }
  }
}
</script>