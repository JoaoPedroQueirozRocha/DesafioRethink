


export default function InserirId(){

    let pessoas = [
        {name:"Fabiana Araújo", age:33},
        {name:"Gabril Gomes", age:25},
        {name:"Fernando Henrique", age:17},
        {name:"Ana Luiza", age:2},
        {name:"Geralda do nascimento", age:93},
        {name: "Miguel Souza", age:70},
        {name:"Antonio Miguel", age:69}
    ]

    function inserirId() {
        let count = 0
        pessoas.forEach(element => {
            pessoas.splice(count,1,{id: count+1, name: element.name, age: element.age})
            count++
        });
        count = 0
        console.log(pessoas)

    }


    return(
        <div>
            <button onClick={inserirId}>Inserir ID</button>
            <button><Link to="/">Voltar à tela principal</Link></button>
        </div>
    )
}