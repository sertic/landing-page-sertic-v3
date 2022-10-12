import '../../style/home/members.css'

export const Members = ({ sector, members }) => {
    return(
        <div
            className='member d-flex flex-wrap justify-content-around align-items-center'
            style={{height:'90vh'}}
        >
            {
                members.map(({index, name, img}) =>(
                    <div
                        id={index}
                        key={index}
                        className='d-flex flex-column align-items-center justify-content-center'
                        style={ index%2==0 ? {marginBottom:'0vh'} :  {marginTop:'30vh'} }
                    >
                        <img 
                            src={img}
                            alt={name}
                            width={400-40*(members.length)}
                        />
                        <p
                            className='d-flex justify-content-center align-items-center'
                        >
                            {sector}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}