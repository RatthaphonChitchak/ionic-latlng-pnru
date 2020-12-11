'use strict';

const app = require('./src/config/app');

app.listen(process.env.PORT || 2000, function () {
    console.log('Start server');
    console.log('Authen service is running');
});