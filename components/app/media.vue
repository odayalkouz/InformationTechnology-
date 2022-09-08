<template lang="pug">
  ul.media
    li
      a.media__link.twitter(
        :href="twitter"
      )
        v-icon mdi-twitter
    li
      a.media__link.linkedin(
        :href="linkedin"
      )
</template>

<script>
import cfg from '@/project.config'

export default {
  name: 'AppMedia',

  data () {
    return {
      linkedin: cfg.media.linkedin,
      twitter: cfg.media.twitter
    }
  }
}
</script>

<style lang="sass" scoped>
.media
  display: flex
  gap: 1.125rem
  padding: 0
  .v-icon
    color: inherit
    font-size: inherit
  &__link
    width: 1.5em
    height: 1.5em
    border-radius: 50%
    display: flex
    align-items: center
    justify-content: center
    font-size: 2rem
    background-color: $accent
    color: $background
    text-decoration: none
    &.linkedin
      background-image: url("/icons/linkedin.svg")
      background-size: .8em
      background-position: center
      background-repeat: no-repeat

@media screen and (max-width: $sm)
  .media
    &__link
      font-size: 1.5rem
</style>
