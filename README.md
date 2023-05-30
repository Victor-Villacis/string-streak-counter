# Extreme-To-Do
Another TODO app for you to track what you need todo. 

## Installation
To get started follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to install the necessary dependencies:

```console
yarn
```

## Development
```console
yarn dev
```
### Frontend
This command will simultaneously start the client and server. The client is built using Vite, TypeScript, React, React Query, and React Router. Once started It can be accessed locally at http://localhost:5173

### Backend
The backend server is built using Express and TypeScript with ts-node. It deploys locally on http://localhost:3000/ and provides the following API routes:


```console
GET /all-todos - Retrieves all todos.
POST /new-todo - Creates a new todo.
PUT /update-todo/:id - Updates a todo by ID.
DELETE /delete-todo/:id - Deletes a todo by ID.
```

## Deployment
The application is hosted on Firebase, with a Firestore database. You can access the deployed application at. 
[Firebase](https://firebase.google.com/), and you can access the deployed application here [ExtremeTodo](https://best-todoapp-ever.web.app/).

## Write Up
Sorry to send you to an awesome website to read the write up, but notion is fun. 
Write Up [here]()