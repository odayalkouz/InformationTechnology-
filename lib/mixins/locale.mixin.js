export default {
  watch: {
    '$i18n.locale': {
      handler (locale) {
        this.$vuetify.rtl = this.$i18n.messages[locale].$rtl
        this.$vuetify.lang.current = locale
        this.locale = locale
      },
      immediate: true
    }
  },

  data () {
    return {
      locale: ''
    }
  }
}
