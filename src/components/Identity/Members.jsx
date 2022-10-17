import '../../style/identity/members.css'
import { useTranslation } from 'react-i18next';

export const Members = ({ sector, members }) => {
    const [t] = useTranslation("global");
    
    return(
        <div
            className='members d-flex justify-content-center'
        >
            {
                members.map(({index, name, img, style}) =>(
                    <div
                        className='member d-flex flex-column align-items-center'
                        id={index}
                        key={index}
                        style={ style }
                    >
                        <img 
                            src={img}
                            alt={name}
                            width={400-30*(members.length)}
                        />
                        <p
                            className='d-flex justify-content-center'
                        >
                            {t(`Sectors.${sector}`)}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}