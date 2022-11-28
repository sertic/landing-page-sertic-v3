import '../../style/identity/members.css'
import { useTranslation } from 'react-i18next';

export const Members = ({ index, sector, members }) => {
    const [t] = useTranslation("global");
    
    return(
        <div
            className='members d-flex justify-content-center align-items-center'
        >
            {
                members.map(({name, img, style, size}) =>(

                    <div
                        className={`${size} member d-flex flex-column justify-content-center align-items-center`}
                        id={name}
                        key={name}
                        style={style}
                    >
                        <div
                            className='d-flex flex-column align-items-center justify-content-center position-relative'
                            style={{'transform':`rotate(-${35-members.length*1}deg)`,right:'25%', top:'10px'}}
                        >
                            {
                                name.split(" ").map( word =>
                                    (
                                        <div
                                            className='d-flex'
                                        >
                                            {
                                            word.split("").map((letter,i) =>{
                                                const number = i-word.split("").length/2+1;
                                                const translate = Math.pow(number,2)/2.5-10;
                                                const rotate = (i-word.split("").length/2+1)*6;
                                                return <h6 style={{margin:'0.5px',transform:`translateY(${translate}px) rotate(${rotate}deg`}} >{letter}</h6>
                                                })
                                            }
                                        </div>
                                    )
                                )
                            }
                            
                        </div>
                        <div
                            className='member-img'
                        >
                            <img 
                                src={img}
                                alt={name}
                            />
                        </div>
                        <p
                            className='d-flex justify-content-center'
                        >
                            {t(`Sectors.${sector}`)}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}