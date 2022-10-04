import React from 'react';
// import '../../css/clientes.css';
import Slider from 'react-slick';
import { ReturnClient } from './ReturnClient';
import { useTranslation } from 'react-i18next';
import  {clients}  from '../../data/clients';

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: window.innerWidth > 1200 ? 3 : 2,
    slidesToScroll: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000
};
export const Partners = ({dark}) => {

    const [t] = useTranslation("global");


    return (
        <div 
          id='clientes' 
          className='container'
        >
          <section
            className='clientes'
          >
            <h1
                className='d-flex justify-content-center'
            >
              TECNOLOGÍAS Y HERRAMIENTAS
            </h1>
            <hr /> 
            <Slider {...settings}>
              {
                clients.map( ({ link, img, name }) =>(
                  <ReturnClient 
                    dark={ dark }
                    key  = { link }
                    link = { link }
                    img  = { img } 
                    name = { name }
                  />
                ))
                }
            </Slider>
          </section>
        </div>
    );
} 