const router = require('express').Router();
const {
      httpGetProfilePage,
      httpGetProfileData
} = require('./profile.controller');

function checkLoggedIn(req, res, next) {
      const isLoggedIn = req.isAuthenticated() && req.user;
      if (!isLoggedIn) {
            return res.redirect('/auth/login');
      }
      next();
}

router.get('/', checkLoggedIn, httpGetProfilePage);
router.get('/data', checkLoggedIn, httpGetProfileData);

module.exports = router;