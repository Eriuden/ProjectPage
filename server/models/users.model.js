const mongoose = require("mongoose")
const { isEmail} = require("validator")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema(
    {
        role: {
            type: String,
            required:true,
            default:"user"
        },

        picture: {
            type:String,
        },
        
        name: {
            type:String,
            required:true,
            minLength:3,
            maxLength:55,
            unique:true,
            trim:true,
        },
        email: {
            type:String,
            required:true,
            validate: {isEmail},
            lowercase: true,
            unique:true,
            trim:true,
        },
        password: {
            type:String,
            required:true,
            max:1024,
            minLength:6,
        },
        
    },

    {
        timestamps:true,
    }
)

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})


//On compare ce qui a été inscrit en password, et ce que l'on a en password
//Ce après avoir trouvé le nom exact grace au paramètre name
// si il trouve le bon password, il returne l'user
//Sinon il nous dit qu'on a un password incorrect
//Si il trouve même pas l'user, il nous dit que le mail est incorrect

userSchema.static.login = async function (name, password) {
    const user = await this.findOne({name})
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user
        }
        throw Error("mot de passe incorrect")
    }
    throw Error("mail incorrect")
}

const UserModel = mongoose.model("user", userSchema)
module.exports = UserModel