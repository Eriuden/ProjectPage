module.exports.signUpErrors = (err) => {
    let errors = { name: "", email!:"", password:"mauvais mot de passe"}

    if (err.message.includes("name"))
    errors.name = "nom incorrect, ou déjà pris"

    if (err.message.includes("email"))
    errors.email = "email incorrect"

    if (err.message.includes("password"))
    errors.password = "mot de passe incorrect"

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.name = "ce nom est déjà pris"

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "ce mail est déjà pris"

    return errors
}

module.exports.signInErrors = (err) => {
    let errors = { email: "", password: ""}

    if (err.message.includes("email"))
    errors.format = "email inconnu"

    if (err.message.includes("password"))
    errors.format = "mot de passe inconnu"

    
}

module.exports.uploadErros = (err) => {
    let errors = { format: "", maxSize: ""}

    if(err.message.includes("invalid file"))
    errors.format = "format incompatible, formats acceptés : png, jpg, jpeg"

    if (err.message.includes("max size"))
    errors.format = "taille maximale dépassée"

    return errors
}