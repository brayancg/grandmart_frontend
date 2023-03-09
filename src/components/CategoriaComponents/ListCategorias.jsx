
import { useCategorias } from "./CategoriasContext/CategoriaProvider";

export function ListCategorias() {
  //const { loadCategorias, categorias } = useCategorias();
  /*/Apenas entre a esta pagina se ejecutara esta función
  useEffect(() => {
    loadCategorias();
  }, []);
  function renderMain() {
    if (categorias.length === 0) {
      return <h1>No hay categorias registradas</h1>;
    } else {
      return categorias.map((categoria) => (
        <div>Id: {categoria.id}</div>
      ));
    }
  }
*/
  return (
    <>
      <h1>Lista de categorias</h1>
    </>
  );
}
