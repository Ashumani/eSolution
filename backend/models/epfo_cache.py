from database import db

class EPFOCache(db.Model):

    __tablename__ = "epfo_cache"

    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer)

    json_data = db.Column(db.JSON)

    fetched_at = db.Column(db.DateTime)