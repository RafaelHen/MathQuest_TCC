import './JogosComponent.css'
import { Link } from "react-router-dom";

declare interface Props {
    nomeJogo:string,
    linkJogo:string
}

function JogosComponent({ nomeJogo,linkJogo }: Props) {

    return (<>
    <Link to={{ pathname: `/${linkJogo}`}}>
    
        <div className="container-jogos">
            <h2 className='nomeJogo'>{nomeJogo}
            <div className='jogos'></div>
            </h2>
           
        </div>
    </Link>

    </>);
}

export default JogosComponent;