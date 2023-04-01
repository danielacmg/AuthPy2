"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/whatever', methods=['GET'])
def testing_route():

    response_body = {
        "message": "NO entiendo Nada!"
    }

    return jsonify(response_body), 200

##################### Create User #####################################
@api.route('/user', methods=['POST'])
def create_user():
    # First we get the payload json
    body = request.get_json()    
    
    if body is None:
        raise APIException("You need to specify the request body as a json object", status_code=400)
    if 'email' not in body:
        raise APIException('You need to specify the email', status_code=400)
    if 'password' not in body:
        raise APIException('You need to specify the password', status_code=400)
    
    # to inster the user into the bd
    new_user = User(password=body['password'], email=body['email'], is_active=True)
    db.session.add(new_user)
    db.session.commit()
    return "User created", 200

############################ Login/Create token ################################################
# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/login", methods=["POST"])
def user_login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

#################################################