function buscarPescaderia() {
  for (let i = 0; i < almacen[0].productos.length; i++) {
    contenidoTabla += `
                <tr>
                    <td>${almacen[0].productos[i].nombre}</td>
                    <td>${almacen[0].productos[i].precio}</td>
                    <td>${almacen[0].productos[i].stock}</td>
                </tr>
            `;
  }

  let tabla = `
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                ${contenidoTabla}
                </body>
            </table
        `;
  return tabla;
}
