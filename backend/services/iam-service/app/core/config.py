
from pathlib import Path

from pydantic_settings import BaseSettings


class Settings(BaseSettings):

    # --- تنظیمات دیتابیس ---
    DATABASE_HOST: str
    DATABASE_PORT: int
    DATABASE_NAME: str
    DATABASE_USER: str
    DATABASE_PASSWORD: str

    # --- تنظیمات امنیتی / JWT ---
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    class Config:
        env_file = Path(__file__).resolve().parent.parent / ".env"


settings = Settings()