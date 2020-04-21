<template lang="pug">
.row.full-width.justify-center.all_bg
  .row.full-width.justify-center
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
    q-dialog(ref="service_1" :maximized="$q.screen.lt.sm")
      div(style=`maxWidth: 900px; minHeight: 400px`).column.full-width.items-start.justify-start.bg-white.q-px-md
        div(style=``).row.full-width.justify-center
          div(style=``).row.full-width.justify-end
            q-btn(round flat icon="clear" style=`position: absolute` color="primary" @click="$refs.service_1.hide()").q-ma-xs
          div(style=`height: 80px; width: 150px`).row.jm.q-mt-md
        div(style=`maxWidth: 400px`).row.full-width.justify-center.text-black.q-mt-xl
          span Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
    q-dialog(ref="service_2" :maximized="$q.screen.lt.sm")
      div(style=`maxWidth: 900px; minHeight: 400px`).column.full-width.items-start.justify-start.bg-white.q-px-md
        div(style=``).row.full-width.justify-center
          div(style=``).row.full-width.justify-end
            q-btn(round flat icon="clear" style=`position: absolute` color="primary" @click="$refs.service_2.hide()").q-ma-xs
          div(style=`height: 80px; width: 150px`).row.jm.q-mt-md
        .row.full-width.justify-center
          div(style=`maxWidth: 400px`).row.full-width
          div(style=`maxWidth: 400px`).row.justify-center.text-black.q-mt-xl
            span Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
    q-dialog(ref="service_3" :maximized="$q.screen.lt.sm")
      div(style=`maxWidth: 900px; minHeight: 400px`).column.full-width.items-start.justify-start.bg-white.q-px-md
        div(style=``).row.full-width.justify-center
          div(style=``).row.full-width.justify-end
            q-btn(round flat icon="clear" style=`position: absolute` color="primary" @click="$refs.service_3.hide()").q-ma-xs
          div(style=`height: 80px; width: 150px`).row.jm.q-mt-md
        div(style=`maxWidth: 400px`).row.full-width.justify-center.text-black.q-mt-xl
          span Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
    q-dialog(ref="service_4" :maximized="$q.screen.lt.sm")
      div(style=`maxWidth: 900px; minHeight: 400px`).column.full-width.items-start.justify-start.bg-white.q-px-md
        div(style=``).row.full-width.justify-center
          div(style=``).row.full-width.justify-end
            q-btn(round flat icon="clear" style=`position: absolute` color="primary" @click="$refs.service_4.hide()").q-ma-xs
          div(style=`height: 80px; width: 150px`).row.jm.q-mt-md
        .row.full-width.justify-center
          div(style=`maxWidth: 400px`).row.full-width
          div(style=`maxWidth: 400px`).row.justify-center.text-black.q-mt-xl
            span Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
    q-dialog(ref="service_5" :maximized="$q.screen.lt.sm")
      div(style=`maxWidth: 900px; minHeight: 400px`).column.full-width.items-start.justify-start.bg-white.q-px-md
        div(style=``).row.full-width.justify-center
          div(style=``).row.full-width.justify-end
            q-btn(round flat icon="clear" style=`position: absolute` color="primary" @click="$refs.service_5.hide()").q-ma-xs
          div(style=`height: 80px; width: 150px`).row.jm.q-mt-md
        div(style=`maxWidth: 400px`).row.full-width.justify-center.text-black.q-mt-xl
          span Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
    div(style=`maxWidth: 1100px`).row.full-width.justify-center.q-py-xl
      .row.full-wudth.justify-center.q-mt-xl
        span.text-h4.text-black.text-center УСЛУГИ
      .row.full-width.justify-center.q-mt-md
        div(style=`height: 50px; width: 100px`).row.jm
      .row.full-width.justify-center.q-mt-xl.q-px-md
        div(style=`maxWidth: 900px; height: 200px`).row.full-width.justify-center.items-center.service_1.shadow-5.q-px-lg
          .col
            div(style=`height: 150px; width: 150px`).micro.gt-sm
            div(style=`height: 100px; width: 100px`).micro.lt-md
          .row.full-width
            .row.full-width.justify-end
              span.text-h4.gt-sm Готовая песня
              span.text-h6.lt-md Готовая песня
            .row.full-width.justify-end.q-mt-sm
              q-btn(outline style=`maxWidth: 230px; border-radius: 0px; border: 3px solid #fff; font-size: 20px` @click="$refs.callback.show()" label="Записать трек" color="white").row.full-width.gt-sm
              q-btn(outline style=`maxWidth: 150px; border-radius: 0px; border: 2px solid #fff; font-size: 10px` @click="$refs.callback.show()" label="Записать трек" color="white").row.full-width.lt-md.self-end
      .row.full-width.justify-center.q-mt-md.q-px-md.text-subtitle2.lt-md
        div(style=`height: 200px` @click="$refs.service_1.show()").row.full-width.service_2.shadow-5.q-pa-sm.items-end.cp.grow-shadow
          span Почасовая запись
        div(style=`height: 200px` @click="$refs.service_2.show()").row.full-width.service_3.shadow-5.q-pa-sm.items-end.cp.grow-shadow.q-mt-md
          span Сведение и мастеринг
        div(style=`height: 200px` @click="$refs.service_3.show()").row.full-width.service_4.shadow-5.q-pa-sm.items-end.cp.grow-shadow.q-mt-md
          span Минус на заказ
        div(style=`height: 200px` @click="$refs.service_4.show()").row.full-width.service_5.shadow-5.q-pa-sm.items-end.cp.grow-shadow.q-mt-md
          span Озвучка видеороликов
      .row.full-width.justify-center.q-mt-md.q-px-md.text-subtitle2.gt-sm
        div(style=`width: 210px; margin-right: 20px; height: 200px` @click="$refs.service_2.show()").row.service_2.shadow-5.q-pa-sm.items-end.cp.grow-shadow
          span Почасовая запись
        div(style=`width: 210px; margin-right: 20px; height: 200px` @click="$refs.service_2.show()").row.service_3.shadow-5.q-pa-sm.items-end.cp.grow-shadow
          span Сведение и мастеринг
        div(style=`width: 210px; margin-right: 20px; height: 200px` @click="$refs.service_3.show()").row.service_4.shadow-5.q-pa-sm.items-end.cp.grow-shadow
          span Минус на заказ
        div(style=`width: 210px; height: 200px` @click="$refs.service_4.show()").row.service_5.shadow-5.q-pa-sm.items-end.cp.grow-shadow
          span Озвучка видеороликов
      .row.full-width.justify-center.q-mt-md.q-px-md
        div(style=`maxWidth: 900px; height: 200px` @click="$refs.service_5.show()").row.full-width.justify-center.items-center.service_6.shadow-5.q-px-lg.cp.grow-shadow
          span.text-h4 Аудиореклама
