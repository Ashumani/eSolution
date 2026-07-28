import os

class Config:

    SECRET_KEY = "mysupersecret"

    JWT_SECRET_KEY = "jwt_secret"

    SQLALCHEMY_DATABASE_URI = \
        "postgresql://postgres:12345678@localhost:5432/mypfportal"

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    REDIS_HOST = "localhost"

    REDIS_PORT = 6379