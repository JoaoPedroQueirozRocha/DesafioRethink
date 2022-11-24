import {Link} from "react-router-dom"

export default function MainScreen(){



    return(
        <div>
            <button><Link to="/form">Formulário de cadastro</Link></button>
            <button><Link to="/manipular">Manipular Array</Link></button>
            <button><Link to="/pesquisar">Pesquisar</Link></button>
            <button><Link to='/retornar'>Retornar array</Link></button>
            <button><Link to="/inserirID">Inserir ID único</Link></button>
            <button><Link to="/CNH">Retornar aptos para CNH</Link></button>
            <button><Link to="/media">Média das idades</Link></button>
        </div>
    )
}