import { useState } from "react"


export default function Retornar() {

    let pessoas = [
        { name: "Fabiana Araújo", age: 33 },
        { name: "Gabril Gomes", age: 25 },
        { name: "Fernando Henrique", age: 17 },
        { name: "Ana Luiza", age: 2 },
        { name: "Geralda do nascimento", age: 93 },
        { name: "Miguel Souza", age: 70 },
        { name: "Antonio Miguel", age: 69 }
    ]
    // let [names,setNames] = useState([])

    let names = pessoas.map(pessoa => (pessoa.name))

    function retornarArray() {
        alert(names)
    }

    function retornarPrimeiroItem() {
        alert(names[0])
    }


return (
    <div>
        <button onClick={retornarArray}>Retornar o vetor</button>
        <button onClick={retornarPrimeiroItem}>Retornar primeiro item</button>
        <button><Link to="/">Voltar à tela principal</Link></button>
    </div>
)
}