<template lang="pug">
  div(:style=`{height: '55px', zIndex: '111'}`).row.full-width.justify-center.z
    div(style=`maxWidth: 1300px; width: 100%; z-index: 111;`).row.full-width.items-center.justify-between
      //- reg dialog
      q-dialog(:maximized="true" position="bottom" ref="reg")
        div(
          @click="$refs.dialogReg.hide()"
          :style=`{position: 'relative', backgroundColor: 'rgba(0, 0, 0, 0.7)'}`
          ).row.full-width.window-height.items-start.content-start.justify-center.shadow-0
          div(style=`height: 55px`).row.full-width
          q-btn(
            round color="primary" icon="clear" @click="$refs.reg.hide()"
            :style=`{position: 'fixed', zIndex: 10000, top: '50px', right: '50px'}`)
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdc1RJV5jcZAdo53wU0D8hr7JqrWNOn5mHpHCjWceh75F4BSQ/viewform?embedded=true" width="640" height="767" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
      q-dialog(:maximized="true" position="bottom" ref="dialogReg")
        div(
          @click="$refs.dialogReg.hide()"
          :style=`{position: 'relative', backgroundColor: 'rgba(0, 0, 0, 0.7)'}`
          ).row.full-width.window-height.items-start.content-start.justify-center.shadow-0
          div(style=`height: 55px`).row.full-width
          q-btn(
            round color="primary" icon="clear" @click="$refs.dialogReg.hide()"
            :style=`{position: 'fixed', zIndex: 10000, top: '50px', right: '50px'}`)
          //- div(:style=`{width: '300px'}`).row.q-px-md
          //-   .row.fit.bg-white
          //-     span thnx
          //- div(data-aos="fade" data-aos-delay="2000"
          //-   style=`transform: translate(-50%, -50%); z-index: 1; left: 50%;
          //-   top: 50%; position: absolute; maxWidth: 600px; background-color: #fff; border-radius: 15px`
          //-   ).row.justify-center.full-width.q-py-sm
          //-   div(style=`maxWidth: 600px; width: 100%; margin-bottom: -50px;`).row.justify-end.title.text-black
          //-     q-btn(round flat icon="clear" color="primary" data-aos="fade" data-aos-delay="1000"
          //-       @click="$refs.dialogReg.toggle()").q-ma-xs
          //-   .row.full-width.justify-center.content-center.q-mt-xl.q-mb-md
          //-     span(style=`font-size: 32px; font-family: Russo One; padding: 0`
          //-       ).text-black.text-center Регистрация на HACKATHON BEST URFU 2019
          //-     span(style=`font-size: 28px`).text-black.q-mt-md Спасибо за ответ на опрос
          //- div(style=`maxWidth: 720px; width: 100%; padding-right: 30px; padding-bottom: 0px;`
          //-   ).row.justify-end.title.q-px-sm.text-black
          //-   q-btn(round flat icon="clear" color="primary" data-aos="fade" data-aos-delay="1000"
          //-     @click="$refs.dialogReg.toggle()").q-ma-xs.q-mr-sm
          //- :height="$q.screen.gt.xs ? '2200' : '2700'"
          //- data-aos="fade-up" data-aos-delay="600"
          div(style=`maxWidth: 700px; padding-bottom: 50px; border-radius: 50px;`).row.justify-center.items-center
            div(style=`maxWidth: 500px; height: calc(200px + (500 - 300) * ((100vw - 320px) / (1600 - 320)))`).error.full-width
            span(style=`margin: 0`).text-center.q-px-md Не придешь на хакатон? Не расстраивайся! У нас есть кое-что интересное для тебя. 20 октября с 10:00 до 19:00 в Технопарке пройдет ярмарка вакансий. На ней можно будет пообщаться с представителями 6 компаний, работающих в IT сфере. И даже пройти экспресс-собеседования! Участие бесплатное. Вход по регистрации.
            q-btn(label="Участвовать"
              @click="$refs.reg.show()" flat style=`font-size: 25px; font-family: Russo One; maxWidth: 250px; width:100%; height: 80px; border-radius: 50px; background-image: linear-gradient(139deg, #00FFF3, #00D2C9, #009992, #00706A, #004643);`).q-ma-xs.q-my-md
      //- page...
      div(style=`height: 50px;`).row.items-center
        a(href="#first" v-smooth-scroll="{ duration: 1000, offset: 50, container: '' }" style=`text-decoration: none`).row.items-center.relative-position
          div(style=``).row.neon_mini.items-center.cursor-pointer
            div(style=`width: 50px; height: 50px`).logo_menu.q-mr-xs
            .col
              div.neon_text
                span H
                span A
                span C
                span K
                span A
                span T
                span H
                span(style=`color: #009992 `) O
                span(style=`color: #009992 `) N
              .row
              div.neon_text
                span B
                span E
                span S
                span T
                span  U
                span R
                span F
                span U
                span  2
                span 0
                span 1
                span 9
      div(v-if="$q.screen.width >= 1050").col.fit
        div().row.fit.items-center.justify-end
          div(
            v-for="(m, mi) in $store.state.main.routes.home" :key="m._id"
            style=`height: 50px;`
            ).row.items-center.content-center
            //- @click="$router.push('/')"
            a(:href="'#'+m._id" v-smooth-scroll="{ duration: 1000, offset: -50, container: '' }" style=`text-decoration: none`).row.items-center.relative-position
              q-btn(@click="handleClick(m._id)" :label="m.name" style=`font-family: Russo One` v-ripple="{color: 'primary'}" size="md" flat).q-my-xs.menu_button
          .row.items-center.relative-position
            q-btn(@click="$router.push('/contacts')" label="Контакты" style=`font-family: Russo One` v-ripple="{color: 'primary'}" size="md" flat).q-my-xs.menu_button
          .row.items-center.relative-position
            q-btn(@click="$router.push('/partners')" label="Партнерам" style=`font-family: Russo One` v-ripple="{color: 'primary'}" size="md" flat).q-my-xs.menu_button
          .row.items-center.relative-position
            q-btn(@click="$router.push('/faq')" label="Faq" style=`font-family: Russo One` v-ripple="{color: 'primary'}" size="md" flat).q-my-xs.menu_button
          //- .row.items-center.relative-position
            q-btn(label="Регистрация"
              @click="$refs.dialogReg.show()" flat style=`font-family: Russo One; maxWidth: 250px; width:100%; height: 40px; border-radius: 50px; background-image: linear-gradient(139deg, #FAC060, #FF7A00);`).q-ma-xs
      //- phone desktop
      // div(:style=`{ maxWidth:$q.screen.gt.sm ? '220px' : '460px', color: 'black' }`
      //   ).row.full-height.content-center.gt-sm
      //   div(@click="openCityNumberModel").row.full-width.justify-center.q-pr-xs
      //     span(style=`fontSize: 1.5rem; fontWeight: 500;`) {{ $store.state.main.config.info.phone }}
      //- toggle menu
      div(v-if="$q.screen.width <= 1050" @click="$root.$emit('toggleRightDrawer')" style=`width: 50px; height: 50px;`
        ).row.items-center.justify-centerd
        q-btn(icon="menu" color="primary" round flat)
</template>

<script>
import AOS from 'aos'
export default {
  name: 'pMenu',
  components: { AOS },
  data () {
    return {
      tab: 'main',
      reg: false
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
    this.$log('mounted')
    this.$root.$on('toggle_dialogReg', () => {
      this.$refs.dialogReg.toggle()
    })
    this.$root.$on('toggle_reg', () => {
      this.$refs.reg.toggle()
    })
  },
  created () {
    AOS.init()
  }
}
</script>
<style lang="stylus">
iframe {
border:0px;
margin:1em auto;
box-shadow: 0 0 0px;
}
.menu_button
  // text-shadow: 0
  color: #009992;
.menu_button:hover
  // text-shadow: 0 0 5px #009992, 0 0 10px #009992, 0 0 15px #009992, 0 0 30px;
  // color: #fff;
.fix_menu
  position: fixed;
  z-index: 10000;
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
