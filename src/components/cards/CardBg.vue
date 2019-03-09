<template>
  <div class="card card--hover sr--js shadow" :style="{ backgroundImage: 'url(' + card.image.sizes.large + ')' }">
    <div class="card-body card__body">
      <span>
        {{card.tagline}}
      </span>
      <div class="card__title">
       {{card.title}}
      </div>
    </div>
    <div class="card-footer card__footer">
      <a class="btn shadow" href="">
        Read more
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      default: null
    }
  },
}
</script>

<style lang="scss" scoped>
  .card {
    background-size: cover;
    background-repeat: no-repeat;
    border: none;
    border-radius: 0.75rem;

    &__body::after {
      content: '';
      display: block;
      padding-top: 25%;
    }

    &__title {
      color: white;
      font-size: 26px;
      font-weight: 500;
      text-shadow: 2px 
    }

    &__footer {
      border-top: none;
      background-color: none;
    }

    .btn {
      background-color: white;
      border-radius: 50px;
      color: rgb(176, 154, 136);
      padding: 11px 26px;
    }
  }
  
</style>
