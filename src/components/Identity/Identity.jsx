
import identityWallpapaer from '../../assets/Fondos/fondo-home.png';
import '../../style/identity/identity.css';
import { FaceImages } from './FaceImages';
import { OurIdentity } from './OurIdentity';

export const Identity = () => {
  return (
    <>
        <img 
          className='background-theme identity-wallpaper'
          src={identityWallpapaer} 
          alt='identity-wallpaper' 
        />
        <div
          id='identity'
          className='background-theme identity d-flex justify-content-center'
        >
            <OurIdentity />
            <FaceImages />
        </div>
    </>
  ); 
};
