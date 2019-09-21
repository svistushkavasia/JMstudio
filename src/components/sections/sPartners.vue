<template lang="pug">
  div(:style=``).row.full-width.z
    div(style=`box-shadow: 0 0 100px #009992`).row.full-width.justify-center.bg-black.q-pb-xl
      .row.full-width.justify-center
        h2(data-aos="fade-up" style=`color: #009992; text-shadow: 1px -1px 0px #fff`) С нами сотрудничали
      //- карусель на партнеров
      .row.full-width.justify-center.q-my-xl
        div(data-aos="fade-up" style=`height: calc(100px + (250 - 100) * ((100vw - 320px) / (1600 - 320)));`).row.justify-center.items-center.bg-primary.full-width.q-px-md
          swiper(data-aos="fade" data-aos-delay="300" data-swiper-autoplay="2000" :options="swiperOption").full-width
            swiper-slide(v-for="(d, dd) in partners" :key="d.id" :style=`{marginRight: '50px', width: 'calc(200px + (300 - 200) * ((100vw - 320px) / (1600 - 320)))', height: 'calc(100px + (200 - 100) * ((100vw - 320px) / (1600 - 320)))', backgroundPosition: 'center',marginLeft: '0px', backgroundImage: 'url(' + d.image + ')'}`).nr.cp
            //- swiper-slide(:style=`{width: '100px', backgroundPosition: 'center', marginLeft: '0px', backgroundImage: 'url('statics/HuaweI.svg')'}`)
            //- swiper-slide(:style=`{width: '100px', backgroundPosition: 'center', marginLeft: '0px', backgroundImage: 'url('statics/Unilever.svg'')'}`)
          //- carousel(:style=`{maxWidth: '1700px'}`
          //- :margin="9"
          //- :items="5"
          //- :dots="false"
          //- :loop="true"
          //- :nav="false"
          //- :autoplay="true").row.justify-center
      div(style=`maxWidth: 1100px`).row.justify-center.full-width
        .row.full-width.justify-center
          h2(data-aos="fade-up" style=`color: #009992; text-shadow: 1px -1px 0px #fff`) Наш генеральный партнер
        .row.full-width.justify-center
          div(data-aos="fade-up" data-aos-delay="100").col-md-6.col-sm-12.row.justify-center
            div(style=`width: calc(200px + (450 - 200) * ((100vw - 320px) / (1600 - 320))); height: calc(100px + (200 - 100) * ((100vw - 320px) / (1600 - 320)))`).motiv
          div(data-aos="fade-up" data-aos-delay="200").col-md-6.col-sm-12.row.items-center
            .row.full-width.q-pa-md.q-mb-lg
              span(style=``) <span class="yellow-highlight">  Телекоммуникационная группа МОТИВ</span> - один из ведущих представителей телекоммуникационной сферы Уральского федерального округа.
          //- ПРАВЫЙ
      div(style=`background-color: #009992`).row.full-width.justify-center.bg_motiv
        div(style=`maxWidth: 1100px`).row.justify-center.full-width
          .row.full-width.justify-center
            h2(data-aos="fade-up" style=`color: #000; text-shadow: 1px -1px 0px #fff`) Ярмарка вакансий
          .row.full-width.justify-center.text-black.q-mb-xl.q-px-md
            span В рамках соревнования пройдет ярмарка вакансий, где можно будет пообщаться с представителями лучших IT компаний города в формате собеседований. Это отличный шанс показать себя, познакомиться с потенциальным работодателем и узнать о актуальных вакансиях в IT сфере.
      div(style=`maxWidth: 1100px`).row.justify-center.full-width
        .row.full-width.justify-center
          h2(data-aos="fade-up" style=`color: #009992; text-shadow: 1px -1px 0px #fff`) Наши партнеры на ярмарке вакансий
        .row.full-width.justify-center.q-gutter-md
          .col-xs-4.col-sm-4.col-md-4.row.justify-center
            div(style=`width: 200px; height: 50px`).megafon
          .col-xs-4.col-sm-4.col-md-4.row.justify-center
            div(style=`width: 200px; height: 50px`).naumen
          .col-xs-4.col-sm-4.col-md-4.row.justify-center
            div(style=`width: 200px; height: 50px`).targem
        .row.full-width.justify-center
          h2(data-aos="fade-up" style=`color: #009992; text-shadow: 1px -1px 0px #fff`) Информационная поддержка
        .row.full-width.justify-center.q-px-md
          .col-xs-4.col-sm-4.col-md-4.row.justify-center
            div(style=`width: 250px; height: 100px`).tproger
          .col-xs-4.col-sm-4.col-md-4.row.justify-center
            div(style=`width: 250px; height: 100px`).itevents
          .col-xs-4.col-sm-4.col-md-4.row.justify-center
            div(style=`width: 250px; height: 100px`).logo-best
</template>
<script>
import AOS from 'aos'
export default {
  name: 'sPartners',
  components: { AOS },
  data () {
    return {
      swiperOption: {
        spaceBetween: 50,
        autoplay: {
          delay: 2000
        },
        loop: true,
        simulateTouch: true,
        breakpoints: {
        // when window width is <= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is <= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is <= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1900: {
            slidesPerView: 5,
            spaceBetween: 30
          },
          4000: {
            slidesPerView: 5,
            spaceBetween: 30
          }
        }
      },
      partners: [
        {
          image: 'statics/UCSB.svg',
          url: ''
        },
        {
          image: 'statics/Bilain.svg',
          url: ''
        },
        {
          image: 'statics/1C.svg',
          url: ''
        },
        {
          image: 'statics/Tochka.svg',
          url: ''
        },
        {
          image: 'statics/SKB.svg',
          url: ''
        },
        {
          image: 'statics/CISCI.svg',
          url: ''
        },
        {
          image: 'statics/Yandex.svg',
          url: ''
        },
        {
          image: 'statics/siemens.svg',
          url: ''
        },
        {
          image: 'statics/IBM.svg',
          url: ''
        },
        {
          image: 'statics/Unilever.svg',
          url: ''
        },
        {
          image: 'statics/HuaweI.svg',
          url: ''
        }
      ]
    }
  },
  created () {
    AOS.init()
  }
}
</script>
<style lang="stylus">
</style>
