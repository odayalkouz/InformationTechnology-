<template lang="pug">
  v-dialog(
    @input.once="hubspotFormRenderer"
    width="min(100vw, 600px)"
  )
    template(
      v-slot:activator="{ on, attrs }"
    )
      v-btn.mt-10(
        color="secondary"
        elevation="6"
        v-bind="attrs"
        v-on="on"
      ) {{ $t('actions.joinUs') }}
    v-card.pt-12.px-6
      v-card-actions.d-block
        .hubspot-form
</template>

<script>

export default {
  name: 'HubspotFormBtn',

  mounted () {
    // eslint-disable-next-line no-new
    new Promise((resolve) => {
      const hsformsScript = document.createElement('script')
      hsformsScript.onload = () => {
        resolve()
      }
      hsformsScript.async = true
      hsformsScript.src = 'https://js.hsforms.net/forms/shell.js'
      document.head.appendChild(hsformsScript)
    })
  },

  methods: {
    async hubspotFormRenderer () {
      await this.$nextTick()
      // eslint-disable-next-line no-undef
      hbspt.forms.create({
        portalId: '4940864',
        formId: '1e97818e-5545-4da7-8778-5473ef3afaac',
        target: '.hubspot-form'
      })
      // await this.$nextTick()
      this.setFormDirection()
    },
    setFormDirection () {
      const interval = setInterval(tryToSetFormDirection, 100)

      function tryToSetFormDirection () {
        const iframe = document.querySelector('.hubspot-form iframe')?.contentDocument

        if (iframe) {
          const style = document.createElement('style')
          style.innerHTML = `
            .rtl {
              direction: rtl !important;
            }

            .rtl .inputs-list {
              padding-inline-start: 0;
            }

            .rtl .hs-input[type="checkbox"], .hs-input[type="radio"] {
              margin: 3px 5px 3px 5px;
            }

            .rtl .hubspot-link__container.sproket .hubspot-link__icon {
              float: right;
              margin-right: -5px;
            }
          `
          iframe.head.insertAdjacentElement('beforeend', style)

          if (this.$nuxt.$vuetify.rtl) {
            iframe.body.classList.add('rtl')
          } else {
            iframe.body.classList.remove('rtl')
          }

          clearInterval(interval)
        }
      }
    }
  }
}
</script>
