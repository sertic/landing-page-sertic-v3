import '../../style/home/members.css'
import { useTranslation } from 'react-i18next';

export const Members = ({ sector, members }) => {
    const [t] = useTranslation("global");
    
    return(
        <div
            className='member d-flex flex-wrap justify-content-around align-items-center'
            style={{height:'90vh'}}
        >
            {
                members.map(({index, name, img}) =>(
                    <div
                        id={index}
                        key={index}
                        className='d-flex flex-column align-items-center justify-content-center'
                        style={ index%2==0 ? {marginBottom:'0vh'} :  {marginTop:'30vh'} }
                    >
                        <img 
                            src={img}
                            alt={name}
                            width={400-40*(members.length)}
                        />
                        <p
                            className='d-flex justify-content-center align-items-center'
                        >
                            {t(`Sectors.${sector}`)}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}