<template lang="pug">
  div(:style=`{height: '55px'}`).row.full-width.justify-center
    div(style=`maxWidth: 1100px; width: 100%`).row.full-width.items-center.justify-between.bg-white.gt-sm
      a(href="#first" v-smooth-scroll="{ duration: 1000, offset: -50, container: '' }" style=`text-decoration: none`).row.items-center.relative-position
        div(style=`height: 50px; width: 150px` @click="$router.push('/')").row.justify-center.items-center.logo_1.cursor-pointer
      div(v-if="$q.screen.width >= 1050").col.fit
        div().row.fit.items-center.justify-end
          div(
            v-for="(m, mi) in $store.state.main.routes.home" :key="m._id"
            style=`height: 50px;`
            ).row.items-center.content-center
            //- @click="$router.push('/')"
            a(:href="'#'+m._id" v-smooth-scroll="{ duration: 1000, offset: -50, container: '' }" style=`text-decoration: none`).row.items-center.relative-position
              q-btn(@click="handleClick(m._id)" :label="m.name" color="black" style=`font-family: Russo One` v-ripple="{color: 'primary'}" size="md" flat).q-my-xs.menu_button
    div(:style=`{height: '55px', backgroundColor: 'white'}`).row.full-width.justify-center.lt-md
      div(style=`maxWidth: 1100px`).row.full-width.items-center.justify-between.q-px-sm
        div(style=`height: 45px; width: 45px` @click="$router.push('/')").row.justify-center.items-center.logo_mobile.cursor-pointer
        //- menu desktop
        .row.justify-center
          div(style=`color:#000; line-height: 20px; font-size: 20px`).row.items-center
            a(href="tel:+79827029464" style=`text-decoration: none; color: #000`)
              span +7 (982) 702-94-64
        div(@click="$root.$emit('toggleRightDrawer')" style=`width: 50px; height: 50px;`).row.items-center.justify-start.lt-md
          q-btn(icon="menu" size="md" color="black" round flat)
</template>

<script>
import AOS from 'aos'
export default {
  name: 'pMenu',
  components: { AOS },
  data () {
    return {
      showRightDrawer: false
    }
  },
  watch: {
    'scroll': {
      handler (to, from) {
        if (to > 150) this.$log('more than 150!!!')
      }
    }
  },
  methods: {
    fMessage (e) {
      this.$log('fMessage', e)
    },
    handleClick (path) {
      if (this.$route.path !== '/') this.$router.push('/')
    }
  },
  mounted () {
  },
  created () {
    AOS.init()
  }
}
</script>
<style lang="stylus">
.logo_1
  background-image: url("~assets/logo_mobile.svg")
  background-size: 100%
  background-position: center
  background-repeat: no-repeat
.logo_mobile
  background-image: url("~assets/logo_circle.svg")
  background-size: 100%
  background-position: center
  background-repeat: no-repeat
</style>
