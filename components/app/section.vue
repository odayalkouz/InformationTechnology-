<template lang="pug">
Scrollama(:debug="false" :offset="0.6" @step-enter="handlerAnimation" :class="{'active': activeAnimation}" class="section")
  v-container.py-0
    v-row.ma-0.pa-0.justify-center
      v-col.ma-0.pa-0(
        :cols="12"
        :lg="wideHeading ? 12 : 10"
      )
        slot(name="heading")
      v-col.ma-0.pa-0(
        :cols="12"
        :lg="wideContent ? 12 : 10"
      )
        slot
</template>
<script>
import Scrollama from 'vue-scrollama'
export default {
  name: 'AppSection',
  components: { Scrollama },
  props: {
    wideHeading: {
      type: Boolean,
      required: false,
      default: false
    },
    wideContent: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      activeAnimation: false
    }
  },
  methods: {
    handlerAnimation ({ element, direction }) {
      if (direction === 'down') {
        this.activeAnimation = true
        element.classList.add('active')
      }
    }
  }
}
</script>
<style lang="sass">
  .section
    .heading--xl
      opacity: 0
      transition: all 0.9s
      transform: translateX(100%)
    &.active
      .heading--xl
        opacity: 1
        transform: translateX(0)
</style>
