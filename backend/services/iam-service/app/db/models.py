
from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.sql import func
from ..db.base import Base 

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    phone = Column(String, unique=True, index=True, nullable=True)
    password = Column(String, nullable=True)  
    is_active = Column(Boolean, default=True)
    is_vip = Column(Boolean, default=False)  
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    image = Column(String, nullable=True)  

class Admin(Base):
    __tablename__ = "admins"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=True)  
    created_at = Column(DateTime(timezone=True), server_default=func.now())
