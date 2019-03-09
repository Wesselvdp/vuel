<template>
  <b-container :fluid="fields.fluid">
    <b-row>
      <b-col :class="{'text-center': fields.textCenter}">
        <ContentBlock :fields="fields" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
//Compontents
import ContentBlock from './ContentBlock.vue';

export default {
  name: "Content",
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
    }
  },
}
</script>

<style lang="scss" scoped>
 
</style>