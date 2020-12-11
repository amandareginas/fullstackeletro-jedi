const Home = () => {
    return (
        <div className="container mt-5">

            <h1>
                Bem-vindo!    
            </h1>
            <br/>
            <section>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" src="http://localhost/fullStackEletro-jedi/frontend/components/imagens/eletros1.jpg" alt="Primeiro Slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Anterior</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Próximo</span>
                    </a>
                    </div>
            </section>

        </div>
    );
}
