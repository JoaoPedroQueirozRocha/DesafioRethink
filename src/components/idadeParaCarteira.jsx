




export default function IdadeMaior(){

    let pessoas = [
        {name:"Fabiana Araújo", age:33},
        {name:"Gabril Gomes", age:25},
        {name:"Fernando Henrique", age:17},
        {name:"Ana Luiza", age:2},
        {name:"Geralda do nascimento", age:93},
        {name: "Miguel Souza", age:70},
        {name:"Antonio Miguel", age:69}
    ]


    function filtrarIdade(){
        let maisDezoito = pessoas.filter(pessoa => pessoa.age > 18)
        let validos = []
        maisDezoito.forEach(element => {
            validos.push({name:element.name, age:element.age})
        })
        alert("Open console")
        console.log(validos)
    }


    return(
        <div>
            <button onClick={filtrarIdade}>Exibir pessoas para CNH</button>
            <button><Link to="/">Voltar à tela principal</Link></button>

        </div>
    )
}