import random
from datetime import datetime, timedelta
from sqlalchemy.orm import Session
from app.db.otp_code import OTPCode


def generate_otp_code(email: str, db: Session) -> str:
    code = str(random.randint(1000, 9999))
    expires_at = datetime.utcnow() + timedelta(minutes=3)

    otp = OTPCode(email=email, code=code, expires_at=expires_at)
    db.add(otp)
    db.commit()
    return code
