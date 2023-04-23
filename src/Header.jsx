import './Header.css'




function Header() {
    const UrlImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Manoel_Gomes_em_2022_%28cortado%29.jpg/200px-Manoel_Gomes_em_2022_%28cortado%29.jpg"
    return (
        <header className="header">

            <img className='logo' src={UrlImg} alt="" />
            <nav className="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;


    

