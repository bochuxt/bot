const express = require('express');
const app = express();
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/', jsonParser, (req, res) =>
    {



//    console.log(" request received by post session",req.body.session)
    var user = req.body.session.user
    console.log(" user ", user)


//    console.log(" request received by post context",req.body.context)
    var device = req.body.context.System.device
    console.log(" device ", device)

//    console.log(" request received by post request",req.body.request)
    var type=req.body.request.type
    var intent = req.body.request.intent //intent: { name: 'HelloWorldIntent', confirmationStatus: 'NONE' } }
    console.log(" intent ", intent)

    res.send({
        version: '1.0',
        response: {
        shouldEndSession: false,
        outputSpeech: {
            type: 'SSML',
            text: 'Hello World! aiQo learn ',
            ssml: '<speak>Hello aiQo learn!</speak>'
            }
        }
    })
    }

    );


app.get('/', (req, res) =>
    {
    console.log(" request received by get")
        res.send({
            version: '1.0',
            response: {
            shouldEndSession: false,
            outputSpeech: {
                type: 'SSML',
                text: 'Hello World! aiQo learn ',
                ssml: '<speak>Hello aiQO learn!</speak>'
                }
            }
        })
    }


    );
app.listen(5004, () => console.log('Example app listening on port 5004!'));