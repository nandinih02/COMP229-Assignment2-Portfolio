let mongoose = require ('mongoose');

//Create model class
let contactsModel = mongoose.Schema({
name: String,
number: String,
email: String

},
{

    collection: "contacts"

});

module.exports = mongoose.model('Contacts', contactsModel);