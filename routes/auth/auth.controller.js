const path = require('path');

function httpLoginPage(req, res) {
      res.sendFile(path.join(__dirname, "..", "..", "public", "login.html"));
}

function httpLogout(req, res) {
      req.logout();
      res.redirect('/');
}

module.exports = {
      httpLoginPage,
      httpLogout
};