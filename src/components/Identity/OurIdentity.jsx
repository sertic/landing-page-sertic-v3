
import { Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { homeListItems, IdentityText, identityTexts } from '../../data/identity-text';


export const OurIdentity = () => {
    const [t] = useTranslation("global");
    return (
    <div
        className='mx-5 px-5 container'
    >
        <Row
        className='mb-4'
        >
            <h2>{t('OurIdentity.title')}</h2>
        </Row>
        <Row
        className='row'
        >
            <p>
                {t('OurIdentity.description.text1')}
            </p>
        </Row>
        <Row
        className='my-2'
        >
            <h5
                className='font-black'
            >
                {t('OurIdentity.description.text2')}
            </h5>
        </Row>
        <ul
        style={{'padding':'0px'}}
        >
        {
            identityTexts.map( ({ index, text, icon, style }) =>(
            <li
                className='my-3 d-flex align-items-center'
            >
                <img 
                    className='me-4 identity-img'
                    src={icon} 
                    alt={`list-item-${index}`} 
                />
                <p
                    style={style}
                >{t(`OurIdentity.description.${text}`)}</p>
            </li>
            ))
        }
        </ul>
    </div>
    )
}