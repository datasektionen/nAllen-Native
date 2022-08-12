import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from slack_bolt import App
from slack_bolt.adapter.socket_mode import SocketModeHandler

import os
from datetime import datetime
from datetime import timezone

BOT_TOKEN = os.environ['SLACK_BOT_TOKEN']
APP_TOKEN = os.environ['SLACK_APP_TOKEN']

cred = credentials.ApplicationDefault()
firebase_admin.initialize_app(cred, {
    'projectId': "nappen-35011"
})

db = firestore.client()

app = App(token=BOT_TOKEN)

@app.event("message")
def channel_message_handler(body, say):
    creator_id = body["event"]["user"]
    text_blocks = body["event"]["blocks"][0]["elements"][0]["elements"]
    if len(text_blocks) > 1:
        say("Ogiltig artikel")
        return

    values = [x.strip() for x in text_blocks[0]["text"].split("\n", 1)]

    # Really ugly! But it works
    new_vals = []
    for value in values:
        if value:
            new_vals.append(value)
    
    if len(new_vals) != 2:
        say("Ogiltig artikel")
        return

    title, body = new_vals

    author = app.client.users_info(
        user = creator_id
    )["user"]["real_name"].strip()

    print(f"Author: {author}")
    print(f"Titel: {title}, Body: {body}")
    
    data = {
            "title": title,
            "body": body,
            "author": author,
            "createdAt": datetime.now(tz=timezone.utc),
            }
    
    db.collection("news").add(data)
    print("Done!")
    say("Fin artikel, Den är upplagd nu")
   
@app.event("app_mention")
def handle_mention(_, say):
    say("Vad fack vill du asså?")


if __name__ == "__main__":
    handler = SocketModeHandler(app, APP_TOKEN)
    handler.start()
