# Front-end assignment at Etraveli Group

In this assignment you'll create a modern web app to list movies and various information from the Starwars saga. With this app you should be able to see and read about a specific movie as the example image shows below.

![Episode V details](https://user-images.githubusercontent.com/709159/39311976-a080c3f6-496e-11e8-88df-64642a3ef681.png)

To make this possible you need to fetch the data from the following open api endpoint: [`https://swapi.dev/api/films/?format=json`](https://swapi.dev/api/films/?format=json).

As a minimum requirement for this assignment, fulfil all "Assignment criteria" listed below. The bonus feature is not a requirement.

**The images in this assignment are just an example for the layout, your final result should aim to have the same features, and somewhat same layout. But we encourage you to add your own flavour and extra features to showcase your skills.**

### 🛠️ Tooling

At Etraveli Group, we're developing primarily using React, Redux and Jest with Typescript, but you're free to complete this assignment in whichever way you're comfortable with. The only requirement we have is that it should be written in JavaScript or Typescript.

For this assignment, you should create a repository in Git and commit all your changes in it. How you will hand in your code is explained below.

### ✅ Assignment criteria

1. When the app is loaded, a list of the movies should be displayed.

2. When selecting a movie in the list, a detailed view of it should be displayed in the right hand side of the application.

3. When no movie is selected, a default text should be displayed instead.

4. There should be a way to order the movies by at least `Year` or `Episode`. Feel free to add additional order options and functionality as you see fit.

5. There should be a way to filter the movies by entering their name in the text input.

## ⭐️ Bonus feature

As an extra task, you will add ratings and posters for your movies. This data should be fetched from the second endpoint: [`https://www.omdbapi.com/`](https://www.omdbapi.com/). To use this API, you will need an apikey: `b9a5e69d`

![bonus_task](https://user-images.githubusercontent.com/19295785/204007727-1023f65b-0707-46e0-9fc9-4d82d6651ab2.png)

### ✅ Bonus feature criteria

1. When a movie is selected, there should be a preview of the poster image and the ratings from Imdb, Rotten Tomatoes and MetaCritics in the detail view.

2. Also an average rating should be calculated from the three ratings and displayed.

3. There should be a way to order the movies by `Ratings` as the select menu shows in the image below.

Please feel free to add any extra features on top of these critera as you like.

## 📥 Handing in the assignment

You can hand in your assignment by creating a repository on GitHub and pushing it there. If you don't have a GitHub account, you can ZIP the repository and send it to us by email.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
