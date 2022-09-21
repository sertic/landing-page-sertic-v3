import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/nosotros.css';
// import imgHector from "../../assets/img-hector.png";
// import serticImg from "../../assets/sertic-image.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCapsules, faMagnifyingGlass, faPeopleArrows, faPeopleGroup, faStopwatch } from '@fortawesome/free-solid-svg-icons';


export const AboutUs = () => {

  const [t] = useTranslation("global");

  return (
    <div 
      id='nosotros' 
      className='py-5' 
    >
      <section className='nosotros d-flex align-items-center flex-column py-5 mx-5'>
          <h1>{ t("aboutUs.title") }</h1>
          <img 
            className='mt-4 mb-2 img-hector'
            // src={ imgHector } 
            alt="Hector A. Garcia - CEO SysAdmin y Especialista en Seguridad Informática."
            title="Hector A. Garcia - CEO SysAdmin y Especialista en Seguridad Informática."
            width={450}
          />
          <p
            className='mb-5 px-5 d-flex justify-content-center'
          >
            {t("aboutUs.img-text")}
          </p>
          <div>
            <hr />
            <p
              className='blockquote'
            >
                {t("aboutUs.description.text1")}
              <br />
              <br />
                <b>
                  {t("aboutUs.description.text2")}
                </b>
              <br />
              <br />
                <FontAwesomeIcon className='icons' icon={ faMagnifyingGlass } />
                {t("aboutUs.description.text3")}
              <br />
              <br />
                <FontAwesomeIcon className='icons' icon={ faPeopleGroup } />
                {t("aboutUs.description.text4")}
              <br />
              <br />
                <FontAwesomeIcon className='icons' icon={ faStopwatch } />
                {t("aboutUs.description.text5")}
              <br />
              <br />
              <b>
                {t("aboutUs.description.text6")}
              </b>
            </p> 
          </div>
        <div
          className='sertic-img'
        >
          <img 
            className='mt-4 mb-2'
            // src={ serticImg } 
            alt="SerTIC - Soluciones Informáticas"
            title="SerTIC - Soluciones Informáticas"
          />

        </div>
      </section>
    </div>
  );
};
