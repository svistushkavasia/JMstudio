<template lang="pug">
.row.full-width
  div(style=`minHeight: 700px; box-shadow: 0 0px 700px #009992; z-index: 100`).row.full-width.justify-center.bg-black
    div(:style=`{maxWidth: ''}`).row.full-width.items-start.justify-center
      .row.full-width.justify-center
        div(style=``).row.full-width.justify-center
          h2(data-aos="fade-up" style=`color: #009992; text-shadow: 1px -1px 0px #fff`) Что такое HACKATHON?
        //- выравнивание элемента по центру
        .row.full-width.justify-center.q-my-xs.lt-sm
          //- ХЕКСАГОНЫ
          div(style=`padding-right: 30px`).row.q-my-md
            //- ЛЕВЫЙ СТОЛБЕЦ
            div(data-aos="fade-up").hex2.stroke
              //- темно зеленый
              .hex2.row
                .hex2.top.green
                .hex2.middle.green
                  span(style=`margin: 0px 0px; font-size: 10px; position: absolute; width: 90px; margin-left: -17px; margin-top: 10px`).text-center.text-white Хочешь испытать свои силы в решении реальной проблемы
                .hex2.bottom.green
              //- зеленый
              .hex2.row
                .hex2.top.lightgreen
                .hex2.middle.lightgreen
                  span(style=`margin: 0px 0px; font-size: 10px; position: absolute; width: 90px; margin-left: -17px; margin-top: 25px`).text-center.text-white Желаешь бросить себе вызов
                .hex2.bottom.lightgreen
            //- СРЕДНИЙ СТОЛБЕЦ
            .hex2.middle.stroke
              //- белый
              div(data-aos="fade-down").hex2.row
                .hex2.top.white
                .hex2.middle.white.row.justify-center.items-center
                  h5.text-black Ты:
                .hex2.bottom.white
              //- черный
              .hex2.black.row
                .hex2.top.black
                .hex2.middle.black
                .hex2.bottom.black
              //- темно зеленый
              div(data-aos="fade-up").hex2.row
                .hex2.top.green
                .hex2.middle.green
                  span(style=`margin: 0px 0px; font-size: 10px; position: absolute; width: 90px; margin-left: -17px; margin-top: 35px`).text-center.text-white Умеешь работать в команде
                .hex2.bottom.green
            //- ПРАВЫЙ СТОЛБЕЦ
            div(data-aos="fade-up").hex2.stroke
              //- темно зеленый
              .hex2.row
                .hex2.top.green
                .hex2.middle.green
                  span(style=`margin: 0px 0px; font-size: 10px; position: absolute; width: 90px; margin-left: -17px; margin-top: 30px`).text-center.text-white Студент из Екатеринбурга
                .hex2.bottom.green
              //- зеленый
              .hex2.row
                .hex2.top.lightgreen
                .hex2.middle.lightgreen
                  span(style=`margin: 0px 0px; font-size: 10px; position: absolute; width: 90px; margin-left: -17px; margin-top: 25px`).text-center.text-white Увлекаешься программиро- ванием
                .hex2.bottom.lightgreen
        //- div(style=``).row.justify-center.br.gt-xs
        //-   //- .clipper.br.row.justify-center
        //-   //- .clipper.row.full-width.justify-center
        //-     .shape3.row.justify-center.br
        //-       .shape4.br
        //-       //- .shape
        //-   .row.window-height.window-width.justify-center
        //-     div(style=`width: 400px; height: 400px; position: relative`).box
        //-       span
        //-       span
        //-       span
        //-       span
        .row.full-width.justify-center.q-my-xs.gt-xs
          div(style=`padding-right: 60px`).row.q-my-md
            //- ЛЕВЫЙ СТОЛБЕЦ
            div(data-aos="fade-right").hex.stroke
              //- темно зеленый
              .hex
                .hex.top.green
                .hex.middle.green
                  span(style=`margin: 0px 0px; font-size: 20px; position: absolute; width: 180px; margin-left: -37px; margin-top: 15px`).text-center.text-white Хочешь испытать свои силы в решении реальной проблемы
                .hex.bottom.green
              //- зеленый
              .hex
                .hex.top.lightgreen
                .hex.middle.lightgreen
                  span(style=`margin: 0px 0px; font-size: 20px; position: absolute; width: 150px; margin-left: -23px; margin-top: 45px`).text-center.text-white Желаешь бросить себе вызов
                .hex.bottom.lightgreen
            //- СРЕДНИЙ СТОЛБЕЦ
            .hex.middle.stroke
              //- белый
              div(data-aos="fade-down").hex
                .hex.top.white
                .hex.middle.white.row.justify-center.items-center
                  h3.text-black Ты:
                .hex.bottom.white
              //- черный
              .hex.black
                .hex.top.black
                .hex.middle.black
                .hex.bottom.black
              //- темно зеленый
              div(data-aos="fade-up").hex
                .hex.top.green
                .hex.middle.green
                  span(style=`margin: 0px 0px; font-size: 20px; position: absolute; width: 150px; margin-left: -23px; margin-top: 45px`).text-center.text-white Умеешь работать в команде
                .hex.bottom.green
            //- ПРАВЫЙ СТОЛБЕЦ
            div(data-aos="fade-left").hex.stroke
              //- темно зеленый
              .hex
                .hex.top.green
                .hex.middle.green
                  span(style=`margin: 0px 0px; font-size: 20px; position: absolute; width: 150px; margin-left: -23px; margin-top: 55px`).text-center.text-white Студент из Екатеринбурга
                .hex.bottom.green
              //- зеленый
              .hex
                .hex.top.lightgreen
                .hex.middle.lightgreen
                  span(style=`margin: 0px 0px; font-size: 20px; position: absolute; width: 150px; margin-left: -23px; margin-top: 45px`).text-center.text-white Увлекаешься программиро- ванием
                .hex.bottom.lightgreen
      div(style=`maxWidth: 800px; width: 100%; font-family: Russo One; z-index: 100`).row.justify-center.q-px-md.q-my-xl
          div(data-aos="fade-right" style=`width: 130px; height: 130px; background: #009992;`).row.q-mr-md.gt-xs
            div(style=`font-size: 24px; `).row.full-width.justify-center
              .row.full-width.justify-center.q-pt-xs
                span.self-start 19-20
              .row.full-width.justify-center
                span.self-center OCTOBER
              .row.full-width.justify-center.q-pb-xs
                span.self-end 2019
          div(data-aos="fade-up" style=`width: 85px; height: 85px; background: #009992;`).row.q-mr-md.lt-sm
            div(style=`font-size: 12px; font-family: Russo One;`).row.full-width.justify-center
              .row.full-width.justify-center
                span.self-end 19-20
                span.self-start OCTOBER
              .row.full-width.justify-center
                span.self-end 2019
          div(data-aos="fade-left" style=`font-size: 18px;`).col.text-justify.q-mb-xl.gt-xs
            span(style=`z-index: 100; font-family: Roboto Slab;
                        font-style: normal;
                        font-weight: bold;
                        color: #FFFFFF;`) Ты на сайте IT-мероприятия HACKATHON BEST UrFU 2019, которое пройдет 19-20 октября в Екатеринбурге.<br /> Наш HACKATHON — это марафон программирования, на котором тебе нужно будет устроить настоящий мозговой штурм, чтобы за 24 часа справиться с заданием от IT-компаний города.
          div(data-aos="fade-up" style=`font-size: 10px;`).col.text-justify.q-mb-xs.lt-sm.q-px-xs
            span(style=`z-index: 100; font-family: Roboto Slab;
                        font-style: normal;
                        font-weight: bold;
                        color: #FFFFFF;`) Ты на сайте IT-мероприятия HACKATHON BEST UrFU 2019, которое пройдет 19-20 октября в Екатеринбурге.<br />Наш HACKATHON — это марафон программирования, на котором тебе нужно будет устроить настоящий мозговой штурм, чтобы за 24 часа справиться с заданием от IT-компаний города.
