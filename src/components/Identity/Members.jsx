import '../../style/identity/members.css'
import { useTranslation } from 'react-i18next';

export const Members = ({ sector, members }) => {
    const [t] = useTranslation("global");
    
    return(
        <div
            className='members d-flex justify-content-around '
        >
            {
                members.map(({index, name, img, style, size}) =>(
                    <div
                        className={`${size} member d-flex flex-column align-items-center`}
                        id={index}
                        key={index}
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