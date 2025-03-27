from app import app
from  db.modelos import Clientes, Productos
from app.clientes.resgistrar import registrar as registratNuevoCliente
from app.producto.registrar import registrar as registratNuevoProducto
from app.pedidos.registrar import registrar as 

@app.post("/api/v1/clientes")
def post_clientes(cliente: Clientes):
    return registratNuevoCliente(cliente)

@app.post("/api/v1/productos")
def post_productos(producto: Productos):
    return registratNuevoProducto(producto)

@app.post("/api/v1/pedidos")
def post_pedidos(pedido: pedidos):
    return registratNuevoPedido(pedido)


