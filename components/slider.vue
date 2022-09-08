<template lang="pug">

  .swiper-container.slider
    .swiper-wrapper
      .swiper-slide(
        v-for="(item, i) in items"
        :key="i"
      )
        slot
          v-img.mx-auto(
            :src="item.imageSrc"
            :alt="item.alt"
            contain
            width="10rem"
            height="10rem"
          )

    .swiper-pagination

    .swiper-button-prev
    .swiper-button-next

</template>

<script>

// eslint-disable-next-line import/no-named-as-default
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([Navigation, Pagination])

export default {
  name: 'Slider',

  props: {
    items: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      swiper: null
    }
  },

  mounted () {
    const breakpoints = {}
    breakpoints[this.$vuetify.breakpoint.thresholds.sm] = {
      slidesPerView: 4,
      slidesPerGroup: 4
    }

    this.swiper = new Swiper('.slider.swiper-container', {
      slidesPerView: 2,
      slidesPerGroup: 2,
      breakpoints,
      pagination: {
        el: '.slider .swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.slider .swiper-button-next',
        prevEl: '.slider .swiper-button-prev'
      }
    })
  }
}
</script>
