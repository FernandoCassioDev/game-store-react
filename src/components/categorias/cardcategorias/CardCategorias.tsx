import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {

  return (
  <div className="border flex flex-col rounded-xl overflow-hidden justify-between">
    <header className="py-2 px-6 bg-cyberpunk-bg text-cyberpunk-text font-bold text-2xl">
      Categoria
    </header>
    <p className="p-8 text-3xl font-semibold bg-retrowave-bg text-white h-full">{categoria.tipo}</p>
    <div className="flex">
      <Link
        to={`/editarcategoria/${categoria.id}`}
        className="w-full text-slate-100 bg-indigo-800 hover:bg-indigo-950 flex items-center justify-center py-2"
      >
        <button>Editar</button>
      </Link>

      <Link
        to={`/deletarcategoria/${categoria.id}`}
        className="w-full text-slate-100 bg-red-700 hover:bg-red-800 flex items-center justify-center py-2"
      >
        <button>Deletar</button>
      </Link>
    </div>
  </div>
  )
}

export default CardCategorias;
