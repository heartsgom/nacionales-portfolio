import './Comps.css';
import Overview from './Overview';
import Output from './Output';
import Synthesis from './Synthesis';
import Documents from './Documents';

export default function Practicum(){
    return (
        <>
            <div>
                <Overview />
                <Output />
                <Synthesis />
                <Documents />
            </div>
        </>
    )
}