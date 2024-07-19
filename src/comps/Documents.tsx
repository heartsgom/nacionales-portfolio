
import practicumReport from "../assets/PracticumReportNacionales.pdf";
import resume from "../assets/Nacionales_Resume.pdf";
import certificate from '../assets/COC_Mark Nacionales.pdf';
import './DocViewer.css';


export default function Documents(){
    return (
        <>
            <div className = "Documents">
                <h1>Documents</h1>
                <p>Here are all the related documents in my practium:</p>
                
                <p><a href = {practicumReport} target="_blank"> Practicum Report </a></p>
                <p><a href = {resume} target="_blank"> My Resume </a></p>
                <p><a href = {certificate} target="_blank"> Certificate of Completion </a></p>
            </div>
        </>
    )
}