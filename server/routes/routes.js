var router = require('express').Router();
const _ = require('lodash');

var {User} = require('./../models/user');
//var {Election} = require('./../models/election');
var {mongoose} = require('../db/mongoose');
var {ObjectID} = require('mongodb');
var controller = require('./controller.js');
var {authenticate} = require('../middleware/authenticate');

var distance = require('google-distance');
distance.apiKey = 'AIzaSyAebKraqZ6m5qlx0x6HnoqgHqKhECJmxh0'; // Move to file that is not put in git

////////////////////////////////////////////////////////////
///     ROUTES!!!!!                                      ///
////////////////////////////////////////////////////////////

router.get('/', controller.homePage);
router.get('/about', controller.aboutPage);

////////////////////////////////////////////////////////////
/// Route: Create a new user.                            ///
////////////////////////////////////////////////////////////

router.post('/users', async  (req, res) => {
    try {
        const body = _.pick(req.body, ['email', 'password']);
        const user = new User(body);
  
        await user.save();
        const token = await user.generateAuthToken();
        res.header('x-auth', token).send(user);
    } catch (e) {
        res.status(400).send(e);
     }
});
  
////////////////////////////////////////////////////////////
/// Route: Return user name.                             ///
////////////////////////////////////////////////////////////

router.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
});
  
////////////////////////////////////////////////////////////
/// Route: Login.                                        ///
////////////////////////////////////////////////////////////

router.post('/users/login', async (req, res) => {
    try {
        const body = _.pick(req.body, ['email', 'password']);
        const user = await User.findByCredentials(body.email, body.password);
        const token = await  user.generateAuthToken();
        res.header('x-auth', token).send(user);
    } catch (e) {
        res.status(400).send();
    }
});

////////////////////////////////////////////////////////////
/// Route: Logout.                                       ///
////////////////////////////////////////////////////////////

router.delete('/users/me/token', authenticate, async (req, res) => {
    try {
        await req.user.removeToken(req.token);
        res.status(200).send();
    } catch (e) {
        res.status(400).send();
    };
});

////////////////////////////////////////////////////////////
/// Route: Find Trucks.                                  ///
////////////////////////////////////////////////////////////

router.post('/findTrucks', async (req, res) => {
    try {
        const maxDistance = 1 / .6; // Convert to KM
        const goodTrucks = [];  // No Trucks to start with
        const trucks = _.pick(req.body, ['trucks']);
        const myAddress = _.pick(req.body, 'myAddress');
 
        // Verify fields from the body
        // 1. No client address: Error 401
        // No time for more validations :()
        if (myAddress === null || myAddress === '') {
            res.status(401).send();
        }

        // Get the list of addresses
        // Build list of truck names
        var addrs = trucks.trucks.map(function(truck) {
            return truck['address'];
        });
        var names = trucks.trucks.map(function(truck) {
            return (truck['name']);
        });
 
        // Get the truck locations and my address. Send them in *ONE* API call
        await distance.get(
            {
                origins: addrs,
                destination: myAddress.myAddress
            },
            function(err, data) {
                if (err) return console.log(err);

                // API call worked. Iterate through the results. For each....
                //  See if the truck is close enough. If so, add to the output array
                for (index = 0; index < data.length; index++) {
                    var distToTruck = parseFloat(data[index].distance.substring(0, data[index].distance.length - 3)); // Not general enough for real code
                    if (distToTruck <= maxDistance) {
                        goodTrucks.push(names[index] + " is located at: " + data[index].origin);
                    }
                }

                // Return the truck location array
                res.header('Trucks', goodTrucks).send();
        });
    } catch (e) {
        // Return 400 if there was an error.
        res.status(400).send();
    };
});

module.exports = router;