from flask import Flask, jsonify, send_from_directory
import json
import os

app = Flask(__name__)

# Load mock data from JSON file
with open('mock_flight_data.json') as f:
    flights = json.load(f)

@app.route('/api/flights', methods=['GET'])
def get_flights():
    return jsonify(flights)

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')

if __name__ == '__main__':
    app.run(port=5000, debug=True)

