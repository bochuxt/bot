from rasa_core.agent import Agent
from rasa_core.interpreter import RasaNLUInterpreter
from ga_connector import GoogleConnector
from rasa_core.utils import EndpointConfig

try:

    nlu_interpreter = RasaNLUInterpreter('./models/current/nlu_model')
    action_endpoint = EndpointConfig(url="http://localhost:5055/webhook")
    agent = Agent.load('./models/current/dialogue',
                       interpreter = nlu_interpreter,
                       action_endpoint = action_endpoint)
    #GA connector
    input_channel = GoogleConnector()

    print("====start GA=== port 5004")
    agent.handle_channels([input_channel], 5004, serve_forever=True)
    print(" ====server running====")

except Exception as e:
    print(" run_app: ", e)
#./ngrok http 5005