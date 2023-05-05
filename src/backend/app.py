# Import necessary libraries
from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle
import pandas as pd

# Create Flask app
app = Flask(__name__)
CORS(app)

# Load the saved model
model = pickle.load(open("model2.pkl", "rb"))

# Define a route for the endpoint
# @app.route('/predict', methods=['POST'])
# def predict():
#     # Get the JSON data from the request
#     data = request.get_json()
#     print(data)
#     # Convert JSON data to a Pandas DataFrame
#     df = pd.DataFrame(data)

#     # Make a prediction
#     prediction = model.predict(df)

#     # Return the prediction as a JSON response
#     return jsonify(prediction.tolist())
@app.route('/predict', methods=['POST'])
def predict():
    # Get the JSON data from the request
    data = request.get_json()
    print(data)
    
    # Check that the data is a dictionary or list of dictionaries
    if isinstance(data, dict):
        data = [data]
    elif not isinstance(data, list) or not all(isinstance(d, dict) for d in data):
        return jsonify({'error': 'Invalid input data. Expected a dictionary or a list of dictionaries.'})
    
    # Convert JSON data to a Pandas DataFrame
    try:
        df = pd.DataFrame(data)
    except ValueError as e:
        return jsonify({'error': f'Failed to convert input data to DataFrame: {str(e)}'})
    
    # Make a prediction
    prediction = model.predict(df)

    # Return the prediction as a JSON response
    return jsonify(prediction.tolist())

# Start the app
if __name__ == '__main__':
    app.run(debug=True)
