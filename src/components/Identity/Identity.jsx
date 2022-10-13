
import homeWallpapaer from '../../assets/Fondos/fondo-home.png';
import fingerprintLogo from '../../assets/Huella Logo/huella-logo.png';
import '../../style/home/home.css';
import { FaceImages } from './FaceImages';
import { OutIdentity } from './OutIdentity';

export const Identity = () => {
  return (
    <div
      className='home'
    >
        <img 
          className='home-wallpaper'
          src={homeWallpapaer} 
          alt='home-wallpaper' 
        />
        <img
          className='huella-logo-wallpaper'
          src={fingerprintLogo}
          alt='huella-logo-wallpaper'
        />
        <div
          className='d-flex align-items-center justify-content-center'
        >
          <OutIdentity />
          <FaceImages />
        </div>
    </div>
  ); 
};
