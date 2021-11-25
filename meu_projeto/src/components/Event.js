function Event(){

    function meu_evento(){
        console.log("o botão foi clicado")
    }

    return(
        <>
            <p>Aperte este botão</p>
            <button onClick={meu_evento}>Clique-me</button>
        </>
    )
}

export default Event