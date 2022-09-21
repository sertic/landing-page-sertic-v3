import React from 'react';
import homeWallpapaer from '../assets/fondos/fondo-5.png';
import huellaWallpaper from '../assets/huella/huella-fondo-celeste.png';
import logoWallpaper from '../assets/logo/nuevo-logo-2.png';
import '../style/home.css';


export const Home = () => {
  return (
    <div
      className='home'
    >
      <div
        className='home-wallpaper'
      >
        <img 
          src={homeWallpapaer} 
          alt='home-wallpaper' 
        />
      </div>

      <div
        className='images-container'
      >
        <img 
          className='huella'
          src={huellaWallpaper} 
          alt='huella' 
        />
        <img 
          className='logo'
          src={logoWallpaper} 
          alt='logo' 
        />
      </div>

    </div>
  ); 
};
