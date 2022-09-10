<template lang="pug">
  footer.app-footer
    v-container.app-footer__container
      nuxt-link.app-footer__logo-wrp(
        to="/"
      )
        v-img(
          max-height="150"
          max-width="95"
          src="/logo1.png"
        )
      .app-footer__contact-data
        a.app-footer__link.heading--sm(
          :href="`tel:${phone}`"
          target="_blank"
        )
          v-icon.pe-2 mdi-phone
          | {{ phone }}
        a.app-footer__link.heading--sm(
          :href="`mailto:${email}`"
          target="_blank"
        )
          v-icon.pe-2 mdi-email
          | {{ email }}
        .app-footer__location.heading--sm
          | {{ $t('main.location') }}
        .app-footer__locale-switcher
          nuxt-link.app-footer__locale-link.heading--sm.me-2(
            v-for="locale in locales"
            :key="locale"
            :to="switchLocalePath(locale)"
          ) {{ locale }}

      h2.app-footer__heading(
        v-html="$t('main.heading')"
      )
      app-media.app-footer__media

</template>

<script>
import cfg from '@/project.config'

import AppLogo from './logo'
import AppMedia from './media'
export default {
  name: 'AppFooter',

  components: { AppMedia, AppLogo },

  data () {
    return {
      email: cfg.contact.email,
      phone: cfg.contact.phone
    }
  },

  computed: {
    locales () {
      return cfg.locale.list.map(locale => locale.code)
    }
  }
}
</script>

<style lang="sass" scoped>
.app-footer
  background: $primary
  color: $background
  overflow: hidden
  position: relative
  padding-top: 4rem
  padding-bottom: 5rem

  *
    color: inherit

  &__container
    display: grid
    row-gap: 2.25rem
    align-items: start
    grid-template-columns: repeat(2, 1fr) max-content
    grid-template-areas: 'heading contact-data logo' 'media contact-data logo'

  &__logo-wrp
    grid-area: logo
    position: relative
    padding-bottom: 1rem
    margin-top: -1rem
    background-color: $secondary
    border-radius: 0 0 10rem 10rem
    &::before
      content: ''
      background-color: inherit
      position: absolute
      bottom: 100%
      left: 0
      right: 0
      height: 100vh

  &__contact-data
    grid-area: contact-data

  &__location
    margin-bottom: .25em

  &__heading
    grid-area: heading
    font-size: 2.125rem
    font-weight: normal
    line-height: 1.2em
    &:first-line
      font-size: 1.1em
      font-weight: 700

  &__link
    display: block
    font-weight: 300
    text-decoration: none
    margin-bottom: .25em
    .v-icon
      font-size: 1.25em

  &__locale-link
    text-transform: uppercase
    text-decoration: none
    &:not(.nuxt-link-active)
      opacity: .5

@media screen and (max-width: $md)
  .app-footer
    &__container
      row-gap: 3rem
      grid-template-columns: 1fr max-content
      grid-template-areas: 'heading logo' 'contact-data logo' 'media logo'

@media screen and (max-width: $sm)
  .app-footer
    padding-top: 3rem
    padding-bottom: 3rem
    &__container
      row-gap: 2rem
    &__heading
      font-size: 1.25rem
</style>
