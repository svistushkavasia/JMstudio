<template lang="pug">
.row.justify-center.full-width
  q-dialog(ref="callback" :maximized="$q.screen.lt.sm")
    div(style=`maxWidth: 400px; border-radius: 10px`).column.full-width.justify-start.bg-white.text-black.q-py-sm
      .row.full-width.justify-center.items-center.q-px-md
        span.text-subtitle.text-bold Заказать обратный звонок
        .col
        q-btn(round flat icon="clear" color="black" @click="$refs.callback.hide()")
      .row.full-width.justify-start.items-start.q-px-md
      .row.full-width.justify-center.q-mt-lg.q-px-md
        span.text-subtitle2 Перезвоним вам в течении 5 минут!
      .row.full-width.justify-center.q-mt-md.q-px-md
        q-input(v-model="name" stack-label label="Имя" filled).full-width.q-mb-md
        q-input(v-model="phone" unmasked-value mask="(###)-###-##-##" stack-label label="Телефон" prefix="+7" filled).full-width.q-mb-md
      .row.full-width.justify-center.q-px-md
        q-btn(outline style=`border-radius: 0px; border: 3px solid #000; font-size: 20px` @click="" label="Заказать звонок" ).row.full-width
      .row.full-width.justify-center.q-mt-md.q-px-md
        span(style=`font-size: 9px`).text-grey Нажимая на кнопку "Заказать звонок!", я даю свое согласие на обработку персональных данных.
  div(style=`minHeight: 200px; background-color:#fff`).row.full-width.justify-center.q-py-lg
    div(style=`maxWidth: 1100px`).row.full-width.justify-between.q-px-sm
      //- 1 секция
      div(style=`width: 450px`).row.justify-center
        .row.full-width.justify-start
          a(href="#first" v-smooth-scroll="{ duration: 1000, offset: -50, container: '' }" style=`text-decoration: none`).row.items-center.relative-position
            div(style=`height: 50px; width: 150px` @click="$router.push('/')").row.justify-center.items-center.logo_1.cursor-pointer
        div(style=``).row.text-black.text-caption
          .row.full-width.q-mt-lg
            q-icon(name="room" size="30px").row
            .col.q-ml-sm
              span Свердловская область, город Екатеринбург, ул. Луначарского, д.80
          .row.full-width.items-center
            q-icon(name="mail" size="30px").row
            .col.q-ml-sm
              a(style=`text-decoration: none` href="mailto:Jmsession@yandex.ru").text-black
                span Jmsession@yandex.ru
          .row.full-width.q-mt-sm
            span Реквизиты:
          .row.full-width
            span ИНН: 668600493903
          .row.full-width
            span ОГРН: 319665800169430
      //- 2 секция
      div(style=`width: 300px`).row.justify-center.items-center.q-gutter-sm.gt-sm
        a(style=`text-decoration: none` href="mailto:Jmsession@yandex.ru").text-black
          div(style=`height: 50px; width: 50px; border-radius: 50%; background-color: #FF9A3C`).row.justify-center.items-center.econ.cp
            q-icon(name="mail" size="26px" color="white")
        div(style=`height: 50px; width: 50px; border-radius: 50%; background-color: #FF9A3C` @click="handleClick('https://vk.com/jmsession')").row.justify-center.items-center.econ.cp
          div(style=`width: 26px; height: 26px`).vk
        div(style=`height: 50px; width: 50px; border-radius: 50%; background-color: #FF9A3C` @click="handleClick('https://www.instagram.com/jmsession_studio')").row.justify-center.items-center.econ.cp
          div(style=`width: 26px; height: 26px`).inst
        div(style=`height: 50px; width: 50px; border-radius: 50%; background-color: #FF9A3C` @click="handleClick('https://wa.me/89827029464')").row.justify-center.items-center.econ.cp
          div(style=`width: 26px; height: 26px`).whatsapp
        div(style=`height: 50px; width: 50px; border-radius: 50%; background-color: #FF9A3C` @click="handleClick('')").row.justify-center.items-center.econ.cp
          div(style=`width: 26px; height: 26px`).telegram
      //- 3 секция
      .row.justify-center.content-start.full-width.lt-md
        a(style=`text-decoration: none` href="tel:+79827029464").text-black.gt-sm
          span.text-bold +7 (982) 702-94-64
        q-btn(outline style=`maxWidth: 250px; height: 60px; border-radius: 0px; border: 3px solid #000; font-size: 20px` @click="$refs.callback.show()" label="Обратный звонок" color="black").row.full-width.text-black.q-mt-lg
      div(style=`width: 300px`).row.justify-center.content-start.gt-sm
        a(style=`text-decoration: none` href="tel:+79827029464").text-black.gt-sm
          span.text-bold +7 (982) 702-94-64
        q-btn(outline style=`maxWidth: 250px; height: 60px; border-radius: 0px; border: 3px solid #000; font-size: 20px` @click="$refs.callback.show()" label="Обратный звонок" color="black").row.full-width.text-black.q-mt-lg
      .row.justify-center.items-center.q-gutter-sm.lt-md.full-width.q-mt-lg
        a(style=`text-decoration: none` href="mailto:Jmsession@yandex.ru").text-black
          div(style=`height: 50px; width: 50px; border-radius: 50%; background-color: #FF9A3C`).row.justify-center.items-center.econ.cp
            q-icon(name="mail" size="26px" color="white")
        div(style=`height: 50px; width: 50px; border-radius: 50%; background-color: #FF9A3C` @click="handleClick('https://vk.com/jmsession')").row.justify-center.items-center.econ.cp
          div(style=`width: 26px; height: 26px`).vk
        div(style=`height: 50px; width: 50px; border-radius: 50%; background-color: #FF9A3C` @click="handleClick('https://www.instagram.com/jmsession_studio')").row.justify-center.items-center.econ.cp
          div(style=`width: 26px; height: 26px`).inst
        div(style=`height: 50px; width: 50px; border-radius: 50%; background-color: #FF9A3C` @click="handleClick('https://wa.me/89827029464')").row.justify-center.items-center.econ.cp
          div(style=`width: 26px; height: 26px`).whatsapp
        div(style=`height: 50px; width: 50px; border-radius: 50%; background-color: #FF9A3C` @click="handleClick('')").row.justify-center.items-center.econ.cp
          div(style=`width: 26px; height: 26px`).telegram
  .row.full-width.justify-end.q-py-sm
    small.text-black © {{ $store.state.main.config.info.site_name }}{{ $store.state.main.config.info.year_of_foundation }}-{{new Date().getFullYear()}} Все права защищены.
