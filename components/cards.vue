<template lang="pug">
  .cards-wrp(
    :class="{ 'swiper-container' : isSliderInitialized }"
  )
    v-row.cards.justify-lg-center.mx-0.mx-md-n5.mx-lg-n7.px-0(
      tag="ul"
      :class="{ 'swiper-wrapper' : isSliderInitialized }"
    )
      v-col.d-flex.px-0.px-lg-7(
        :cols="12"
        :md="6"
        :lg="4"
        v-for="(item, i) in items"
        :key="i"
        tag="li"
        ref="cards"
        :class="{ 'swiper-slide' : isSliderInitialized }"
      )
        v-card.card.rounded-xl.py-10.px-8.text-center.d-flex.flex-column.mx-md-5(
          color="primary"
          elevation="10"
        )
          v-card-title.pa-0
            h3.heading--md.mx-auto.mt-0.mb-7(
              v-html="item.heading"
            )
          v-card-text.px-0.pb-0
            p.paragraph.color-inherit.font-weight-normal.mb-0
              | {{ item.text }}
          v-card-actions.pt-10.flex-grow-1.align-end.justify-center(
            v-if="item.fileUrl"
          )
            v-btn.px-4(
              :href="item.fileUrl"
              target="_blank"
              color="secondary"
              elevation="6"
            ) {{ $t('actions.downloadTheFile') }}
    .swiper-pagination(
      v-show="isSliderInitialized"
    )
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import Swiper, { Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([Pagination])

export default {
  name: 'Cards',

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

  computed: {
    isSliderInitialized () {
      if (this.$vuetify.breakpoint.mdAndDown) {
        return true
      }
      if (this.$refs.cards) { this.$refs.cards.forEach((li) => { li.removeAttribute('style') }) }
      return false
    }
  },

  mounted () {
    const breakpoints = {}

    breakpoints[this.$vuetify.breakpoint.thresholds.sm] = {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20
    }

    this.swiper = new Swiper('.cards-wrp.swiper-container', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      breakpoints,
      spaceBetween: 40,
      pagination: {
        el: '.cards-wrp .swiper-pagination',
        clickable: true
      }
    })

    this.manageSwiper()
    window.addEventListener('resize', this.manageSwiper)
  },

  methods: {
    manageSwiper () {
      this.$nextTick(() => {
        if (!this.isSliderInitialized) {
          this.swiper.disable()
        } else {
          this.swiper.enable()
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.cards-wrp
  &.swiper-container
    overflow: visible !important
  .swiper-pagination-bullets
    bottom: -1.5rem !important
.cards
  flex-wrap: nowrap !important
.card
  color: $background !important
  .v-card__title
    word-break: break-word
  .v-card__text
    color: inherit !important
.heading--md
  max-width: 17ch

</style>
