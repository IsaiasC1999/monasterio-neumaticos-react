import logoMonasterioNeumarticos from "../../img/logoMonasterio.png"

function Header() {
    return ( 
        <header className="header">
            <div className="header__logo">
             <img  className="header__img" src={logoMonasterioNeumarticos} alt="" />
            </div>
        </header>
     );
}

export default Header;