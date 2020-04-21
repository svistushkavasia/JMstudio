<template lang="pug">
.row.full-width.justify-center
  .row.full-width.justify-center.content-center.bg-1
    div(style=``).row.full-width.justify-center.items-center.q-px-sm
      div(ref="logo" style=`zIndex: 10; maxWidth: 600px; height: 100px; border-radius: 10px`).row.full-width.bg-white.q-px-md.gt-xs
        .row.fit.logo_3
      div(style=`zIndex: 10; maxWidth: 600px; height: 100px; border-radius: 10px`).row.full-width.bg-white.q-px-md.lt-sm
        .row.fit.logo_3
      div(style=`position: absolute;`).row.full-width.justify-center.items-center.gt-sm
        div(v-for="n in 4" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a1" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a2" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a3" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a4" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a5" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a6" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a7" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a8" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a9" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a10" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a11" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a12" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a13" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a14" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a15" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a16" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a17" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a18" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a19" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a20" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a21" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a22" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a23" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a24" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a25" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a26" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a27" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(ref="a28" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
        div(v-for="n in 4" style=`height: 20px; width: 20px; border-radius: 20px`).bg-audio.q-mr-sm
    div(style=`maxWidth: 1100px; height: 200px`).row.full-width.content-start.justify-end.q-mt-md.lt-sm.q-px-sm
      span многопрофильная студия звукозаписи
      div(style=`width: 200px; border-radius: 10px; height: 5px; background-color: #FF9A3C`)
    //- div(style=`maxWidth: 1100px; height: 200px`).row.full-width.justify-end.items-center.q-px-sm.gt-xs
      div(style=`maxWidth: 450px; z-index: 100`).row.full-width.justify-end
        span(style=`margin-right: 50px`).row.full-width многопрофильная студия звукозаписи
        div(style=`width: 400px; border-radius: 10px; height: 5px; background-color: #FF9A3C`)
    div(style=`position: absolute; height: 224px; margin-top: 1px; margin-bottom: -1px`).row.full-width.bg-2.self-end.justify-center
      div(style=`height: 100px;` class="hero__scroll").row.full-width.justify-center.self-end
        a(href="#services" v-smooth-scroll="{ duration: 1000, offset: -50, container: '' }" style=`height: 100px` class="chevron bottom").justify-center
</template>

<script>
import { TimelineLite, Linear, gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
export default {
  name: 'sFirst',
  components: { TimelineLite, Linear, gsap, MotionPathPlugin },
  data () {
    return {
    }
  },
  mounted () {
    gsap.registerPlugin(MotionPathPlugin)
    const a1 = this.$refs.a1
    const a2 = this.$refs.a2
    const a3 = this.$refs.a3
    const a4 = this.$refs.a4
    const a5 = this.$refs.a5
    const a6 = this.$refs.a6
    const a7 = this.$refs.a7
    const a8 = this.$refs.a8
    const a9 = this.$refs.a9
    const a10 = this.$refs.a10
    const a11 = this.$refs.a11
    const a12 = this.$refs.a12
    const a13 = this.$refs.a13
    const a14 = this.$refs.a14
    const a15 = this.$refs.a15
    const a16 = this.$refs.a16
    const a17 = this.$refs.a17
    const a18 = this.$refs.a18
    const a19 = this.$refs.a19
    const a20 = this.$refs.a20
    const a21 = this.$refs.a21
    const a22 = this.$refs.a22
    const a23 = this.$refs.a23
    const a24 = this.$refs.a24
    const a25 = this.$refs.a25
    const a26 = this.$refs.a26
    const a27 = this.$refs.a27
    const a28 = this.$refs.a28
    const logo = this.$refs.logo
    const a1Timeline = new TimelineLite({ease: Linear.easeNone})
    a1Timeline
      .set(logo, {autoAlpha: 0})
      .to(a1, 0.05, {delay: 1, height: 216})
      .to(a2, 0.05, {height: 183})
      .to(a3, 0.05, {height: 383})
      .to(a1, 0.05, {height: 166})
      .to(a4, 0.05, {height: 350})
      .to(a2, 0.05, {height: 133})
      .to(a5, 0.05, {height: 466})
      .to(a3, 0.05, {height: 353})
      .to(a6, 0.05, {height: 433})
      .to(a4, 0.05, {height: 300})
      .to(a7, 0.05, {height: 133})
      .to(a5, 0.05, {height: 416})
      .to(a8, 0.05, {height: 350})
      .to(a6, 0.05, {height: 383})
      .to(a9, 0.05, {height: 550})
      .to(a7, 0.05, {height: 83})
      .to(a10, 0.05, {height: 466})
      .to(a8, 0.05, {height: 300})
      .to(a11, 0.05, {height: 383})
      .to(a9, 0.05, {height: 500})
      .to(a12, 0.05, {height: 300})
      .to(a10, 0.05, {height: 416})
      .to(a13, 0.05, {height: 300})
      .to(a11, 0.05, {height: 333})
      .to(a14, 0.05, {height: 350})
      .to(a12, 0.05, {height: 250})
      .to(a15, 0.05, {height: 183})
      .to(a13, 0.05, {height: 250})
      .to(a16, 0.05, {height: 133})
      .to(a14, 0.05, {height: 300})
      .to(a17, 0.05, {height: 183})
      .to(a15, 0.05, {height: 133})
      .to(a18, 0.05, {height: 350})
      .to(a16, 0.05, {height: 83})
      .to(a19, 0.05, {height: 183})
      .to(a17, 0.05, {height: 133})
      .to(a20, 0.05, {height: 183})
      .to(a18, 0.05, {height: 300})
      .to(a21, 0.05, {height: 300})
      .to(a19, 0.05, {height: 153})
      .to(a22, 0.05, {height: 350})
      .to(a20, 0.05, {height: 153})
      .to(a23, 0.05, {height: 300})
      .to(a21, 0.05, {height: 250})
      .to(a24, 0.05, {height: 350})
      .to(a22, 0.05, {height: 300})
      .to(a25, 0.05, {height: 350})
      .to(a23, 0.05, {height: 350})
      .to(a26, 0.05, {height: 350})
      .to(a24, 0.05, {height: 300})
      .to(a27, 0.05, {height: 216})
      .to(a25, 0.05, {height: 300})
      .to(a28, 0.05, {height: 166})
      .to(a26, 0.05, {height: 300})
      .to(a28, 0.05, {height: 116})
      .to(a27, 0.05, {height: 166})
      .to(logo, 2, {autoAlpha: 1})
  }
}
</script>

<style lang="stylus" scoped>
.hero__scroll .chevron {
  display: block;
  -webkit-animation: pulse 2s infinite;
  animation: pulse 2s infinite;
  color: #FF9A3C;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50% -50%);
}
.chevron.bottom:before {
    left: 30%
    -webkit-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    transform: rotate(135deg);
}
.chevron::before {
    border-style: solid;
    border-width: 0.5em 0.5em 0 0;
    // border: 2px solid #fff;
    content: '';
    display: inline-block;
    height: 50px;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    vertical-align: top;
    width: 50px;
}
@keyframes pulse
  0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
  }
  50% {
      -webkit-transform: translate(0, 10px);
      transform: translate(0, 10px);
  }
  100% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
  }
.bg-1
  background-image: url("~assets/bg-1.jpg");
  background-size: cover
  background-position: top
  height: calc(100vh - 60px)
  background-repeat: no-repeat
.trengle
  border: 20px solid transparent; border-top: 20px solid green;
  width: 100%
  height: 150px
.bg-2
  background-image: url("~assets/bg-2.png");
  background-size: 100%
  background-position: bottom
  background-repeat: no-repeat
.logo_3
  background-image: url("~assets/LOGO3.svg")
  background-size: 100%
  background-position: center
  background-repeat: no-repeat
.bg-audio
  background-color: #FF9A3C
</style>
