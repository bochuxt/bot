from flask import Flask
from flask_ask import Ask, statement
import logging

app = Flask(__name__)
ask = Ask(app, '/')
logging.getLogger("flask_ask").setLevel(logging.DEBUG)

@ask.intent('HelloIntent')
def hello(firstname):
    speech_text = "Hello %s" % firstname
    return statement(speech_text).simple_card('Hello', speech_text)

if __name__ == '__main__':
    print('Ask started')
    app.run(host='0.0.0.0', port=5004, debug=True)