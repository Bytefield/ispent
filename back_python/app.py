from flask import Flask, render_template, jsonify, request
from pymongo import MongoClient
import os, logging
from dotenv import load_dotenv
from jsonschema import validate

# Configure logging
logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)

# Set up MongoDB connection
# DB_USER = os.environ(DB_USER)
# DB_PASSWORD = os.environ(DB_PASSWORD)
# mongodb+srv://papi:OTkwLNke1sHFBcxp@papi-cluster.fvf7ydk.mongodb.net/test

mongo_uri = "mongodb+srv://papi:OTkwLNke1sHFBcxp@cluster0.aw1sncn.mongodb.net/?retryWrites=true&w=majority"

# mongo_uri = os.environ['MONGO_URI']
client = MongoClient(mongo_uri, connectTimeoutMS=30000)
db = client.ispent

# Define endpoints
@app.route('/', methods=['GET', 'POST'])
def root():
    return "Welcome!"

@app.route('/products', methods=['GET'])
def get_products():
    products = list(db.products.find({}))
    return jsonify(products)

# schema = {
#     "type": "object",
#     "properties": {
#         "relative_id": {
#             "type": "object",
#             "properties": {
#                 "mercadona": {"type": "string", "pattern": "^[0-9]+$"}
#             },
#             "additionalProperties": False
#         },
#         "allergens": {"type": ["array", "null"], "items": {"type": "string"}},
#         "brand": {"type": ["string", "null"]},
#         "description": {"type": "string"},
#         "display_name": {"type": "string"},
#         "ean": {"type": "string", "pattern": "^[0-9]{13}$"},
#         "ingredients": {"type": "string"},
#         "thumbnails": {"type": "string", "pattern": "^thumbnails/[0-9]+\.(jpg|png)$"}
#     },
#     "required": ["relative_id", "description", "display_name", "ean", "thumbnails"],
#     "additionalProperties": False
# }

@app.route('/products', methods=['POST'])
def create_product():

    data = request.json
    result = db.products.insert_one(data)

    return jsonify({'inserted_id': str(result.inserted_id)})

@app.route('/products/<ean>', methods=['GET'])
def get_product_by_ean(ean):
    product = db.products.find_one({'ean': ean}, {'_id': False})
    if product is None:
        return jsonify({'error': 'Product not found'})
    return jsonify(product)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)