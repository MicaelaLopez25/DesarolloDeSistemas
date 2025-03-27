from sqlmodel import SQLModel
from  db.conexion import db 



def creadBDDYSusTablas():
    SQLModel.metadata.create_all(db)