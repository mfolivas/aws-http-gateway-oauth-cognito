const axios = require('axios')


axios.post('https://service-user-pool-domain-dev-mandalorian-jedi.auth.us-east-1.amazoncognito.com/oauth/token',
'grant_type=client_credentials&scope=users/profile&client_id=###&client_secret=####'
)
.then(function(res) {
    console.log(res);  
})
.catch(error => {
    console.log(error)
})