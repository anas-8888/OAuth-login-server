function getProfileData() {
      fetch('/profile/data')
      .then(response => response.json())
      .then(data => {
            document.getElementById('hiProfile').textContent = data.firstName + '\'s profile';
            document.getElementById('fullName').textContent = data.firstName + ' ' + data.lastName;
            document.getElementById('thumbnail').innerHTML = `<img alt="error" src="${data.thumbnail}"/>`;
            document.getElementById('email').textContent = data.email;
      })
      .catch(error => {
            console.error('Error fetching reminders:', error);
      });
}

function run() {
      getProfileData();
}


run();