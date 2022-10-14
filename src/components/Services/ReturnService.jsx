import { Button } from "react-bootstrap";

export const ReturnService = ({title, img, index, texts, id, side}) =>{
    return(
        <div
            className={`services my-5 d-flex align-items-center justify-content-between my-5 ${side}`}
            id={ id }
            // style={{height:'50vh'}}
        >
            <div>
                <img 
                    className='service-img'
                    src={img} 
                    alt={`service${index}`} 
                />
            </div>
            <div
                className='d-flex flex-column justify-content-between service-text'
            >
                <div>
                    <h3>{ title }</h3>
                    {
                        texts.map( text =>(
                            <p>{text}</p>
                        ))
                    }
                </div>
                <div
                    className={`d-flex justify-content-start ${side}`}
                >
                    <button className='btn'>Contratar</button>
                </div>
            </div>
        </div>
    )
}