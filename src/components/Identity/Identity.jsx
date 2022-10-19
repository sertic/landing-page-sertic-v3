
import identityWallpapaer from '../../assets/Fondos/fondo-home.png';
import '../../style/identity/identity.css';
import { FaceImages } from './FaceImages';
import { OutIdentity } from './OutIdentity';

export const Identity = () => {
  return (
    <>
        <img 
          className='identity-wallpaper'
          src={identityWallpapaer} 
          alt='identity-wallpaper' 
        />
        <div
          id='identity'
          className='identity d-flex justify-content-center'
        >
            <OutIdentity />
            <FaceImages />
        </div>
    </>
  ); 
};
