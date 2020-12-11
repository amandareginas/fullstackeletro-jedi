const Comentario = () => {

    const [comentario, setComentario] = React.useState([]);
    React.useEffect(async () => {
        const url = "http://localhost/fullStackEletro-jedi/backend/consultaComentarios.php";
        const response = await fetch(url);
        setComentario(await response.json());
    }, []);

    return (
        <div className="text-right col-5">
            <h2>Comentários</h2>
            <br/>
            <section className="formulario">
                {comentario.map (item => {
                    return (
                        <div>
                            <hr />
                            <h6>{item.descricao}</h6>
                            <p>Nome: {item.nome}</p>
                            <p>Mensagem: {item.msg}</p>
                            <p>Data: {item.data}</p>
                            
                        </div>          
                    )
                })
                }               
            </section>         
        </div>
    );
}