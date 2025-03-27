from fasrapi import FastAPI 

from db.inicializae import creadBDDYSusTablas

@asynccontestmananger
async def cicloDeVidaDeLaAPP(app:FastaAPI):
    print("inicio de la app")
    creadBDDYSusTablas()
    yield
    print("Fin de la app")


app = FastaAPI(lifespan=cicloDeVidaDeLaAPP)