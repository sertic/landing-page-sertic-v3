import React from 'react'
import workwithusBg1 from '../../assets/Fondos/workwithus-1.png';
import workwithusBg2 from '../../assets/Fondos/workwithus-2.png';

const WorkWithUsBackground = () => {
    return (
        <div
            className='background-theme workwithus-background'
        >
            <img src={ workwithusBg1 } alt='workwithus background 1' />
            {/* <img src={ workwithusBg2 } alt='workwithus fondo 2' /> */}
        </div>
    )
}

export default WorkWithUsBackground
