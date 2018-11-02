const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const defaultImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'

const UserSchema = new Schema({
    firstname: { 
        type: String, 
        required: true 
    },
    lastname: { 
        type: String, 
        required: true 
    },
    avatar: { 
        type: String, 
        default: defaultImage 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true 
    },
    username: {
      unique: true,
      type: String,
      required: true,
      lowercase: true,
      minlength: [8, 'Username Should be minimum 8 characters long'], 
      maxlength: [16, 'Username can be maximum of 16 characters']
    },
    password: { 
        type: String, 
        required: true 
    }
},
{
  timestamps: true
});

module.exports = mongoose.model('users', UserSchema);