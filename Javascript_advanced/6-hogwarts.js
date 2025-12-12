class studentsHogwarts {
    #privateScore = 0
    #name = null

    #changeScoreBy(points){
        return this.#privateScore += points
    }

    setName(newName){
        return this.#name = newName
    }
    
    rewardStudent(){
        return this.#changeScoreBy(1)
    }

    penalizeStudent(){
       return (this.#changeScoreBy(-1))
    }

    getScore(){
        return(`${this.#name}: ${this.#privateScore}`)
    }
}

const harry = new studentsHogwarts()
harry.setName("Harry")
harry.rewardStudent()
harry.rewardStudent()
harry.rewardStudent()
harry.rewardStudent()
console.log(harry.getScore())

const draco = new studentsHogwarts()
draco.setName("Draco")
draco.rewardStudent()
draco.penalizeStudent()
draco.penalizeStudent()
draco.penalizeStudent()
console.log(draco.getScore())
