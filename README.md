# Google-auth20-Node.js-API

> REST API for google authentication 2.0. This code consists passport, express, mongo DB libs.

* Build a dev.js file in the client folder that contains the following code for configuration:

```
module.exports = {
  GOOGLE_CLIENT_ID: "YOUR_GOOGLE_CLIENT_ID",
  GOOGLE_CLIENT_SECRET: "YOUR_GOOGLE_CLIENT_SECRET",
  MONGO_URI: "YOUR_MONGO_URI",
  COOKIE_KEY: "YOUR_COOKIE_KEY",
};
```

* for google client id and secret visit https://console.cloud.google.com/apis/
* create a mongodb cluster and get connection link.
* Set cookie key.

To run this code use following command and go to localhost 5000:
```
npm start
```

* Routes:
  * /auth/google/ - for sign up/ login
  * /auth/google/logout - for logout
  * /auth/google/current_user - for details of current user
