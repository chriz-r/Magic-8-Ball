from flask import Flask, render_template, jsonify, request
import random

app = Flask(__name__)

# Classic Magic 8 Ball answers
ANSWERS = [
    # Positive answers (10)
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    
    # Non-committal answers (5)
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    
    # Negative answers (5)
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    question = data.get('question', '')
    
    if not question:
        return jsonify({'error': 'No question provided'}), 400
    
    answer = random.choice(ANSWERS)
    return jsonify({'answer': answer})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
