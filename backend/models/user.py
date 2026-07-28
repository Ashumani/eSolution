from database import db

class User(db.Model):

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(100))

    email = db.Column(db.String(120), unique=True)

    password = db.Column(db.String(255))

    role = db.Column(db.Integer, default=2)