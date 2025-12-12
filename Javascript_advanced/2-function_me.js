function welcomeMessage (fullName){
    return function(){
        alert(`Welcome ${fullName}`)
    }
        
}

const guillaume = welcomeMessage("guillaume")
const alex = welcomeMessage("Alex")
const fred = welcomeMessage("Fred")
