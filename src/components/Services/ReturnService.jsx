import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const ReturnService = ({ dark, title, icon, description }) => {
  return (
    <div 
        className='rounded-3 service-box'
        style={
                dark
                  ?
                {'backgroundColor':'#3F3F3F'}   
                  :
                {'backgroundColor':'#f1f1f1'}   
        }
    >
        <div
            className='service-box-description d-flex flex-column align-items-center justify-content-around'
        >
            <h2>{ title }</h2>
                
            <span className='fa-stack fa-4x icons2'>
                <FontAwesomeIcon icon={ icon } className='icon'/>
            </span>
        </div>
        
        { description }
    
    </div>
  );
};
