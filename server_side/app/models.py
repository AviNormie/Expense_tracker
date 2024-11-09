# app/models.py
from flask import current_app as app

# Use the MongoDB instance created in __init__.py
expenses = app.mongo_db.expenses
