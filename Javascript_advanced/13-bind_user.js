const user =  {
    hobby: "Calligraphy",
    favoriteSport: "Hockey",
    astrologicalSign: "Aries",
    firstName: "Guillaume",
    lastName: "Johns",
    location: "Netherlands",
    occupation: "Engineer"
}

function logWelcomeUser(welcomeString){
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`)
}

const bindWelcomeUser = logWelcomeUser.bind(user)
bindWelcomeUser("Welcome")

//why closure ?? there is no closure here, we're just binding