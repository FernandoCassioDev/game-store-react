import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-cyberpunk-bg text-cyberpunk-text">
        <div className="container flex justify-between text-lg items-center">
        <div className="flex justify-center items-center">
          <img src="src\assets\img\gaming.png" alt="controle de videogame" className="w-10 mr-3"/>
            <Link to="/home" className="text-2xl font-bold hover:text-cyberpunk-accent2 transition-colors duration-300">
              Game Store
            </Link>
        </div>
          <div className="flex">
            <div className="flex gap-4 hover:text-cyberpunk-accent2 transition-colors duration-300">
              Produtos
            </div>
            <Link
              to="/categorias"
              className="ml-5 hover:text-cyberpunk-accent2 transition-colors duration-300"
            >
              Categorias
            </Link>
            <Link
              to="/cadastrarcategoria"
              className="ml-5 hover:text-cyberpunk-accent2 transition-colors duration-300"
            >
              Cadastrar Categorias
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
