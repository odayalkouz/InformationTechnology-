<template lang="pug">
  v-row.values.px-0(
    tag="ul"
  )
    v-col.value.text-center(
      v-for="(item, i) in items"
      :key="i"
      :cols="12"
      :sm="6"
      :md="3"
      tag="li"
    )
      lottie-player(
        :src="item.icon"
        background="transparent"
        speed="1"
        style="width: 140px; height: 140px; margin: auto"
        :class="'item_'+i"
        loop
        autoplay
      )
      h3.heading--md
        | {{ item.heading }}
      p.paragraph
        | {{ item.text }}

</template>

<script>
import { values } from '@/media.config'
export default {
  name: 'Values',
  computed: {
    items () {
      return this.$t('values.list').map((item, i) => {
        return { ...item, icon: values.images[i] }
      })
    }
  }
}
</script>
<style lang="sass">
  .item_0
    width: 100px !important
  .item_1
    width: 90px !important
</style>
