const mysql2 = require("mysql2");

const dbconnection = mysql2.createPool({
	user: process.env.USER,
	database: process.env.DATABASE,
	host: "193.203.166.103",
	password: process.env.PASSWORD,
	connectionLimit: 10,
});

// const dbconnection = mysql2.createPool({
// 	host: process.env.MYSQL_HOST,
// 	database: process.env.MYSQL_DATABASE,
// 	user: process.env.MYSQL_USER,
// 	password: process.env.MYSQL_PASSWORD,
// 	waitForConnections: true,
// 	connectTimeout: 30000,
// 	connectionLimit: 10,
// 	queueLimit: 0,
// });

// dbconnection.execute("select 'test'", (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });
module.exports = dbconnection.promise();
