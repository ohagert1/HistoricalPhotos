// const db = require('./server/db/models').db;
const app = require('./server/');
const PORT = 6969;

// db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
// .then(() => {
//   console.log('db synced');

// });

app.listen(PORT, () => console.log(`trying hard to get photos on port: ${PORT}`));