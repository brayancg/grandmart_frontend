import { MyRoutes } from "./routes/routes";
import { UsuarioContextProvider } from "./components/usuarioComponents/UsuariosContext/UsuarioProvider";
import { ProductoContextProvider } from "./components/ProductoComponents/ProductosContext/ProductoProvider";

function App() {
  return (
    <UsuarioContextProvider>
      <ProductoContextProvider>
      <div>
        <MyRoutes />
      </div>
      </ProductoContextProvider>
    </UsuarioContextProvider>
  );
}

export default App;
