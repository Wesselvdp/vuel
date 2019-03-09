<template>
  <b-container :fluid="fields.fluid">
    <b-row>
      <b-col cols="6" :order="order" class="text-center">
        <ContentBlock :fields="fields" />
      </b-col>
      <b-col cols="6" v-bind:style="media" :class="{'shadow': fields.shadow}" />
    </b-row>
  </b-container>
</template>

<script>
//Compontents
import ContentBlock from '../ContentBlock.vue';

export default {
  name: "ContentImage",
  components: {
    ContentBlock
  },
  props: {
    fields: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      order: 1,
      media: {
        backgroundImage: `url('${this.fields.image.url}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }
  },
  created() {
    this.order = (this.fields.contentRight ? 1 : 0);
  }
}
</script>