</template>
<script>
import { openURL } from 'quasar'
export default {
  name: 'pFooter',
  components: {},
  data () {
    return {
    }
  },
  methods: {
    handleClick (url) {
      this.$log('handleClick', url)
      openURL(url)
    },
    toggleMenu () {
      this.$root.$emit('togglemenu')
    },
    openURL
  },
  mounted () {
    this.$log('mounted')
  },
  watch: {
    'scroll': {
      handler (to, from) {
        if (to > 150) this.$log('more than 150!!!')
      }
    }
  },
  computed: {
    getBorder () {
      return `1px solid ${this.white ? 'black' : 'black'}`
    },
    scroll () {
      return window.screenX
    }
  }
}
</script>
<style lang="stylus">
.econ:hover
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
.econ
  -webkit-transition: all 0.3s ease;;
  -moz-transition: all 0.3s ease;;
  -o-transition: all 0.3s ease;;
  transition: all 0.3s ease;
.vk
  background-image: url("~assets/vk.svg");
  background-repeat: no-repeat;
  background-position: center;
.inst
  background-image: url("~assets/instagram.svg");
  background-repeat: no-repeat;
  background-position: center;
.whatsapp
  background-image: url("~assets/whatsapp.svg");
  background-repeat: no-repeat;
  background-position: center;
.telegram
  background-image: url("~assets/telegram.svg");
  background-repeat: no-repeat;
  background-position: center;
</style>
