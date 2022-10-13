import { Button } from "react-bootstrap";

export const ReturnService = ({title, img, index, texts, id}) =>{
    return(
        <div
            className='d-flex align-items-center justify-content-center my-5'
            id={ id }
            // style={{height:'100vh'}}
        >
            <div>
                <img 
                    src={img} 
                    alt={`service${index}`} 
                />
            </div>
            <div
                className='mx-5'
            >
                <h3>{ title }</h3>
                {
                    texts.map( text =>(
                        <p>{text}</p>
                    ))
                }
                <Button className='btn'>Contratar</Button>
            </div>
        </div>
    )
}