
import identityWallpapaer from '../../assets/Fondos/fondo-home.png';
import fingerprintLogo from '../../assets/Huella Logo/huella-logo.png';
import '../../style/identity/identity.css';
import { FaceImages } from './FaceImages';
import { OutIdentity } from './OutIdentity';

export const Identity = () => {
  return (
    <div
      className='identity'
    >
        <img 
          className='identity-wallpaper'
          src={identityWallpapaer} 
          alt='identity-wallpaper' 
        />
        <img
          className='fingerprint-logo-wallpaper'
          src={fingerprintLogo}
          alt='huella-logo-wallpaper'
        />
        <div
          id='identity'
          className='d-flex justify-content-center'
        >
            <OutIdentity />
            <FaceImages />
        </div>
    </div>
  ); 
};
