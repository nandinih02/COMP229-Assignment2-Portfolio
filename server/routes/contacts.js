let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactsController = require('../controllers/contacts');

//helper function for guard purposes
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/*Get Route for the Contacts List page - Read Operation */
router.get('/', requireAuth, contactsController.displayContactsList);

/*Get Route for displaying the Update page - UPDATE Operation */
router.get('/update/:id', requireAuth, contactsController.displayUpdatePage);

/*POST Route for processing the Update page - UPDATE Operation */
router.post('/update/:id', requireAuth, contactsController.processUpdatePage);
/*Get Route to perform Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, contactsController.performDelete);

module.exports = router;