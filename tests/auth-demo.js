const axios = require('axios')


axios.post('https://service-user-pool-domain-dev-mandalorian-jedi.auth.us-east-1.amazoncognito.com/oauth/token',
'grant_type=client_credentials&scope=users/profile&client_id=1io956i9130pn1a9dk6kdm0ulh&client_secret=sicvu1vk9r1l1v9vg536p02heaj06i12gl8hmq9ma6qfbcucug7'
)
.then(function(res) {
    console.log(res);  
})
.catch(error => {
    console.log(error)
})