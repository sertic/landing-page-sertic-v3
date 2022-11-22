import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { WorkWithUsForm } from './WorkWithUsForm';
import workwithusImage from '../../assets/Fondos/workwithus-image.png';
import LinkedinIconBlue from '../Icons/LinkedinIconBlue';
import { useNavigate } from 'react-router';

const WorkWithUs = () => {
    const [t] = useTranslation("global");
    const [status, setStatus] = useState( '' );

    return (
        <div
            className='workwithus m-5'
        >
            <h1
                className='my-5 '
                style={{color:'#fff'}}
            >{ t("WorkWithUs.title") }</h1>

            <div
                className='workwithus-body'
            >
                <div
                    className='d-flex flex-column justify-content-between'
                >
                    <div
                        className='workwithus-section-1'
                    >
                        {
                            status !== 'OK' &&
                            <h3
                                style={{color:'#fff'}}
                            >{ t("WorkWithUs.subtitle") }</h3>
                        }
                        <div
                            className='workwithus-image'
                        >
                            <img
                                src={ workwithusImage } 
                                alt="work with us image"     
                            />
                        </div>
                    </div>
                    {
                        status !== 'OK' &&
                        (
                            <div
                                className='workwithus-linkedin-section'
                            >
                                <LinkedinIconBlue
                                    className='linkedin-icon-workwithus' 
                                />
                                <h3>
                                    { t("WorkWithUs.linkedinText") }
                                </h3>
                                <a 
                                    href="http://www.linkedin.com/company/sertic-soluciones-informaticas/"
                                    target='blanck'
                                >
                                    <button 
                                        type='button' 
                                        className='btn my-4'
                                        
                                    > 
                                        { t("WorkWithUs.linkedinButton") } 
                                    </button>
                                </a>
                            </div>
                        )
                    }
                    
                </div>
                <div
                    className='sendemail'
                >
                    
                    <WorkWithUsForm 
                        status={ status }
                        setStatus={ setStatus }
                    />
                </div>
            </div>
        </div>
    )
}

export default WorkWithUs
