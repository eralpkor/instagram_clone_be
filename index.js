const server = require('./src/api/server');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const createConnection = async () => { server.listen(PORT, () => console.log(`\n*** Server listening on port ${PORT}***\n`))};

let retries = 5;

while (retries) {
  try {
    createConnection();
    break;
  } catch (error) {
    console.log(error);
    retries--;
    console.log(`Retries left: ${retries}`);
    // wait 5 sec
    new Promise (res => setTimeout(res, 5000));
  }
}

