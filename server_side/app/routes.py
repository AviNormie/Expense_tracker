from flask import Blueprint, request, jsonify, current_app as app

main = Blueprint('main', __name__)

# Route to get all expenses
@main.route('/expenses', methods=['GET'])
def get_expenses():
    expenses = app.mongo_db.expenses  # Access the 'expenses' collection in MongoDB
    data = list(expenses.find())  # Fetch all expenses
    return jsonify(data)

# Route to add a new expense
@main.route('/expenses', methods=['POST'])
def add_expense():
    expenses = app.mongo_db.expenses  # Access the 'expenses' collection
    expense = request.get_json()  # Get expense data from the request body
    result = expenses.insert_one(expense)  # Insert the new expense
    return jsonify({"_id": str(result.inserted_id), "message": "Expense added successfully"})
