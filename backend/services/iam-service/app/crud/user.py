from passlib.context import CryptContext
from sqlalchemy.orm import Session

from app.core.security import get_password_hash, verify_password
from app.db.models import User
from app.schemas.user_schemas import UserRegister

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


# def get_user_by_email(db: Session, email: str):
# return db.query(User).filter(User.email == email).first()

def get_user_by_email(db: Session, email: str):
    user = db.query(User).filter(User.email == email).first()
    return user


def create_user(db: Session, user_in: UserRegister):
    hashed_password = get_password_hash(user_in.password)
    new_user = User(
        full_name=user_in.full_name,
        email=user_in.email,
        phone=user_in.phone,
        password=hashed_password
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


def authenticate_user(db: Session, email: str, password: str):
    user = get_user_by_email(db, email=email)
    if not user:
        return None

    if not verify_password(password, str(user.password)):
        return None
    return user






