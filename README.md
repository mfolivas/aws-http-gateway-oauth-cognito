# AWS Node HTTP API with Cognito Authorizer using OAuth server-to-server

This example demonstrates how you can use the new AWS HTTP API (Announced Dec. 2019) and the built in JSON Web Token Authorization it offers. In this case, I've shown how to do so using Amazon Cognito. 



- To deploy run `sls deploy`
- Go into the Cognito > User Pools > server-user-pool-dev
- Go into the "App clients" and gather the app `client_id` and `client_secret`
- Using Postman or the `auth-demo.js` in test try to get a Bearer token

You can do the following to get the basic authentication:
```
echo -n client-id:client-secret | base64
```
And replace the client-id and client-secret with the values, put them together into a string, and place it after the "Basic" 
```
 curl -x POST \
 https://service-user-pool-domain-dev-mandalorian-jedi.auth.us-east-1.amazoncognito.com/oauth2/token \
-H 'authorization: Basic ****some-token*****' \
> -d 'grant_type=client_credentials&scope=users%2Fprofile'
```

- Once you get the token, try to do a GET on the `users/profile` using the HTTP API URL
- You should get a result with the following:

```
"authorizer":{"claims":{"auth_time":"1609272798","client_id":"some-random-client-id","exp":"1609276398","iat":"1609272798","iss":"https://cognito-idp.us-east-1.amazonaws.com/pool-id"...}
```
- You should be able to fetch the Cognito's `client_id` and `pool_id` (iss)

The application will have multiple app clients: API access and client services.

