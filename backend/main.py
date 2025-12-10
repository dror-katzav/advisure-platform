from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Advisure API", version="0.1.0")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development, allow all. Restrict in prod.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to Advisure API"}

@app.get("/health")
async def health_check():
    return {"status": "ok"}

from backend.api import calculator
app.include_router(calculator.router, prefix="/api/v1", tags=["calculator"])
