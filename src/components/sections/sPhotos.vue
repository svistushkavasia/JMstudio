<template lang="pug">
.row.full-width.justify-center.all_bg
  q-dialog(ref="photo_1" :maximized="$q.screen.lt.sm")
    div(style=`width: 1000px; height: 500px`).jm1
  q-dialog(ref="photo_2" :maximized="$q.screen.lt.sm")
    div(style=`width: 1000px; height: 500px`).jm1
  q-dialog(ref="photo_3" :maximized="$q.screen.lt.sm")
    div(style=`width: 1000px; height: 500px`).jm2
  q-dialog(ref="photo_4" :maximized="$q.screen.lt.sm")
    div(style=`width: 1000px; height: 500px`).jm3
  q-dialog(ref="photo_5" :maximized="$q.screen.lt.sm")
    div(style=`width: 1000px; height: 500px`).jm4
  q-dialog(ref="photo_6" :maximized="$q.screen.lt.sm")
    div(style=`width: 1000px; height: 500px`).jm5
  q-dialog(ref="photo_7" :maximized="$q.screen.lt.sm")
    div(style=`width: 1000px; height: 500px`).jm6
  q-dialog(ref="photo_8" :maximized="$q.screen.lt.sm")
    div(style=`width: 1000px; height: 500px`).jm7
  q-dialog(ref="photo_9" :maximized="$q.screen.lt.sm")
    div(style=`width: 1000px; height: 500px`).jm8
  q-dialog(ref="photo_10" :maximized="$q.screen.lt.sm")
    div(style=`width: 1000px; height:500px`).jm9
  .row.full-width.justify-center.content-center.bg-1
    .row.full-wudth.justify-center.q-mt-xl
        span.text-h4.text-black.text-center ГАЛЕРЕЯ
    .row.full-width.justify-center.q-mt-md.q-mb-xl
      div(style=`height: 50px; width: 100px`).row.jm
    .row.full-width.justify-center.q-mb-xl.gt-sm
      div(style=`width: 1012px`).row
        .col
          div(style=`{width: 400px; height: 404px;}` @click="$refs.photo_1.show()").q-mr-xs.cp.photo.jm1
        div(style=`maxWidth:612px; width: 100%`).row.q-gutter-xs
          div(style=`width: 400px; height: 200px` @click="$refs.photo_2.show()").row.cp.photo.jm1
          div(style=`width: 200px; height: 200px` @click="$refs.photo_3.show()").row.cp.photo.jm2
          div(style=`width: 200px; height: 200px` @click="$refs.photo_4.show()").row.cp.photo.jm3
          div(style=`width: 400px; height: 200px` @click="$refs.photo_5.show()").row.cp.photo.jm4
      div(style=`width: 1012px`).row.q-mt-sm
        div(style=`maxWidth:612px; width: 100%`).row.q-gutter-xs
          div(style=`width: 200px; height: 200px` @click="$refs.photo_6.show()").row.cp.photo.jm5
          div(style=`width: 400px; height: 200px` @click="$refs.photo_7.show()").row.cp.photo.jm6
          div(style=`width: 400px; height: 200px` @click="$refs.photo_8.show()").row.cp.photo.jm7
          div(style=`width: 200px; height: 200px` @click="$refs.photo_9.show()").row.cp.photo.jm8
        .col
          div(style=`width: 400px; height: 404px` @click="$refs.photo_10.show()").cp.photo.jm9
    .row.full-width.justify-center.lt-md.q-gutter-xs.q-px-xs
      div(style=`height: 400px` @click="$refs.photo_1.show()").row.cp.photo.jm1.full-width
      div(style=`height: 200px` @click="$refs.photo_2.show()").row.cp.photo.jm1.full-width
      div(style=`height: 200px` @click="$refs.photo_3.show()").row.cp.photo.jm2.full-width
      div(style=`height: 200px` @click="$refs.photo_4.show()").row.cp.photo.jm3.full-width
      div(style=`height: 200px` @click="$refs.photo_5.show()").row.cp.photo.jm4.full-width
      div(style=`height: 200px` @click="$refs.photo_6.show()").row.cp.photo.jm5.full-width
      div(style=`height: 200px` @click="$refs.photo_7.show()").row.cp.photo.jm6.full-width
      div(style=`height: 200px` @click="$refs.photo_8.show()").row.cp.photo.jm7.full-width
      div(style=`height: 200px` @click="$refs.photo_9.show()").row.cp.photo.jm8.full-width
      div(style=`height: 400px` @click="$refs.photo_10.show()").row.cp.photo.jm9.full-width
</template>

<script>
export default {
  name: 'sPhotos',
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
.photo:hover
  -webkit-transform: scale(0.97);
  -ms-transform: scale(0.97);
  transform: scale(0.97);
.photo
  -webkit-transition: all 0.3s ease;;
  -moz-transition: all 0.3s ease;;
  -o-transition: all 0.3s ease;;
  transition: all 0.3s ease;
.jm1
  background: url("~assets/jm1.jpg")
  background-repeat: no-repeat
  background-position: center
  background-size: cover
.jm2
  background: url("~assets/jm2.jpg")
  background-repeat: no-repeat
  background-position: center
  background-size: cover
.jm3
  background: url("~assets/jm3.jpg")
  background-repeat: no-repeat
  background-position: center
  background-size: cover
.jm4
  background: url("~assets/jm4.jpg")
  background-repeat: no-repeat
  background-position: center
  background-size: cover
.jm5
  background: url("~assets/jm5.jpg")
  background-repeat: no-repeat
  background-position: center
  background-size: cover
.jm6
  background: url("~assets/jm6.jpg")
  background-repeat: no-repeat
  background-position: center
  background-size: cover
.jm7
  background: url("~assets/jm7.jpg")
  background-repeat: no-repeat
  background-position: center
  background-size: cover
.jm8
  background: url("~assets/jm8.jpg")
  background-repeat: no-repeat
  background-position: center
  background-size: cover
.jm9
  background: url("~assets/jm9.jpg")
  background-repeat: no-repeat
  background-position: center
  background-size: cover
</style>
