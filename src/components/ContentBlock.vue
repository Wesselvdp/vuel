<template>
	<div class="content" :class="{'text-center': fields.textCenter}">
		<p class="content__tagline">
			{{fields.tagline}}
		</p>
		<h2 class="content__title">
			{{fields.title}}
		</h2>
		<p class="content__lead">
			{{fields.lead}}
		</p>
		<p class="content__body">
			{{fields.body}}
		</p>
    <div v-if="fields.buttons">
      <a :key="btn.id" :btn="btn" v-for="btn in fields.buttons" :href="btn.button.url" class="btn shadow">
        {{btn.button.title}}
      </a>
    </div>
	</div>
</template>

<script>
export default {
    name: 'ContentBlock',
    props: {
        fields: {
          type: Object,
          default: null
        },
        textCenter: {
            type: Boolean,
            default: false
        }
		},
}
</script>

<style lang="scss">
.content {
  max-width: 400px;
  display: inline-block;
  text-align: left;
  padding: 3em 0;

//   @include max-xs {
//     margin-bottom: 1em;
//   }

  &--dark { //option for dark chapters
    .content {
      color: #fff;

      &--header,
      &__title,
      &__lead,
      &__tagline {
        color: #fff;
      }
    }
  }

  &__tagline {
    color: rgb(176, 154, 136);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1.36px;
    margin-bottom: 0;
  }

  &__title {
    margin-bottom: 0.75em;
    color: #000;
  }

  &__lead {
    font-size: 18px;
  }

  &__body {
    &:last-of-type {
      margin-bottom: 2.5em;
    }
  }

  .btn {
    border-radius: 50px;
    background-color: rgb(176, 154, 136);
    color: white;
    letter-spacing: 1.2px;
    font-weight: 100;
    padding: 11px 26px;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
      transform: translateY(-5px);
    }
  }

//   &__media {
//     @include max-xs {
//       &::after {
//         content: '';
//         display: block;
//         padding-top: 55%;
//       }
//     }
//   }
}

</style>
