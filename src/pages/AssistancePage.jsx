import { Button, Form } from "react-bootstrap";
import fingerprintLogo from '../assets/Huella/huella-servicios.png';
import assistanceBackground from '../assets/Fondos/assistence-background.png';
import '../style/assistance/assistance.css';

export const AssistancePage = () =>{
    return(
        <>
            <div
                className='assistence-background'
            >
                <img
                    className='assistance-img' 
                    src={ assistanceBackground } 
                    alt='Assistance Background' 
                />
                <div
                    className='d-flex flex-column align-items-center justify-content-center assistance-logo'
                >
                    <img
                        width='150'
                        src={fingerprintLogo} 
                        alt="Fingerprint Logo" 
                    />
                    <h5>ASISTENCIA</h5>
                </div>

            </div>
            <div
                className='assistance d-flex flex-column align-items-center justify-content-center'
            >
                <Form
                    className='d-flex flex-column align-items-center'
                >
                    <Form.Group className="mb-3" controlId="formUser">
                        <Form.Control className='input-assistance' type='text' placeholder='Usuario' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Control className='input-assistance' type='password' placeholder='Contraseña' />
                    </Form.Group>
                    <Form.Group className="w-100 d-flex justify-content-start mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Recordarme" />
                    </Form.Group>
                    <button className='my-4 btn'>Ingresar</button>
                </Form>
            </div>
        </>
    )
}