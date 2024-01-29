/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function TableItems({ items, setItem, showModalUpdate , setItemUpdate }) {




  
  
  function ItemImporte(item) {


    // console.log(item.cantidad);
    // console.log(item.precio);
    let itemImportePrecio = (item.cantidad * item.precio);

    let descuento = itemImportePrecio * item.descuento;

    
    
    return (itemImportePrecio - descuento);
  }


  function FormatPrecio(precio) {
    
    let result = precio.toLocaleString('es-ar', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    });
    
    return result;
  }
  
  function FormatPrecioItem(precio) {
    // Redondear el precio a dos decimales
    precio = Math.round(precio * 100) / 100;
    
    // Convertir el precio a una cadena con dos decimales
    let precioStr = precio.toFixed(2);
    
    // Obtener la parte entera y la parte decimal
    let [parteEntera, parteDecimal] = precioStr.split('.');
    
    // Formatear la parte entera con separadores de miles
    parteEntera = parseInt(parteEntera).toLocaleString();

    // Combinar la parte entera y la parte decimal en el formato final
    let result = `$ ${parteEntera},${parteDecimal}`;
    
    return result;
  }
  

  
  function DeleteItem(id) {
    console.log(id);
    const newItem = items.filter(ite => ite.id !== id)
    console.log(newItem);
    setItem(newItem)
    
  }
  function getItemUpdate(id) {
      
      const itemUpdate = items.find(ele => ele.id === id)
      console.log(itemUpdate);
      setItemUpdate(itemUpdate);
  }

  
  return (
    <div style={{ overflowX: 'auto' }}>

      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Cantidad</th>
            <th>Description</th>
            <th>Precio Uni.</th>
            <th>Descuento</th>
            <th>Importe</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map(ele =>
            <tr key={ele.id}>
              <td>{ele.codigo}</td>
              <td>{ele.cantidad}</td>
              <td>{ele.descripcion}</td>
              <td>{FormatPrecioItem(ele.precio)}</td>
              <td>{ele.descuento}</td>
              <td>{FormatPrecio(ItemImporte(ele))}</td>
              <td><button
                className="form-table-btn-delete"
                onClick={() => DeleteItem(ele.id)}>borrar</button>
                <button
                className="form-table-btn-update"
                onClick={() =>{showModalUpdate(), getItemUpdate(ele.id) }}>modificar</button>
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
}

export default TableItems;