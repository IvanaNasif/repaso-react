const Pedido = (props) => {

    const handleDelete = () => {
      props.onDelete(props.pedido.id)
    }
    
      return (
        <div>
          <span>{props.pedido.name}</span>
          <button onClick={handleDelete}>Delete</button>
          </div>
      )
    }
    
    export default Pedido