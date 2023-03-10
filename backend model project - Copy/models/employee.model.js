const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    qualification:{
        type:String
    },
    fathername:{
        type:String
    },
    email: {
        type: String
    },
    date:{
        type:String
    },
    age:{
        type:String
    },
    mobile: {
        type: String
    },
    courses:{
        type:String
    },
    reference:{
        type:String
    },
    address:{
        type: String
    },
    
   

});

// Custom validation for email
employeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Employee', employeeSchema);