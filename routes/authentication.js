// reference: https://stackoverflow.com/questions/28305120/differences-between-express-router-and-app-get

var express = require('express')
var router = express.Router();

router.get('/', (req, res) => {
        res.status(200).render('authentication', {
                style: 'authentication'
        })
})

// router.get('/dashboard', (req, res) => {
//
//     res.render('dashboard', {
//         isListEnabled: true,
//         style:  'dashboard.css',
//         author: {
//             firstName: 'Peter',
//             lastName: 'James',
//             project: {
//                 name: 'Build Random Quote'
//             }
//         }
//     });
// });
//
// router.get('/each/helper', (req, res) => {
//
//     res.render('contact', {
//         people: [
//             "James",
//             "Peter",
//             "Sadrack",
//             "Morissa"
//         ],
//         user: {
//             username: 'accimeesterlin',
//             age: 20,
//             phone: 4647644
//         },
//         lists: [
//             {
//                 items: ['Mango', 'Banana', 'Pinerouterle']
//             },
//
//             {
//                 items: ['Potatoe', 'Manioc', 'Avocado']
//             }
//         ]
//     });
// });


module.exports = router
