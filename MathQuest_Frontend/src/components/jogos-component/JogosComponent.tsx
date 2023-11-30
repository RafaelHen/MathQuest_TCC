import './JogosComponent.css'

declare interface Props {
    nomeJogo:string,
    linkJogo:string
    linkImagem:string
}

function JogosComponent({ nomeJogo,linkJogo,linkImagem }: Props) {

    return (<>
    {/* <Link to={{ pathname: `/${linkJogo}`}}>
    </Link>
     */}

        <div className="container-jogos">
        <a href= {linkJogo}>
            <h2 className='nomeJogo'>{nomeJogo}
            <img src={linkImagem} width="200px"/>
            </h2>
           
        </a>
        </div>

    </>);
}

export default JogosComponent;