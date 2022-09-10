<template lang="pug">
  .services-wrp
    .services(
      :class="{ 'swiper-container' : isSliderInitialized}"
    )
      .services__tabs-content-wrp(
        v-if="!isSliderInitialized"
      )
        v-tabs-items.services__tabs-content(
          v-model="tabsId"
        )
          v-tab-item(
            v-for="(tab, i) in tabs"
            :key="i"
          )
            v-img(
              :src="tab.imgSrc"
              width="100%"
              height="100%"
            )
      .services__tabs-wrp(
        v-if="!isSliderInitialized"
      )
        v-tabs.services__tabs.v-tabs--transparent(
          vertical
          v-model="tabsId"
          hide-slider
        )
          v-tab.services__tab(
            v-for="(tab, i) in tabs"
            :key="i"
          )
            h3.heading--xs {{ tab.heading }}

        hubspot-form-btn

      .services__slides(
        :class="{ 'swiper-wrapper' : isSliderInitialized}"
        v-if="isSliderInitialized"
      )
        .swiper-slide(
          v-for="(tab, i) in tabs"
          :key="i"
        )
          h3.heading--sm.align-md-center.mb-5 {{ tab.heading }}
          v-img.services__image(
            :src="tab.imgSrc"
            width="100vw"
            max-width="100vw"
            height="400px"
          )

      .swiper-pagination(
        v-if="isSliderInitialized"
      )
    //- hubspot-form-btn.mt-6.mx-auto(
    //-   v-if="isSliderInitialized"
    //- )
</template>

<script>
import { services } from '@/media.config'
import hubspotFormBtn from '@/components/hubspotFormBtn'
// eslint-disable-next-line import/no-named-as-default
import Swiper, { Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([Pagination])

export default {
  name: 'Services',

  components: {
    hubspotFormBtn
  },

  data () {
    return {
      tabsId: 0
    }
  },

  computed: {
    tabs () {
      return this.$t('ourServices.list').map((item, i) => {
        return { ...item, imgSrc: services.images[i] }
      })
    },
    isSliderInitialized () {
      return this.$vuetify.breakpoint.smAndDown
    }
  },

  mounted () {
    this.swiper = new Swiper('.services.swiper-container', {
      slidesPerView: 1,
      slidesPerGroup: 1
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

.v-application--is-ltr
  .services
    &__tabs-wrp
      padding: 4rem 0 4rem 4.5rem
    &__tabs-content
      right: 0

.v-application--is-rtl
  .services
    &__tabs-wrp
      padding: 4rem 4.5rem 4rem 0
    &__tabs-content
      left: 0


.services
  display: grid
  grid-template-columns: repeat(2, 1fr)
  background-color: $accent
  color: $background
  &.swiper-container
    overflow: visible !important
  .swiper-pagination-bullets
    bottom: -2.5rem !important

  &__tabs-wrp
    position: relative
    z-index: 1
    transform: none !important
    &::before
      content: ''
      background-color: $accent
      position: absolute
      z-index: -1
      top: 0
      bottom: 0
      width: 200vw
      left: -100vw
  &__tab
    justify-content: flex-start
    padding-top: 1em
    padding-bottom: 1em
    max-width: unset
    &:not(:last-child)
      border-bottom: 1px solid $background


  &__tabs-content-wrp
    position: relative
    z-index: 2
  &__tabs-content
    position: absolute
    top: 0
    bottom: 0
    height: 100%
    direction: ltr
    width: 50vw
    max-width: unset

@media screen and (max-width: $lg)
  .v-application--is-ltr
    .services__tabs-wrp
      padding: 4rem 0 4rem 3rem
  .v-application--is-rtl
    .services__tabs-wrp
      padding: 4rem 3rem 4rem 0

@media screen and (max-width: $md)
  .services__slides
    .heading--sm
      max-width: 100vw

  .services
    background-color: transparent
    color: $accent
    .swiper-pagination-bullets
      bottom: 1rem !important
    &-wrp
      display: flex
      flex-direction: column
      align-items: center
      margin: 0 -2.5rem
    &__tabs-wrp
      &::before
        content: none

@media screen and (max-width: $sm)
  .services
    &-wrp
      margin: 0 -1.5rem
</style>
