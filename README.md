# NSB_GlamHouse

An E-commerce Website using Node.js, MongoDb, Ejs and Multer

[Project Blueprint Doc](https://docs.google.com/document/d/16EprHSo8TWxUgoSLTqFjA9QAn3_UlqZ0C1YXt4vOSRo/edit?usp=sharing)

# Technologies used

**EJS**

Templating Engine for the front end (views)

**Moongoose**

- database, model schema, connection, controller function etc

**Session**

For cookies (great for storing data on the client site and the downside is the user has access and can manipulate it. Not great for sensitive data not limited to be used with sessions) and secured login

**Session** are greatt for storing data on the server there for we can save sensitive data on sessions like authentification or cart items. Can use a cookie to be identified.

[More on Sessions](https://www.quora.com/What-is-a-session-in-a-Web-Application)

[More on Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

**Bcryptjs**

To encrypt password (bcrypt.hash(password, 12); retun a promise)

[More on Bcrypt](https://github.com/dcodeIO/bcrypt.js)

**Csurf**

CSRF Attacks; Cross-Site Request Forgery to protect the website (npm install csurf) this package allow to generate a token enbeded in our code for each action and it checks if the incoming request has the token. the fake website won't be able to make request to this page because the they will be missing the Token.

[More on CSRF](https://www.acunetix.com/websitesecurity/csrf-attacks/)
