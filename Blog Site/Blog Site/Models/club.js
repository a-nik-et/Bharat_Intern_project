const mongoos = require('mongoose');
const schema = mongoos.Schema;

let clubScheema = new schema({
    name :{
        type:String
    },
    email:{
        type :String
    }
})

module.exports = mongoos.model('student', clubScheema)