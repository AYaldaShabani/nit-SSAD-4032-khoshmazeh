from datetime import datetime, timedelta
from typing import Union

from jose import jwt
from passlib.context import CryptContext

from app.core.config import settings

# ساخت context برای hash کردن و بررسی رمز
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


# تابعی برای هش کردن رمز عبور
def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)


# تابعی برای بررسی رمز خام با رمز هش‌شده
def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


# رمز برای امضای توکن (در پروژه واقعی از env بگیر)
SECRET_KEY = settings.SECRET_KEY
ALGORITHM = settings.ALGORITHM
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24  # 1 روز


def create_access_token(data: dict,
                        expires_delta: Union[timedelta, None] = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (
        expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# ارور برای خط طولانی

