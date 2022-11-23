import {Link} from "react-router-dom"

export default function MainScreen(){



    return(
        <div>
            <button><Link to="/form">Formulário de cadastro</Link></button>
            <button><Link to="/manipular">Manipular Array</Link></button>
        </div>
    )
}