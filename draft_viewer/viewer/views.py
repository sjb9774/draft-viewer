from draft_viewer.app import app
from flask import render_template

@app.route("/")
def index():
    return render_template("index.html")
