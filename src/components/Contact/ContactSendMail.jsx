import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { onSubmit } from '../../actions/contact-alert';
import '../../style/contact/sendemail.css';

export const ContactSendMail = () => {
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
        title:  t("SendEmail.waiting")
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

    <form
      className='d-flex flex-column p-5'
      onSubmit={ handleClick }
      ref={form}
    >
        <h3>
          { t("SendEmail.title") }
        </h3>
        <input 
          name='name'
          className='form-control'
          type='text' 
          value={ name } 
          placeholder={ t("SendEmail.name") }
          onChange={ onChange }
        />
        <input 
          name='email'
          className='form-control'
          type='text' 
          value={ email } 
          placeholder={ t("SendEmail.email") }
          onChange={ onChange }
        />

        <input 
          name='phone'
          className='form-control'
          type='text' 
          value={ phone } 
          placeholder={ t("SendEmail.phone") }
          onChange={ onChange }
        />

        <textarea 
          name='message'
          className='form-control'  
          value={ message }
          placeholder={ t("SendEmail.message") }
          onChange={ onChange }
        ></textarea>
        
        <button 
          type='button' 
          className='btn my-4'
          onClick={ handleClick }
          disabled={ loading }
        > 
          { t("SendEmail.button") } 
        </button>
    </form>
  )
}
