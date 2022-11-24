import {Link} from 'react-router-dom'

export default function Media(){

    let pessoas = [
        {name:"Fabiana Araújo", age:33},
        {name:"Gabril Gomes", age:25},
        {name:"Fernando Henrique", age:17},
        {name:"Ana Luiza", age:2},
        {name:"Geralda do nascimento", age:93},
        {name: "Miguel Souza", age:70},
        {name:"Antonio Miguel", age:69}
    ]


    function media(){
        let media =  0
        let count = 0
        pessoas.forEach(element =>{
            media += element.age
            count++
        })
        alert(`A média das idades é: ${parseInt(media/count)}`)
    }

    return(
        <div>
            <button onClick={media}>Media das idades</button>
            <button><Link to="/">Voltar à tela principal</Link></button>
        </div>
    )
}