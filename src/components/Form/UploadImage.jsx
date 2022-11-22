import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

const UploadImage = ({setFormData}) => {

    const [file, setFile] = useState('');
    const [t] = useTranslation("global");

    const handleInputFile = (ev) => {
        ev.preventDefault();
        document.getElementById('fileupload').click();
    }

    const handleChangeFile = (ev) => {
        ev.preventDefault();
        setFile(ev.target.files[0]);
        setFormData( state => ({...state,curriculum:ev.target.files[0]}))
    }

    return (
        <div
            className='w-100 d-flex align-items-end'
        >
            <input 
                name='inputfile'
                className='inputfile-text form-control'
                value={file.name}
                type='text' 
                placeholder={ t('WorkWithUs.curriculum')+'*'}
                autoComplete='off'
                disabled
            />
            <button
                className='btn btn-cv'
                onClick={handleInputFile}
            >
                <FontAwesomeIcon icon={faSearch} />
            </button>
            <input 
                id="fileupload"
                name='curriculum'
                className='form-control'  
                type='file'
                onChange={ handleChangeFile }
            />            
        </div>
    )
}

export default UploadImage
