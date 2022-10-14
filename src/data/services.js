import { faBriefcase, faCloud, faCode, faServer, faWrench } from '@fortawesome/free-solid-svg-icons';
import serviceImg1 from '../assets/Fondos/service-img-1.png';
import serviceImg2 from '../assets/Fondos/service-img-2.png';
import serviceImg3 from '../assets/Fondos/service-img-3.png';
import serviceImg4 from '../assets/Fondos/service-img-4.png';
import serviceImg5 from '../assets/Fondos/service-img-5.png';

export const dataServices = [
    {
        index:1,
        icon: faCloud,
        nItems:[1,2,3,4],
        nTexts:['text1','text2','text3'],
        img: serviceImg1,
        id: 'consultory',
    },
    {
        index:2,
        icon: faWrench,
        nItems:[1,2,3,4],
        nTexts:['text1','text2'],
        img: serviceImg2,
        id: 'support',
        side: 'flex-row-reverse'
    },
    {
        index:3,
        icon: faBriefcase,
        nItems:[1,2],
        nTexts:['text1','text2'],
        img: serviceImg3,
        id: 'outsourcing',
    },
    {
        index:4,
        icon: faServer,
        nItems:[1,2,3],
        nTexts:['text1','text2','text3'],
        img: serviceImg4,
        id: 'infraestructure',
        side: 'flex-row-reverse'
    },
    {
        index:5,
        icon: faCode,
        nItems:[1,2],
        nTexts:['text1','text2'],
        img: serviceImg5,
        id: 'development',
    }
]