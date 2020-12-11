const App = () => {
    return (
        <div>
            <Header />
                <div className="container d-flex justify-content-around mt-5">
                    <Pedidos />
                 
                    <Comentario />
                </div>
                <Footer />
        </div>
    )
}