const Pedidos = () => {    
    
    const [form, setForm] = React.useState({
    nome_cliente: "",
    endereco_cliente: "",
    email_cliente: "",
    nome_produto: "",
    valorunitario: "",
    quantidade: "",
    valortotal: ""
    });
    


const [produto, setProduto] = React.useState([]);
React.useEffect(async () => {
    const url = "http://localhost/fullStackEletro-jedi/backend/";
    const response = await fetch(url);
    setProduto(await response.json());
}, []);


const controleMudanca = (event) => { 
    //console.log(event.target.value)
    setForm({
        ...form,
        [event.target.id]: event.target.value
    })
}

function controleEnvio (event) {
    console.log(event.target);
    event.preventDefault();

    const url = "http://localhost/fullStackEletro-jedi/backend/registerPedido.php";
    fetch(url, { 
        method: 'POST', 
        body: new FormData(event.target)
    })
}

function sucesso () {
    document.getElementById("mostrar").innerHTML="Pedido enviado com sucesso!";
    <div className="alert alert-success" role="alert" id="mostrar"></div>
}

    return (
        
        <div className="align-item-left col-5">
            <h2>Faça o seu Pedido</h2>
            <br/>
            <div className="">
                <form onSubmit={controleEnvio}>
                    <div className="form-group">
                        <label>Nome</label>
                        <input className="form-control" onChange={controleMudanca} type="text" name="nome_cliente" id="nome_cliente"/>
                    </div>
                    <div className="form-group">
                        <label>Endereço</label>
                        <input className="form-control" onChange={controleMudanca} type="endereco_cliente" id="endereco_cliente" name="endereco_cliente" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" onChange={controleMudanca} type="text" id="email_cliente" name="email_cliente" />
                    </div>
                        <div className="form-group">
                            <label>Produto</label>
                                <select className="form-control" onChange={controleMudanca} id="nome_produto" name="nome_produto">
                                    {produto.map (item => {
                                    return(
                                        <option key={item.idproduto}>{item.descricao}</option>
                                    )})} 
                                </select>   
                        </div>
                    <div className="form-group">
                        <label>Valor Unitário</label>
                        <input className="form-control" onChange={controleMudanca} id="valorunitario" type="text" name="valorunitario" />
                    </div>
                    <div className="form-group">
                        <label>Quantidade</label>
                        <input  min="1" max="10"  className="form-control" id="quantidade" onChange={controleMudanca} name="quantidade" type="number"/>
                    </div>
                    <div className="form-group">
                        <label>Preço Final</label>
                        <input className="form-control" type="text" id="valortotalS" name="valortotal" />
                    </div>
                    <button className="btn btn-dark" onClick={sucesso}>Enviar</button>
                    <br/>
                    <div> </div>
                    <div className="alert alert-success" role="alert" id="mostrar"></div>
                </form>
            </div>
            <br />
    </div>
    );

    

} 