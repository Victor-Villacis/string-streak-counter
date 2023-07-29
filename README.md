# String Streak Counter

## Description
String Streak Counter is a web application that allows users to calculate streaks of consecutive characters in a given input text. Basically, it displays the longest “even” or “odd” streak of letters. A streak is defined as a sequence of consecutive alphabetic characters (letters) in the input text. The application ignores whitespace, non-alphabetic characters (including numbers), and capitalization while calculating streaks. The logic for calculating streaks can be found in `server/src/controllers/streakController.ts`.

## Features
- Calculate streaks of consecutive characters in the input text.
- Highlight the longest streak of 'even' or 'odd' letters in the input text for better visualization.
- Save and view previously calculated streaks.
- Delete individual saved streaks.
- Clear input and reset streak count.
- When calculating streaks, whitespaces are ignored.
- Non-alphabetic characters, including numbers, break the streak.

## Installation and Usage
Before you start, ensure you have Node.js and yarn installed on your local machine.

1. Clone the repository to your local machine.
2. Navigate to the project (root) directory and run `yarn install` to install dependencies.
3. Run `yarn dev`. This command will run `concurrently` and start the dev and client server at the same time. There's no need to go into the client or server individually to install or run - `concurrently` along with `yarn workspaces` handles this from the root folder.
4. Open your browser and go to `http://localhost:5173/` to access the app.

## Technologies Used
- **Front-end**: The application is built using Typescript and React.js, utilizing the Material-UI library for UI components.
- **Data Fetching**: The application uses the `@tanstack/react-query` library for handling asynchronous data fetching and caching.
- **Bundler**: The application is bundled using Vite.js, which provides fast and efficient build times.
- **Back-end**: The server is implemented using Node.js with Express.js for handling HTTP requests. The calculation logic is implemented in Typescript.
- **Scaffolding**: The project was scaffolded using the create-vite template (https://github.com/vitejs/vite/tree/main/packages/create-vite) with the react-swc-ts template. This provided a solid starting point with a well-organized structure and preconfigured tools, accelerating the initial setup process.

## License
This project is open-source and is licensed under the MIT License.
