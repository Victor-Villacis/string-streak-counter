# Extreme-To-Do
Another TODO app for you to track what you need todo. 

## Prerequisite
Please note that the `admin-key.json` located at `server/src/admin-key.json` is **disabled**. In order for the app to work, you need to follow these steps:

1. Navigate to the [Firebase Admin SDK](https://console.firebase.google.com) page.
2. In settings select Service Accounts.
3. Download a new private key by clicking on the "Generate new private key" button.
4. Rename the downloaded file to `admin-key.json` and replace the existing one in the `server/src/` directory.
5. Set up your Firestore database to the `/todos` path

Ensure that you keep the `admin-key.json` file secure and do not share it publicly or check it into version control systems. It contains sensitive information that grants access to your Firebase project.

  

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
Write Up [here](https://sideways-increase-bec.notion.site/Phin-Writeup-15b634e80ba94c7791a316ca71617d75)
