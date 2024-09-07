require('dotenv').config();
require('./config/passport.setup');
const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const authRoutes = require('./routes/auth/auth.routes');
const { mongoConnect } = require('./services/mongo');
const profileRoutes = require('./routes/info/profile.routes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

//set up view engine
// app.set('view engine', 'ejs');

//static path
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//set cookie
app.use(cookieSession({
      maxAge: 24 * 60 * 60 * 1000, // one Day in mili seconde
      keys: [process.env.COOKIE_KEY],
}));

//initilize passport
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

//Home route
app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, "public", "home.html"));
});

//start everything
async function startServer() {
      await mongoConnect();
      app.listen(PORT, () => {
            console.log(`listening on port ${PORT}...`);
      });
}
startServer();