
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For icons

const Navb = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
    <div className="all">
      <div className="nav-cont">
        <h1>Tour of Hashiras</h1>
        <div className="nav-div desktop-nav">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/hashiras">Top Hashiras</Link>
          <Link className="link" to="/heros">Slayer Corps</Link>
        </div>


        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link className="link" to="/" onClick={toggleMenu}>Home</Link>
          <Link className="link" to="/hashiras" onClick={toggleMenu}>Top Hashiras</Link>
          <Link className="link" to="/heros" onClick={toggleMenu}>Slayer Corps</Link>
        </div>
      )}
    </>
  );
};

export default Navb;