</template>
<script>
export default {
  name: 'sSecond',
  components: { },
  data () {
    return {
      form: {
        phone: '',
        name: ''
      }
    }
  },
  methods: {
    service1 () {
      this.$refs.service_1.show()
    }
  },
  created () {
  }
}
</script>
<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Rufina&display=swap');
.grow-shadow {
  -webkit-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
}
.grow-shadow:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
      transform: scale(1.1);
  box-shadow: 1px 1px 10px #000;
}
.micro
  background-image: url("~assets/micro.svg");
  background-size: cover
  background-position: center
  background-repeat: no-repeat
.service_1
  background-image: url("~assets/service_1.png");
  background-size: cover
  background-position: center
  background-repeat: no-repeat
.service_2
  background-image: url("~assets/service_2.png");
  background-size: cover
  background-position: center
  background-repeat: no-repeat
.service_3
  background-image: url("~assets/service_3.png");
  background-size: cover
  background-position: center
  background-repeat: no-repeat
.service_4
  background-image: url("~assets/service_4.png");
  background-size: cover
  background-position: center
  background-repeat: no-repeat
.service_5
  background-image: url("~assets/service_5.png");
  background-size: cover
  background-position: center
  background-repeat: no-repeat
.service_6
  background-image: url("~assets/service_6.png");
  background-size: cover
  background-position: center
  background-repeat: no-repeat
.jm
  background-image: url("~assets/jm.svg");
  background-size: 100%
  background-position: center
  background-repeat: no-repeat
.all_bg
  background-color: #EAEAEA
</style>
