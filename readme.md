# OAuth Application

This is an OAuth-based application built with Node.js, Express, and MongoDB, utilizing Google OAuth 2.0 for authentication. Users can log in with their Google accounts, view their profile information, and log out.

## Features

- Google OAuth 2.0 authentication.
- User information is stored in MongoDB.
- Profile page displays user information including name, email, and profile picture.

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- Passport.js for authentication
- Google OAuth 2.0 Strategy
- HTML, JavaScript for front-end pages

## Prerequisites

- Node.js installed on your machine ([Download Node.js](https://nodejs.org/))
- MongoDB installed and running ([Download MongoDB](https://www.mongodb.com/try/download/community))

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/anas-8888/OAuth-login-server.git
   cd your-repository
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables Setup**

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   CLIENT_ID=<Your_Google_Client_ID>
   CLIENT_SECRET=<Your_Google_Client_Secret>
   COOKIE_KEY=<Your_Cookie_Key>
   MONGO_URL=<Your_MongoDB_Connection_URL>
   ```

## Running the Application

1. **Start the MongoDB server** if it is not already running:

   ```bash
   mongod
   ```

2. **Run the Application**

   ```bash
   npm start
   ```

3. **Access the Application**

   Open your browser and go to: <http://localhost:3000>

## Project Structure

- **app.js**: Main server file that sets up Express, Passport, routes, and MongoDB connection.
- **config/passport.setup.js**: Configures Google OAuth strategy with Passport.js.
- **models/user.model.js**: Mongoose schema for storing user information.
- **public/**: Contains static HTML files for home, login, and profile pages.
- **routes/**: Contains route definitions and controllers for authentication and profile management.
- **services/mongo.js**: Manages the MongoDB connection.

## Routes

- **`/`**: Home page
- **`/auth/login`**: Login page
- **`/auth/google`**: Initiates Google OAuth authentication
- **`/auth/google/callback`**: Callback route for Google OAuth
- **`/profile`**: Profile page displaying user information
- **`/auth/logout`**: Logs the user out

## Key Files Explained

### 1. **`config/passport.setup.js`**

   Configures Google OAuth strategy. It handles user authentication, profile retrieval, and saving user data in MongoDB.

### 2. **`models/user.model.js`**

   Defines the User schema with fields like first name, last name, email, Google ID, and profile picture.

### 3. **`public/profile.js`**

   Fetches the authenticated user's data from the server and displays it on the profile page.

### 4. **`routes/auth/auth.routes.js`**

   Manages authentication routes such as login, logout, and Google OAuth flow.

### 5. **`services/mongo.js`**

   Connects the application to MongoDB using Mongoose.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements!

## License

This project is licensed under the MIT License.
