from pydantic import BaseModel
from sqlalchemy import Column, Integer, String
from database import Base

class GuestModel(BaseModel):
    name: str
    rating: int
    description: str
    title: str

class Guest(Base):
    __tablename__ = "guests"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    rating = Column(Integer)
    description = Column(String)
    title = Column(String)
