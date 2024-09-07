const router = require('express').Router();
const passport = require('passport');
const {
      httpLoginPage,
      httpLogout
} = require('./auth.controller');

function checkNotLoggedIn(req, res, next) {
      const isLoggedIn = req.isAuthenticated() && req.user;
      if (!isLoggedIn) {
            next();
      } else {
            return res.redirect('/profile');
      }
}

function checkLoggedIn(req, res, next) {
      const isLoggedIn = req.isAuthenticated() && req.user;
      if (!isLoggedIn) {
            return res.redirect('/auth/login');
      }
      next();
}

//auth login
router.get('/login', checkNotLoggedIn, httpLoginPage);

//auth logout
router.get('/logout', checkLoggedIn, httpLogout);


//auth with google
router.get('/google', passport.authenticate('google', {
      scope: ['profile', 'email']
}));

//routing the google callback 
router.get('/google/callback', passport.authenticate('google', {
      failureRedirect: '/auth/login',
      successRedirect: '/profile',
      session: true,
}));

module.exports = router;