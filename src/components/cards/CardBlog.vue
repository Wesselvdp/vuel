<template>
  <div class="card card--hover sr--js shadow">
    <a class="overlay card__anchor" href=""></a>
    <div class="card__media" :style="`background-image: url('${ post._embedded['wp:featuredmedia'][0].source_url }');`">

    </div>
    <div class="card-body card__body">
      <div class="card__meta">
        <span class="text-purple">
          category
        </span>
        <i class="fas fa-circle mx-2"></i>
        <span>
          {{post.date.slice(0, 10)}}
        </span>
      </div>

      <div class="card__title card__title--blog">
       {{post.title.rendered}}
      </div>
      <p class="text-muted" v-html="rawHtml">
        <!-- the excerpt -->
      </p>
    </div>
    <div class="card-footer card__footer">
      <a class="" href="">
        Read more
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBlog',
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      rawHtml: this.post.excerpt.rendered.slice(0, 150)
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    border: none;
    
    &__media {
      background-size: cover;
      background-repeat: no-repeat;

      &::after {
        content: '';
        display: block;
        padding-top: 66%;
      }
    }

    &__footer {
      border: none;
      background-color: #fff;
      border-radius: inherit !important;
      padding-bottom: 1rem;
    }

    &__head {
      text-align: center;
      font-size: 24px;
      padding: 1em 0.5rem 0.5em 0.5rem;
      background-color: #fff;
      color: #000;
      border-radius: 10px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &__title {
      font-size: 24px;
      margin-bottom: 0;
      line-height: 1;

      &--blog {
        margin-bottom: 0.75em;
      }
    }

    &__tagline {
      font-size: 18px;
      opacity: 0.6;
    }

    &--hover {
      box-shadow: 0 0 30px 9px rgba(0, 0, 0, 0);
      transition: 0.3s ease;

      &:hover,
      &:focus {
        transform: scale(1.08);
        box-shadow: 0 0 30px 9px rgba(0, 0, 0, 0.2)
      }
    }
  }
</style>
