import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"
import ReposList from "./components/ReposList";



function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return(
    <div>
      <input type="text" placeholder="Buscar usuário" onBlur={(e) => setNomeUsuario(e.target.value)}/>
      
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
      
      <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', right: '10px', color: '#aaa', cursor: 'pointer' }} />
    </div>
  )
}

export default App
