import '../../style/home/members.css'

export const Members = ({ sector, members }) => {
    return(
        <div
            className='member d-flex flex-wrap justify-content-center align-items-center'
        >
            {
                members.map(({name,img}) =>(
                    <div
                        className='w-50 d-flex flex-column align-items-center justify-content-center'
                    >
                        <img 
                            src={img}
                            alt={name}
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