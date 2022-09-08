<template lang="pug">
  .homepage
    app-section.hero(
      :wideHeading="true"
    )
      template(#heading)
        h1.heading--xl(
          class=""
          v-html="$t('main.heading')"
        )

    app-section.who-we-are.primary#who-we-are
      template(#heading)
        h2.heading--lg
          | {{ $t('whoWeAre.heading') }}
      template
        p.paragraph
          | {{ $t('whoWeAre.text') }}

    app-section.vision
      template(#heading)
        h2.heading--lg
          | {{ $t('vision.heading') }}
      template
        p.paragraph
          | {{ $t('vision.text') }}

    app-section.message.secondary
      template(#heading)
        h2.heading--lg
          | {{ $t('message.heading') }}
      template
        p.paragraph
          | {{ $t('message.text') }}

    app-section.values(
      :wideContent="true"
    )
      template(#heading)
        h2.heading--lg.align-md-center
          | {{ $t('values.heading') }}
      template
        values.mt-6

    app-section.our-services#our-services(
      :wideContent="true"
      :class="{'secondary': $vuetify.breakpoint.smAndDown}"
    )
      template(#heading)
        h2.heading--lg.align-md-center
          | {{ $t('ourServices.heading') }}
      template
        services

    app-section.support(
      :wideContent="true"
    )
      template(#heading)
        h2.heading--lg.text-center
          | {{ $t('support.heading') }}
      template
        cards.mt-6(
          :items="cardsItems"
        )

    app-section.our-solutions.secondary#our-solutions(
      :wideContent="true"
    )
      template(#heading)
        h2.heading--lg.text-center
          | {{ $t('ourSolutions.heading') }}
      template
        solutions.mt-6

    app-section.our-clients#our-clients
      template(#heading)
        h2.heading--lg.text-center
          | {{ $t('ourClients.heading') }}
      template
        slider(
          :items="clientsList"
          )

    app-section.our-team.secondary#our-team
      template(#heading)
        h2.heading--lg.text-center
          | {{ $t('ourTeams.heading') }}
      template
        team
</template>

<script>
import { clients, support } from '@/media.config'
import AppSection from '../components/app/section'
import Cards from '../components/cards'
import Values from '../components/values'
import Services from '../components/services'
import Solutions from '../components/solutions'
import Slider from '../components/slider'
import Team from '../components/team'

export default {
  name: 'Homepage',

  components: { AppSection, Cards, Values, Services, Solutions, Slider, Team },

  computed: {
    clientsList () {
      return clients.images
    },
    cardsItems () {
      return this.$t('support.list').map((item, i) => {
        return {
          fileUrl: support.files[i],
          ...item
        }
      })
    }
  }
}
</script>
