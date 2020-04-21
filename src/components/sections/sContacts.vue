<template lang="pug">
.row.full-width.justify-center.all_bg
  div(style=`minheight: 650px`).row.full-width.justify-center.content-start.bg-contacts.q-mt-xs
    .row.full-wudth.justify-center.q-mt-xl
      span.text-h4.text-black.text-center КОНТАКТЫ
    .row.full-width.justify-center.q-mt-md.q-mb-xl
      div(style=`height: 50px; width: 100px`).row.jm
    div(style=`maxWidth: 1200px`).row.full-width.justify-center.items-center
      div(style=`maxWidth: 400px; height: 300px`).row.full-width.justify-center.content-center
        .row.justify-center.items-center
          div(style=`height: 70px; width: 70px`).phone
        .row.full-width.justify-center.q-mt-lg
          .row.full-width.justify-center
            span.text-h4 Телефон
          div(style=`background-color: #FF9A3C; height: 3px; width: 70px`).q-mt-md
          div(style="height: 50px").row.full-width.justify-center.items-start.q-mt-lg
            span +7 (982) 702-94-64
      div(style=`maxWidth: 400px; height: 300px`).row.full-width.justify-center.content-center
        .row.justify-center.items-center
          div(style=`height: 70px; width: 70px`).place
        .row.full-width.justify-center.q-mt-lg
          .row.full-width.justify-center
            span.text-h4 Адрес
          div(style=`background-color: #FF9A3C; height: 3px; width: 70px`).q-mt-md
          div(style=`height: 50px`).row.full-width.justify-center.items-start.text-center.q-mt-lg
            span Студия звукозаписи в Екатеринбурге, ул. Луначарского, д.80
      div(style=`maxWidth: 400px; height: 300px`).row.full-width.justify-center.content-center
        .row.justify-center.items-center
          div(style=`height: 70px; width: 70px`).email
        .row.full-width.justify-center.q-mt-lg
          .row.full-width.justify-center
            span.text-h4 Почта
          div(style=`background-color: #FF9A3C; height: 3px; width: 70px`).q-mt-md
          div(style=`height: 50px`).row.full-width.justify-center.items-start.q-mt-lg
            span Jmsession@yandex.ru
</template>

<script>
export default {
  name: 'sContacts',
  components: { },
  data () {
    return {
    }
  },
  methods: {
    photo () {
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
.place
  background-image: url("~assets/place.svg");
  background-repeat: no-repeat;
  background-position: center;
.phone
  background-image: url("~assets/phone.svg");
  background-repeat: no-repeat;
  background-position: center;
.email
  background-image: url("~assets/email.svg");
  background-repeat: no-repeat;
  background-position: center;
.bg-contacts
  background-image: url("~assets/bg-contacts2.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
</style>
