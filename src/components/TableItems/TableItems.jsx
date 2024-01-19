/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function TableItems({ items }) {
  return (
    <table style={{width: '100%'}}>
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Cantidad</th>
          <th>Description</th>
          <th>Precio Uni.</th>
          <th>Descuento</th>
          <th>Importe</th>
        </tr>
      </thead>
      <tbody>
        {items.map(ele =>
          <tr key={ele.descripcion}>
            <td>{ele.codigo}</td>
            <td>{ele.cantidad}</td>
            <td>{ele.descripcion}</td>
            <td>{ele.precio}</td>
            <td>{ele.descuento}</td>
            <td>{ele.importe}</td>
            {/* <td><button>borrar</button></td> */}
          </tr>
        )}
      </tbody>

    </table>
  );
}

export default TableItems;