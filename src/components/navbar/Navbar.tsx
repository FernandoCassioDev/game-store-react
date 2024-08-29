import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-cyberpunk-bg text-cyberpunk-text">
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold hover:text-cyberpunk-accent2 transition-colors duration-300">
            Game Store
          </Link>
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
