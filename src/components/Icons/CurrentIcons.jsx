import googleCurrentsIcon from '../../assets/Icons/google-currents.png';

export const CurrentIcons = () => {
    return (
        <a href="http://" target="_blank" rel="noopener noreferrer">
            <img 
                alt='google-currents-icon'
                src={ googleCurrentsIcon }
                width='30'
                className='mx-1 rounded-circle border border-white p-1'
                style={{filter:'brightness(100)'}}
            />
        </a>
    )
}

