const Header = () => {
    return (
        <header className="bg-dark">
            <nav className="navbar nav align-items-center justify-content-between">
                <a href="index.html" className="navbar-brand nav-link text-light">
                <img width="40" src="http://localhost/fullStackEletro-jedi/frontend/components/imagens/fs-icon.png" 
                                alt="Pagina Inicial - Full Stack Eletro"/></a>
                <a href='produtos.html' className="navbar-item nav-link text-light">Produtos</a>
                <a href="pedidos.html" className="navbar-item nav-link text-light">Pedidos</a>
                <a href="lojas.html" className="navbar-item nav-link text-light">Nossas Lojas</a>
                <a href="contato.html" className="navbar-item nav-link text-light">Contato</a>
            </nav>
        </header>
    );
}