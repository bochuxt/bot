#!/bin/bash

python3 -m rasa_core.run -d models/current/dialogue -u models/current/nlu_model --debug --endpoints endpoints.yml