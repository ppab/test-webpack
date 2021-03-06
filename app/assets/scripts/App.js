
import '../css/styles.css';
import '../css/font-sizes.css';
import 'animate.css';

import '../scss/styles.scss';
import '../scss/seccion_cursos.scss';
import '../scss/contacto.scss';
import '../scss/intro-text.scss';
import '../scss/header.scss';
import '../scss/flor1.scss';
import '../scss/seccion_alma.scss';

 import 'owl.carousel/dist/assets/owl.carousel.css';
 import 'owl.carousel';
 import {f1} from './navbar'

 //React Related Code Goes Here
 import React from 'react';
 import ReactDOM from 'react-dom';
import Component1 from'./Component1';


 ReactDOM.render(<Component1/>,document.querySelector("#react"));


if (module.hot){
    module.hot.accept();
}


$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
    responsive:{
        0:{items:1},
        700 : {
            items:3
        }
    },
        loop:true,
        margin:300,
        nav:true, autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        fallbackEasing:500,
        animateOut: 'slideOutDown',
        smartSpeed:450
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[4000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

   
  });


  f1();