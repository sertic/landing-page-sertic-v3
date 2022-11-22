import '../style/workWithUs/workWithUs.css';
import { useTranslation } from "react-i18next";


import WorkAreas from '../components/WorkWithUs/WorkAreas';
import WorkWithUs from '../components/WorkWithUs/WorkWithUs';
import WorkWithUsBackground from '../components/Backgrounds/WorkWithUsBackground';

export const WorkWithUsPage = () =>{
    const [t] = useTranslation("global");
    return(
        <>
            <WorkWithUsBackground />
            <WorkWithUs />
            <WorkAreas />
        </>
    )
}