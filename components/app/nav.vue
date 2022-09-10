<template lang="pug">
  nav.app-nav
    v-app-bar-nav-icon.app-nav__open-icon.ms-n9(
      v-if="isMenuCollapsed"
      @click="isOpen = true"
    )
    v-navigation-drawer.app-nav__drawer(
      v-if="isMenuCollapsed"
      v-model="isOpen"
      fixed
      temporary
      hide-overlay
      height="auto"
      width="100vw"
    )
      v-icon.app-nav__close-icon.py-8.px-9.ms-n4(
        color="primary"
        @click="isOpen = false"
      ) mdi-close

      v-list.app-nav__list.pt-0.pb-8(
        color="transparent"
      )
        v-list-item.justify-center(
          v-for="(link, i) in links"
          :key="i"
        )
          v-btn.app-nav__link.px-4(
            :to="link.to"
            :href="link.href"
          ) {{ $t(link.text) }}


    v-list.app-nav__list.d-flex.align-center(
      v-else
      color="transparent"
    )
      v-list-item.px-0.px-lg-4(
        v-for="(link, i) in links"
        :key="i"
        :class="{'ps-0': !i}"
      )
        v-btn.app-nav__link.px-4(
          :class="{'ps-0': !i}"
          :to="link.to"
          :href="link.href"
        ) {{ $t(link.text) }}

</template>

<script>
export default {
  name: 'AppNav',

  data () {
    return {
      isOpen: false,
      links: [
        {
          text: 'nav.whoWeAre',
          to: '#who-we-are'
        },
        {
          text: 'nav.ourServices',
          to: '#our-services'
        },
        {
          text: 'nav.ourSolutions',
          to: '#our-solutions'
        },
        {
          text: 'nav.ourClients',
          to: '#our-clients'
        }
      ]
    }
  },

  computed: {
    isMenuCollapsed () {
      return this.$vuetify.breakpoint.smAndDown
    }
  }
}
</script>

<style lang="sass" scoped>
.app-nav
  .v-list-item
    flex-basis: auto
  &__link
    color: #00c0cd !important
    background: transparent !important
    box-shadow: none !important
    text-decoration: none
    font-weight: normal
    font-size: 1rem !important
    white-space: nowrap
    transition: all $default-transition-time $default-transition-function
    &::before,
    &::after
      content: none
  .v-app-bar__nav-icon
    color: $background !important

.app-header--scrolled .app-nav
  &__link
    color: $primary
  .v-app-bar__nav-icon
    color: $primary !important

@media screen and (max-width: $md)
  .app-nav
    &__drawer
      transform: translate(0, 0) !important
      &:not(.v-navigation-drawer--open)
        transform: translate(0, -100%) !important
    &__link
      color: $primary
      font-size: 4rem
      line-height: 1.8em
@media screen and (max-width: $sm)
  .app-nav
    &__link
      font-size: 3rem
.v-application--is-rtl .v-btn
  letter-spacing: 1px !important
</style>
