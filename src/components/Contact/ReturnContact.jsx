import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { onSubmit } from '../../actions/contact-alert';
// import '../../css/contacto.css';


export const ReturnContact = () => {
  const [t] = useTranslation("global");
  const [loading, setLoading] = useState( false )
  const form = useRef();
  const [formData, setFormData] = useState({
      name:'',
      email:'',
      phone:'',
      message:''
  });
  const { name, email, phone, message } = formData;

  useEffect(() => {
    if(loading){
      Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
      })
      .fire({
        icon:   'info',
        title:  t("Contact.waiting")
      })
    }
  }, [ loading ])
  

  const handleClick = ev => {
    ev.preventDefault();
    setLoading( true )
    onSubmit( formData ,form, setFormData, t, setLoading ) 
  }
  
  const onChange = ( {target} ) => {
    const { name, value } = target;
    
    setFormData({
        ...formData,
        [ name ]:value
    });
  };

  return (
    <section id='contacto' className='d-flex justify-content-center align-items-center'>
        <div className='background-image' />
        <div 
          className='form-container d-flex flex-column justify-content-center align-items-center p-3'
        >
            <form 
              onSubmit={ handleClick }
              ref={form}
              className='w-100 d-flex flex-column justify-content-center align-items-center'
            >
                <h1>
                  { t("Contact.title") }
                </h1>
                <input 
                  name='name'
                  className='form-control'
                  type='text' 
                  value={ name } 
                  placeholder={ t("Contact.name") }
                  onChange={ onChange }
                />
                <input 
                  name='email'
                  className='form-control'
                  type='text' 
                  value={ email } 
                  placeholder={ t("Contact.email") }
                  onChange={ onChange }
                />

                <input 
                  name='phone'
                  className='form-control'
                  type='text' 
                  value={ phone } 
                  placeholder={ t("Contact.phone") }
                  onChange={ onChange }
                />

                <textarea 
                  name='message'
                  className='form-control'  
                  value={ message }
                  placeholder={ t("Contact.message") }
                  onChange={ onChange }
                ></textarea>
                
                <button 
                  type='button' 
                  className=''
                  onClick={ handleClick }
                  disabled={ loading }
                > 
                  { t("Contact.button") } 
                </button>
            </form>
        </div>

    </section>
  )
}
