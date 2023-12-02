import './JogosComponent.css'

declare interface Props {
    nomeJogo:string,
    linkJogo:string
    linkImagem:string
}

function JogosComponent({ nomeJogo,linkJogo,linkImagem }: Props) {

    return (<>

        <a href= {linkJogo}>
            <h2 className='nomeJogo'>{nomeJogo} </h2>
            <img src={linkImagem} width="150px"/>
        </a>

    </>);
}

export default JogosComponent;