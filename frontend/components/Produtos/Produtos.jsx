const Produtos = () => {

    const [produto, setProduto] = React.useState([]);
    const [render] = React.useState(false);


    //nesse momento cat = todas
    const [cat, setCat] = React.useState("todas");


    

    React.useEffect(async () => {
        const url = "http://localhost/fullStackEletro-jedi/backend/";
        const response = await fetch(url);
        setProduto(await response.json());
    }, [render]);

    //categoria recebe o event.target.id
    function filtro(categoria) {
        setCat(categoria)
    }

    return (
         
        <div className="d-flex justify-content-around">
            <aside className="sidebar mr-5 col-3">
                <br/>
                <Categorias onClick={filtro}/>
            </aside>
        <div className="container mt-5">

            <h1>Produtos</h1>
            <br/>
            <div className="row ml-5">
            
            {produto.map((element) => {
                    
                if(cat == "todas"){
                    console.log(cat);
                    return (

                        <div key={element.idproduto} className="box-produto card col-3 m-3 border-0">
                            <div className="card-img">
                                <img className="img-fluid" src={`http://localhost/fullStackEletro-jedi/frontend/components/${element.imagem}`}/>
                            </div>
                            <div className="card-header text-center">
                               {element.descricao}
                            </div>
                            <div className="card-body text-center">
                                <p className="small">De: </p><del className="text-danger small">
                                    R$ {element.preco}</del><br/>
                                    Por: R$ {element.precofinal} <br/>
                            </div>
                        </div>                     
                    );
                }
                if(cat == element.categoria){
                    console.log(cat);
                    return (

                        <div key={element.idproduto} className="box-produto card col-3 m-3 border-0">
                            <div className="card-img">
                                <img className="img-fluid" src={`http://localhost/fullStackEletro-jedi/frontend/components/${element.imagem}`}/>
                            </div>
                            <div className="card-header text-center">
                               {element.descricao}
                            </div>
                            <div className="card-body text-center">
                                <p className="small">De: </p><del className="text-danger small">
                                    R$ {element.preco}</del><br/>
                                    Por: R$ {element.precofinal} <br/>
                            </div>
                        </div>                     
                    );
                }
                
            })}
            </div>
        </div>
        </div>
    );
}
