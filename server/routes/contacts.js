let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Contacts Model
let Contacts = require('../models/contacts');

let contactsController = require('../controllers/contacts');
/*Get Route for the Contacts List page - Read Operation */
router.get('/', contactsController.displayContactsList);

/*Get Route for displaying the Update page - UPDATE Operation */
router.get('/update/:id', contactsController.displayUpdatePage);

/*POST Route for processing the Update page - UPDATE Operation */
router.post('/update/:id', contactsController.processUpdatePage);
/*Get Route to perform Deletion - DELETE Operation */
router.get('/delete/:id', contactsController.performDelete);

module.exports = router;