# webhook health check
GET /webhooks/google_home/ HTTP/1.1
Host: 43b59c37.ngrok.io
Content-Type: application/json
User-Agent: PostmanRuntime/7.11.0
Accept: */*
Cache-Control: no-cache
Postman-Token: c734ecdb-0578-4f2c-922f-78852fabe0e1,8ceb211f-ddf8-4120-9299-a50eaf7fdf2a
Host: 43b59c37.ngrok.io
accept-encoding: gzip, deflate
Connection: keep-alive
cache-control: no-cache




#greet

POST /webhooks/google_home/webhook HTTP/1.1
Host: 43b59c37.ngrok.io
Content-Type: application/json
User-Agent: PostmanRuntime/7.11.0
Accept: */*
Cache-Control: no-cache
Postman-Token: a8239af1-d75a-4588-96d6-9343da31f543,c1ce7882-4629-4a6e-9632-88d97bac6e0b
Host: 43b59c37.ngrok.io
accept-encoding: gzip, deflate
content-length: 100
Connection: keep-alive
cache-control: no-cache

{

"user":{"userId":"1"},
"inputs":[{"intent":"actions.intent.MAIN",
"rawInputs":[{"query":""}]}]

}

#hello
POST /webhooks/google_home/webhook HTTP/1.1
Host: 43b59c37.ngrok.io
Content-Type: application/json
User-Agent: PostmanRuntime/7.11.0
Accept: */*
Cache-Control: no-cache
Postman-Token: e318e515-08aa-48f6-ab8c-5e57d9af66b1,e96752e1-6e59-4151-9d7d-971a5a821c08
Host: 43b59c37.ngrok.io
accept-encoding: gzip, deflate
content-length: 105
Connection: keep-alive
cache-control: no-cache

{

"user":{"userId":"1"},
"inputs":[{"intent":"actions.intent.TEXT",
"rawInputs":[{"query":"hello"}]}]

}

#looking for restaurant
POST /webhooks/google_home/webhook HTTP/1.1
Host: 43b59c37.ngrok.io
Content-Type: application/json
User-Agent: PostmanRuntime/7.11.0
Accept: */*
Cache-Control: no-cache
Postman-Token: 8afc28c1-cb72-4d4f-a12d-3ce3eb042f5d,3752a3d3-b838-47c9-bb31-9c137acceb43
Host: 43b59c37.ngrok.io
accept-encoding: gzip, deflate
content-length: 202
Connection: keep-alive
cache-control: no-cache

{

"user":{"userId":"1"},
"inputs":[
	{
		"intent":"actions.intent.TEXT",
		"rawInputs":[{"query":"I'm looking for a restaurant within 5000 meters from Center of San Jose","radius":"100 meters"}]
	}]

}


#ask for distance
POST /webhooks/google_home/webhook HTTP/1.1
Host: 43b59c37.ngrok.io
Content-Type: application/json
User-Agent: PostmanRuntime/7.11.0
Accept: */*
Cache-Control: no-cache
Postman-Token: fc091216-f3fb-4eca-ae03-2dce73b5de0c,0382def1-89f2-47f9-a34c-0c226ee4422a
Host: 43b59c37.ngrok.io
accept-encoding: gzip, deflate
content-length: 118
Connection: keep-alive
cache-control: no-cache

{

"user":{"userId":"1"},
"inputs":[{"intent":"actions.intent.TEXT",
"rawInputs":[{"query":"around 1000 meters"}]}]

}

#ask for address
POST /webhooks/google_home/webhook HTTP/1.1
Host: 43b59c37.ngrok.io
Content-Type: application/json
User-Agent: PostmanRuntime/7.11.0
Accept: */*
Cache-Control: no-cache
Postman-Token: 795d75d7-1e8d-4fbc-a8e7-2b0e44acdd43,8c5b55ff-8354-43b6-be44-200722e41f04
Host: 43b59c37.ngrok.io
accept-encoding: gzip, deflate
content-length: 119
Connection: keep-alive
cache-control: no-cache

{

"user":{"userId":"1"},
"inputs":[{"intent":"actions.intent.TEXT",
"rawInputs":[{"query":"what is the address"}]}]

}

# ask for rating
POST /webhooks/google_home/webhook HTTP/1.1
Host: 43b59c37.ngrok.io
Content-Type: application/json
User-Agent: PostmanRuntime/7.11.0
Accept: */*
Cache-Control: no-cache
Postman-Token: f8f51d25-61c5-4e59-9dfe-7e79dba8d624,84d5e4fe-b4fb-4557-8d34-6318cee1a731
Host: 43b59c37.ngrok.io
accept-encoding: gzip, deflate
content-length: 118
Connection: keep-alive
cache-control: no-cache

{

"user":{"userId":"1"},
"inputs":[{"intent":"actions.intent.TEXT",
"rawInputs":[{"query":"what is the rating"}]}]

}

#goodby
POST /webhooks/google_home/webhook HTTP/1.1
Host: 43b59c37.ngrok.io
Content-Type: application/json
User-Agent: PostmanRuntime/7.11.0
Accept: */*
Cache-Control: no-cache
Postman-Token: 258472ce-9df4-4e3b-a308-3f25960a8d88,f0aa1934-3982-48fc-83db-c84e20f7b753
Host: 43b59c37.ngrok.io
accept-encoding: gzip, deflate
content-length: 107
Connection: keep-alive
cache-control: no-cache

{

"user":{"userId":"1"},
"inputs":[{"intent":"actions.intent.TEXT",
"rawInputs":[{"query":"Goodbye"}]}]

}

