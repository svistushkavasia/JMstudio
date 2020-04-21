<template lang="pug">
.row.full-width.justify-center
  .row.full-width.justify-center
    div(style=`maxWidth: 1100px`).row.full-width.justify-center.q-px-sm.q-py-xl
      span.text-h4.text-black.text-center 4 ЭТАПА ЗАПИСИ ПЕСНИ В СТУДИИ
    div(style=`maxWidth: 1100px`).row.full-width.justify-center.lt-md
      q-expansion-item(
              expand-separator
              group="somegroup"
              label="Запись вокала"
              ).text-left.shadow-2.full-width.bg-white.text-black
                q-card
                  q-card-section
                    div(style=`width: 300px; height: 220px`).row.justify-center
                      //- div(style=`border: 5px solid #000; border-radius: 50%;`).row.full-width.justify-center.items-center
                      q-circular-progress(
                        show-value
                        class="q-ma-md"
                        :value="85"
                        size="200px"
                        :thickness="0.07"
                        color="primary"
                        track-color="white")
                        q-icon(name="mic")
                        span 85
                    .col.q-pa-md
                      .row.full-width
                        span Записать песню в студии ? – Легко ! даже если вы ни разу не записывались и поете в первый раз! Студия звукозаписи в JMstudio предоставляет «БЕЗЛИМИТНУЮ ЗАПИСЬ» вокала, а значит вы не думаете о подсчете времени на записи песни.
                      .row.full-width.q-mt-sm
                        div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
                        .col
                          span Во время записи песни присутствует только звукорежиссер
                      .row.full-width.q-mt-sm
                        div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
                        .col
                          span Сначала вы распеваетесь у микрофона, чтобы обстановка стала привычной. Тем временем звукорежиссер настраивает аппаратуру под ваш голос
                      .row.full-width.q-mt-sm
                        div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
                        .col
                          span При необходимости звукорежиссер подберет правильную тональность минусовки
                      .row.full-width.q-mt-sm
                        div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
                        .col
                          span Не нужно петь песню целиком, достаточно записывать по 2-4 строчки (даже профессионалы пишут песню по частям)
                      .row.full-width.q-mt-sm
                        div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
                        .col
                          span Звукорежиссер подскажет как правильно спеть, поможет с интонированием и запишет от 3 до 10 вокальных дорожек, чтобы на монтаже отобрать лучшие дубли
      q-expansion-item(
              expand-separator
              group="somegroup"
              label="Тюнинг вокала"
              ).text-left.shadow-2.full-width.bg-white.text-black
                q-card
                  q-card-section
                    div(style=`width: 300px; height: 300px`).row.justify-center
                      //- div(style=`border: 5px solid #000; border-radius: 50%;`).row.full-width.justify-center.items-center
                      q-circular-progress(
                        show-value
                        class="q-ma-md"
                        :value="90"
                        size="200px"
                        :thickness="0.07"
                        color="primary"
                        track-color="white")
                        q-icon(name="headset")
                        span 90
                    .col.q-pa-md
                      .row.full-width
                        span Опытные звукорежиссеры Acoustic Records используют только ручной тюнинг вокала для достижения естественного звучания голоса, а также применяют топовые эффекты для обработки.
                      .row.full-width.q-mt-sm
                        div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
                        .col
                          span Отбираем записанный дубли, выбрав самые удачные
                      .row.full-width.q-mt-sm
                        div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
                        .col
                          span Скорректируем ритмику вокала
                      .row.full-width.q-mt-sm
                        div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
                        .col
                          span Вырежем громкие вздохи и ненужное дыхание
                      .row.full-width.q-mt-sm
                        div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
                        .col
                          span Подтюнем неточные ноты и ошибки интонирования
                      .row.full-width.q-mt-sm
                        div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
                        .col
                          span Сделаем аудио монтаж вокальной дорожки
      q-expansion-item(
              expand-separator
              group="somegroup"
              label="Сведение и мастеринг"
              ).text-left.shadow-2.full-width.bg-white.text-black
                q-card
                  q-card-section
                    div(style=`width: 300px; height: 300px`).row.justify-center
                      //- div(style=`border: 5px solid #000; border-radius: 50%;`).row.full-width.justify-center.items-center
                      q-circular-progress(
                        show-value
                        class="q-ma-md"
                        :value="80"
                        size="200px"
                        :thickness="0.07"
                        color="primary"
                        track-color="white")
                        q-icon(name="tune" style=`transform: rotate(90deg)`)
                        span 80
                    .col.q-pa-md
                      .row.full-width
                        span После записи и тюнинга, вокал сводится с минусовкой, чтобы придать им единое звучание. Для сведения и мастеринга  используется лицензионное программное обеспечение – Cubase 10 pro и топовые плагины компании Slate Digital.
                      .row.full-width.q-mt-sm
                        span На звукозаписывающей студии Acoustic Records работают сертифицированные звукорежиссеры компании Steinberg и выпускники московских ВУЗов.
      q-expansion-item(
              expand-separator
              group="somegroup"
              label="Готовый результат"
              ).text-left.shadow-2.full-width.bg-white.text-black
                q-card
                  q-card-section
                    div(style=`width: 300px; height: 300px`).row.justify-center
                      //- div(style=`border: 5px solid #000; border-radius: 50%;`).row.full-width.justify-center.items-center
                      q-circular-progress(
                        show-value
                        class="q-ma-md"
                        :value="95"
                        size="200px"
                        :thickness="0.07"
                        color="primary"
                        track-color="white")
                        q-icon(name="thumb_up")
                        span 95
                    .col.q-pa-md
                      .row.full-width
                        span Acoustic Records гарантирует 100% качественный результат.
                      .row.full-width.q-mt-sm
                        span Сведение песни – это творческий процесс и каждый человек воспринимает качество обработки в зависимости от своих музыкальных предпочтений. По этому если вам не понравится финальный вариант вашей песни, то мы с легкостью его поправим без доплат по вашим предпочтениям.
    div(style=`maxWidth: 1100px;`).row.full-width.justify-center.gt-sm
      q-tabs(
        v-model="tab"
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        :breakpoint="0"
        style=`height: 100px`
        narrow-indicator
        ).column
        .row.full-width
          q-tab(style=`height: 50px` name="recording") Запись вокала
          q-tab(name="voice_tun") Тюнинг вокала
          q-tab(name="mastering") Сведение и мастеринг
          q-tab(name="result") Готовый результат
      q-tab-panels(v-model="tab" animated).full-width.text-black
        q-tab-panel(name="recording").row
          div(style=`width: 300px; height: 300px`).row.justify-center
            //- div(style=`border: 5px solid #000; border-radius: 50%;`).row.full-width.justify-center.items-center
            q-circular-progress(
              show-value
              class="q-ma-md"
              :value="85"
              size="200px"
              :thickness="0.07"
              color="primary"
              track-color="white")
              q-icon(name="mic")
              span 85
          .col.q-pa-md
            .row.full-width
              span Записать песню в студии ? – Легко ! даже если вы ни разу не записывались и поете в первый раз! Студия звукозаписи в JMstudio предоставляет «БЕЗЛИМИТНУЮ ЗАПИСЬ» вокала, а значит вы не думаете о подсчете времени на записи песни.
            .row.full-width.q-mt-sm
              div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
              .col
                span Во время записи песни присутствует только звукорежиссер
            .row.full-width.q-mt-sm
              div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
              .col
                span Сначала вы распеваетесь у микрофона, чтобы обстановка стала привычной. Тем временем звукорежиссер настраивает аппаратуру под ваш голос
            .row.full-width.q-mt-sm
              div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
              .col
                span При необходимости звукорежиссер подберет правильную тональность минусовки
            .row.full-width.q-mt-sm
              div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
              .col
                span Не нужно петь песню целиком, достаточно записывать по 2-4 строчки (даже профессионалы пишут песню по частям)
            .row.full-width.q-mt-sm
              div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
              .col
                span Звукорежиссер подскажет как правильно спеть, поможет с интонированием и запишет от 3 до 10 вокальных дорожек, чтобы на монтаже отобрать лучшие дубли
        q-tab-panel(name="voice_tun").row
          div(style=`width: 300px; height: 300px`).row.justify-center
            //- div(style=`border: 5px solid #000; border-radius: 50%;`).row.full-width.justify-center.items-center
            q-circular-progress(
              show-value
              class="q-ma-md"
              :value="90"
              size="200px"
              :thickness="0.07"
              color="primary"
              track-color="white")
              q-icon(name="headset")
              span 90
          .col.q-pa-md
            .row.full-width
              span Опытные звукорежиссеры Acoustic Records используют только ручной тюнинг вокала для достижения естественного звучания голоса, а также применяют топовые эффекты для обработки.
            .row.full-width.q-mt-sm
              div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
              .col
                span Отбираем записанный дубли, выбрав самые удачные
            .row.full-width.q-mt-sm
              div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
              .col
                span Скорректируем ритмику вокала
            .row.full-width.q-mt-sm
              div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
              .col
                span Вырежем громкие вздохи и ненужное дыхание
            .row.full-width.q-mt-sm
              div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
              .col
                span Подтюнем неточные ноты и ошибки интонирования
            .row.full-width.q-mt-sm
              div(style=`width: 10px; height: 10px; background-color: #000; border-radius: 50%; margin-right: 5px`).q-mt-sm
              .col
                span Сделаем аудио монтаж вокальной дорожки
        q-tab-panel(name="mastering").row
          div(style=`width: 300px; height: 300px`).row.justify-center
            //- div(style=`border: 5px solid #000; border-radius: 50%;`).row.full-width.justify-center.items-center
            q-circular-progress(
              show-value
              class="q-ma-md"
              :value="80"
              size="200px"
              :thickness="0.07"
              color="primary"
              track-color="white")
              q-icon(name="tune" style=`transform: rotate(90deg)`)
              span 80
          .col.q-pa-md
            .row.full-width
              span После записи и тюнинга, вокал сводится с минусовкой, чтобы придать им единое звучание. Для сведения и мастеринга  используется лицензионное программное обеспечение – Cubase 10 pro и топовые плагины компании Slate Digital.
            .row.full-width.q-mt-sm
              span На звукозаписывающей студии Acoustic Records работают сертифицированные звукорежиссеры компании Steinberg и выпускники московских ВУЗов.
        q-tab-panel(name="result").row
          div(style=`width: 300px; height: 300px`).row.justify-center
            //- div(style=`border: 5px solid #000; border-radius: 50%;`).row.full-width.justify-center.items-center
            q-circular-progress(
              show-value
              class="q-ma-md"
              :value="95"
              size="200px"
              :thickness="0.07"
              color="primary"
              track-color="white")
              q-icon(name="thumb_up")
              span 95
          .col.q-pa-md
            .row.full-width
              span Acoustic Records гарантирует 100% качественный результат.
            .row.full-width.q-mt-sm
              span Сведение песни – это творческий процесс и каждый человек воспринимает качество обработки в зависимости от своих музыкальных предпочтений. По этому если вам не понравится финальный вариант вашей песни, то мы с легкостью его поправим без доплат по вашим предпочтениям.
</template>
<script>
export default {
  name: 'sThird',
  components: { },
  data () {
    return {
      form: {
        phone: '',
        name: ''
      },
      tab: 'recording',
      value: 85
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
</style>
