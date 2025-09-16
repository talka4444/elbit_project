from fastapi import Depends
from app import create_app
from models.guest import Guest, GuestModel
from database import Base, engine, get_session
from sqlalchemy.orm import Session

Base.metadata.create_all(bind=engine)
app = create_app()

@app.post("/guest")
def create_guest(guest: GuestModel, session: Session = Depends(get_session)):
    new_guest: Guest = Guest(name=guest.name, rating=guest.rating, 
                            description=guest.description, title=guest.title)
    session.add(new_guest)
    session.commit()
    return {"response": f"guest {guest.name} added to guest book"}

@app.get("/guests")
def get_all_guests(session: Session = Depends(get_session)):
    return session.query(Guest).all()

@app.get("/guest/{guest_id}")
def get_guest_by_id(guest_id: int, session: Session = Depends(get_session)):
    return session.query(Guest).filter(Guest.id == guest_id).first()
