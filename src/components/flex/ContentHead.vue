<template>
  <b-container>
    <b-row>
      <b-col>
        <ContentBlock
          
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
//Components
import ContentBlock from '../ContentBlock.vue';

export default {
  default: 'name',
  components: {
    ContentBlock
  }
}
</script>