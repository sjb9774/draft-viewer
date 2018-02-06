from flask import render_template
from draft_viewer.app import app

@app.route("/")
def home():
    return "Hello world!"