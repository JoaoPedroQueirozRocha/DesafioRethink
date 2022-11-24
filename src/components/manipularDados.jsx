

export default function ManipularDados(){

    let pessoas = [
        {name:"Fabiana Araújo", age:33},
        {name:"Gabril Gomes", age:25},
        {name:"Fernando Henrique", age:17},
        {name:"Ana Luiza", age:2},
        {name:"Geralda do nascimento", age:93},
        {name: "Miguel Souza", age:70},
        {name:"Antonio Miguel", age:69}
    ]

    function showArray(){
        alert("open console")
        console.log([
            {name:"Fabiana Araújo", age:33},
            {name:"Gabril Gomes", age:25},
            {name:"Fernando Henrique", age:17},
            {name:"Ana Luiza", age:2},
            {name:"Geralda do nascimento", age:93},
            {name: "Miguel Souza", age:70},
            {name:"Antonio Miguel", age:69}
        ])
    }

    function substituir(){
        alert("open console")
        pessoas.splice(0,1,{name:"Maria Conceição", age:50})
        console.log(pessoas)
    }

    return(
        <div>
            <button onClick={showArray}>Show array</button>
            <button onClick={substituir}>Substitui o Primeiro item</button>
            <button><Link to="/">Voltar à tela principal</Link></button>

        </div>
    )
}