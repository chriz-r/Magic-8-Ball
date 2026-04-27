# Magic 8 Ball Web Application

A fun, interactive Magic 8 Ball web application built with Python Flask and animated with CSS and JavaScript.

## Features

- 🎱 Beautiful 3D Magic 8 Ball design
- 🔮 Classic Magic 8 Ball answers (20 traditional responses)
- ✨ Smooth shake animation before revealing the answer
- 🔄 Rotating animation from the "8" face to the answer window
- 📱 Responsive design that works on desktop and mobile

## Project Structure

```
Magic8Ball/
├── app.py                 # Flask backend server
├── requirements.txt       # Python dependencies
├── templates/
│   └── index.html        # Main HTML template
└── static/
    ├── style.css         # Styling and animations
    └── script.js         # Frontend JavaScript logic
```

## Installation

1. Make sure you have Python installed (Python 3.7 or higher recommended)

2. Install the required dependencies:
```bash
pip install -r requirements.txt
```

## Running the Application

1. Start the Flask server:
```bash
python app.py
```

2. Open your web browser and navigate to:
```
http://localhost:5000
```

3. Type your yes/no question in the input field and click "Shake the Ball" or press Enter

## How It Works

1. **Frontend**: The user types a question and clicks the button
2. **Animation**: The Magic 8 Ball shakes for 0.8 seconds
3. **Backend**: The Flask server receives the question and returns a random answer from the classic 20 Magic 8 Ball responses
4. **Display**: The ball rotates 180° to reveal the answer in the triangular window

## Answer Categories

The Magic 8 Ball provides three types of answers:
- **Positive** (10 answers): "It is certain", "Yes definitely", etc.
- **Non-committal** (5 answers): "Ask again later", "Cannot predict now", etc.
- **Negative** (5 answers): "Don't count on it", "Very doubtful", etc.

## Technologies Used

- **Backend**: Python, Flask
- **Frontend**: HTML5, CSS3, JavaScript
- **Animations**: CSS transforms and keyframe animations

## Customization

You can easily customize the Magic 8 Ball by editing:
- `app.py`: Add or modify answer responses in the `ANSWERS` list
- `static/style.css`: Change colors, sizes, or animation timing
- `static/script.js`: Modify the animation sequence or behavior

Enjoy your Magic 8 Ball! 🎱✨
