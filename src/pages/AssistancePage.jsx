import { Button, Form } from "react-bootstrap";
import fingerprintLogo from '../assets/Huella/huella-servicios.png';
import '../style/assistance.css';

export const AssistancePage = () =>{
    return(
        <div
            className='d-flex flex-column align-items-center justify-content-center'
            style={{height:'100vh'}}
        >
            <div>
                <img
                    width='100'
                    src={fingerprintLogo} 
                    alt="Fingerprint Logo" 
                />
                <h5>ASISTENCIA</h5>
            </div>

            <Form
                className='d-flex flex-column'
            >
                <Form.Group className="mb-3" controlId="formUser">
                    <Form.Control className='input-assistance' type='text' placeholder='Usuario' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Control className='input-assistance' type='password' placeholder='Contraseña' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordarme" />
                </Form.Group>
                <button className='btn'>Ingresar</button>
            </Form>
        </div>
    )
}