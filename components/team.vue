<template lang="pug">

  .swiper-container
    .swiper-wrapper
      .swiper-slide(
        v-for="(member, i) in members"
        :key="i"
      )
        v-card.card.rounded-xl.py-10.px-8.mb-14.text-center.d-flex.flex-column(
          elevation="0"
        )
          v-avatar.mx-auto(
           size="150"
          )
            v-img(
              :src="member.imageSrc || defaultImage"
              :alt="member.alt || member.name"
            )
          v-card-title.pa-0
            h3.heading--md.mx-auto.mt-6.mb-2(
              v-html="member.name"
            )
          v-card-text.px-0.pb-0
            p.paragraph.color-inherit.font-weight-normal.mb-0
              | {{ member.caption }}

    .swiper-pagination

    .swiper-button-prev
    .swiper-button-next
</template>

<script>

import { team } from '@/media.config'
// eslint-disable-next-line import/no-named-as-default
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'


Swiper.use([Navigation, Pagination])

export default {
  name: 'Team',

  data () {
    return {
      swiper: null,
      defaultImage: 'https://d311qk7d4dpm8d.cloudfront.net/wp-content/uploads/2018/12/04113109/user-shape.png'
    }
  },

  computed: {
    members () {
      const membersMedia = team.images
      return membersMedia.map((image, i) => {
        return {
          ...image,
          name: this.$t(`ourTeams.list[${i}].name`),
          caption: this.$t(`ourTeams.list[${i}].caption`)
        }
      }

      )
    }
  },

  mounted () {
    const breakpoints = {}

    breakpoints[this.$vuetify.breakpoint.thresholds.sm] = {
      slidesPerView: 3,
      slidesPerGroup: 3
    }
    breakpoints[this.$vuetify.breakpoint.thresholds.xs] = {
      slidesPerView: 2,
      slidesPerGroup: 2
    }

    this.swiper = new Swiper('.our-team .swiper-container', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      breakpoints,
      spaceBetween: 30,
      pagination: {
        el: '.our-team .swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.our-team .swiper-button-next',
        prevEl: '.our-team .swiper-button-prev'
      }
    })
  }
}
</script>


