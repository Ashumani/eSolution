import bcrypt

from flask import Blueprint

from flask import request

from flask import jsonify

from flask_jwt_extended import create_access_token

from models.user import User

auth = Blueprint("auth", __name__)

@auth.route("/login", methods=["POST"])

def login():

    data = request.json

    user = User.query.filter_by(

        email=data["email"]

    ).first()

    if not user:

        return jsonify({

            "message": "Invalid Credentials"

        }),401

    if not bcrypt.checkpw(

        data["password"].encode(),

        user.password.encode()

    ):

        return jsonify({

            "message":"Invalid Credentials"

        }),401

    token = create_access_token(

        identity=str(user.id)

    )

    return jsonify({

        "token": token,

        "name": user.name,

        "role": user.role

    })