require('dotenv').config();
const passport = require('passport');
const User = require('./../models/user.model');
const googleStrategy = require('passport-google-oauth20');

//Save this to the cookie when login
passport.serializeUser((user, done) => {
      done(null, user.id);
});

//In every reload search with id for that person and fill the req.user
passport.deserializeUser((id, done) => {
      User.findById(id).then((user) => {
            done(null, user);
      });
});

passport.use(new googleStrategy({
      //options for google strategy
      callbackURL: '/auth/google/callback',
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
}, (accessToken, refreshToken, profile, done) => {
      User.findOne({
            googleId: profile.id
      }).then((currentUser) => {
            if (currentUser) {
                  //exist
                  currentUser.firstName = profile.name.givenName;
                  currentUser.lastName = profile.name.familyName;
                  currentUser.email = profile.emails[0].value;
                  currentUser.thumbnail = profile.photos[0].value;
                  currentUser.save().then((currUser) => done(null, currUser));
            } else {
                  //create user
                  new User({
                        firstName: profile.name.givenName,
                        lastName: profile.name.familyName,
                        email: profile.emails[0].value,
                        thumbnail: profile.photos[0].value,
                        googleId: profile.id,
                  }).save().then((newUser) => {
                        done(null, newUser);
                  });
            }
      });
}));