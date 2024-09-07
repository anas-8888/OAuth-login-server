const path = require('path');

function httpGetProfilePage(req, res) {
      res.sendFile(path.join(__dirname, "..", "..", "public", "profile.html"));
}

function httpGetProfileData(req, res) {
      const user = req.user;
      if(user) {
            return res.status(200).json(user);
      } else {
            res.status(401).send({ message: 'Unauthorized' });
      }
}

module.exports = {
      httpGetProfilePage,
      httpGetProfileData
};