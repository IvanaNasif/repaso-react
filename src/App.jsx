import { useState } from 'react'
import Header from'./components/Header'
import Formulario from './components/Formulario'
import Pedido from './components/Pedido'


const pedidos =[
  {id:1, name: "remera"},
  {id:2, name: "pantalon"},
  {id:3, name: "zapatillas"},
  {id:4, name: "gorras"},
]

let id=0 

function App() {
  const [pedidos, setPedidos] = useState([])

function handleAddPedido(pedido){
  console.log(pedido);
  const newPedidos =[...pedidos]
  newPedidos.push({
    id: id ++, 
    name:pedido,
  })
  console.log(newPedidos)
  setPedidos (newPedidos)
}
function handleDeletePedido(id){
  const newPedidos= pedidos.filter((pedido) => pedido.id !== id)
  setPedidos (newPedidos)
}

  return (
    <div className="App">
      <Header title="pedi Ya" />
      <Formulario onSubmit ={handleAddPedido}/>
      <hr />
      {pedidos.map((pedido) =>{
      return 
      <Pedido  key ={pedido.id} pedido={pedido} onDelete={handleDeletePedido}/>  
})}
    </div>
  )
}

export default App
