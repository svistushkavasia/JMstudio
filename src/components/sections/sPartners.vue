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
        .row.full-width.justify-center.q-my-xl
          div(data-aos="fade-up" data-aos-delay="100").col-md-6.col-sm-12.row.justify-center
            div(style=`width: calc(200px + (350 - 200) * ((100vw - 320px) / (1600 - 320))); height: calc(100px + (180 - 100) * ((100vw - 320px) / (1600 - 320)))`)
              a(href="https://motivtelecom.ru/sverdlovsk_oblast/" style=`text-decoration: none`)
                <svg width="100%" class="cls-1 cp grow" height="100%" viewBox="0 0 800 232" xmlns="http://www.w3.org/2000/svg">
                  <path d="M105.228 116.329C98.7579 92.1459 82.6029 62.301 66.2891 42.9062L36.7154 60.8423L56.2293 96.0821H0V136.566H56.2293L36.7154 171.801L66.2891 189.744C82.6029 170.35 98.7579 140.512 105.228 116.329Z"/>
                  <path d="M120.808 106.725C143.976 112.93 176.663 113.15 200.781 108.019V72.1474L161.985 72.2861L190.115 21.1258L156.729 0.898438L128.614 52.0419L109.317 16.6674L79.7402 34.604C87.578 59.1321 104.106 88.7481 120.808 106.725Z"/>
                  <path d="M757.596 125.325C753.662 123.477 748.888 123.977 744.644 123.977L744.645 141.449C748.874 141.449 753.88 142.037 757.752 140.117C763.474 137.343 763.336 128 757.596 125.325ZM757.381 92.4861C753.539 90.4174 748.826 90.8809 744.644 90.8809L744.645 106.343C748.344 106.343 752.885 106.881 756.321 105.329C760.894 103.222 762.151 95.0649 757.381 92.4861ZM800 136.079C800 153.592 784.123 160.27 769.772 160.27H707.868V72.0686H770.256C782.974 72.0686 795.99 78.3325 795.99 93.5753C795.991 104.06 789.241 111.232 780.004 113.728C791.247 115.942 800 123.087 800 136.079ZM691.867 160.27H655.076V120.109H654.609C649.99 136.198 639.944 150.91 629.945 160.27C616.667 160.27 609.326 160.27 596.063 160.27C596.063 130.931 596.063 101.594 596.063 72.2319H632.84V107.145H633.664L652.369 72.2319C665.542 72.2319 678.71 72.2319 691.866 72.2319C691.867 101.594 691.866 130.931 691.867 160.27ZM586.471 97.4372H564.078V160.27H523.772V97.4372H501.38V72.2319C528.655 67.5621 557.048 67.8586 586.467 72.2319L586.471 97.4372ZM453.377 116.255C453.377 109.696 453.983 95.4154 444.605 95.4154C435.137 95.4154 435.804 109.65 435.804 116.255C435.804 122.804 435.213 137.083 444.605 137.083C454.061 137.083 453.377 122.861 453.377 116.255ZM496.574 116.255C496.574 147.715 471.865 162.29 444.605 162.29C417.239 162.288 392.606 147.816 392.606 116.255C392.607 84.7904 417.33 70.2135 444.605 70.2135C471.943 70.2129 496.574 84.6943 496.574 116.255ZM381.412 160.27C370.758 160.27 355.286 160.27 344.619 160.27C344.636 141.892 344.633 136.032 344.619 117.658C344.309 117.658 343.982 117.658 343.67 117.658C340.809 137.974 336.829 144.192 328.634 160.27C321.388 160.27 314.127 160.27 306.88 160.27C299.184 145.049 295.62 138.883 291.858 117.658C291.533 117.658 291.189 117.658 290.894 117.658C290.895 136.032 290.894 141.892 290.894 160.27C280.227 160.27 264.769 160.27 254.103 160.27C254.104 130.931 254.103 101.594 254.103 72.2319H306.88L317.267 110.376H318.233L328.634 72.2319C344.637 72.2319 365.425 72.2319 381.41 72.2319C381.411 101.594 381.41 130.931 381.411 160.27H381.412Z"/>
                  <path d="M120.916 125.709C104.216 143.677 87.6864 173.296 79.8486 197.814L109.44 215.765L128.738 180.391L156.853 231.535L190.208 211.287L162.108 160.156L200.923 160.288V124.406C176.772 119.276 144.087 119.492 120.916 125.709Z"/>
                </svg>
          div(data-aos="fade-up" data-aos-delay="200").col-md-6.col-sm-12.row.items-cente
            .row.full-width.q-pa-md
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
        .row.full-width.justify-center
          .q-gutter-md.row.justify-center
            .col-xs-12.col-sm-5.col-md-2.row.justify-center
              div(@click="handleClick('https://moscow.megafon.ru/')" style=`width: 200px; height: 80px`).megafon.grow.cp
            .col-xs-12.col-sm-5.col-md-2.row.justify-center
              div(@click="handleClick('https://www.naumen.ru/')" style=`width: 200px; height: 80px`).naumen.grow.cp
            .col-xs-12.col-sm-5.col-md-2.row.justify-center
              div(@click="handleClick('http://targem.ru/')" style=`width: 200px; height: 80px`).targem.grow.cp
            .col-xs-12.col-sm-5.col-md-2.row.justify-center
              div(@click="handleClick('https://www.i-teco.ru/')" style=`width: 200px; height: 80px`).ayteko.grow.cp
            .col-xs-12.col-sm-12.col-md-2.row.justify-center
              div(@click="handleClick('https://sberbank.ru/')" style=`width: 200px; height: 80px`).sberbank.grow.cp
        .row.full-width.justify-center
          h2( style=`color: #009992; text-shadow: 1px -1px 0px #fff`) Информационная поддержка
        .row.full-width.justify-center.q-px-md
          .col-xs-12.col-sm-4.col-md-4.row.justify-center.items-center
            div(@click="handleClick('https://tproger.ru/')" style=`width: 250px; height: 100px`).tproger.grow.cp
          .col-xs-12.col-sm-4.col-md-4.row.justify-center.items-center
            div(@click="handleClick('https://it-events.com/')" style=`width: 250px; height: 100px`).itevents.grow.cp
          //- .col-xs-3.col-sm-3.col-md-3.row.justify-center.items-center
          //-   a(href="https://vk.com/best_urfu" style=`text-decoration: none`)
          //-     div(style=`width: 250px; height: 100px`).logo-best.grow.cp
          .col-xs-12.col-sm-4.col-md-4.row.justify-center.items-center
            //- a(href="" style=`text-decoration: none`)
            div(@click="handleClick('http://www.uralstudent.ru/')" style=`width: 250px; height: 150px`).uralstudent.grow.cp
</template>
<script>
import AOS from 'aos'
import { openURL } from 'quasar'
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
  },
  methods: {
    handleClick (url) {
      this.$log('handleClick', url)
      openURL(url)
    }
  }
}
</script>
<style lang="stylus">
</style>
