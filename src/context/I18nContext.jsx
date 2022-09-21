import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import global_es from '../translations/es/global.json';
import global_en from '../translations/en/global.json';

export const I18nContext = ( {children} ) => {
  
    const language = localStorage.getItem('language') || 'es';
    
    i18next.init({
      interpolation: { escapeValue: false },
      lng: language,
      resources: {
        es:{
          global: global_es
        },
        en:{
          global: global_en
        }
      }
    });

  return (
    <I18nextProvider i18n={ i18next } >
        { children }
    </I18nextProvider>
  )
}
