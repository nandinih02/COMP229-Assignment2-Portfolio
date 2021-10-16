let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Contacts Model
let Contacts = require('../models/contacts');

/*Get Route for the Contacts List page - Read Operation */
router.get('/',(req,res,next) => {

    Contacts.find((err,contactsList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(ContactsList);

            res.render('contacts', {title: 'Business Contacts', ContactsList: contactsList})
        }
    });
});

module.exports = router;