<template>
    <b-container>
        <b-row>
            <b-col cols="12">
              <div class="card-deck">
                  <CardBlog v-bind:key="card.id" v-bind:card="card" v-for="card in fields.cards" />
              </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
// components
import CardBlog from '../cards/CardBg.vue';

export default {
  name: 'CardRow',
  components: {
    CardBlog
  },
  props: {
    fields: {
      type: Object,
      default: null
    }
  },
}
</script>

<style lang="scss" scoped>
  .container {
    padding: 3em;
    margin-bottom: 3em;
  }
</style>

