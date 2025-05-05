import logging

from fastapi import FastAPI

from api.v1.admin_routes import admin_router
from api.v1.routes import router


app = FastAPI()

app.include_router(router, prefix="/users", tags=["users"])
app.include_router(admin_router, prefix="/admin", tags=["admin"])

# تنظیمات لاگ
logging.basicConfig(level=logging.INFO)
logging.getLogger('sqlalchemy.engine').setLevel(logging.INFO)

if __name__ == "__main__":
    import uvicorn
    try:
        uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True, log_level="debug")

    except Exception as first_error:
        print(f"Primary host failed: {first_error}")

        try:
            uvicorn.run("main:app", host="127.0.0.1", port=5000, reload=True, log_level="debug")

        except Exception as fallback_error:
            print(f"Fallback host also failed: {fallback_error}")
