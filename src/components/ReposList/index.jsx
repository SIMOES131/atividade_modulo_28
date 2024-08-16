import {useState, useEffect} from "react";

import styles from './ReposList.module.css';



const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [deuErro, setDeuErro] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        setDeuErro(false);

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => {
            if (!res.ok) {
                throw new Error("Nome de usuário inválido");
            }
            return res.json();
        })
        //.then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 3000) 
        })
        .catch(e => {
            setEstaCarregando(false);
            setDeuErro(true);
        })
        
    }, [nomeUsuario]);

    return (
        <div className="container">
        {estaCarregando ? (
            <h1>Carregando ...</h1>
        ) : deuErro ? (
        <h1>Nome de usuário inválido</h1>
    ) : (
            <ul className={styles.list}>
            {repos.map(repositorio => (
                <li className={styles.listItem} key={repositorio.id}>
                    <div className={styles.itemName}>
                        <b>Nome:</b> 
                        {repositorio.name} 
                    </div>
                    <div className={styles.itemLanguage}>
                        <b>Linguagem:</b> 
                        {repositorio.language} 
                    </div>
                    <a className={styles.itemLink} target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                </li>
            ))}
        </ul>
        )}
       
        </div>   
    )
}

export default ReposList; 