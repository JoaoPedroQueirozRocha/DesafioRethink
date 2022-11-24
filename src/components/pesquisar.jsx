import { useState } from "react"

export default function Pesquisar(){

    let pessoas = [
        {name:"Fabiana Araújo", age:33},
        {name:"Gabril Gomes", age:25},
        {name:"Fernando Henrique", age:17},
        {name:"Ana Luiza", age:2},
        {name:"Geralda do nascimento", age:93},
        {name: "Miguel Souza", age:70},
        {name:"Antonio Miguel", age:69}
    ]

    let [nome, setNome] = useState('')

    function handleChangeValues(a){
        setNome(a.target.value)
    }

    function Pesquisar(){
        const Pesquisar = pessoas.filter((pessoas)=> pessoas.name.toUpperCase() === nome.toUpperCase())
        const position = pessoas.indexOf(Pesquisar[0])
        console.log(pessoas[position])
        console.log(Pesquisar)
        console.log(nome)
    }

    return(
        <div>
            <input type="text" name="nome" onChange={handleChangeValues}/>
            <button onClick={Pesquisar}>Pesquisar</button>
            <button><Link to="/">Voltar à tela principal</Link></button>

        </div>
    )
}