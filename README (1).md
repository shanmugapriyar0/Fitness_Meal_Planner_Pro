
# Fitness Meal Planner

This project is a Fitness Meal Planner web application that allows users to log in, sign up, and view a personalized meal plan based on the current day and time. It includes features such as meal suggestions, a calorie meter, and the ability to add extra meals. The application uses MySQL as the backend database, connected through Node.js and Express.

## Features

- Login/Signup System: Users can sign up with a username, email, and password, and log in with their credentials.   
- Personalized Meal Plan: The app shows different food items based on the current day and time (Breakfast, Lunch, Snacks, Dinner).
- Calorie Meter: Displays the total calories for each meal based on the current time.
- Menu Slider: Allows users to scroll through meal options for the day.
- Add Extra Meal Form: Users can add extra meals for the day.
- User Discription and SignOut to exit page.


## Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MySQL
- Libraries: Bootstrap (for modal UI), Body-Parser, CORS
## Project Structure
    /Fitness-Meal-Planner
    │
    ├── /frontend
    │   ├── index.html         # Login Page
    │   ├── registerPage.html  # Signup Page
    │   ├── homepage.html      # Homepage after successful login
    │   ├── style.css          # CSS file for styling
    │   └── script.js          # JavaScript for frontend functionality
    │
    ├── /backend
    │   ├── index.js           # Backend code to handle user authentication and database connection
    │   ├── /node_modules      # Installed dependencies
    │   └── package.json       # Package configuration for backend
    │
    └── /database
        └── Fitness_Meal_Planner.sql  # MySQL database schema and data

## Backend Setup
1. Install Dependencies: Run the following command in the project directory to install the required dependencies:

        bash:

        npm install

- This will install the following dependencies from your package.json:

    - express: Web framework for Node.js

    - mysql2: MySQL client for Node.js

    - body-parser: Middleware to parse incoming request bodies

    - cors: Cross-Origin Resource Sharing middleware

- nodemon: Utility to automatically restart the server during development

2. MySQL Database:

- Create a database called Fitness_Meal_Planner.
- Use the provided SQL file (Fitness_Meal_Planner.sql) to set up the necessary tables (users table for storing user information).
sql

    CREATE DATABASE Fitness_Meal_Planner;
    USE Fitness_Meal_Planner;
    Start the Server with Nodemon:

3. To start the server using Nodemon 
- (which automatically restarts the server when changes are made), use the following command:

        bash:
        npm run dev
- This will run the server on http://localhost:3005.

4. API Endpoints:

- POST /login: Authenticates the user with email and password.
-

    Body: { email, password }

    Response: { message: "Login successful" } or { message: "Invalid email or password" }

    POST /signUp: Registers a new user with a username, email, and password.

    Body: { username, email, password }
    
    Response: { message: "Registration successful" }

## Frontend Setup

- The frontend files (HTML, CSS, and JS) can be opened in any browser.
- The script.js file contains the logic for user registration, login, and meal suggestions.
## package.json
- Here is a basic example of a package.json file for the backend:
-pakage.json

    {
    "name": "fitness-meal-planner",
    "version": "1.0.0",
    "description": "A fitness meal planning web app",
    "main": "index.js",
    "scripts": {
        "start": "node backend/index.js",
        "dev": "nodemon backend/index.js"
    },
    "dependencies": {
        "body-parser": "^1.20.0",
        "cors": "^2.8.5",
        "express": "^4.18.2",
        "mysql2": "^3.0.0",
        "nodemon": "^2.0.22"
    },
    "author": "Your Name",
    "license": "ISC"
    }

## Key Points
- start: This command will run the server using Node.js.
- dev: This command will run the server using Nodemon for development purposes, automatically restarting the server when code changes.
## Contributing
- Feel free to fork and improve the project! Please submit pull requests for any new features or bug fixes.
## Screenshots 
1.
![LoginPage](https://github.com/user-attachments/assets/6337841c-6ea7-45c5-8998-506f2ef996c7)

2.
![SignUp Page](https://github.com/user-attachments/assets/953bc9bf-c093-4d0d-9bd4-1b14603cfee3)

3.
![homePage](https://github.com/user-attachments/assets/f9863897-40d2-4f4d-833c-c9a6d719981a)


## Demo

https://github.com/user-attachments/assets/16af4802-1b58-449c-85ac-791464ea1b16

