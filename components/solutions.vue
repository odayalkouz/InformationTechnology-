<template lang="pug">
  .solutions-wrp(
  :class="{ 'swiper-container' : isSliderInitialized }"
  )
    .solutions(
      :class="{ 'swiper-wrapper' : isSliderInitialized }"
    )
      a.solution(
        v-for="(item, i) in items"
        :href="item.href"
        target="_blank"
        :key="i"
        :class="{ 'swiper-slide' : isSliderInitialized }"
      )
        v-avatar.pa-md-8.pa-4.mb-md-0.mb-2(
          :size="avatarSize"
          color="#fff"
        )
          v-img(
            :src="item.icon"
            contain
            width="100%"
            height="100%"
          )
        h3.heading--md
          | {{ item.heading }}
        p.paragraph.font-weight-normal
          | {{ item.text }}

    .swiper-pagination(
      v-show="isSliderInitialized"
    )

</template>

<script>
import { solutions } from '@/media.config'
// eslint-disable-next-line import/no-named-as-default
import Swiper, { Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([Pagination])

export default {
  name: 'Solutions',

  data () {
    return {
      swiper: null
    }
  },

  computed: {
    avatarSize () {
      return this.$vuetify.breakpoint.smAndDown ? '10rem' : '12.5rem'
    },
    isSliderInitialized () {
      return this.$vuetify.breakpoint.smAndDown
    },
    items () {
      return this.$t('ourSolutions.list').map((item, i) => {
        return { ...item, icon: solutions.images[i], href: solutions.links[i] || '' }
      })
    }
  },

  mounted () {
    this.swiper = new Swiper('.solutions-wrp.swiper-container', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 40,
      pagination: {
        el: '.solutions-wrp .swiper-pagination',
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
.solutions-wrp.swiper-container
  overflow: visible !important

.solutions:not(.swiper-wrapper)
  transform: none !important

.solution
  display: grid
  grid-template-columns: max-content 1fr
  grid-template-areas: "a h" "a p"
  column-gap: 4rem
  text-decoration: none
  &[href=""]
    pointer-events: none
  &:not(.swiper-slide)
    width: 100% !important
  &:not(:last-child)
    margin-bottom: 2.5rem
  .heading--md
    grid-area: h
  .paragraph
    grid-area: p
  .v-avatar
    grid-area: a

@media screen and (max-width: $md)
  .solution
    display: block
    text-align: center
    &:not(:last-child)
      margin-bottom: 4rem
</style>
