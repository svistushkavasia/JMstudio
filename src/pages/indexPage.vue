<template lang="pug">
  div.row.full-width.justify-center
    div(:style=`{position: 'relative'}`).row.full-width
      s-first(id="first" :style=`{order: 1}`)
      s-second(id="services" :style=`{order: 2}`)
      s-third(id="third" :style=`{order: 3}`)
      s-photos(id="gallery" :style=`{order: 4}`)
      s-contacts(id="contacts" :style=`{order: 5}`)
</template>

<script>
import sFirst from 'components/sections/sFirst'
import sSecond from 'components/sections/sSecond'
import sThird from 'components/sections/sThird'
import sPhotos from 'components/sections/sPhotos'
import sContacts from 'components/sections/sContacts'
export default {
  name: 'mainPage',
  components: { sFirst, sSecond, sThird, sPhotos, sContacts },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    this.$log('mounted')
  }
}
</script>

<style lang="stylus">
</style>
