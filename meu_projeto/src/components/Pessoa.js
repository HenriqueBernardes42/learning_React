function Pessoa({nome,from,dog,mood}){

    return (
        <div>
            <p>Seu nome erá {nome} </p>
            <p>Ela morava em {from}</p>
            <p>Seu catiorro se chamava {dog}</p>
            <p>E eles viviam muito {mood}</p>
        </div>
    )
}

export default Pessoa