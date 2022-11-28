import { useTranslation } from "react-i18next";
import '../../style/workWithUs/workAreas.css';
import fingerprintLogo from '../../assets/Huella/huella-servicios.png';
import { workAreas } from "../../data/workareas";

const WorkAreas = () => {
    const [t] = useTranslation("global");

    return (
        <div
            className="workAreas"
        >
            <h1
                className='my-5'
            >{ t("WorkAreas.title") }</h1>
            <div
                className='workAreas-list'
            >
            {
                workAreas.map( workArea =>(
                    <div
                        key={workArea.text}
                        className="workArea-item"
                    >
                        <img className='workArea-icon' src={fingerprintLogo} alt="logo" />
                        <p>
                            { t(`WorkAreas.${workArea.text}`) }
                        </p>
                    </div>
                ))
            }

            </div>
        </div>
    )
}

export default WorkAreas
