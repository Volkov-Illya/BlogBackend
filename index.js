var app = require('./server/server');
var config = require('./server/config/config');

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
