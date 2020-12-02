from flask import Flask, render_template, redirect, jsonify
from flask_pymongo import PyMongo
import edit

# Create an instance of Flask
app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/map_data")
def map_data():
  
    return jsonify(edit.edit())

if __name__ == "__main__":
    app.run(debug=True)
