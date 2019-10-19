// reference: https://stackoverflow.com/questions/28305120/differences-between-express-router-and-app-get

var express = require('express')
var router = express.Router();

const { Pool } = require('pg');

const pool = new Pool({
  // connectionString: process.env.DATABASE_URL,
  connectionString: 'postgres://atsuhitokita:password@localhost:5432/community',
  // ssl: true
});

pool.query('SELECT NOW()', (err, res) =>{
        console.log(err, res)
})
pool.query('SELECT * FROM rooms',(err, res) =>{
        console.log(err, res)
})

router.get('/', (req, res) => {
        var roomList = []
        // pool.query('SELECT * FROM rooms INNER JOIN users ON rooms.user_id = users.user_id', function(err, rows, fields) {
        pool.query('SELECT * FROM rooms', function(err, results) {
                if (err) {
                        res.status(500).json({"status_code": 500,"status_message": "internal server error"});
                } else {
                        // Loop check on each row
                        console.log(results.rows)
                        for (var i = 0; i < results.rows.length; i++) {
                                var room = {
                                        'title':results.rows[i].title,
                                        'price':results.rows[i].price,
                                        'room_img':results.rows[i].room_img,
                                        'user_photo':results.rows[i].room_img,
                                        'address':results.rows[i].address
                                }
                                // Add object into array
                                roomList.push(room);
                  	}
                        // Render index.pug page using array
                        console.log(roomList)
                        console.log(process.env.API_KEY)
                        console.log(process.env.PORT)
                        res.status(200).render('index', {
                                style: 'index',
                                api: process.env.API_KEY,
                                roomList: roomList
                        })
                }
        });
})

module.exports = router


// pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
//   if (error) {
//     throw error
//   }
//   response.status(200).json(results.rows)
// })
//
//
//
//
//
//
// connection.query('SELECT * FROM test', function(err, rows, fields) {
// if (err) {
// res.status(500).json({"status_code": 500,"status_message": "internal server error"});
// 	  	} else {
// // Loop check on each row
// for (var i = 0; i < rows.length; i++) {
// // Create an object to save current row's data
// var person = {
// 'name':rows[i].name,
// 'address':rows[i].address,
// 'phone':rows[i].phone,
// 'id':rows[i].id
// 		  		}
// // Add object into array
// personList.push(person);
// 	  	}
// // Render index.pug page using array
// res.render('index', {"personList": personList});
// 	  	}
// 	});
// // Close the MySQL connection
// connection.end();
// });
