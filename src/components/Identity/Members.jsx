import '../../style/identity/members.css'
import { useTranslation } from 'react-i18next';

export const Members = ({ sector, members }) => {
    const [t] = useTranslation("global");
    
    return(
        <div
            className='members d-flex justify-content-center align-items-center'
        >
            {
                members.map(({name, img, style, size}) =>(
                    <div
                        className={`${size} member d-flex flex-column justify-content-center align-items-center`}
                        id={name}
                        key={name}
                        style={style}
                    >
                        <img 
                            src={img}
                            alt={name}
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