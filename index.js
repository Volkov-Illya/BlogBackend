const app = require('./server/server');
const config = require('./server/config/config');

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
