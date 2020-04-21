<template lang="pug">
  q-layout(view="lHh Lpr lFf" @scroll="handleScroll" style=`position: relative`).full-width
    //- right drawer
    q-drawer(side="right" behavior="mobile" v-model="showRightDrawer" style="zIndex: 30000")
      .column.fit
        //- header
        div(style=`height: 80px; borderBottom: 1px solid #eee`).row.full-width.items-center.content-center.q-px-md
          div(style=`width: 150px; height: 50px` @click="$router.push(`/`)").row.logo_1.items-center.cp
        .row.full-width.justify-center
          .col.scroll
            div(
              v-for="(m, mi) in $store.state.main.routes.home" :key="m._id"
              style=`height: 50px; borderBottom: 1px solid #eee; text-decoration: none`
              ).row.full-width.items-center.content-center
              a(:href="'#'+m._id" v-smooth-scroll="{ duration: 1000, offset: -50, container: '' }" style=`text-decoration: none`).row.items-center.relative-position.full-width.text-primary
                q-btn(@click="$router.push('/')" :label="m.name" style=`font-family: Russo One` v-ripple="{color: 'primary'}" size="md" flat).q-ma-xs.menu_button.full-width
              
          //- logo
        //- footer
        div(style=`height: 50px`).row.full-width.items-center.q-px-md
          small.text-black © {{ $store.state.main.config.info.site_name }} {{ $store.state.main.config.info.year_of_foundation }}-{{new Date().getFullYear()}}
    q-header(:reveal-offset="500" style=`background: #fff; z-index: 2200;`)
      p-menu(style=`z-index: 1111`)
    q-page-container
      router-view
    p-footer
</template>

<script>
import { routes } from 'components/config.js'
import { openURL } from 'quasar'
import pMenu from 'components/pMenu'
import pFooter from 'components/pFooter'
export default {
  name: 'mainLayout',
  components: { pMenu, pFooter },
  meta () {
    return {
      title: this.siteName
    }
  },
  data () {
    return {
      splitterModel: 20,
      tab: '',
      showAccountModal: false,
      accountLoginLoading: false,
      routes,
      showRightDrawer: false,
      blackMenu: false,
      name: '',
      siteName: 'JMstudio',
      ddd: `
      
      `
    }
  },
  methods: {
    regClick () {
      this.$log('refClick')
      this.$root.$emit('toggle_dialogReg')
    },
    // handleScroll (e) {
    //   // console.log(e.position)
    //   if (e.position > 190) this.blackMenu = true
    //   else this.blackMenu = false
    //   this.$store.dispatch('state', ['position', e.position])
    // },
    openURL
  },
  mounted () {
    this.$log('mounted')
    // TODO: fuck yourself()
    this.$root.$on('toggleRightDrawer', (e) => {
      this.showRightDrawer = !this.showRightDrawer
    })
  },
  computed: {
    main () {
      return this.$route.path === '/'
    }
  }
}
</script>

<style lang="stylus">
.neon_mini
  font-family: Russo One;
  // position: absolute;
  transform: skewY(deg);
  transform: translate(-50% -50%);
  // border: 1px solid #fff;
  // border-radius: 10px
  // box-shadow: 0 0 5px #009992,  0 0 15px #009992, inset 0 0 5px #009992, inset 0 0 15px #009992;
  animation: animate 0s linear infinite;
.neon_text
  margin: 0;
  padding: 0;
  font-size: 1rem
  line-height: 20px;
  color: #009992;
  // text-shadow: 0 0 5px #009992, 0 0 10px #009992
</style>
