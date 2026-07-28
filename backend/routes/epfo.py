from flask import Blueprint

from flask import jsonify

from flask_jwt_extended import jwt_required

epfo = Blueprint(

    "epfo",

    __name__
)

@epfo.route(

    "/refresh-epfo",

    methods=["POST"]

)

@jwt_required()

def refresh():

    # Call Selenium / Playwright here

    return jsonify({

        "message":"EPFO Data Refreshed"

    })