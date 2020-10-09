require('dotenv').config();
const express = require('express'),
      session = require('express-session'),
      massive = require('massive'),
      authCtrl = require('./controllers/authController'),
      budgetCtrl = require('./controllers/budgetController'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      app = express();

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected')
});

//Auth Endpoints
app.post('/api/register', authCtrl.register);
app.post('/api/login', authCtrl.login);
app.get('/api/logout', authCtrl.logout);

//Budget Endpoints
app.get('/api/budget/:id', budgetCtrl.getUserBudget);
app.post('/api/budget', budgetCtrl.createBudget);

app.listen(SERVER_PORT, () => console.log(`Budgeting on ${SERVER_PORT}`));