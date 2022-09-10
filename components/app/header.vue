<template lang="pug">
  v-app-bar.app-header(
    app
    :flat="!isPageScrolled"
    :color="isPageScrolled ? '#fff' : '#fff'"
    height="auto"
    :class="{'app-header--scrolled': isPageScrolled}"
  )
    v-container.d-flex.align-center.py-0
      app-nav.me-auto(
        :isPageScrolled="isPageScrolled"
      )
      v-img(
        max-height="150"
        max-width="95"
        src="/logo1.png"
      )
        
      //- logo(
      //-   :size="logoSize"
      //-   :isWhite="!isPageScrolled"
      //- )

</template>

<script>
/* eslint-disable nuxt/no-globals-in-created */
import AppNav from '@/components/app/nav'
import Logo from '@/components/app/logo'

export default {
  name: 'AppHeader',

  components: {
    AppNav,
    Logo
  },

  data () {
    return {
      isPageScrolled: false
    }
  },
  computed: {
    logoSize () {
      return this.isPageScrolled ? 80 : 100
    }
  },

  beforeMount  () {
    window.addEventListener('scroll', () => {
      this.handleScroll(window.pageYOffset)
    })
  },
  methods: {
    handleScroll (yOffset) {
      this.isPageScrolled = yOffset > 0
    }
  }
}
</script>
