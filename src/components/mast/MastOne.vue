<template>
  <div id="mast" class="mast" :class="{'text-center': textCenter}" :style="`background-image: url('${this.acf.landing.backgroundImage.sizes.large}');`">
    <!-- \ Overlay -->
    <div class="overlay mast__overlay"></div>
    <!-- \ Overlay -->

    <!-- \ Video -->
    <div class="video-container--landing">
        <video poster="" id="bgvid" playsinline autoplay muted loop>
            <source :src="acf.landing.video_options.video.url" type="">
            <!-- require('../../assets/video.mp4') -->
        </video>
    </div>
    <!-- \ Video -->
    <div class="container">
        <div class="row mast__row">
          <div class="col-12 col-md-6 col-lg-5" :class="{'mx-auto': textCenter}">
            <ContentBlock
              :fields="acf.landing"
              :class="{'text-center': textCenter}"
            />
          </div>
        </div>

        <a class="mast__scrolldown d-none d-lg-block" href="#landingContent"></a>

        </div>
        <svg viewBox="0 0 1440 200" class="mast__oval" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(0.000000, -833.000000)" fill="#FFFFFF">
              <path d="M1440,833.829286 L1440,1033 L0,1033 L0,834.042591 C152.586365,866.51342 417.830001,888 719.5,888 C1021.83008,888 1287.57422,866.419288 1440,833.829286 Z" id="Combined-Shape"></path>
            </g>
          </g>
        </svg>
    </div>
</template>

<script>
import ContentBlock from '../ContentBlock.vue';

import axios from 'axios';

export default {
    name: 'MastOne',
    props: {
        pageID: {
            type: Number,
            default: null
        },
        textCenter: {
            type: Boolean,
            default: false
        },
    },
    components: {
        ContentBlock
    },
    data() {
        return {
            acf: {},
        }
    },
    async created() {
        try {
            const { data: {acf: fields}} = await axios.get(`https://grommit.nl/wp-json/wp/v2/pages/${this.pageID}`)
            this.acf = fields
            console.log(this.video)
        } catch(e) {
            this.errors.push(e)
        } 
    }
}
</script>

<style lang="scss" scoped>
    .mast {
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;

        &__oval {
            position: relative;
            bottom: 0;
        }
    }
    .container {
        padding-top: 3.75rem;
    }
    .row {
        min-height: 80vh;
        align-items: center;
    }

    video {
        /* Make video to at least 100% wide and tall */
        min-width: 100%;
        min-height: 100%;

        /* Setting width & height to auto prevents the browser from stretching or squishing the video */
        width: auto;
        height: auto;

        /* Center the video */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .video-container--landing {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        overflow: hidden;
    }

</style>


// todo
// Create space for nav in mast
//   const navHeight = nav ? nav.getBoundingClientRect().height : 0;
//   const mast = document.querySelector('.mast');

//   mast.style.setProperty('padding-top', `${navHeight}px`);