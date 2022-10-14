import '../style/workwithus.css';
import { useTranslation } from "react-i18next";
import workwithusImg1 from '../assets/Fondos/workwithus-1.png';
import workwithusImg2 from '../assets/Fondos/workwithus-2.png';

export const WorkWithUsPage = () =>{
    const [t] = useTranslation("global");
    return(
        <>
            <div
                className='workwithus-background'
            >
                <img src={ workwithusImg1 } alt='workwithus fondo 1' />
                {/* <img src={ workwithusImg2 } alt='workwithus fondo 2' /> */}
            </div>
            <div
                className='m-5'
            >
                <h1
                    className='my-5 '
                >{ t("WorkWithUs.title") }</h1>
                <div
                    className='ms-5 d-flex w-100 justify-content-around workwithus'
                >
                    <div
                        className='d-flex flex-column justify-content-between h-100'
                    >
                        <div>1</div>
                        <div>1</div>
                    </div>
                    <div>
                        2
                    </div>
                </div>
            </div>
        </>
    )
}