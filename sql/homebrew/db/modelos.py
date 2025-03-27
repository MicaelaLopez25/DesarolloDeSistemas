from datetime import datetime
from sqlmodel import Field, SQLModel
from uuid import uuid4

class Clientes(SQLModel, table=True):
    id: str = Field(default=str(uuid4()), primary_key=True)
    created_at: datetime = Field(default=datetime.now())
    updated_a: datetime = Field(default=datetime.now)
    nombre: str
    apellido: str

class Pedido(SQLModel, table=True):
 id: str = Field(default=str(uuid4()), primary_key=True)
    created_at: datetime = Field(default=datetime.now())
    updated_a: datetime = Field(default=datetime.now)
    cliente_id: str = Field(default="pendiente")

class Productos(SQLModel, table=true):
    id: str = Field(default=str(uuid4()), primary_key=True)
    created_at: datetime = Field(default=datetime.now())
    updated_a: datetime = Field(default=datetime.now)
     








