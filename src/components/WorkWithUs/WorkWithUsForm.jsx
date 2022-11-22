import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { onSubmit } from '../../actions/contact-alert';
import { workwithusForms } from '../../data/workwithus-forms';
import UploadImage from '../Form/UploadImage';

const initialState={
    name: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    repository: '',
    salaryExpectation: '',
    technologies: '',
    experience: '',
    // curriculum: null,
}

export const WorkWithUsForm = ({ status, setStatus }) => {
    const [t] = useTranslation("global");
    const form = useRef();  
    const [formData, setFormData] = useState(initialState);

    const handleClick = ev => {
        ev.preventDefault();
        setStatus( 'loading' )
        onSubmit( formData ,form, setFormData, t, setStatus, initialState ) 
    }
        
    const onChange = ( {target} ) => {
        const { name, value } = target;
        
        setFormData({
            ...formData,
            [ name ]:value
        });
    };
    
    return (
        <>
            <form
                className='work-with-us-form'
                ref={form}
            >
                {
                    status === 'OK' ?
                    (
                        <div className='work-with-us-form-sent'>
                            <p>
                                {t("WorkWithUs.formSent.text1")}
                            </p>
                            <p>
                                {t("WorkWithUs.formSent.text2")}
                            </p>
                            <p>
                                {t("WorkWithUs.formSent.text3")}
                            </p>
                        </div> 
                    )
                    :
                    (
                        <>
                            <div className='d-flex align-items-center flex-wrap'>
                                <h3>
                                    {t("WorkWithUs.formTitle")} 
                                </h3>
                                <p>
                                    { `(*${t("WorkWithUs.requiredFields")})` }
                                </p>
                            </div>
                            {
                                workwithusForms.map( item =>(
                                    <input 
                                        key={item.text}
                                        name={item.text}
                                        className='form-control'
                                        type='text' 
                                        value={ formData[item.text] } 
                                        placeholder={ `${t(`WorkWithUs.${item.text}`)} ${ item.required ? '*' : '' } `}
                                        onChange={ onChange }
                                    />
                                ))
                            }
                            <textarea 
                                name='experience'
                                className='form-control'  
                                value={ formData.experience }
                                placeholder={ t('WorkWithUs.experience')}
                                onChange={ onChange }
                            />    
            
                            {/* <UploadImage setFormData={setFormData} /> */}
            
                            <button 
                                type='button' 
                                className='btn my-4'
                                onClick={ handleClick }
                                disabled={ status === 'loading' }
                            > 
                                { t("WorkWithUs.sendButton") } 
                            </button>
                        </>
                    )
                }

            </form>
        </>
    )
}
