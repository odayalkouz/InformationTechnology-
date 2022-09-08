<template lang="pug">
  v-app
    v-main
      app-header
      nuxt
      app-footer
</template>

<script>
import AppHeader from '@/components/app/header'
import AppFooter from '@/components/app/footer'
import { localeMixin } from '@/lib/mixins'

export default {
  components: {
    AppFooter,
    AppHeader
  },

  mixins: [localeMixin]
}
</script>
