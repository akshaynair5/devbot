DevBot is a Chat-Bot made using react.js,express and openapi. It has a simple UI through which users can ask questions regarding programing and recieve accurate answers in the text from the API.
sample UI


<img width="942" alt="image" src="https://user-images.githubusercontent.com/108605741/214058360-34991a73-714c-4845-a6ab-e977c72f98ec.png">

Personal chat with the bot is stored for you to access it again for future references.

WORKING:
When the user presses the 'Enter key' or the clicks the arrow button on the screen an axios post request is sent to the express server whose file name
is 'server.js' within which using the information within the propmt in the forntend the express server sends another post request to the openai Api that returns an object which the requested information which is the converted and stored within the resposnse state in the frontend.Here the chat between the user and the bot wont be lost even after refreshing or quiting from the website as the information is stored within the localStorage.
