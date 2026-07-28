from flask import Blueprint

from flask import jsonify

from flask_jwt_extended import jwt_required

dashboard = Blueprint(

    "dashboard",

    __name__
)

@dashboard.route(

    "/dashboard",

    methods=["GET"]

)

@jwt_required()

def dashboard_data():

    return jsonify({

        "pf_balance":742550,

        "employee_share":350000,

        "employer_share":280000,

        "eps":112550,

        "issues":[

            "Bank KYC Pending",

            "Date of Exit Missing"

        ],

        "notifications":[

            "Employer has not updated DOE",

            "Transfer Required"

        ],

        "health_score":92

    })