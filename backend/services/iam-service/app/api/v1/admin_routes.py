from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.security import create_access_token
from app.crud import admin as crud_admin
from app.db.session import SessionLocal
from app.schemas.admin_schemas import AdminLogin, AdminOut

admin_router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@admin_router.post("/admin/login")
def login_admin(admin: AdminLogin, db: Session = Depends(get_db)):
    db_admin = crud_admin.authenticate_admin(db, admin.email, admin.password)
    if not db_admin:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials"
        )

    token = create_access_token(data={"sub": db_admin.email, "role": "admin"})
    return {"access_token": token, "token_type": "bearer"}
