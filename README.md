Real-Time Chat Application Using Socket.io, Express, and HTML
This is a simple real-time chat application that allows multiple users to join, send messages, and see other users who are online. It is built using Node.js, Express, and Socket.io for the backend and HTML, CSS, and JavaScript for the frontend.

Features:

User Authentication (via prompt):

When a user visits the chat page, they are prompted to enter their username.

The username is then sent to the server, notifying other users that they have joined.

Real-Time Messaging:

Users can send messages through a form.

Messages are broadcasted to all connected users instantly.

User List Management:

A list of online users is maintained and displayed.

When a new user joins or leaves, the list updates in real time.

Automatic Message Updates:

New messages appear instantly without refreshing the page.

Messages from other users are displayed along with their usernames.

Technologies Used
Frontend: HTML, JavaScript, Socket.io (client-side)

Backend: Node.js, Express, Socket.io (server-side)

Real-Time Communication: Socket.io WebSockets

How It Works
Frontend (HTML & JavaScript)
The page prompts the user to enter a username.

A WebSocket connection is established using socket.io().

The client listens for events like userJoined, userLeft, chatMessage, and userList.

Messages sent via the input box are emitted as chatMessage events.

The user list dynamically updates as users join or leave.

Backend (Node.js & Express)
Express serves the static files in the /public directory.

The socket.io server listens for WebSocket connections.

When a user joins, their username is stored in a Set and broadcasted to all users.

Incoming chat messages are broadcasted to all connected users.

When a user disconnects, they are removed from the user list, and the update is sent to all clients.

How to Run
Install Dependencies

npm install express socket.io dotenv
Run the Server

node server.js
Access the Chat App

Open a browser and go to http://localhost:port
