<template lang="pug">
  div(id="q-app")
    router-view
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
html, body
  font-family: 'Roboto Slab', serif;
  color: #fff;
  font-size: calc(14px + (22 - 14) * ((100vw - 320px) / (2000 - 320)))
  margin 0px
  padding 0px
  background-position: fixed;
.br
  border 1px solid red
.bb
  border 1px solid black
.cp
  cursor pointer
.pl
  padding-left 6px
.pr
  padding-right 6px
.pt
  padding-top 6px
.pb
  padding-bottom 6px
.mt
  margin-top 6px
.mb
  margin-bottom 6px
.ml
  margin-left 6px
.mr
  margin-right 6px
.ma
  margin 6px
.pa
  padding 6px
.hr:hover
  background rgba(123,190,77, 0.2) !important
::-webkit-scrollbar
  width: 3px
  height: 0px !important
::-webkit-scrollbar-thumb
  background: #FF9A3C
</style>