</template>
<script>
import AOS from 'aos'
export default {
  name: 'sSecond',
  components: { AOS },
  data () {
    return {
    }
  },
  created () {
    AOS.init()
  }
}
</script>
<style lang="stylus">
.box:before{
  content: '';
  // position:absolute;
  top:0;
  left: -100%;
  width:100%;
  height:100%;
  background: rgba(255,255,255,0.1);
  transition:0.5s;
  pointer-events: none;
}
.box:hover:before{
  left:-50%;
  transform: skewX(-5deg);
}
.box.content{
  position:absolute;
  top:15px;
  left:15px;
  right:15px;
  bottom:15px;
  border:1px solid #f0a591;
  padding:20px;
  text-align:center;
  box-shadow: 0 5px 10px rgba(9,0,0,0.5);
}
.box span{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
.box span:nth-child(1)
{
  transform:rotate(0deg);
}
.box span:nth-child(2)
{
  transform:rotate(90deg);
}
.box span:nth-child(3)
{
  transform:rotate(180deg);
}
.box span:nth-child(4)
{
  transform:rotate(270deg);
}
.box span:before
{
  content: '';
  position: absolute;
  width:100%;
  height: 2px;
  background: #50dfdb;
  animation: animate 4s linear infinite;
}

@keyframes animate {
  0% {
  transform:scaleX(0);
  transform-origin: left;
  }
  50%
  {
    transform:scaleX(1);
  transform-origin: left;
  }
  50.1%
  {
    transform:scaleX(1);
  transform-origin: right;
  }
  100%
  {
    transform:scaleX(0);
  transform-origin: right;
  }
}
// .shape{
//  border-radius: 90px;
//  width: 95px;
//  height: 70px;
//  margin-top: 0px
// //  border: 4px solid white;
// overflow:hidden
// background: #000
// }
// .shape2{
//  border-radius: 20000px;
//  width: 20000px;
//  height: 20000px;
//  margin-top: -19800px
// //  border: 4px solid white;
// background: #fff
// }
.clipper {
 width: 1000px;
 height: 150px;
 border-radius: 400px;
 overflow:hidden
}
.shape2 {
  margin: 0 auto;
  width: 7em; height:9em;
  /* WebKit browsers, old syntax */
  background: -webkit-radial-gradient(50% 0, circle, transparent 70%, white 30%);
  border-radius: 200px;
  /* IE10, current versions of Firefox and Opera */
  background: radial-gradient(circle at 50% 0, transparent 60%, white 30%);
}
.shape3{
  width: 600px;
  height: 500px;
  border-radius: 500px;
  background-color: #fff;
  transform: rotateX(86deg);
  position: absolute;
  margin-top: -150px
}
.shape4{
  width: 600px;
  height: 450px;
  border-radius: 500px;
  background-color: #000;
  transform: rotateX(0deg);
  margin-top: 0px;
  // position: absolute
}
.hex2.middle.stroke
  clear: left;
  margin-top: 0px
.hex2.stroke
  clear: left;
  margin-right: -32.2px;
  margin-top: 48.3px;
.hex2.top.lightgreen
  float: left;
  border-right: 32.2px solid #5BA4A1;
  border-top: 48.3px solid transparent;
  border-bottom: 48.3px solid transparent;
.hex2.middle.lightgreen
  float: left;
  width: 54.6px;
  height: 96.6px;
  background-color: #5BA4A1;
.hex2.bottom.lightgreen
  float: left;
  border-left: 32.2px solid #5BA4A1;
  border-top: 48.3px solid transparent;
  border-bottom: 48.3px solid transparent;
.hex2.top.black
  float: left;
  border-right: 32.2px solid #000;
  border-top: 48.3px solid transparent;
  border-bottom: 48.3px solid transparent;
.hex2.middle.black
  float: left;
  width: 54.6px;
  height: 96.6px;
  background-color: #000;
.hex2.bottom.black
  float: left;
  border-left: 32.2px solid #000;
  border-top: 48.3px solid transparent;
  border-bottom: 48.3px solid transparent;
.hex2.top.white
  float: left;
  border-right: 32.2px solid #fff;
  border-top: 48.3px solid transparent;
  border-bottom: 48.3px solid transparent;
.hex2.middle.white
  float: left;
  width: 54.6px;
  height: 96.6px;
  background-color: #fff;
.hex2.bottom.white
  float: left;
  border-left: 32.2px solid #fff;
  border-top: 48.3px solid transparent;
  border-bottom: 48.3px solid transparent;
.hex2.top.green
  float: left;
  border-right: 32.2px solid #103F3D;
  border-top: 48.3px solid transparent;
  border-bottom: 48.3px solid transparent;
.hex2.middle.green
  float: left;
  width: 54.6px;
  height: 96.6px;
  background-color: #103F3D;
.hex2.bottom.green
  float: left;
  border-left: 32.2px solid #103F3D;
  border-top: 48.3px solid transparent;
  border-bottom: 48.3px solid transparent;
</style>
