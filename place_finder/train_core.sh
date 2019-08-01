#!/bin/bash
python -m rasa_core.train -d domain.yml -s data/stories.md -o models/current/dialogue  -c policies.yml