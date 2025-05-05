from app.db.base import Base
from app.db.models import Admin, User
from app.db.session import engine

__all__ = [
    "User",
    "Admin"
]
# ایجاد جداول
Base.metadata.create_all(bind=engine)
