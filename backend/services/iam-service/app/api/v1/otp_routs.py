# from fastapi import APIRouter, Depends, HTTPException, status
# from sqlalchemy.orm import Session
# from db.session import get_db
# from utils.otp import generate_otp_code
# from schemas.otp_schema import OTPRequest
# از اینجا می‌تونی later اضافه کنی برای ارسال ایمیل

# router = APIRouter(prefix="/otp", tags=["OTP"])


# @router.post("/request")
# def request_otp(data: OTPRequest, db: Session = Depends(get_db)):
# code = generate_otp_code(data.email, db)

# print(f"OTP for {data.email}: {code}")
# return {"message": "OTP sent successfully"}
