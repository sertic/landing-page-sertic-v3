
import { Row } from 'react-bootstrap';
import icon1 from '../../assets/List Icons/list-icon1.png';
import icon2 from '../../assets/List Icons/list-icon2.png';
import icon3 from '../../assets/List Icons/list-icon3.png';
import icon4 from '../../assets/List Icons/list-icon4.png';

const homeListItems = [
    {
      index: 1,
      text:'Somos curiosos. Creemos que siempre hay algo más que ver, aprender y mejorar. Queremos llevar el conocimiento al siguiente nivel',
      icon: icon1
    },
    {
      index: 2,
      text:'Somos colegas. Tanto interna como externamente buscamos crear redes y relaciones de trabajo comprometidas, juntos somos mejores',
      icon: icon2
    },
    {
      index: 3,
      text:'Somos ágiles. Sabemos dónde enfocarnos ante emergencias y cómo priorizar las acciones necesarias para encontrar soluciones y alcanzar objetivos',
      icon: icon3
    },
    {
      index: 4,
      text:'Somos SERTIC!',
      icon: icon4,
      style: {'fontWeight':'2000'} 
    }
  ]

export const OutIdentity = () => {
  return (
    <div
        className='mx-5 px-5 container'
    >
        <Row
        className='mb-4'
        >
            <h2>NUESTRA IDENTIDAD</h2>
        </Row>
        <Row
        className='row'
        >
            <p>
                Desde hace más de 10 años formamos equipos de trabajo que brindan
                servicios tecnológicos a empresas que buscan una operación eficiente
                de sus recursos informáticos
            </p>
        </Row>
        <Row
        className='my-2'
        >
            <h5
            className='font-black'
            >
            Nuestra identidad se define por tres pilares de trabajo:
            </h5>
        </Row>
        <ul
        style={{'padding':'0px'}}
        >
        {
            homeListItems.map( ({ index, text, icon, style }) =>(
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
                >{text}</p>
            </li>
            ))
        }
        </ul>
    </div>
  )
}