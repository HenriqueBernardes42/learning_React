function Form(){    

    function cadastro(e){
       e.preventDefault()
       console.log("someting")
    }

    return (
        <div>
                <h1>Cadastro:</h1>
            <form onSubmit={cadastro}>
                <div>
                    <input type="text" placeholder="digite deu nome"></input>
                </div>
                <div>
                    <input type="submit" value="enviar"></input>        
                </div>
            </form>
        </div>
    )
}

export default Form