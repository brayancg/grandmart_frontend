import "./App.css";
import { MyRoutes } from "./routes/routes";
import { UsuarioContextProvider } from "./components/usuarioComponents/UsuariosContext/UsuarioProvider";

function App() {
  return (
    <UsuarioContextProvider>
      <div className="App">
        <MyRoutes />
      </div>
    </UsuarioContextProvider>
  );
}

export default App;
