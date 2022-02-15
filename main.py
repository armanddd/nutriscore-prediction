import joblib
import json
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pathlib import Path

app = FastAPI()
app.mount(
    "/static",
    StaticFiles(directory=Path(__file__).parent.absolute() / "static"),
    name="static",
)
templates = Jinja2Templates(directory="templates")

loaded_model = joblib.load("modelTest.sav")



@app.post("/prediction")
async def main(request: Request):
    data = json.loads(await request.body())

    for elm in data:
        if not str(data[elm]).isdigit():
            data[elm] = 0

    prediction_data = \
    [
        [
            float(data["energie"]), float(data["mg"]), float(data["acideGrasSature"]),
            float(data["sucres"]), float(data["proteines"]), float(data["fibres"]), float(data["sel"])
        ]
    ]
    return {"nutriscore": loaded_model.predict(prediction_data)[0]}


@app.get("/formulaire")
def home(request: Request):
    return templates.TemplateResponse("formulaire.html", {
        "request": request
    })
