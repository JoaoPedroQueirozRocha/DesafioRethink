import { useState } from "react";
import '../style/cadastro.css'
export default function Cadastrar(){
    const [count, setCount] = useState(0)
    let [usuarios, setUsuarios] = useState([])
    let [values, setValues] = useState()
  
    const RealTimeData = new Date();
  
    const handleChangeValues = (value) =>{
      setValues((prevValues)=>({
        ...prevValues,
        [value.target.name]: value.target.value
      }))
    }
  
    const handleClickButton = () =>{
      setUsuarios([...usuarios, values])
    }
  
  
    return (
      <div className="App">
        <div className="inputs">
            <input type="text" name='Nome' placeholder='Insira seu nome' onChange={handleChangeValues}/>
            <input type="number" name='Idade' placeholder='Insira sua idade' onChange={handleChangeValues}/>
            <input type="text" name='Profissao' placeholder='Insira sua Profissão' onChange={handleChangeValues}/>
            <input type="email" name='Email' placeholder='Insira seu email' onChange={handleChangeValues}/>
            <input type="tel" name="Telefone" placeholder='Insira seu número de telefone' onChange={handleChangeValues}/>
            <input type="date" value={new Date()} name="Data" onChange={handleChangeValues}/>
        </div>
        <button onClick={handleClickButton}>Cadastrar</button>
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Profissão</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Data de preenchimento</th>
                    </tr>
                    {usuarios.map((user)=>(
                        <tr>
                            <td>{user.Nome}</td>
                            <td>{user.Idade}</td>
                            <td>{user.Profissao}</td>
                            <td>{user.Email}</td>
                            <td>{user.Telefone}</td>
                            <td>{user.Data}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    )
}